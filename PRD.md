# Planning Guide

A sophisticated facilitation agent that guides teams through Kaizen and DMAIC project planning, integrating proven brainstorming methodologies to help operational leaders document, structure, and execute continuous improvement initiatives.

**Experience Qualities**:
1. **Methodical** - Each phase flows naturally with structured guidance that builds upon previous insights
2. **Collaborative** - Language and interactions feel like working with an experienced facilitator who asks the right questions
3. **Actionable** - Every template and prompt produces concrete, usable documentation that teams can immediately implement

**Complexity Level**: Light Application (multiple features with basic state)
  - Multi-phase workflow with persistent state across DMAIC stages, template generation, and downloadable documentation artifacts

## Essential Features

### Enhanced Define Phase Tools
- **Functionality**: Comprehensive toolkit including Problem Statement, Cost of Poor Quality (COPQ) analysis, Voice of Customer/KANO model, Critical to Quality/House of Quality, Devil's Advocate questioning, SIPOC, Stakeholder Analysis, and Project Charter generation
- **Purpose**: Ensure rigorous problem definition using industry-standard Lean Six Sigma tools before moving to measurement
- **Trigger**: User navigates to Define phase and works through structured questions sequentially
- **Progression**: Initial problem → COPQ breakdown (Prevention/Appraisal/Internal Failure/External Failure) → VOC collection (complaints/direct/surveys/become the customer) → KANO classification → CTQ identification → House of Quality mapping → Devil's advocate challenge → SIPOC mapping → Stakeholder analysis → Refined problem statement → SMART goal → Project charter
- **Success criteria**: Each tool has AI-powered guidance with specific prompt context to generate comprehensive, professional responses that build upon each other

### Enhanced Measure Phase Tools
- **Functionality**: Operational Definitions, Data Collection Plan, Additional KPIs (Cycle Efficiency, Lead Time, TAKT Time, Little's Law, Cost equations, Expected Value, Break-Even Point, Productivity), Waiting Line Theory/Queue Analysis, Measurement System Analysis (MSA), Process Capability Analysis (Cp, Cpk, DPMO, sigma level)
- **Purpose**: Establish baseline metrics and validate measurement systems using rigorous analytical methods
- **Trigger**: User navigates to Measure phase with completed Define work
- **Progression**: Define metrics → Plan data collection → Calculate operational KPIs → Analyze queue dynamics → Validate measurement systems → Assess process capability
- **Success criteria**: Users can quantify current state with validated, statistically sound baseline data

### Enhanced Analyze Phase Tools (with Attachment Support)
- **Functionality**: Detailed Process Map, Additional Mapping (Value Stream Map, Time-Value Map, Service Blueprint, Spaghetti Diagram), Root Cause Analysis (5 Whys, Fishbone, Fault Tree), Brainstorming & Affinity Diagram, Seven Manufacturing Wastes Review (Overproduction, Waiting, Transporting, Over-processing, Inventory, Motion, Defects), Service Process Wastes (Delay, Incorrect Inventory, Duplication), Additional Wastes (Human Potential, Energy, Pollution, Space), Graphical Analysis (Pareto, Histogram, Run Chart, Scatter Plot, Box Plot, Control Chart), Statistical Analysis (Hypothesis Testing, Golden Batch, Means Comparison, Regression), Modeling & Simulation (Discrete Event, Queuing Models, Capacity Models, Cost Models), Validated Root Causes, Improvement Hypothesis
- **Purpose**: Identify, validate, and prioritize root causes using comprehensive analytical tools - any analysis can include file attachments (process maps, charts, photos, data files)
- **Trigger**: User navigates to Analyze phase with baseline data from Measure
- **Progression**: Map current process → Identify waste categories → Conduct root cause analysis → Perform statistical validation → Build models/simulations → Synthesize validated causes → Formulate improvement hypothesis
- **Success criteria**: Each analysis tool supports both text documentation and file attachments (images, PDFs, CSV, Excel). Root causes are data-validated with statistical significance, prioritized by impact, and connected to measurable improvement hypotheses

### Phase-by-Phase Facilitation
- **Functionality**: Guide users through Define, Measure, Analyze, Improve, Control phases with contextual prompts
- **Purpose**: Ensure comprehensive project planning without overwhelming teams
- **Trigger**: User selects current project phase from navigation
- **Progression**: Phase selection → Contextual question display → User input capture → Progress tracking → Template generation
- **Success criteria**: Users can navigate between phases, see their progress, and have inputs persist across sessions

### AI-Powered Response Generation
- **Functionality**: Use LLM to help users develop comprehensive answers to facilitation questions with specialized prompt context for each Define phase tool
- **Purpose**: Overcome blank-page syndrome and generate professional documentation using best practices for each specific tool (COPQ, KANO, HOQ, etc.)
- **Trigger**: User clicks "Generate with AI" button on any question
- **Progression**: Button click → Analyze existing context and other phase answers → Apply tool-specific AI prompt guidance → AI generates structured response → User reviews/edits → Save to state
- **Success criteria**: Generated responses feel contextually relevant, use proper methodology for each tool, and are professionally formatted

### BMAD Brainstorming Integration
- **Functionality**: Offer specialized brainstorming techniques (Brainwriting, Mindmapping, Analogy, Displacement)
- **Purpose**: Unlock creative problem-solving during critical phases
- **Trigger**: User clicks brainstorming tool icon within a phase
- **Progression**: Tool selection → Technique-specific interface → Capture ideas → Export to phase documentation
- **Success criteria**: Each BMAD technique has a distinct, usable interface that produces exportable results

### Template & Document Export
- **Functionality**: Generate complete project documentation (charter, SIPOC, analysis reports, control plan, etc.) with embedded attachment references
- **Purpose**: Create professional deliverables for stakeholder review and project tracking
- **Trigger**: User clicks "Export" or "Generate Template" button
- **Progression**: Button click → Compile user inputs and attachment metadata → Format as markdown → Download file
- **Success criteria**: Exported documents are complete, well-formatted markdown files with attachment references included

### File Attachment Support
- **Functionality**: Upload, store, preview, and download file attachments for any question that supports them (particularly in Analyze phase)
- **Purpose**: Capture visual process maps, charts, photos, data files that complement text analysis
- **Trigger**: User clicks "Attach Files" button on questions marked with attachment support
- **Progression**: Select files → Validate type/size → Convert to base64 → Store in KV → Display with preview/download → Include in exports
- **Success criteria**: Support images (PNG, JPG, GIF, WEBP), PDFs, text files, and spreadsheets (CSV, XLS, XLSX) up to 5MB each. Files persist across sessions and can be downloaded or removed

### Project State Management
- **Functionality**: Persist all user inputs, progress, and generated content across sessions
- **Purpose**: Support long-running projects that span weeks or months
- **Trigger**: Automatic on any user input change
- **Progression**: Input change → Debounced save → Persist to KV store → Visual confirmation
- **Success criteria**: Users can leave and return without losing any work

## Edge Case Handling
- **Empty Projects**: Show welcome screen with guided onboarding for first-time users
- **Incomplete Phases**: Highlight missing required fields before allowing export
- **Long-Form Text**: Implement auto-growing textareas with character count guidance
- **Large Attachments**: Validate file size (5MB max) and type before upload, show clear error messages
- **Attachment Storage**: Use base64 encoding in KV store, gracefully handle storage limits
- **Concurrent Editing**: Warn if project data seems stale (edge case for shared environments)
- **Export with Attachments**: Include attachment file names and metadata in exports (actual files remain in app)
- **Export Failures**: Provide fallback copy-to-clipboard option if download fails

## Design Direction

The design should evoke the feeling of a premium workshop facilitation tool - professional, focused, and confidence-inspiring. Think whiteboard sessions meets executive strategy room: clean workspace with purposeful structure, warm yet authoritative. The interface should feel like a trusted advisor, not a bureaucratic form. Minimal distractions, maximum clarity.

## Color Selection

Complementary color scheme with blue and warm orange to balance analytical rigor with creative warmth

- **Primary Color**: Deep Professional Blue (oklch(0.45 0.12 250)) - Represents analytical thinking, trust, process rigor
- **Secondary Colors**: 
  - Soft Slate (oklch(0.65 0.02 250)) - Supporting backgrounds, de-emphasized UI
  - Light Blue (oklch(0.92 0.04 250)) - Hover states, subtle highlights
- **Accent Color**: Warm Orange (oklch(0.68 0.15 45)) - Call-to-action buttons, progress indicators, creative brainstorming sections
- **Foreground/Background Pairings**:
  - Background (White oklch(0.98 0 0)): Dark gray text (oklch(0.25 0.01 250)) - Ratio 11.5:1 ✓
  - Card (Lightest Blue oklch(0.97 0.01 250)): Dark gray text (oklch(0.25 0.01 250)) - Ratio 11.2:1 ✓
  - Primary (Deep Blue oklch(0.45 0.12 250)): White text (oklch(0.98 0 0)) - Ratio 8.2:1 ✓
  - Accent (Warm Orange oklch(0.68 0.15 45)): Dark text (oklch(0.25 0.01 250)) - Ratio 5.8:1 ✓
  - Muted (Soft Slate oklch(0.94 0.01 250)): Medium gray text (oklch(0.50 0.02 250)) - Ratio 4.9:1 ✓

## Font Selection

Typography should convey structured thinking and executive polish - clean sans-serif with excellent readability for long-form documentation

- **Typographic Hierarchy**:
  - H1 (Phase Titles): Inter Bold/32px/tight letter-spacing/-0.02em
  - H2 (Section Headers): Inter Semibold/24px/normal letter-spacing
  - H3 (Question Prompts): Inter Medium/18px/normal letter-spacing
  - Body (Input/Content): Inter Regular/16px/relaxed line-height/1.6
  - Caption (Helper Text): Inter Regular/14px/muted color
  - Code/Templates: JetBrains Mono Regular/14px (for exported markdown preview)

## Animations

Animations should feel purposeful and professional - like page turns in a high-quality notebook, not flashy transitions. Movements should reinforce the sequential nature of DMAIC phases while keeping the interface responsive and alive.

- **Purposeful Meaning**: Smooth phase transitions suggest progression through a methodology; accordion expansions reveal depth without overwhelming
- **Hierarchy of Movement**: Phase navigation deserves prominent animation; question reveals use subtle slides; save confirmations use gentle fades

## Component Selection

- **Components**:
  - **Tabs**: Main phase navigation (Define/Measure/Analyze/Improve/Control)
  - **Accordion**: Collapsible question groups within each phase
  - **Textarea**: Long-form user inputs with auto-grow
  - **Card**: Container for question groups, templates, and BMAD tools
  - **Button**: Primary (AI generate, Export), Secondary (Save, Cancel), Ghost (Edit, Clear)
  - **Dialog**: BMAD brainstorming tool overlays, export preview
  - **Badge**: Phase completion indicators, field status tags
  - **Progress**: Overall project completion visualization
  - **Separator**: Visual breaks between major sections
  - **Select**: Dropdown for template type selection
  - **Scroll Area**: Long content sections with smooth scrolling
  
- **Customizations**:
  - **Phase Navigation**: Custom tab styling with completion checkmarks and progress indicators
  - **Question Cards**: Elevated cards with left border accent color indicating required vs optional
  - **Export Preview**: Custom markdown renderer component showing formatted output
  - **BMAD Tool Cards**: Specialized layouts for each brainstorming technique with icon headers
  
- **States**:
  - **Buttons**: Default (solid primary), Hover (subtle scale/shadow), Active (pressed state), Disabled (muted with cursor indication), Loading (spinner with text)
  - **Inputs**: Default (border subtle), Focus (border primary with glow), Filled (slight background tint), Error (border destructive)
  - **Cards**: Default (subtle shadow), Hover (elevated shadow), Active (border highlight)
  
- **Icon Selection**:
  - Lightbulb (brainstorming)
  - CheckCircle (completed phases)
  - ArrowRight (navigation/progression)
  - Download (export actions)
  - FileText (templates/documents)
  - Users (stakeholders)
  - Target (goals/CTQs)
  - GitBranch (SIPOC processes)
  - Sparkle (AI generation)
  - Paperclip (file attachments)
  - File (attached documents)
  - X (remove attachments)
  - ChartBar, MagnifyingGlass, TrendUp, ShieldCheck (phase icons)
  
- **Spacing**: Use 4px base unit - generous 24px padding on cards, 16px gaps between form elements, 32px margins between major sections
  
- **Mobile**: Stack phase tabs vertically as pills, collapse accordion sections by default, full-width cards, sticky export button at bottom, floating action button for quick AI assist
