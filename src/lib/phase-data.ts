import { PhaseData } from './types'

export const PHASE_DATA: Record<string, PhaseData> = {
  define: {
    title: 'Define Phase',
    description: 'Establish the foundation of your improvement project by clearly articulating the problem, stakeholders, and scope.',
    questions: [
      {
        id: 'initial-problem-statement',
        text: 'What is the initial problem statement?',
        description: 'Clearly describe the issue that needs improvement. Be specific about what is happening, where, when, and the impact. This is your starting hypothesis - it will be refined as you complete this phase.',
        required: true,
        placeholder: 'Our customer service response time has increased by 40% over the last quarter, leading to decreased satisfaction scores...',
        multiline: true,
        aiPromptContext: 'Help craft a clear, specific problem statement that follows the format: [Process/Area] is experiencing [specific issue] which results in [measurable impact]. Include who is affected, what is happening, where/when it occurs, and the business impact. Make it factual and data-driven.'
      },
      {
        id: 'copq-analysis',
        text: 'Cost of Poor Quality (COPQ) Analysis',
        description: 'Break down the financial impact across four categories: Prevention costs (avoiding defects), Appraisal costs (detecting defects), Internal Failure costs (defects found before customer), External Failure costs (defects reaching customer).',
        required: true,
        placeholder: 'Prevention: $X quality training, process documentation | Appraisal: $X inspection, testing | Internal Failure: $X rework, scrap, downtime | External Failure: $X returns, warranty, lost customers...',
        multiline: true,
        aiPromptContext: 'Help quantify or estimate the Cost of Poor Quality. Structure the response into four categories: 1) Prevention Costs (training, planning, process improvement activities), 2) Appraisal Costs (inspection, testing, audits), 3) Internal Failure Costs (rework, scrap, downtime before reaching customer), 4) External Failure Costs (returns, complaints, warranty work, lost business, reputation damage). If exact numbers are unknown, help estimate relative magnitudes and identify what should be measured.'
      },
      {
        id: 'voc-analysis',
        text: 'Voice of Customer (VOC) & KANO Analysis',
        description: 'Gather customer input through multiple channels: complaints, direct discussions, gemba walks, surveys, and "become the customer" exercises. Classify needs using KANO model: Basic (must-haves), Performance (more is better), Delighters (unexpected wow factors).',
        required: true,
        placeholder: 'Customer Complaints: "Response too slow, had to call multiple times" | Direct Discussions: Team wants better tracking | Surveys: 78% rate speed as critical | KANO: Basic needs = response within 24h, Performance = faster is better, Delighters = proactive updates...',
        multiline: true,
        aiPromptContext: 'Help structure Voice of Customer data collection and KANO analysis. Guide the user to: 1) List customer complaints and feedback themes, 2) Identify insights from direct contact (interviews, gemba walks, shadowing), 3) Note survey findings or indirect feedback, 4) Classify requirements using KANO: Basic Needs (threshold attributes customers expect), Performance Needs (more is better, linear satisfaction), Delighters (unexpected features that excite). Help prioritize which customer needs to focus on.'
      },
      {
        id: 'ctq-hoq',
        text: 'Critical to Quality (CTQ) & House of Quality',
        description: 'Translate customer needs into measurable CTQs. Use House of Quality to map customer requirements to technical specifications and identify improvement priorities.',
        required: true,
        placeholder: 'CTQs: Response time (<2hrs), Resolution accuracy (>95%), CSAT (>4.5/5) | House of Quality shows strongest correlation between "fast response" and "auto-routing implementation" (correlation: 9/10)...',
        multiline: true,
        aiPromptContext: 'Help identify Critical to Quality factors and create a House of Quality analysis. Guide the user to: 1) List 3-5 key CTQs that translate customer needs into measurable characteristics, 2) Define target specifications for each CTQ, 3) Map relationships between customer requirements and technical features/processes (strong/medium/weak), 4) Identify which technical solutions have the strongest correlation to customer satisfaction. Prioritize CTQs by customer importance and current performance gap.'
      },
      {
        id: 'devils-advocate',
        text: 'Devil\'s Advocate Challenge: "Why do we need this process at all?"',
        description: 'Challenge fundamental assumptions. Ask provocative questions: Could we eliminate this process entirely? What if we did nothing? Why does this problem exist in the first place? What would happen if we stopped doing this?',
        required: false,
        placeholder: 'If we eliminated manual ticket routing entirely and went 100% automated, we might... The problem exists because we never questioned the assumption that... If we did nothing, the cost would be... A radical alternative would be...',
        multiline: true,
        aiPromptContext: 'Help challenge fundamental assumptions about this process with provocative "devil\'s advocate" thinking. Guide the user to question: 1) Why does this process exist at all? Is it still necessary? 2) What if we eliminated it entirely - what would happen? 3) What assumptions are we making that might be wrong? 4) Could a completely different approach make this problem irrelevant? 5) What are we not questioning that we should be? Push for radical thinking and challenge the status quo to ensure we\'re solving the right problem.'
      },
      {
        id: 'sipoc',
        text: 'SIPOC Analysis',
        description: 'Map the high-level process: Suppliers (who provides inputs), Inputs (what goes into process), Process (5-7 high-level steps), Outputs (what process produces), Customers (who receives outputs).',
        required: true,
        placeholder: 'Suppliers: Customers, internal teams | Inputs: Support tickets, customer data | Process: Receive → Triage → Assign → Resolve → Verify → Close → Follow-up | Outputs: Resolved tickets, documentation | Customers: End users, account managers...',
        multiline: true,
        aiPromptContext: 'Help create a SIPOC (Suppliers, Inputs, Process, Outputs, Customers) diagram. Structure as: 1) Suppliers: Who provides inputs to this process? (internal/external), 2) Inputs: What materials, information, or resources enter the process?, 3) Process: List 5-7 high-level process steps from start to finish, 4) Outputs: What does the process produce? (products, services, information), 5) Customers: Who receives and uses the outputs? Keep it high-level - detailed process mapping comes later.'
      },
      {
        id: 'stakeholder-analysis',
        text: 'Stakeholder Analysis',
        description: 'Identify all stakeholders and analyze their: Interest level (high/low), Influence/Power (high/low), Support level (champion/supporter/neutral/resistant), Communication needs, and Key concerns.',
        required: true,
        placeholder: 'CS Manager: High interest, High power, Champion - needs weekly updates | End Users: High interest, Low power, Supportive - need change communication | IT: Medium interest, High power, Neutral - concerned about workload...',
        multiline: true,
        aiPromptContext: 'Help create a comprehensive stakeholder analysis. For each stakeholder or group, identify: 1) Role and relationship to project, 2) Interest Level (How much does this matter to them?), 3) Influence/Power (Can they help or block progress?), 4) Current stance (Champion, Supporter, Neutral, Resistant, Blocker), 5) Key concerns or motivations, 6) Communication strategy and frequency needed. Categorize into quadrants: High Power/High Interest (manage closely), High Power/Low Interest (keep satisfied), Low Power/High Interest (keep informed), Low Power/Low Interest (monitor).'
      },
      {
        id: 'refined-problem-statement',
        text: 'Refined Problem Statement',
        description: 'Now that you\'ve completed the analysis above, restate the problem with greater clarity and precision. What did you learn from COPQ, VOC, SIPOC, and stakeholder input that refines your understanding?',
        required: true,
        placeholder: 'Based on our analysis, the core problem is not just response time, but lack of intelligent ticket routing causing 45% of tickets to be assigned incorrectly, resulting in $120K annual COPQ and customer frustration (KANO Basic Need not met)...',
        multiline: true,
        aiPromptContext: 'Help synthesize all the Define phase analysis into a refined, precise problem statement. Draw insights from: COPQ analysis (what\'s the real cost?), VOC/KANO (what do customers actually need?), CTQ/House of Quality (what should we measure?), Devil\'s Advocate (are we solving the right problem?), SIPOC (where in the process is the issue?), Stakeholder Analysis (whose problem is this?). The refined statement should be more specific, data-driven, and focused on root issues rather than symptoms.'
      },
      {
        id: 'goal-statement',
        text: 'SMART Goal Statement',
        description: 'Define the measurable outcome you want to achieve. Use SMART criteria: Specific (what exactly), Measurable (quantified), Achievable (realistic), Relevant (aligns with business goals), Time-bound (clear deadline).',
        required: true,
        placeholder: 'Implement intelligent ticket routing to reduce average response time from 4.2 hours to 2.0 hours, improve first-contact resolution from 58% to 80%, and increase CSAT from 72% to 85% within 90 days, saving $45K annually...',
        multiline: true,
        aiPromptContext: 'Help craft a SMART goal statement based on the refined problem statement and CTQ analysis. Ensure it includes: Specific (exactly what will be improved), Measurable (baseline and target metrics with numbers), Achievable (realistic given constraints and timeline), Relevant (ties to business impact and customer needs from VOC), Time-bound (clear deadline and milestones). Include both process metrics (response time, defect rate) and outcome metrics (customer satisfaction, financial impact).'
      },
      {
        id: 'project-charter',
        text: 'Project Charter',
        description: 'Synthesize all Define phase work into a formal charter: Business case, Problem statement, Goal statement, Scope (in/out), Stakeholders & roles, Timeline, Resources, Success metrics, Deliverables.',
        required: true,
        placeholder: 'Business Case: $120K COPQ + customer churn risk | Problem: Manual routing causes delays... | Goal: Reduce response time to 2hrs... | Scope: In - Email/chat routing, Out - Phone/after-hours | Team: PM (Jane), Sponsor (Bob), CS Lead (Sue)... | Timeline: 90 days... | Resources: $15K budget, 2 FTE... | Success: <2hr response, >85% CSAT, $45K savings | Deliverables: Routing system, updated SOPs, training...',
        multiline: true,
        aiPromptContext: 'Help create a comprehensive Project Charter that serves as the formal artifact for the Define phase. Structure it with these sections: 1) Business Case & Background (why this matters, COPQ), 2) Problem Statement (refined version), 3) Goal Statement (SMART goals), 4) Scope (what\'s in/out), 5) Stakeholders & Team Roles, 6) Timeline & Milestones, 7) Resources & Budget, 8) Critical to Quality Metrics, 9) Success Criteria, 10) Risks & Assumptions, 11) Deliverables. This becomes the contract between the project team and sponsors.'
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
