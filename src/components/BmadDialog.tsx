import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { BMAD_TOOLS } from '@/lib/phase-data'
import { BmadTechnique } from '@/lib/types'
import { PencilLine, GitBranch, Lightbulb, Shuffle } from '@phosphor-icons/react'
import { useState } from 'react'

interface BmadDialogProps {
  open: boolean
  onClose: () => void
  onSave: (technique: BmadTechnique, notes: string[]) => void
}

const ICON_MAP = {
  PencilLine,
  GitBranch,
  Lightbulb,
  Shuffle
}

export function BmadDialog({ open, onClose, onSave }: BmadDialogProps) {
  const [selectedTechnique, setSelectedTechnique] = useState<BmadTechnique | null>(null)
  const [notes, setNotes] = useState<string>('')

  const handleSave = () => {
    if (selectedTechnique && notes.trim()) {
      const notesList = notes.split('\n').filter(n => n.trim())
      onSave(selectedTechnique, notesList)
      setNotes('')
      setSelectedTechnique(null)
      onClose()
    }
  }

  if (!selectedTechnique) {
    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">BMAD Brainstorming Tools</DialogTitle>
            <DialogDescription>
              Select a brainstorming technique to unlock creative solutions for your Kaizen project
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BMAD_TOOLS.map((tool) => {
              const Icon = ICON_MAP[tool.icon as keyof typeof ICON_MAP]
              
              return (
                <Card
                  key={tool.id}
                  className="cursor-pointer hover:shadow-lg transition-all hover:border-accent"
                  onClick={() => setSelectedTechnique(tool.id)}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <Icon size={24} className="text-accent" />
                      </div>
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                    </div>
                    <CardDescription className="mt-2">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  const tool = BMAD_TOOLS.find(t => t.id === selectedTechnique)!
  const Icon = ICON_MAP[tool.icon as keyof typeof ICON_MAP]

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/10">
              <Icon size={24} className="text-accent" />
            </div>
            <div>
              <DialogTitle className="text-2xl">{tool.name}</DialogTitle>
              <DialogDescription className="mt-1">
                {tool.description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          <Card className="bg-muted/50 border-accent/30">
            <CardHeader>
              <CardTitle className="text-sm font-medium">Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{tool.instructions}</p>
            </CardContent>
          </Card>

          <div className="space-y-2">
            <label className="text-sm font-medium">Capture your ideas (one per line)</label>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Enter each idea on a new line..."
              className="min-h-[200px] font-mono text-sm"
            />
          </div>

          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => setSelectedTechnique(null)}>
              Back
            </Button>
            <Button onClick={handleSave} disabled={!notes.trim()}>
              Save Ideas
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
