import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { CheckCircle } from '@phosphor-icons/react'
import { DMaicPhase } from '@/lib/types'

interface PhaseNavigationProps {
  currentPhase: DMaicPhase
  onPhaseChange: (phase: DMaicPhase) => void
  completionStatus: Record<DMaicPhase, number>
}

const PHASES: { value: DMaicPhase; label: string }[] = [
  { value: 'define', label: 'Define' },
  { value: 'measure', label: 'Measure' },
  { value: 'analyze', label: 'Analyze' },
  { value: 'improve', label: 'Improve' },
  { value: 'control', label: 'Control' }
]

export function PhaseNavigation({ currentPhase, onPhaseChange, completionStatus }: PhaseNavigationProps) {
  return (
    <Tabs value={currentPhase} onValueChange={(v) => onPhaseChange(v as DMaicPhase)} className="w-full">
      <TabsList className="w-full grid grid-cols-5 h-auto p-1 bg-muted/50">
        {PHASES.map((phase) => {
          const completion = completionStatus[phase.value]
          const isComplete = completion === 100
          
          return (
            <TabsTrigger
              key={phase.value}
              value={phase.value}
              className="flex flex-col items-center gap-1 py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm relative"
            >
              <div className="flex items-center gap-2">
                {isComplete && (
                  <CheckCircle weight="fill" className="text-accent" size={16} />
                )}
                <span className="font-medium">{phase.label}</span>
              </div>
              {completion > 0 && (
                <Badge 
                  variant={isComplete ? 'default' : 'secondary'} 
                  className={`text-xs ${isComplete ? 'bg-accent text-accent-foreground' : ''}`}
                >
                  {Math.round(completion)}%
                </Badge>
              )}
            </TabsTrigger>
          )
        })}
      </TabsList>
    </Tabs>
  )
}
