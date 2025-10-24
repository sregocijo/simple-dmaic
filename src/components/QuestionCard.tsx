import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Sparkle, Paperclip, File, X, DownloadSimple } from '@phosphor-icons/react'
import { Question, AttachmentData } from '@/lib/types'
import { useState, useRef } from 'react'
import { toast } from 'sonner'

interface QuestionCardProps {
  question: Question
  value: string
  onChange: (value: string) => void
  onAIGenerate: (questionId: string, context: string) => void
  isGenerating: boolean
  attachments?: AttachmentData[]
  onAttachmentsChange?: (attachments: AttachmentData[]) => void
}

export function QuestionCard({ 
  question, 
  value, 
  onChange, 
  onAIGenerate, 
  isGenerating,
  attachments = [],
  onAttachmentsChange
}: QuestionCardProps) {
  const [isFocused, setIsFocused] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || !onAttachmentsChange) return

    const maxSize = 5 * 1024 * 1024
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/webp', 'application/pdf', 'text/plain', 'text/csv', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']

    const newAttachments: AttachmentData[] = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      
      if (file.size > maxSize) {
        toast.error(`${file.name} is too large (max 5MB)`)
        continue
      }

      if (!allowedTypes.includes(file.type)) {
        toast.error(`${file.name} file type not supported`)
        continue
      }

      try {
        const base64 = await fileToBase64(file)
        newAttachments.push({
          name: file.name,
          data: base64,
          type: file.type,
          size: file.size,
          uploadedAt: new Date().toISOString()
        })
      } catch (error) {
        toast.error(`Failed to upload ${file.name}`)
      }
    }

    if (newAttachments.length > 0) {
      onAttachmentsChange([...attachments, ...newAttachments])
      toast.success(`${newAttachments.length} file(s) attached`)
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = error => reject(error)
    })
  }

  const handleRemoveAttachment = (index: number) => {
    if (!onAttachmentsChange) return
    const updated = attachments.filter((_, i) => i !== index)
    onAttachmentsChange(updated)
    toast.success('Attachment removed')
  }

  const handleDownloadAttachment = (attachment: AttachmentData) => {
    const link = document.createElement('a')
    link.href = attachment.data
    link.download = attachment.name
    link.click()
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }
  
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
              {question.supportsAttachments && (
                <Badge variant="outline" className="text-xs gap-1">
                  <Paperclip size={12} />
                  Attachments
                </Badge>
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
      <CardContent className="space-y-3">
        <Textarea
          id={question.id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={question.placeholder}
          className="min-h-[120px] resize-y"
        />

        {question.supportsAttachments && onAttachmentsChange && (
          <div className="space-y-2">
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*,.pdf,.txt,.csv,.xls,.xlsx"
              onChange={handleFileSelect}
              className="hidden"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              className="gap-2"
            >
              <Paperclip size={16} />
              Attach Files
            </Button>

            {attachments.length > 0 && (
              <div className="space-y-2">
                {attachments.map((attachment, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 border"
                  >
                    <File size={20} className="text-muted-foreground shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{attachment.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {formatFileSize(attachment.size)}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDownloadAttachment(attachment)}
                      className="shrink-0 h-8 w-8 p-0"
                    >
                      <DownloadSimple size={16} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveAttachment(index)}
                      className="shrink-0 h-8 w-8 p-0 text-destructive hover:text-destructive"
                    >
                      <X size={16} />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
