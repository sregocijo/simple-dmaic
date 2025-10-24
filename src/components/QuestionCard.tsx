import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Sparkle } from '@phosphor-icons/react'
import { Question } from '@/lib/types'
import { useState } from 'react'

interface QuestionCardProps {
  question: Question
  value: string
  onChange: (value: string) => void
  onAIGenerate: (questionId: string, context: string) => void
  isGenerating: boolean
}

export function QuestionCard({ question, value, onChange, onAIGenerate, isGenerating }: QuestionCardProps) {
  const [isFocused, setIsFocused] = useState(false)
  
  return (
    <Card className={`transition-all ${isFocused ? 'ring-2 ring-primary/20 shadow-md' : ''} ${question.required ? 'border-l-4 border-l-accent' : ''}`}>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              {question.text}
              {question.required && (
                <Badge variant="secondary" className="text-xs">Required</Badge>
              )}
            </CardTitle>
            {question.description && (
              <CardDescription className="mt-2 text-sm">
                {question.description}
              </CardDescription>
            )}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onAIGenerate(question.id, value)}
            disabled={isGenerating}
            className="shrink-0 gap-2"
          >
            <Sparkle className={isGenerating ? 'animate-spin' : ''} />
            {isGenerating ? 'Generating...' : 'AI Assist'}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Textarea
          id={question.id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={question.placeholder}
          className="min-h-[120px] resize-y"
        />
      </CardContent>
    </Card>
  )
}
