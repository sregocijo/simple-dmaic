export type DMaicPhase = 'define' | 'measure' | 'analyze' | 'improve' | 'control'

export type BmadTechnique = 'brainwriting' | 'mindmapping' | 'analogy' | 'displacement'

export interface Question {
  id: string
  text: string
  description?: string
  required?: boolean
  placeholder?: string
  multiline?: boolean
  aiPromptContext?: string
  supportsAttachments?: boolean
}

export interface PhaseData {
  questions: Question[]
  title: string
  description: string
}

export interface AttachmentData {
  name: string
  data: string
  type: string
  size: number
  uploadedAt: string
}

export interface ProjectData {
  projectName: string
  lastUpdated: string
  phases: {
    define: Record<string, string>
    measure: Record<string, string>
    analyze: Record<string, string>
    improve: Record<string, string>
    control: Record<string, string>
  }
  attachments?: {
    define?: Record<string, AttachmentData[]>
    measure?: Record<string, AttachmentData[]>
    analyze?: Record<string, AttachmentData[]>
    improve?: Record<string, AttachmentData[]>
    control?: Record<string, AttachmentData[]>
  }
  bmadNotes: Record<string, string[]>
}

export interface BmadTool {
  id: BmadTechnique
  name: string
  description: string
  icon: string
  instructions: string
}
