import { useState, useEffect, useMemo } from 'react'
import { useKV } from '@github/spark/hooks'
import { DMaicPhase, ProjectData, BmadTechnique } from '@/lib/types'
import { PHASE_DATA } from '@/lib/phase-data'
import { 
  generateProjectCharter, 
  generateSIPOC, 
  generateAnalysisReport, 
  generateImplementationPlan, 
  generateControlPlan,
  generateFullReport,
  downloadMarkdown 
} from '@/lib/templates'
import { WelcomeScreen } from '@/components/WelcomeScreen'
import { PhaseNavigation } from '@/components/PhaseNavigation'
import { QuestionCard } from '@/components/QuestionCard'
import { BmadDialog } from '@/components/BmadDialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { 
  Download, 
  Lightbulb, 
  FileText, 
  Target,
  ChartBar,
  MagnifyingGlass,
  TrendUp,
  ShieldCheck
} from '@phosphor-icons/react'
import { toast } from 'sonner'

const PHASE_ICONS = {
  define: Target,
  measure: ChartBar,
  analyze: MagnifyingGlass,
  improve: TrendUp,
  control: ShieldCheck
}

function App() {
  const [projectData, setProjectData] = useKV<ProjectData>('kaizen-project', {
    projectName: '',
    lastUpdated: new Date().toISOString(),
    phases: {
      define: {},
      measure: {},
      analyze: {},
      improve: {},
      control: {}
    },
    bmadNotes: {}
  })

  const [currentPhase, setCurrentPhase] = useState<DMaicPhase>('define')
  const [bmadDialogOpen, setBmadDialogOpen] = useState(false)
  const [generatingQuestion, setGeneratingQuestion] = useState<string | null>(null)

  const hasStarted = projectData?.projectName !== ''

  const handleStart = (projectName: string) => {
    setProjectData((current) => {
      if (!current) return {
        projectName,
        lastUpdated: new Date().toISOString(),
        phases: { define: {}, measure: {}, analyze: {}, improve: {}, control: {} },
        bmadNotes: {}
      }
      return {
        ...current,
        projectName,
        lastUpdated: new Date().toISOString()
      }
    })
  }

  const updatePhaseData = (questionId: string, value: string) => {
    setProjectData((current) => {
      if (!current) return {
        projectName: '',
        lastUpdated: new Date().toISOString(),
        phases: { define: {}, measure: {}, analyze: {}, improve: {}, control: {} },
        bmadNotes: {}
      }
      return {
        ...current,
        phases: {
          ...current.phases,
          [currentPhase]: {
            ...current.phases[currentPhase],
            [questionId]: value
          }
        },
        lastUpdated: new Date().toISOString()
      }
    })
  }

  const handleAIGenerate = async (questionId: string, currentValue: string) => {
    if (!projectData) return
    
    setGeneratingQuestion(questionId)
    
    try {
      const question = PHASE_DATA[currentPhase].questions.find(q => q.id === questionId)
      if (!question) return

      const contextData = Object.entries(projectData.phases[currentPhase])
        .filter(([key]) => key !== questionId)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n')

      const promptText = `You are an expert Kaizen facilitator helping a team with a continuous improvement project.

Project Name: ${projectData.projectName}
Current Phase: ${currentPhase.toUpperCase()}
Question: ${question.text}
Description: ${question.description || 'N/A'}

Current Context from this phase:
${contextData || 'No other answers yet'}

Current Answer (if any):
${currentValue || 'No answer yet'}

Generate a comprehensive, professional response to this question. If there's already an answer, enhance and expand it. Be specific, actionable, and use DMAIC best practices. Write in a clear, professional tone suitable for project documentation.

Response:`

      const response = await window.spark.llm(promptText, 'gpt-4o')
      
      updatePhaseData(questionId, response.trim())
      toast.success('AI response generated successfully')
    } catch (error) {
      toast.error('Failed to generate AI response')
      console.error(error)
    } finally {
      setGeneratingQuestion(null)
    }
  }

  const handleBmadSave = (technique: BmadTechnique, notes: string[]) => {
    setProjectData((current) => {
      if (!current) return {
        projectName: '',
        lastUpdated: new Date().toISOString(),
        phases: { define: {}, measure: {}, analyze: {}, improve: {}, control: {} },
        bmadNotes: {}
      }
      return {
        ...current,
        bmadNotes: {
          ...current.bmadNotes,
          [technique]: [...(current.bmadNotes[technique] || []), ...notes]
        },
        lastUpdated: new Date().toISOString()
      }
    })
    toast.success(`${technique.charAt(0).toUpperCase() + technique.slice(1)} ideas saved`)
  }

  const handleExport = (type: 'charter' | 'sipoc' | 'analysis' | 'implementation' | 'control' | 'full') => {
    if (!projectData) return
    
    let content = ''
    let filename = ''

    switch (type) {
      case 'charter':
        content = generateProjectCharter(projectData)
        filename = `${projectData.projectName.replace(/\s+/g, '-')}-charter.md`
        break
      case 'sipoc':
        content = generateSIPOC(projectData)
        filename = `${projectData.projectName.replace(/\s+/g, '-')}-sipoc.md`
        break
      case 'analysis':
        content = generateAnalysisReport(projectData)
        filename = `${projectData.projectName.replace(/\s+/g, '-')}-analysis.md`
        break
      case 'implementation':
        content = generateImplementationPlan(projectData)
        filename = `${projectData.projectName.replace(/\s+/g, '-')}-implementation.md`
        break
      case 'control':
        content = generateControlPlan(projectData)
        filename = `${projectData.projectName.replace(/\s+/g, '-')}-control.md`
        break
      case 'full':
        content = generateFullReport(projectData)
        filename = `${projectData.projectName.replace(/\s+/g, '-')}-full-report.md`
        break
    }

    downloadMarkdown(content, filename)
    toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} downloaded`)
  }

  const completionStatus = useMemo(() => {
    const status: Record<DMaicPhase, number> = {
      define: 0,
      measure: 0,
      analyze: 0,
      improve: 0,
      control: 0
    }

    if (!projectData) return status

    Object.keys(PHASE_DATA).forEach((phase) => {
      const phaseKey = phase as DMaicPhase
      const questions = PHASE_DATA[phaseKey].questions
      const requiredQuestions = questions.filter(q => q.required)
      const answeredRequired = requiredQuestions.filter(
        q => projectData.phases[phaseKey][q.id]?.trim()
      ).length

      if (requiredQuestions.length > 0) {
        status[phaseKey] = (answeredRequired / requiredQuestions.length) * 100
      }
    })

    return status
  }, [projectData])

  const overallCompletion = useMemo(() => {
    const values = Object.values(completionStatus)
    return values.reduce((sum, val) => sum + val, 0) / values.length
  }, [completionStatus])

  if (!hasStarted || !projectData) {
    return <WelcomeScreen onStart={handleStart} />
  }

  const PhaseIcon = PHASE_ICONS[currentPhase]
  const currentPhaseData = PHASE_DATA[currentPhase]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold">{projectData.projectName}</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Last updated: {new Date(projectData.lastUpdated).toLocaleString()}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={() => setBmadDialogOpen(true)}
                className="gap-2"
              >
                <Lightbulb weight="duotone" />
                BMAD Tools
              </Button>
              <Button
                onClick={() => handleExport('full')}
                className="gap-2"
              >
                <Download />
                Export Full Report
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">Overall Progress</span>
              <span className="text-muted-foreground">{Math.round(overallCompletion)}%</span>
            </div>
            <Progress value={overallCompletion} className="h-2" />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <PhaseNavigation
          currentPhase={currentPhase}
          onPhaseChange={setCurrentPhase}
          completionStatus={completionStatus}
        />

        <div className="mt-8">
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <PhaseIcon size={28} className="text-primary" weight="duotone" />
                </div>
                <div>
                  <CardTitle className="text-2xl">{currentPhaseData.title}</CardTitle>
                  <CardDescription className="mt-1">
                    {currentPhaseData.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleExport(currentPhase === 'define' ? 'charter' : currentPhase === 'measure' ? 'sipoc' : currentPhase === 'analyze' ? 'analysis' : currentPhase === 'improve' ? 'implementation' : 'control')}
                  className="gap-2"
                >
                  <FileText size={16} />
                  Export {currentPhase.charAt(0).toUpperCase() + currentPhase.slice(1)} Report
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {currentPhaseData.questions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                value={projectData.phases[currentPhase][question.id] || ''}
                onChange={(value) => updatePhaseData(question.id, value)}
                onAIGenerate={handleAIGenerate}
                isGenerating={generatingQuestion === question.id}
              />
            ))}
          </div>
        </div>
      </div>

      <BmadDialog
        open={bmadDialogOpen}
        onClose={() => setBmadDialogOpen(false)}
        onSave={handleBmadSave}
      />
    </div>
  )
}

export default App
