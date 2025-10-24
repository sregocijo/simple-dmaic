import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Rocket } from '@phosphor-icons/react'

interface WelcomeScreenProps {
  onStart: (projectName: string) => void
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const projectName = formData.get('projectName') as string
    if (projectName.trim()) {
      onStart(projectName.trim())
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-background via-background to-muted/30">
      <Card className="max-w-2xl w-full shadow-xl">
        <CardHeader className="text-center space-y-4 pb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
            <Rocket size={32} weight="duotone" className="text-primary-foreground" />
          </div>
          <div>
            <CardTitle className="text-3xl font-bold">Kaizen Agent</CardTitle>
            <CardDescription className="mt-2 text-base">
              Your AI-powered facilitation partner for DMAIC continuous improvement projects
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="prose prose-sm max-w-none">
            <p className="text-muted-foreground">
              This agent guides you through the complete DMAIC methodology—Define, Measure, Analyze, 
              Improve, and Control—with structured prompts, AI assistance, and proven brainstorming 
              techniques from the BMAD framework.
            </p>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <div className="text-accent text-xl font-bold">→</div>
                <div>
                  <div className="font-medium text-foreground">Structured Facilitation</div>
                  <div className="text-sm text-muted-foreground">Phase-by-phase guidance with expert prompts</div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-accent text-xl font-bold">→</div>
                <div>
                  <div className="font-medium text-foreground">AI-Powered Insights</div>
                  <div className="text-sm text-muted-foreground">Generate professional responses instantly</div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-accent text-xl font-bold">→</div>
                <div>
                  <div className="font-medium text-foreground">BMAD Brainstorming</div>
                  <div className="text-sm text-muted-foreground">Unlock creativity with proven techniques</div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-accent text-xl font-bold">→</div>
                <div>
                  <div className="font-medium text-foreground">Export Documentation</div>
                  <div className="text-sm text-muted-foreground">Download professional markdown reports</div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="space-y-2">
              <label htmlFor="projectName" className="text-sm font-medium">
                What's your project name?
              </label>
              <Input
                id="projectName"
                name="projectName"
                placeholder="e.g., Customer Service Response Time Improvement"
                className="text-base"
                required
              />
            </div>
            
            <Button type="submit" className="w-full text-base h-12" size="lg">
              Start Kaizen Project
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
