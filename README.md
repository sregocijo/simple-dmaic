# Kaizen Agent 🚀

> Your AI-powered facilitation partner for DMAIC continuous improvement projects

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

Kaizen Agent is a sophisticated web application that guides teams through the complete DMAIC methodology (Define, Measure, Analyze, Improve, Control) with structured prompts, AI-assisted documentation, and proven brainstorming techniques from the BMAD framework.

## 🎯 Philosophy

This tool reflects a systems mindset and operational strategy—built by an engineering leader who facilitates Kaizen events and builds ventures like Happy Bugs and Cafe Cartographer. It's designed for practitioners who value:

- **Structured thinking** over scattered notes
- **Data-driven insights** over gut feelings  
- **Creative problem-solving** over obvious solutions
- **Sustainable improvements** over quick fixes
- **Professional documentation** over verbal agreements

## ✨ Features

### 📊 Phase-by-Phase Facilitation
Navigate through all five DMAIC phases with contextual questions, expert guidance, and automatic progress tracking. Each phase builds upon the previous, ensuring comprehensive project planning.

### 🤖 AI-Powered Response Generation
Stuck on a question? Click "AI Assist" to generate professional, context-aware responses based on your project data. The AI acts as an experienced Kaizen facilitator, helping you articulate problems, analyze data, and plan improvements.

### 💡 BMAD Brainstorming Tools
Unlock creativity with four proven brainstorming techniques:
- **Brainwriting**: Silent idea generation with iterative building
- **Mind Mapping**: Visual brainstorming with connected concepts
- **Analogy Thinking**: Draw inspiration from other domains
- **Displacement**: Challenge assumptions with perspective shifts

### 📝 Template & Document Export
Generate professional markdown documentation at any phase:
- Project Charter (Define phase)
- SIPOC Diagrams (Measure phase)
- Root Cause Analysis Reports (Analyze phase)
- Implementation Plans (Improve phase)
- Control Plans (Control phase)
- Full DMAIC Project Reports

### 💾 Persistent State Management
Your work is automatically saved. Come back days or weeks later—everything is exactly as you left it. Perfect for real-world Kaizen projects that span multiple sessions.

## 🚀 Getting Started

### Quick Start

1. **Name Your Project**: Enter a descriptive project name on the welcome screen
2. **Start with Define**: Answer the foundational questions about your problem, goals, and stakeholders
3. **Use AI Assist**: Click the AI button on any question to generate professional responses
4. **Progress Through Phases**: Complete each phase before moving to the next
5. **Export Documentation**: Download phase-specific or full project reports anytime

### Best Practices

- **Be Specific**: The more detail you provide, the better the AI can help
- **Use Data**: Reference actual metrics, dates, and measurable outcomes
- **Brainstorm Freely**: Use BMAD tools when you're stuck or need creative solutions
- **Review Regularly**: Export and share documentation with stakeholders frequently
- **Iterate**: Update your responses as you learn more about the problem

## 📋 DMAIC Phases Explained

### 1️⃣ Define
Establish the foundation: What problem are you solving? Who's involved? What are the boundaries?

**Key Outputs**: Problem statement, goal statement, stakeholder list, CTQs, scope

### 2️⃣ Measure
Quantify the current state: What are the baseline metrics? How will you collect data?

**Key Outputs**: Current performance metrics, data sources, SIPOC diagram, process capability

### 3️⃣ Analyze
Identify root causes: What's really driving the problem? What does the data reveal?

**Key Outputs**: Root cause list, data analysis findings, validated causes, improvement hypothesis

### 4️⃣ Improve
Develop and test solutions: What options exist? What will you implement? How will you pilot?

**Key Outputs**: Solution options, selection criteria, pilot plan, implementation roadmap

### 5️⃣ Control
Sustain improvements: How will you monitor ongoing? What standard work changed? Who owns it now?

**Key Outputs**: Control metrics, monitoring plan, updated SOPs, benefits realized, lessons learned

## 🧠 BMAD Brainstorming Framework

The BMAD (Brainwriting, Mind Mapping, Analogy, Displacement) framework provides structured techniques for creative problem-solving:

### Brainwriting
Perfect for teams where loud voices dominate. Everyone writes ideas silently, then builds on each other's contributions without debate.

### Mind Mapping
Ideal for complex problems with many interconnected factors. Start with a central concept and branch out to explore relationships.

### Analogy Thinking
When you're stuck in industry-specific thinking, ask: "How do other industries solve similar problems?" Nature, sports, and daily life offer surprising insights.

### Displacement
Challenge your assumptions by asking: "What if we had unlimited budget? No budget? What would a child suggest? A competitor? Someone from the future?"

## 🛠️ Technical Stack

- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Components**: Shadcn UI v4
- **Icons**: Phosphor Icons
- **AI**: OpenAI GPT-4o via Spark SDK
- **Storage**: Spark KV (persistent browser storage)
- **Build**: Vite 6

## 📁 Project Structure

```
src/
├── components/
│   ├── WelcomeScreen.tsx      # Onboarding and project creation
│   ├── PhaseNavigation.tsx    # DMAIC phase tabs
│   ├── QuestionCard.tsx       # Individual question UI
│   └── BmadDialog.tsx         # Brainstorming tool modal
├── lib/
│   ├── types.ts               # TypeScript interfaces
│   ├── phase-data.ts          # DMAIC questions and BMAD tools
│   └── templates.ts           # Markdown document generators
└── App.tsx                    # Main application
```

## 🎨 Design Principles

- **Professional**: Clean, executive-ready interface
- **Focused**: Minimal distractions, maximum clarity
- **Guided**: Every question includes context and examples
- **Responsive**: Works on desktop, tablet, and mobile
- **Accessible**: Keyboard navigation, semantic HTML, WCAG AA contrast

## 🤝 Use Cases

- **Kaizen Events**: Facilitate 3-5 day rapid improvement events
- **Six Sigma Projects**: Document DMAIC projects for Green/Black Belt certification
- **Process Improvement**: Any systematic problem-solving initiative
- **Team Retrospectives**: Structure learnings from completed projects
- **Quality Initiatives**: ISO, Lean, or operational excellence programs

## 👥 Who Is This For?

- **Kaizen Facilitators**: Leading improvement events
- **Six Sigma Practitioners**: Documenting DMAIC projects
- **Operations Managers**: Solving recurring problems
- **Quality Engineers**: Driving process improvements
- **Product Managers**: Structuring optimization initiatives
- **Engineering Leaders**: Building operational excellence cultures

## 💭 Philosophy & Mindset

This tool embodies several core beliefs:

1. **Structure Enables Creativity**: DMAIC provides guardrails that free you to think deeply
2. **Data Drives Decisions**: Measure before and after; opinions are cheap, data is valuable
3. **Collaboration Beats Heroics**: The best solutions come from diverse perspectives
4. **Documentation Sustains Success**: If it's not written down, it didn't happen
5. **Small Wins Compound**: Focus on what you can control, then layer improvements

## 🚧 Roadmap

Future enhancements under consideration:

- [ ] Team collaboration (multi-user editing)
- [ ] Version history and change tracking
- [ ] Integration with project management tools
- [ ] Statistical analysis tools (Pareto, fishbone, 5 Whys)
- [ ] ROI calculator
- [ ] Template library expansion
- [ ] PDF export with charts and images

## 📄 License

MIT License - feel free to use, modify, and build upon this tool.

## 🙏 Acknowledgments

- Inspired by the BMAD methodology from [BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD)
- Built with the principles of Lean, Six Sigma, and continuous improvement
- Designed for practitioners, by a practitioner

---

**Built with intention by an operational leader who believes in systems thinking, data-driven decisions, and continuous improvement.**

*Ship ventures. Solve problems. Build better processes.*
