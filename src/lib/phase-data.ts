import { PhaseData } from './types'

export const PHASE_DATA: Record<string, PhaseData> = {
  define: {
    title: 'Define Phase',
    description: 'Establish the foundation of your improvement project by clearly articulating the problem, stakeholders, and scope.',
    questions: [
      {
        id: 'problem-statement',
        text: 'What is the problem statement?',
        description: 'Clearly describe the issue that needs improvement. Be specific about what is happening, where, when, and the impact.',
        required: true,
        placeholder: 'Our customer service response time has increased by 40% over the last quarter, leading to decreased satisfaction scores...',
        multiline: true
      },
      {
        id: 'goal-statement',
        text: 'What is the goal statement?',
        description: 'Define the measurable outcome you want to achieve. Use SMART criteria (Specific, Measurable, Achievable, Relevant, Time-bound).',
        required: true,
        placeholder: 'Reduce average customer service response time from 4 hours to 2 hours within 90 days...',
        multiline: true
      },
      {
        id: 'stakeholders',
        text: 'Who are the stakeholders?',
        description: 'List all individuals or groups who have an interest in or will be affected by this project.',
        required: true,
        placeholder: 'Customer Service Team, IT Department, Customers, Operations Manager...',
        multiline: true
      },
      {
        id: 'voc-inputs',
        text: 'What are the Voice of Customer (VOC) inputs?',
        description: 'Capture what customers have said about this issue. Include quotes, survey results, or feedback themes.',
        required: false,
        placeholder: '"I waited hours for a response..." - Survey shows 65% want faster support...',
        multiline: true
      },
      {
        id: 'ctqs',
        text: 'What are the Critical to Quality (CTQ) factors?',
        description: 'Identify the measurable characteristics that are critical to customer satisfaction.',
        required: true,
        placeholder: 'Response time, resolution accuracy, customer satisfaction score, first-contact resolution rate...',
        multiline: true
      },
      {
        id: 'constraints',
        text: 'What constraints or boundaries should be considered?',
        description: 'List any limitations such as budget, time, resources, technology, or organizational policies.',
        required: false,
        placeholder: 'Budget: $10,000, Timeline: 3 months, Cannot add headcount, Must use existing systems...',
        multiline: true
      },
      {
        id: 'scope',
        text: 'What is in scope and out of scope?',
        description: 'Clearly define what this project will and will not address.',
        required: true,
        placeholder: 'In Scope: Email and chat support response times. Out of Scope: Phone support, after-hours service...',
        multiline: true
      }
    ]
  },
  measure: {
    title: 'Measure Phase',
    description: 'Establish baseline metrics and data collection methods to quantify the current state of the process.',
    questions: [
      {
        id: 'current-metrics',
        text: 'What are the current performance metrics?',
        description: 'Document baseline measurements for all CTQs identified in the Define phase.',
        required: true,
        placeholder: 'Current avg response time: 4.2 hours, CSAT: 72%, First contact resolution: 58%...',
        multiline: true
      },
      {
        id: 'data-sources',
        text: 'What are your data sources and collection methods?',
        description: 'Identify where data comes from and how it will be collected, measured, and validated.',
        required: true,
        placeholder: 'Ticketing system logs, customer surveys (sent 24h after resolution), quality audits...',
        multiline: true
      },
      {
        id: 'measurement-system',
        text: 'How will you ensure measurement accuracy?',
        description: 'Describe your measurement system analysis (MSA) approach to ensure data reliability.',
        required: false,
        placeholder: 'Daily automated reports, weekly manual audits, cross-validation with customer feedback...',
        multiline: true
      },
      {
        id: 'process-capability',
        text: 'What is the current process capability?',
        description: 'Assess how well the current process meets requirements (Cp, Cpk, sigma level, defect rate).',
        required: false,
        placeholder: 'Current sigma level: 2.5, Defect rate: 15% of responses exceed 6-hour target...',
        multiline: true
      },
      {
        id: 'sipoc',
        text: 'Describe the SIPOC (Suppliers, Inputs, Process, Outputs, Customers)',
        description: 'Map out the high-level process flow from suppliers to customers.',
        required: false,
        placeholder: 'Suppliers: Customers, internal teams | Inputs: Support tickets | Process: Triage→Assign→Resolve→Close | Outputs: Resolved tickets | Customers: End users...',
        multiline: true
      }
    ]
  },
  analyze: {
    title: 'Analyze Phase',
    description: 'Identify root causes and validate them with data to understand what is driving the problem.',
    questions: [
      {
        id: 'root-causes',
        text: 'What are the potential root causes?',
        description: 'List all possible causes identified through brainstorming, fishbone diagrams, or 5 Whys analysis.',
        required: true,
        placeholder: 'Lack of auto-routing, inadequate staffing during peak hours, unclear ticket prioritization...',
        multiline: true
      },
      {
        id: 'data-analysis',
        text: 'What does the data analysis reveal?',
        description: 'Summarize findings from statistical analysis, Pareto charts, correlation studies, etc.',
        required: true,
        placeholder: 'Pareto analysis shows 80% of delays caused by: manual routing (45%), peak hour backlog (35%)...',
        multiline: true
      },
      {
        id: 'validated-causes',
        text: 'Which root causes have been validated?',
        description: 'Identify which potential causes have been confirmed through data analysis.',
        required: true,
        placeholder: 'Confirmed: Manual ticket routing adds 1.5hr avg delay. Peak hour staffing 30% below demand...',
        multiline: true
      },
      {
        id: 'value-stream',
        text: 'What does value stream mapping reveal?',
        description: 'Document waste, bottlenecks, and cycle time insights from process mapping.',
        required: false,
        placeholder: 'Total lead time: 4.2hrs | Value-add time: 45min | Waiting time at routing: 90min (largest waste)...',
        multiline: true
      },
      {
        id: 'hypothesis',
        text: 'What is your hypothesis for improvement?',
        description: 'State your theory about what changes will drive the desired improvement.',
        required: false,
        placeholder: 'If we implement auto-routing and adjust staffing schedules, we can reduce response time by 50%...',
        multiline: true
      }
    ]
  },
  improve: {
    title: 'Improve Phase',
    description: 'Develop, test, and implement solutions that address the validated root causes.',
    questions: [
      {
        id: 'solution-options',
        text: 'What solution options have you identified?',
        description: 'List all potential solutions, improvements, or countermeasures considered.',
        required: true,
        placeholder: '1) Automated ticket routing, 2) Hire additional staff, 3) Implement knowledge base, 4) Adjust shift schedules...',
        multiline: true
      },
      {
        id: 'solution-selection',
        text: 'Which solutions did you select and why?',
        description: 'Document your chosen solutions and the criteria used for selection (impact, effort, cost, risk).',
        required: true,
        placeholder: 'Selected: Auto-routing (high impact, low cost) + shift schedule optimization (quick win). Deferred: New hires (budget constraint)...',
        multiline: true
      },
      {
        id: 'pilot-plan',
        text: 'What is your pilot or testing plan?',
        description: 'Describe how you will test the solution before full implementation.',
        required: false,
        placeholder: '2-week pilot with email support only, 50% of tickets routed automatically, monitor daily metrics...',
        multiline: true
      },
      {
        id: 'pilot-results',
        text: 'What were the pilot results?',
        description: 'Summarize outcomes from testing, including successes and learnings.',
        required: false,
        placeholder: 'Pilot reduced routing time by 85%. Response time improved from 4.2hrs to 2.1hrs. CSAT increased 12%...',
        multiline: true
      },
      {
        id: 'implementation-plan',
        text: 'What is your full implementation plan?',
        description: 'Detail the rollout strategy, timeline, resources needed, and communication plan.',
        required: true,
        placeholder: 'Week 1: Configure auto-routing for all channels. Week 2: Train team. Week 3: Full deployment with daily monitoring...',
        multiline: true
      },
      {
        id: 'risk-mitigation',
        text: 'What risks exist and how will you mitigate them?',
        description: 'Identify potential implementation risks and your mitigation strategies.',
        required: false,
        placeholder: 'Risk: System downtime during deployment. Mitigation: Deploy during low-traffic hours with rollback plan...',
        multiline: true
      }
    ]
  },
  control: {
    title: 'Control Phase',
    description: 'Sustain improvements by establishing monitoring systems, standard work, and handoff procedures.',
    questions: [
      {
        id: 'control-metrics',
        text: 'What metrics will you monitor ongoing?',
        description: 'Define the KPIs that will track sustained performance.',
        required: true,
        placeholder: 'Daily: Avg response time, ticket backlog. Weekly: CSAT, first-contact resolution. Monthly: Trend analysis...',
        multiline: true
      },
      {
        id: 'control-plan',
        text: 'What is your control plan?',
        description: 'Document the monitoring frequency, acceptable ranges, and response plan for deviations.',
        required: true,
        placeholder: 'Monitor response time hourly. Alert if >2.5hrs. Daily team huddle to review. Monthly review with leadership...',
        multiline: true
      },
      {
        id: 'standard-work',
        text: 'What standard work or procedures were updated?',
        description: 'List all documentation, SOPs, or work instructions created or modified.',
        required: true,
        placeholder: 'Updated: Ticket Routing SOP, Customer Service Handbook. Created: Auto-routing Configuration Guide...',
        multiline: true
      },
      {
        id: 'training',
        text: 'What training was provided?',
        description: 'Describe training delivered to ensure team members can sustain the improvements.',
        required: false,
        placeholder: 'All CS reps completed 2-hour training on new routing system. Refresher scheduled quarterly...',
        multiline: true
      },
      {
        id: 'handoff',
        text: 'How was the project handed off to process owners?',
        description: 'Document the transition from project team to operational ownership.',
        required: true,
        placeholder: 'CS Manager now owns daily monitoring. IT maintains routing system. Monthly performance review with Ops Director...',
        multiline: true
      },
      {
        id: 'lessons-learned',
        text: 'What were the key lessons learned?',
        description: 'Capture insights, successes, challenges, and recommendations for future projects.',
        required: false,
        placeholder: 'Success: Data-driven approach built stakeholder buy-in. Challenge: Initial resistance to automation. Recommendation: Involve end-users earlier...',
        multiline: true
      },
      {
        id: 'benefits-realized',
        text: 'What benefits were realized?',
        description: 'Quantify the improvements achieved compared to baseline metrics.',
        required: true,
        placeholder: 'Response time: 4.2hrs → 1.8hrs (57% improvement). CSAT: 72% → 88%. Annual savings: $45,000...',
        multiline: true
      }
    ]
  }
}

export const BMAD_TOOLS = [
  {
    id: 'brainwriting' as const,
    name: 'Brainwriting',
    description: 'Silent idea generation where participants write ideas independently before sharing',
    icon: 'PencilLine',
    instructions: 'Write down 3-5 ideas silently. Each participant builds on previous ideas. No discussion until all rounds complete.'
  },
  {
    id: 'mindmapping' as const,
    name: 'Mind Mapping',
    description: 'Visual brainstorming that connects related ideas in a tree structure',
    icon: 'GitBranch',
    instructions: 'Start with central concept. Branch out with related ideas. Use colors and connections to show relationships.'
  },
  {
    id: 'analogy' as const,
    name: 'Analogy Thinking',
    description: 'Draw inspiration from how similar problems are solved in different contexts',
    icon: 'Lightbulb',
    instructions: 'How do other industries solve similar problems? What can we learn from nature, sports, or everyday life?'
  },
  {
    id: 'displacement' as const,
    name: 'Displacement',
    description: 'Challenge assumptions by imagining constraints or perspectives that shift thinking',
    icon: 'Shuffle',
    instructions: 'What if we had unlimited budget? No budget? What would a child suggest? A competitor? Someone from 100 years in the future?'
  }
]
