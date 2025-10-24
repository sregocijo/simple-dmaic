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
        id: 'operational-definitions',
        text: 'Operational Definitions',
        description: 'Define exactly how each CTQ metric will be measured. Include: what counts, how to measure it, units of measure, and calculation method. This ensures everyone measures the same way.',
        required: true,
        placeholder: 'Response Time = Time from ticket creation to first agent response (hours, measured from system timestamp). Defect = Any response >2hrs or requiring rework. First Contact Resolution = % of tickets closed without reopening within 7 days...',
        multiline: true,
        aiPromptContext: 'Help create precise operational definitions for each CTQ metric identified in the Define phase. For each metric, specify: 1) Exactly what is being measured (clear definition), 2) How it will be measured (method and tool), 3) Unit of measure, 4) Calculation formula, 5) What counts and what doesn\'t (inclusion/exclusion criteria), 6) Who will measure it and how often. Operational definitions must be clear enough that any person would measure the same thing the same way.'
      },
      {
        id: 'data-collection-plan',
        text: 'Data Collection Plan',
        description: 'Document what data will be collected, from where, how often, by whom, and in what format. Include sampling strategy if full population data is not available.',
        required: true,
        placeholder: 'Response Time: Collected automatically from ticketing system, every ticket, exported daily to CSV | CSAT: Survey sent 24hrs post-resolution, 5-point scale, stored in CRM | Staffing Levels: Manual log by shift supervisor, hourly, Excel spreadsheet...',
        multiline: true,
        aiPromptContext: 'Help create a comprehensive Data Collection Plan. For each metric: 1) What data will be collected, 2) Data source (system, manual observation, survey), 3) Collection frequency (continuous, daily, weekly), 4) Who collects it, 5) Storage format and location, 6) Sampling strategy (if applicable: sample size, randomization method), 7) Start and end dates for baseline period. Create a table format showing: Metric | Source | Method | Frequency | Owner | Sample Size.'
      },
      {
        id: 'additional-kpis',
        text: 'Additional KPIs & Analytical Metrics',
        description: 'Calculate and track additional operational metrics: Cycle Efficiency = Total Value-Add Time / Total Lead Time | Average Lead Time = WIP / Completion Rate | TAKT Time = Available Work Time / Customer Demand | Little\'s Law: Inventory = Arrival Rate × Time in System | Total Cost = Fixed Cost + (Variable Cost × Units) | Expected Value = Σ(Probability × Cost) | Break-Even Point = Fixed Costs / (Revenue per unit - Variable Cost per unit) | Productivity = Outputs / Inputs',
        required: true,
        placeholder: 'Cycle Efficiency: 45min value-add / 4.2hr lead time = 17.9% | Avg Lead Time: 85 tickets WIP / 42 tickets/day = 2.02 days | TAKT Time: 8hrs available / 42 customer tickets = 11.4 min/ticket | Inventory (WIP): 42 tickets/day × 2.02 days = 85 tickets | Total Cost: $8,000 fixed + ($12/ticket × 800 tickets/mo) = $17,600/mo | BEP: $8,000 / ($25 - $12) = 615 tickets/month | Productivity: 800 tickets resolved / 2,500 FTE-hours = 0.32 tickets/hour...',
        multiline: true,
        aiPromptContext: 'Help calculate relevant operational and financial KPIs using these formulas: 1) Cycle Efficiency = Value-Add Time / Total Lead Time (identifies waste), 2) Average Lead Time = WIP / Completion Rate (Little\'s Law variant), 3) TAKT Time = Available Work Time / Customer Demand (required pace), 4) Little\'s Law: Inventory = Arrival Rate × Time in System (WIP calculation), 5) Total Cost = Fixed Costs + (Variable Cost per Unit × Volume), 6) Expected Value = Σ(Probability_i × Cost_i) for risk/decision analysis, 7) Break-Even Point = Fixed Costs / (Revenue per unit - Variable Cost per unit), 8) Productivity = Outputs / Inputs. Based on the process context, identify which metrics are most relevant and help the user gather the necessary data to calculate them.'
      },
      {
        id: 'waiting-line-theory',
        text: 'Waiting Line Theory (Queue Analysis)',
        description: 'For processes with queuing/waiting: Calculate arrival rate (λ), service rate (μ), and analyze queue performance. Formulas: Utilization ρ = λ/μ | Avg customers waiting C_W = λ²/[μ(μ-λ)] | Avg customers in system C_S = λ/(μ-λ) | Avg time waiting T_W = λ/[μ(μ-λ)] | Avg time in system T_S = 1/(μ-λ) | Probability of n arrivals P_n = [(λT)ⁿ/n!]e^(-λT)',
        required: false,
        placeholder: 'Arrival rate λ = 42 tickets/day = 1.75/hr | Service rate μ = 2.5 tickets/hr/agent (3 agents = 7.5/hr capacity) | Utilization ρ = 1.75/7.5 = 23.3% | Avg customers in system C_S = 1.75/(7.5-1.75) = 0.30 tickets | Avg time in system T_S = 1/(7.5-1.75) = 0.17 hrs (10.4 min) | During peak: λ = 6/hr, ρ = 80%, C_S = 3.0 tickets, T_S = 0.5 hrs (30 min)...',
        multiline: true,
        aiPromptContext: 'Help analyze waiting line/queue dynamics using queuing theory. Guide the user to: 1) Calculate arrival rate λ (customers or items arriving per time period), 2) Calculate service rate μ (items processed per time period per server), 3) Calculate utilization ρ = λ/μ (should be <1 for stable system), 4) Calculate average queue metrics: C_W (customers waiting), C_S (customers in system), T_W (time waiting), T_S (time in system), 5) Analyze by time period (peak vs average), 6) Identify when utilization exceeds 70-80% (queue builds rapidly), 7) Calculate probability of congestion. Use formulas: ρ = λ/μ, C_W = λ²/[μ(μ-λ)], C_S = λ/(μ-λ), T_W = λ/[μ(μ-λ)], T_S = 1/(μ-λ), P_n = [(λT)ⁿ/n!]e^(-λT).'
      },
      {
        id: 'measurement-system-analysis',
        text: 'Measurement System Analysis (MSA)',
        description: 'Validate that your measurement system is reliable and repeatable. Assess accuracy, precision, bias, stability, linearity. Conduct Gage R&R if using human inspection/measurement.',
        required: true,
        placeholder: 'Automated metrics (response time, ticket count): 100% accurate, validated against manual audit sample (n=50, 0% variance) | CSAT survey: 5-point scale, tested for inter-rater reliability, Cronbach\'s alpha = 0.89 | Manual classification (defect vs non-defect): Gage R&R with 3 appraisers × 10 samples × 3 trials, %GRR = 18% (acceptable)...',
        multiline: true,
        aiPromptContext: 'Help design and conduct Measurement System Analysis (MSA) to ensure data quality. Guide the user through: 1) Identify which measurements are automated vs manual (manual needs more validation), 2) For automated systems: validate against known standard or manual audit, 3) For manual measurements: conduct Gage R&R study (multiple appraisers measure same items multiple times), 4) Calculate %GRR (Gage Repeatability & Reproducibility): <10% excellent, <30% acceptable, >30% unacceptable, 5) Assess bias (accuracy - does it measure the true value?), 6) Assess stability (does it stay consistent over time?), 7) Assess linearity (accurate across the measurement range?). Document which measurements are trustworthy.'
      },
      {
        id: 'process-capability',
        text: 'Process Capability Analysis',
        description: 'Assess how well the current process meets specifications. Calculate Cp, Cpk, Pp, Ppk, sigma level, defect rate (DPMO). Compare process variation to customer requirements.',
        required: true,
        placeholder: 'Specification: Response time <2hrs (USL=2.0, no LSL) | Current process: mean=4.2hrs, σ=1.8hrs | Cp = N/A (one-sided spec) | Cpk = (USL-Mean)/(3σ) = (2.0-4.2)/(3×1.8) = -0.41 (highly incapable) | Defect rate: 89% exceed 2hr target | Sigma level: ~0.5σ | Goal: Reduce mean to 1.5hrs, σ to 0.3hrs → Cpk = 0.56, defect rate = 29% (interim), then to Cpk ≥ 1.33...',
        multiline: true,
        aiPromptContext: 'Help calculate process capability indices and interpret what they mean. Guide the user through: 1) Identify specification limits from CTQ requirements (USL = upper spec limit, LSL = lower spec limit), 2) Calculate process mean (X̄) and standard deviation (σ) from baseline data, 3) Calculate Cp = (USL - LSL) / 6σ (potential capability - centered process), 4) Calculate Cpk = min[(USL - X̄)/3σ, (X̄ - LSL)/3σ] (actual capability - accounts for centering), 5) Calculate defect rate / DPMO (defects per million opportunities), 6) Determine sigma level, 7) Interpret: Cpk <1.0 = incapable, 1.0-1.33 = barely capable, >1.33 = capable, >2.0 = excellent. Show current state and goal state capability.'
      }
    ]
  },
  analyze: {
    title: 'Analyze Phase',
    description: 'Identify root causes and validate them with data to understand what is driving the problem.',
    questions: [
      {
        id: 'detailed-process-map',
        text: 'Detailed Process Map',
        description: 'Create a comprehensive process map showing all steps, decision points, handoffs, and cycle times. Use swimlane diagrams to show who does what. Include both "as-is" current state details.',
        required: true,
        placeholder: 'Step 1: Customer submits ticket (5min) → Step 2: Ticket enters queue (avg wait 45min) → Step 3: Manager reviews and assigns (15min) → Step 4: Agent receives notification (10min delay) → Step 5: Agent opens ticket (5min) → Step 6: Agent researches (30min) → Step 7: Agent responds (15min) | Total: 2hr 5min (value-add: 65min, waste: 60min) | Handoffs: 3 (each adds 10-15min delay)...',
        multiline: true,
        supportsAttachments: true,
        aiPromptContext: 'Help create a detailed process map. Guide the user to document: 1) Every step in the process with sequence numbers, 2) Who performs each step (role/department), 3) Cycle time for each step, 4) Decision points and branching paths, 5) Handoffs between people/departments, 6) Waiting/queue time between steps, 7) Rework loops, 8) Value-add vs non-value-add classification for each step. Calculate total lead time, total value-add time, and identify the longest steps. Use format: Step # | Activity | Owner | Time | Value-add (Y/N) | Notes.'
      },
      {
        id: 'additional-mapping',
        text: 'Additional Process Mapping',
        description: 'Create specialized maps: Value Stream Map (material and information flow with timeline), Time-Value Map (plot time vs value-add), Service Blueprint (customer actions vs backstage processes), Spaghetti Diagram (physical movement and layout inefficiencies).',
        required: false,
        placeholder: 'Value Stream Map: Shows information flow delays - ticket sits in system 45min before routing decision, then 10min until agent notification. Timeline shows 60min total non-value-add time. | Time-Value Map: Only 52% of total time is value-add (customer-facing work). | Spaghetti Diagram: Agents walk avg 150ft per ticket between desk, printer, supervisor office, and filing - layout redesign could eliminate 80% of travel...',
        multiline: true,
        supportsAttachments: true,
        aiPromptContext: 'Help select and create the most relevant specialized process maps: 1) VALUE STREAM MAP: Shows material/information flow with timeline, identifies delays in information transfer, batch processing, inventory/WIP buildup. Include process boxes, data boxes (cycle time, uptime, defect rate), timeline showing value-add vs wait time. 2) TIME-VALUE MAP: Plot cumulative time (x-axis) vs value-add activities, creates visual of waste. 3) SERVICE BLUEPRINT: Separate customer-facing actions (frontstage) from internal processes (backstage), shows where customer experiences delays vs where internal delays occur. 4) SPAGHETTI DIAGRAM: Map physical movement and layout, identify travel waste, opportunities for cellular layout or co-location. Recommend which maps would be most valuable for this specific process.'
      },
      {
        id: 'root-cause-analysis',
        text: 'Root Cause Analysis',
        description: 'Use structured techniques: 5 Whys (ask "why" 5 times to get to root cause), Fishbone/Ishikawa Diagram (6M categories: Man, Machine, Method, Material, Measurement, Mother Nature/Environment), Fault Tree Analysis, or Cause & Effect Matrix.',
        required: true,
        placeholder: '5 Whys Example - Why are response times long? Because tickets sit in queue. Why? Manual routing is slow. Why? No automated system. Why? Previous implementation failed. Why? Lacked user input in design. ROOT CAUSE: Solutions designed without end-user involvement. | Fishbone: METHOD - no SOP for routing, unclear prioritization rules | MAN - insufficient training, high turnover | MACHINE - legacy system lacks auto-assign | MEASUREMENT - no real-time queue visibility...',
        multiline: true,
        supportsAttachments: true,
        aiPromptContext: 'Help conduct Root Cause Analysis using multiple techniques: 1) 5 WHYS: Start with the problem statement, ask "why does this happen?" five times, drilling deeper each time until reaching systemic root cause (not just symptoms). 2) FISHBONE DIAGRAM: Organize potential causes into 6M categories: Man/People (skills, training, turnover), Machine/Equipment (tools, technology, capacity), Method/Process (procedures, policies, workflow), Material/Information (inputs, quality, availability), Measurement (metrics, visibility, data quality), Mother Nature/Environment (layout, culture, external factors). 3) For each potential cause, ask: Is this a symptom or a root cause? How do we know? What data validates this? Prioritize causes to investigate based on impact and evidence.'
      },
      {
        id: 'brainstorming-affinity',
        text: 'Brainstorming & Affinity Diagram',
        description: 'Conduct brainstorming sessions to generate ideas and potential causes. Use Affinity Diagrams to group related ideas into themes. Include cross-functional team perspectives.',
        required: false,
        placeholder: 'Brainstorm session with CS team, IT, and Operations generated 47 potential causes. Affinity grouping revealed 6 major themes: 1) System/Technology Issues (15 ideas) - outdated platform, no mobile access, poor integration | 2) Process/Workflow Problems (12 ideas) - unclear routing rules, too many handoffs | 3) Communication Gaps (8 ideas) - lack of status updates, siloed departments | 4) Training/Knowledge (6 ideas) - high turnover, inconsistent onboarding | 5) Resource Constraints (4 ideas) - understaffing at peak times | 6) Measurement/Visibility (2 ideas) - no real-time dashboards. Top voted: auto-routing, staffing models, knowledge base...',
        multiline: true,
        supportsAttachments: true,
        aiPromptContext: 'Help facilitate brainstorming and affinity diagramming: 1) BRAINSTORMING RULES: Encourage wild ideas, defer judgment, build on others\' ideas, stay focused on topic, go for quantity. Use techniques: traditional verbal, brainwriting (silent), round-robin, sticky notes. 2) AFFINITY DIAGRAM PROCESS: Write each idea on separate note/card, spread them out, silently group related ideas together, discuss groupings and create category headers, identify themes. 3) Organize output by showing: Total ideas generated, number of themes/categories identified, ideas within each category, voting/prioritization results if applicable. 4) Look for patterns: Which categories have most ideas? Which align with data from Measure phase? Which have strongest team consensus?'
      },
      {
        id: 'seven-wastes-manufacturing',
        text: 'Seven Manufacturing Wastes Review',
        description: 'Identify the 7 classic lean wastes: 1) Overproduction (making more than needed), 2) Waiting (idle time), 3) Transporting (unnecessary movement of materials), 4) Over-processing (doing more than customer requires), 5) Unnecessary Inventory (excess WIP or stock), 6) Unnecessary Motion (extra steps/movement by people), 7) Defects/Errors (rework, corrections).',
        required: true,
        placeholder: '1) Overproduction: Generating standard reports no one reads (4hrs/week waste) | 2) Waiting: 45min avg queue time before routing, 10min between assignment and agent notification | 3) Transporting: N/A (digital process) | 4) Over-processing: Requesting redundant customer info already in CRM, excessive approval steps for routine requests | 5) Unnecessary Inventory: 85 tickets in WIP (backlog), should be <40 | 6) Unnecessary Motion: Agents switching between 4 different systems per ticket, excessive scrolling due to poor UI | 7) Defects: 22% of tickets require rework due to misrouting, 8% have data entry errors requiring correction...',
        multiline: true,
        supportsAttachments: true,
        aiPromptContext: 'Help identify the Seven Wastes of Lean in this process. For each waste category, guide the user to find specific examples: 1) OVERPRODUCTION: Creating output before it\'s needed, making more than customer wants, generating unused reports/documentation. 2) WAITING: Idle time waiting for information, approvals, people, systems; queue time; delays between steps. 3) TRANSPORTING: Moving materials, information, or work products unnecessarily; poor layout; multiple handoffs. 4) OVER-PROCESSING: Doing more work than customer values; redundant approvals; re-entering data; excessive documentation; gold-plating. 5) UNNECESSARY INVENTORY: Excess WIP, backlog, batching; work piling up faster than completed. 6) UNNECESSARY MOTION: Extra steps, searching, walking, switching systems; poor ergonomics; inefficient workspace. 7) DEFECTS/ERRORS: Rework, corrections, returns; quality issues; mistakes requiring fixing. For each waste found, estimate time/cost impact and identify root cause.'
      },
      {
        id: 'service-process-wastes',
        text: 'Service-Specific Wastes',
        description: 'Identify wastes unique to service processes: 1) Delay in Service Provision (customer waiting, slow response), 2) Incorrect Inventory (wrong information, out-of-date knowledge base), 3) Duplication (repeated data entry, redundant communications, doing work twice).',
        required: false,
        placeholder: '1) Delay in Service Provision: Customers wait avg 4.2hrs for first response (target <2hrs), 35% call back because "nothing happened" | 2) Incorrect Inventory: Knowledge base 18 months outdated, 40% of articles have wrong procedures, agents don\'t trust it and rely on tribal knowledge | 3) Duplication: Customer provides same info to bot, tier-1, and tier-2; ticket details re-entered into 3 systems; supervisor reviews work already checked by system...',
        multiline: true,
        supportsAttachments: true,
        aiPromptContext: 'Help identify service-specific wastes that are common in transactional and knowledge work: 1) DELAY IN SERVICE PROVISION: Customer-facing delays, slow response times, extended wait times, delayed follow-up, poor service level achievement. Measure: How long do customers wait? What\'s the gap from expectation? 2) INCORRECT INVENTORY: Wrong information in knowledge bases, outdated documentation, inaccurate customer data, poor data quality, information that can\'t be trusted. Impact: Leads to wrong decisions, rework, customer frustration. 3) DUPLICATION: Redundant data entry, same information requested multiple times, work done by multiple people unnecessarily, repeated communications saying the same thing, copying information between systems. For each waste: quantify frequency/impact, identify root cause, estimate time cost.'
      },
      {
        id: 'additional-wastes',
        text: 'Additional Wastes (8th Wastes)',
        description: 'Identify additional modern wastes: 1) Wasted Human Potential (underutilizing skills, creativity, improvement ideas), 2) Wasted Energy (inefficient equipment, unnecessary consumption), 3) Pollution/Environmental Waste (excess materials, disposables), 4) Wasted Space (inefficient layout, unused areas).',
        required: false,
        placeholder: '1) Wasted Human Potential: Senior agents doing routine work that junior staff could handle, no system for capturing improvement ideas (lost 12 suggestions last quarter), high-skill employees spending 60% time on low-value admin | 2) Wasted Energy: Servers running 24/7 for system used only 9-5, inefficient search queries consuming compute | 3) Pollution: N/A (digital service) | 4) Wasted Space: Meeting rooms booked but unused 30% of time, open office layout creates noise distractions reducing productivity...',
        multiline: true,
        supportsAttachments: true,
        aiPromptContext: 'Help identify modern "8th wastes" beyond traditional lean: 1) WASTED HUMAN POTENTIAL: Underutilized skills and talent, employees doing work below their capability level, not tapping creativity and improvement ideas, poor engagement, high turnover losing knowledge, micromanagement preventing ownership. This is often called the "8th waste" and can be the largest. 2) WASTED ENERGY: Inefficient systems consuming excess power/resources, equipment running when not needed, poor sustainability practices. 3) POLLUTION/ENVIRONMENTAL WASTE: Excess materials, disposables, environmental impact, waste that could be eliminated. 4) WASTED SPACE: Inefficient layouts, unused areas, poor space utilization, storage of obsolete materials. For each: identify specific examples, estimate impact, connect to business outcomes (turnover cost, utility costs, lease costs).'
      },
      {
        id: 'graphical-analysis',
        text: 'Graphical Analysis',
        description: 'Create visual data analysis: Pareto Charts (80/20 analysis), Histograms (distribution), Run Charts (trends over time), Scatter Plots (correlation), Box Plots (variation comparison), Control Charts (statistical stability).',
        required: true,
        placeholder: 'Pareto Chart: 80% of response time delays caused by 3 factors: Manual routing (45%), Peak hour understaffing (25%), System slowness (10%) | Histogram: Response times show bimodal distribution - 2hr avg during normal hours, 6hr avg during peak | Run Chart: Response time trending upward over 6 months, step-change when staffing was cut in March | Scatter Plot: Strong correlation (r=0.82) between WIP count and avg response time | Control Chart: Process out of control - 8 consecutive points above centerline, multiple points beyond 3-sigma...',
        multiline: true,
        supportsAttachments: true,
        aiPromptContext: 'Help select and create the most insightful graphical analysis: 1) PARETO CHART: Rank causes/categories from largest to smallest, plot bars and cumulative line, identify vital few (80% of impact from 20% of causes). Use for: defect types, delay causes, cost categories. 2) HISTOGRAM: Show distribution shape (normal, skewed, bimodal), identify spread and centering. Use for: cycle times, measurements, defect rates. 3) RUN CHART: Plot data over time, identify trends, shifts, cycles, patterns. Use for: tracking metrics over days/weeks/months. 4) SCATTER PLOT: Plot two variables to find correlation, identify relationships between factors. Calculate correlation coefficient. 5) BOX PLOT: Compare variation across categories, show median, quartiles, outliers. 6) CONTROL CHART: Assess statistical stability, identify special cause variation. Recommend which charts would best reveal insights for this data, and help interpret patterns found.'
      },
      {
        id: 'statistical-analysis',
        text: 'Statistical Analysis',
        description: 'Conduct formal statistical tests: Hypothesis Testing (t-tests, ANOVA), Golden Batch / Best vs Worst Comparison (compare top performers to bottom), Means Comparison (compare groups), Regression Analysis (predict outcomes), Chi-Square Tests (categorical relationships).',
        required: false,
        placeholder: 'Hypothesis Test: H0: Auto-routed tickets have same response time as manual. H1: Auto-routed is faster. t-test result: p<0.001, reject H0. Auto-routing is 1.8hrs faster (statistically significant). | Golden Batch: Top 10% of tickets (fastest resolution) shared common traits: Simple category, assigned to tenured agents, submitted during low-volume hours. Bottom 10%: Complex category, new agents, peak hours. Difference: 5.2hrs avg. | Regression: Response Time = 2.1 + 0.05(WIP) + 0.8(Complexity) + 1.2(Peak Hour) (R²=0.76, all coefficients significant p<0.05)...',
        multiline: true,
        supportsAttachments: true,
        aiPromptContext: 'Help design and interpret statistical analysis: 1) HYPOTHESIS TESTING: State null hypothesis (H0: no difference) and alternative (H1: there is a difference). Select appropriate test: t-test (compare 2 means), ANOVA (compare 3+ means), paired t-test (before/after), chi-square (categorical data). Report p-value and conclusion (reject or fail to reject H0 at α=0.05). 2) GOLDEN BATCH / BEST vs WORST: Compare best-performing instances to worst-performing. What do best have in common? What do worst share? Calculate the difference in performance. 3) MEANS COMPARISON: Compare average performance across groups (departments, shifts, product types). Use box plots and ANOVA. 4) REGRESSION ANALYSIS: Model relationship between Y (outcome) and X variables (predictors). Report R², coefficients, p-values. Use to predict and identify key drivers. Guide user on which tests are appropriate for their data type and research question.'
      },
      {
        id: 'modeling',
        text: 'Modeling & Simulation',
        description: 'Build models to test scenarios: Discrete Event Simulation (model process flow with variability), Queuing Models (calculate wait times under different scenarios), Capacity Models (determine resource requirements), Cost Models (financial impact analysis).',
        required: false,
        placeholder: 'Queuing Model: Current state with 3 agents, arrival rate 42/day, service rate 2.5/hr/agent → utilization 23%, avg wait 10min. Scenario 1: Reduce to 2 agents → utilization 35%, avg wait 18min (acceptable). Scenario 2: Peak hours (arrival 6/hr) → utilization 80%, avg wait 45min (unacceptable - need 4 agents during peak). | Cost Model: Status quo = $180K/yr labor. Option A (automation) = $50K implementation + $100K/yr labor = $150K/yr (payback 1.7 years). Option B (hire staff) = $240K/yr (no payback)...',
        multiline: true,
        supportsAttachments: true,
        aiPromptContext: 'Help build analytical models to predict future performance: 1) DISCRETE EVENT SIMULATION: Model process flow with realistic variability (arrival patterns, service times, breakdowns). Run 1000+ iterations to get distribution of outcomes. Use to test "what-if" scenarios before making changes. 2) QUEUING MODELS: Use queuing theory formulas from Measure phase. Model different staffing levels, arrival patterns, service rates. Calculate utilization, wait times, queue lengths for each scenario. Identify tipping points where queue becomes unstable. 3) CAPACITY MODELS: Calculate required resources (people, equipment) to meet demand at different service levels. Factor in variability and peak loads. 4) COST MODELS: Build financial analysis comparing options: capital costs, operating costs, savings, payback period, NPV/ROI if appropriate. Guide user on which modeling approach fits their analysis needs and help interpret results.'
      },
      {
        id: 'validated-root-causes',
        text: 'Validated Root Causes',
        description: 'Synthesize all analysis to identify which root causes have been proven through data. Prioritize causes by impact and feasibility of addressing.',
        required: true,
        placeholder: 'VALIDATED ROOT CAUSES (prioritized by impact): 1) Manual ticket routing process adds 1.8hrs avg delay (45% of problem) - proven via time study and Golden Batch analysis, statistical significance p<0.001. 2) Understaffing during peak hours (2-4pm) causes 80% utilization and 45min queue buildup (25% of problem) - proven via queuing analysis and run charts. 3) Legacy system slowness adds 15min per ticket (10% of problem) - proven via time study. 4) Inadequate training extends research time by 12min avg (8% of problem) - proven via best vs worst comparison. DEPRIORITIZED: Knowledge base quality (low correlation r=0.23 to response time, p=0.18 not significant)...',
        multiline: true,
        aiPromptContext: 'Help synthesize all Analyze phase work into a prioritized list of validated root causes. For each root cause: 1) State the specific root cause clearly, 2) Quantify the impact (time, cost, defects), 3) Cite the evidence/analysis that validates it (which tools/tests proved this?), 4) Show statistical significance where applicable (p-values, confidence levels), 5) Estimate what % of the overall problem this cause explains, 6) Note feasibility of addressing (can we control this? how hard to fix?). Prioritize using impact vs effort matrix. Distinguish between validated causes (strong data proof) vs suspected causes (logical but not proven) vs invalidated causes (data showed NOT significant). This becomes the foundation for Improve phase - we\'ll address the top validated causes first.'
      },
      {
        id: 'improvement-hypothesis',
        text: 'Improvement Hypothesis',
        description: 'Based on validated root causes, state your hypothesis for improvement. What specific changes do you believe will drive measurable improvement? What\'s the predicted impact?',
        required: true,
        placeholder: 'HYPOTHESIS: If we implement automated ticket routing using ML-based categorization AND adjust staffing model to add 1 agent during peak hours (2-4pm), THEN we will reduce average response time from 4.2 hours to 1.8 hours (57% improvement), reduce WIP from 85 to 40 tickets, and improve CSAT from 72% to 85%. PREDICTED IMPACT: Auto-routing eliminates 1.8hr delay (validated), peak staffing reduces queue from 45min to 10min (queuing model), combined effect = 2.4hr reduction. Cost: $50K implementation + $35K incremental labor = $85K. Benefit: $120K COPQ reduction + customer retention value. Payback: 8 months...',
        multiline: true,
        aiPromptContext: 'Help formulate a clear, testable improvement hypothesis based on the validated root causes. Use IF-THEN format: IF [specific changes to address root causes] THEN [predicted measurable outcomes]. Guide the user to: 1) Identify the top 2-3 root causes to address (from validated list), 2) Propose specific interventions for each root cause, 3) Predict quantitative impact using data/models from analysis (not guessing), 4) Show the logic/calculation of predicted improvement, 5) Estimate implementation cost/effort, 6) Calculate expected ROI/payback, 7) Identify assumptions and risks. The hypothesis should be specific enough to test in the Improve phase and falsifiable (we can prove it wrong if it doesn\'t work). This bridges Analyze to Improve phase.'
      }
    ]
  },
  improve: {
    title: 'Improve Phase',
    description: 'Develop, test, and implement solutions that address the validated root causes.',
    questions: [
      {
        id: 'team-draft-recommendations',
        text: 'Team Draft Recommendations',
        description: 'Brainstorm and capture all potential solutions from the team. Use BMAD tools to generate creative ideas. Include ideas from different perspectives: operations, technical, process, people, technology.',
        required: true,
        placeholder: 'PROCESS IMPROVEMENTS: Streamline routing workflow, eliminate handoffs, combine steps 3&4 | TECHNOLOGY: Implement auto-routing AI, upgrade ticketing system, mobile app | PEOPLE: Cross-train agents, adjust shift schedules, hire specialists | QUICK WINS: Update email templates, create routing decision tree, co-locate teams | INNOVATIVE: Chatbot for tier-1, predictive staffing model, customer self-service portal | Generated 23 ideas from team workshop using brainwriting and mind mapping...',
        multiline: true,
        aiPromptContext: 'Help facilitate team brainstorming to generate a comprehensive list of potential solutions. Guide the user to: 1) Review validated root causes from Analyze phase and generate solutions for each, 2) Organize ideas by category: Process changes, Technology solutions, People/training, Quick wins, Innovative/bold ideas, 3) Use BMAD techniques (brainwriting, mind mapping, analogy, displacement) to generate creative options, 4) Encourage quantity over quality at this stage - defer judgment, 5) Include both incremental improvements and transformational changes, 6) Consider: What would solve this completely? What\'s the cheapest option? What\'s the fastest? What would delight customers? Aim for 15-30 diverse ideas before narrowing down.'
      },
      {
        id: 'benefit-complexity-matrix',
        text: 'Benefit vs Complexity Assessment (Bubble Diagram)',
        description: 'Plot each recommendation on a 2x2 matrix: X-axis = Implementation Complexity/Effort (Low to High), Y-axis = Expected Benefit/Impact (Low to High). Bubble size can represent cost or risk. Prioritize high-benefit, low-complexity solutions.',
        required: true,
        placeholder: 'HIGH BENEFIT / LOW COMPLEXITY (Do First - Quick Wins): Auto-routing implementation (9/10 benefit, 3/10 complexity), Shift schedule optimization (7/10 benefit, 2/10 complexity) | HIGH BENEFIT / HIGH COMPLEXITY (Strategic Projects): Full system replacement (10/10 benefit, 9/10 complexity, high cost) - plan for Year 2 | LOW BENEFIT / LOW COMPLEXITY (Maybe): Update email templates (3/10 benefit, 1/10 complexity) - delegate to junior staff | LOW BENEFIT / HIGH COMPLEXITY (Avoid): Custom mobile app development (4/10 benefit, 8/10 complexity, $150K cost) - rejected...',
        multiline: true,
        supportsAttachments: true,
        aiPromptContext: 'Help create a Benefit vs Complexity matrix to prioritize solutions. Guide the user to: 1) For each idea from draft recommendations, rate Benefit/Impact on scale 1-10 (consider: impact on CTQs, COPQ reduction, customer satisfaction, alignment to goals), 2) Rate Implementation Complexity/Effort on scale 1-10 (consider: time, cost, technical difficulty, organizational change required, dependencies), 3) Optionally add bubble size for cost or risk level, 4) Plot in 2x2 matrix quadrants: HIGH BENEFIT/LOW COMPLEXITY = Quick Wins (do immediately), HIGH/HIGH = Strategic Projects (plan carefully, longer timeline), LOW/LOW = Nice to Have (defer or delegate), LOW/HIGH = Avoid (reject unless strategic reason), 5) Focus resources on Quick Wins first, then Strategic Projects. Identify top 3-5 solutions to pursue.'
      },
      {
        id: 'selection-criteria-assessment',
        text: 'Assessment Criteria & Weighted Scoring',
        description: 'Define selection criteria (e.g., ROI, implementation time, risk, customer impact, strategic alignment) and assign weights. Score each solution against criteria to calculate total weighted score.',
        required: false,
        placeholder: 'CRITERIA (weight): ROI (30%), Time to implement (20%), Customer impact (25%), Risk (15%), Strategic fit (10%) | Auto-routing: ROI=9×0.30 + Time=8×0.20 + Impact=9×0.25 + Risk=7×0.15 + Strategy=8×0.10 = 8.40 (HIGHEST) | New hires: ROI=4×0.30 + Time=9×0.20 + Impact=6×0.25 + Risk=8×0.15 + Strategy=5×0.10 = 5.95 | System replacement: ROI=9×0.30 + Time=2×0.20 + Impact=10×0.25 + Risk=3×0.15 + Strategy=9×0.10 = 6.85 (high benefit but low on time/risk)...',
        multiline: true,
        aiPromptContext: 'Help create a weighted scoring model for rigorous solution selection. Guide the user to: 1) Define 5-8 selection criteria important to this project (common: Financial ROI/NPV, Implementation time/speed, Customer/stakeholder impact, Technical feasibility, Risk level, Resource availability, Strategic alignment, Sustainability), 2) Assign weights to each criterion (must sum to 100%), 3) For each solution, score 1-10 on each criterion, 4) Calculate weighted score = Σ(score × weight), 5) Rank solutions by total score, 6) Discuss: Do the top-scored solutions align with gut feel? Any surprises? Should we adjust weights? This provides objective, defensible selection rationale for stakeholders.'
      },
      {
        id: 'paired-comparisons',
        text: 'Paired Comparisons Matrix',
        description: 'Compare each solution directly against every other solution in head-to-head matchups. For each pair, choose which is better overall. The solution that "wins" the most comparisons rises to the top.',
        required: false,
        placeholder: 'Comparing 5 solutions in paired matrix (10 comparisons): Auto-routing vs New Hires → Auto-routing wins | Auto-routing vs System Upgrade → Auto-routing wins | Auto-routing vs Training → Auto-routing wins | Auto-routing vs Schedule Change → Auto-routing wins | New Hires vs System Upgrade → System Upgrade wins | Training vs Schedule Change → Schedule Change wins | RESULTS: Auto-routing (4 wins) > Schedule change (3 wins) > System upgrade (2 wins) > Training (1 win) > New hires (0 wins). Confirms auto-routing as top priority...',
        multiline: true,
        aiPromptContext: 'Help conduct paired comparisons analysis to rank solutions. Guide the user through: 1) List top 5-8 solution candidates (more than 8 becomes unwieldy), 2) Create matrix with solutions on both axes, 3) Compare each pair: Which is better considering all factors? Mark the winner in each cell, 4) Count total wins for each solution, 5) Rank by win count (most wins = highest priority), 6) This method is useful when criteria are hard to quantify or when seeking team consensus - simpler than weighted scoring but still systematic. Note: With n solutions, you make n(n-1)/2 comparisons (e.g., 5 solutions = 10 comparisons, 8 solutions = 28 comparisons). Best for building consensus in group settings.'
      },
      {
        id: 'pugh-matrix',
        text: 'Pugh Matrix (Solution Screening)',
        description: 'Select one solution as the baseline/datum. Compare all other solutions against it on multiple criteria: Better (+1), Same (0), or Worse (-1). Sum the scores to identify the best alternative.',
        required: false,
        placeholder: 'BASELINE: Current manual process (datum) | CRITERIA: Cost, Speed, Quality, Customer Satisfaction, Ease of Implementation | Auto-routing vs Baseline: Cost(+1), Speed(+1), Quality(+1), CSAT(+1), Ease(0) = +4 | New Hires vs Baseline: Cost(-1), Speed(0), Quality(+1), CSAT(+1), Ease(+1) = +2 | System Replacement vs Baseline: Cost(-1), Speed(+1), Quality(+1), CSAT(+1), Ease(-1) = +1 | WINNER: Auto-routing (+4) shows most improvement vs current state across criteria...',
        multiline: true,
        aiPromptContext: 'Help create a Pugh Matrix for solution screening. Guide the user through: 1) Select a baseline/datum solution (often the current state or simplest option), 2) List 5-10 evaluation criteria (from CTQs, goals, stakeholder needs), 3) For each alternative solution, compare to baseline on each criterion: +1 if better than baseline, 0 if same, -1 if worse, 4) Sum the +/- scores for each alternative (positive sum = better than baseline, negative = worse), 5) Identify highest positive score = best alternative, 6) The Pugh Matrix is quick and intuitive, good for rapid screening of many options, less precise than weighted scoring but faster. Best used to narrow from 10+ options down to top 3-5, then use weighted scoring or paired comparisons for final selection.'
      },
      {
        id: 'primary-recommendations',
        text: 'Refine Primary Recommendations - First Pass',
        description: 'For top-ranked solutions, validate against project constraints: 1) Within project scope? 2) Anticipated to meet goal including constraints? 3) Addresses the CTQs identified in Define phase? 4) Review RCA - does this address all/most of the validated root causes?',
        required: true,
        placeholder: 'PRIMARY RECOMMENDATION: Implement ML-based auto-routing + peak hour staffing adjustment | SCOPE CHECK: ✓ Within scope - both are internal process changes, no external dependencies | GOAL CHECK: ✓ Predicted to reduce response time from 4.2hrs to 1.8hrs (goal: <2.0hrs), improve CSAT from 72% to 85% (goal: >85%), reduce COPQ by $85K (goal: $45K+) | CTQ CHECK: ✓ Addresses all 3 CTQs: Response time (primary), Resolution accuracy (auto-routing reduces mis-assignment), CSAT (faster response = happier customers) | RCA CHECK: ✓ Addresses top 2 root causes (70% of problem): Manual routing delay (1.8hr - SOLVED by automation), Peak hour understaffing (45min queue - SOLVED by staffing adjustment). Does NOT address system slowness (10% of problem) - acceptable tradeoff for Phase 1...',
        multiline: true,
        aiPromptContext: 'Help validate the primary recommendations against project requirements. Guide the user to check each top solution against four filters: 1) SCOPE: Is this within the project charter scope (in-scope boundaries)? Are there any out-of-scope elements that would require charter revision or escalation? 2) GOAL ACHIEVEMENT: Will this realistically achieve the SMART goals from Define phase? Do the predictions from Analyze phase models support this? What\'s the confidence level? Are constraints (budget, timeline, resources) satisfied? 3) CTQ ALIGNMENT: Does this improve the Critical to Quality metrics identified in Define? Map each CTQ to the solution - which are addressed, which aren\'t? Is that acceptable? 4) ROOT CAUSE COVERAGE: Review the validated root causes from Analyze phase. Does this solution address the top causes (especially those representing >50% of the problem)? Which causes are left unaddressed? If the solution fails any check, either refine it, select a different solution, or document the trade-off decision and get stakeholder approval.'
      },
      {
        id: 'lean-seven-wastes-review',
        text: 'Lean Pass - Seven Wastes Review on Updated Process',
        description: 'Review the proposed future state process against the 7 Wastes (Overproduction, Waiting, Transporting, Over-processing, Inventory, Motion, Defects). Have the improvements minimized existing wastes? Have new wastes been introduced?',
        required: true,
        placeholder: 'FUTURE STATE WASTE ANALYSIS: 1) Overproduction: ELIMINATED - auto-routing processes tickets just-in-time, no batching, unused reports removed | 2) Waiting: REDUCED 80% - routing delay eliminated (1.8hrs → 0min), queue time reduced with peak staffing (45min → 10min avg) | 3) Transporting: N/A | 4) Over-processing: REDUCED - redundant approval step removed, auto-population of customer data eliminates re-entry | 5) Inventory (WIP): REDUCED - WIP projected to drop from 85 to 35 tickets | 6) Motion: REDUCED - single-system interface eliminates switching between 4 systems | 7) Defects: REDUCED - mis-routing drops from 22% to <5% (ML accuracy 95%+) | NEW WASTES CREATED: Potential over-reliance on automation - if ML fails, no manual backup defined (MITIGATION: retain manual override, monitor ML accuracy daily, alert if <90%)...',
        multiline: true,
        aiPromptContext: 'Help conduct a Lean waste review on the proposed future state. Guide the user to: 1) For each of the 7 wastes identified in Analyze phase, assess the future state: Is this waste eliminated, reduced, or unchanged? By how much? 2) Check for NEW wastes introduced by the solution (common: automation creates new dependencies, technology adds complexity, process change adds confusion/training burden), 3) Compare Current State waste vs Future State waste side-by-side for each category, 4) Quantify waste reduction where possible (time saved, steps eliminated, errors reduced), 5) For any new wastes, identify mitigation strategies, 6) Calculate total waste reduction: if current state was X% waste, future state is Y% waste, improvement is X-Y percentage points. Goal: Future state should have significantly less total waste. If not, refine the solution.'
      },
      {
        id: 'error-proofing-review',
        text: 'Error-Proofing (Poka-Yoke) Review',
        description: 'Review the updated process for error-proofing opportunities. Can we prevent errors (forcing function), detect errors immediately (warning), or make errors impossible (elimination)? Hierarchy: Elimination > Prevention > Detection.',
        required: true,
        placeholder: 'ERROR-PROOFING ENHANCEMENTS: ELIMINATION: Mis-routing error eliminated by removing manual assignment step entirely (error rate 22% → 0% for that step) | PREVENTION (forcing functions): 1) System requires all mandatory fields before ticket submission (prevents incomplete data), 2) Dropdown menus replace free-text entry for categories (prevents typos/inconsistency), 3) Auto-assignment logic includes validation rules (only assign to available, qualified agents) | DETECTION (warnings): 1) Alert if ticket unassigned for >15min (catches automation failures), 2) Highlight tickets approaching SLA breach 30min in advance, 3) Flag if customer contacted >3 times in 24hrs (potential escalation) | MEASUREMENT: Error-proofing effectiveness tracked by: defect rate, near-miss catches, SLA compliance. Target: Reduce error-related rework from 22% to <5%...',
        multiline: true,
        aiPromptContext: 'Help identify error-proofing (poka-yoke) opportunities in the improved process. Guide the user through the hierarchy of error-proofing from best to worst: 1) ELIMINATION: Can we design out the possibility of error? (e.g., remove the step, automate it, make it impossible to do wrong), 2) PREVENTION: Can we force the correct action? (e.g., physical constraints, forcing functions, interlocks, go/no-go gauges, required fields, validation rules), 3) DETECTION: Can we catch the error immediately before it causes harm? (e.g., sensors, alarms, inspections, automated checks, warnings). For the updated process: Review each step where errors occurred in current state (from Analyze phase defects analysis), identify error-proofing methods for each, prioritize elimination first, classify each countermeasure by type, estimate error reduction impact. Goal: Reduce defect/error rates by 50-90% through design, not inspection.'
      },
      {
        id: '5s-visual-management',
        text: '5S and Visual Management Opportunities',
        description: 'Assess opportunities for 5S (Sort, Set in Order, Shine, Standardize, Sustain) and Visual Management (visual controls, status boards, signals). Is the workspace organized? Is process status visible? Are standards clear?',
        required: false,
        placeholder: '5S IMPLEMENTATION: SORT: Archive obsolete knowledge base articles (400 outdated removed, 200 kept), remove redundant tools/systems | SET IN ORDER: Reorganize ticket dashboard - prioritize by SLA urgency, color-code by type, arrange workspace to minimize switching | SHINE: Weekly cleanup of ticket backlog, monthly KB maintenance | STANDARDIZE: Create standard work documents, checklists, templates | SUSTAIN: Monthly 5S audit, team ownership of workspace | VISUAL MANAGEMENT: 1) Real-time dashboard showing queue depth, avg response time, SLA compliance (green/yellow/red), 2) Andon system - alerts when queue >threshold or SLA at risk, 3) Status board showing which agents available/busy/break, 4) Visual workflow board showing ticket progression through stages, 5) Standard work instructions posted at workstations with photos/diagrams. BENEFIT: Reduces time searching for information, makes problems visible immediately, sustains improvements...',
        multiline: true,
        aiPromptContext: 'Help identify 5S and Visual Management opportunities in the improved process. Guide through: 1) 5S ASSESSMENT: Sort (eliminate unnecessary items, data, tools, steps - what can we remove?), Set in Order (organize what remains for easy access - optimal layout, logical arrangement), Shine (create cleanliness/maintenance routines - data hygiene, system cleanup), Standardize (document the standards - SOPs, checklists, templates), Sustain (build habits and audits to maintain - how ensure long-term adherence?). 2) VISUAL MANAGEMENT: Identify where visibility would help: Make process status visible (dashboards, boards), Make standards visible (posted instructions, color-coding, labels), Make problems visible (andon lights, alerts, exception flags), Make performance visible (metric displays, trend charts). 3) For each opportunity, describe: What will be visible? To whom? What action should they take based on what they see? Visual management turns invisible information into obvious, actionable signals. Best for: process status, quality, safety, performance to target.'
      },
      {
        id: 'five-laws-of-lean',
        text: 'Five Laws of Lean Review',
        description: 'Validate the solution against the 5 Laws: 1) Law of Market - Customer needs prioritized, 2) Law of Flexibility - Process adapts to variation, 3) Law of Focus - Time traps minimized (80% delays from 20% activities), 4) Law of Velocity - WIP minimized, flow maximized, 5) Law of Complexity - Unnecessary complexity eliminated.',
        required: true,
        placeholder: 'FIVE LAWS OF LEAN ASSESSMENT: 1) LAW OF MARKET (Customer Focus): ✓ PASS - Solution directly addresses top customer pain point (response time) from VOC analysis, improves KANO basic need (response <2hrs), aligns with CTQ priorities | 2) LAW OF FLEXIBILITY: ✓ PASS - Auto-routing uses ML to adapt to changing ticket patterns, dynamic staffing model adjusts to demand variation, can handle 2x volume spike without degradation | 3) LAW OF FOCUS (Time Traps): ✓ PASS - Eliminates the primary time trap (manual routing = 45% of total delay), addresses peak-hour bottleneck (25% of delay). Pareto principle validated: fixing 2 root causes (20% of issues) solves 70% of problem | 4) LAW OF VELOCITY (Flow): ✓ PASS - WIP reduced from 85 to 35 tickets (59% reduction), lead time reduced from 4.2hrs to 1.8hrs, eliminates batching and wait states, one-piece flow for ticket processing | 5) LAW OF COMPLEXITY: ✓ PASS - Simplifies from 4 systems to 1 interface for agents, reduces process steps from 9 to 6, eliminates redundant approvals and handoffs. NEW COMPLEXITY: ML model adds technical complexity (MITIGATION: create monitoring dashboard, train 2 staff on model maintenance)...',
        multiline: true,
        aiPromptContext: 'Help validate the improved process against the Five Laws of Lean Manufacturing. Guide the user to assess: 1) LAW OF THE MARKET: Is customer value the top priority? Does solution deliver what customer needs (from VOC)? Are we solving their problem or our internal problem? Are CTQs improved? 2) LAW OF FLEXIBILITY: Can process handle variation in demand, product mix, or conditions? Is it adaptable vs rigid? Can it scale up/down? 3) LAW OF FOCUS: Have we identified and eliminated the vital few time traps? Are we addressing the 20% of activities causing 80% of delays (Pareto)? Did we focus on the biggest constraints? 4) LAW OF VELOCITY: Is WIP minimized? Is flow continuous vs batched? Is lead time compressed? Does work move smoothly without waiting? 5) LAW OF COMPLEXITY: Have we eliminated unnecessary complexity? Is solution as simple as possible (but no simpler)? Did we avoid over-engineering? For each law: Pass/Fail assessment, evidence/metrics supporting the assessment, any violations and how to address. All five laws should be satisfied for a lean solution.'
      },
      {
        id: 'change-management-plan',
        text: 'Change Management Plan (ADKAR)',
        description: 'Plan for the people side of change using ADKAR: Awareness (why change?), Desire (motivation to support), Knowledge (how to change), Ability (skills/capability), Reinforcement (sustaining change). Address resistance and build buy-in.',
        required: true,
        placeholder: 'ADKAR CHANGE PLAN: AWARENESS: All-hands meeting to present problem data (COPQ $120K, customer complaints), explain business case and urgency. Dashboard showing current performance gaps. Target: 100% of staff understand why change is needed. | DESIRE: 1-on-1s with resisters to understand concerns, involve team in solution design (already done - high buy-in from pilot participants), highlight WIIFM (agents: easier work, less stress; managers: better metrics, less firefighting; customers: faster service). Address fear of automation ("Will I lose my job?" → No, redeploying to complex cases). | KNOWLEDGE: 2-day training on new system: Day 1 overview and hands-on, Day 2 scenarios and practice, job aids and quick reference guides, recorded videos for reference. | ABILITY: 2-week buddy system (experienced + new user), coaching during go-live, reduced ticket load first week while learning, feedback loops to identify skill gaps. | REINFORCEMENT: Celebrate early wins (weekly metrics showing improvement), recognize adopters/champions, monthly refresher training, incorporate into performance reviews, tie to bonus metrics. Monitor adoption rate, provide additional support to laggards...',
        multiline: true,
        aiPromptContext: 'Help create a comprehensive Change Management plan using the ADKAR model. Guide the user through each element: 1) AWARENESS: How will you create awareness of why change is necessary? Who needs to know? What data/story will you share? Communication plan (all-hands, emails, meetings). Success = people can articulate the business case. 2) DESIRE: How will you build desire/motivation to support the change? Address WIIFM (What\'s In It For Me?) for each stakeholder group. How will you handle resistance? Identify resisters and engage them. Success = people want the change to succeed. 3) KNOWLEDGE: What training/education is needed? What do people need to know? Training plan (curriculum, delivery method, schedule). Documentation, job aids, FAQs. Success = people know how to change. 4) ABILITY: How will you build capability/skill? Practice, coaching, support during transition. Reduce other workload during learning curve. Success = people can demonstrate the new behaviors. 5) REINFORCEMENT: How will you sustain change? Recognition, rewards, accountability. Measure adoption. Celebrate wins. Make it stick. Success = change becomes "the way we work." For each element, define specific actions, owners, timeline, and success metrics.'
      },
      {
        id: 'risk-management-fmea',
        text: 'Risk Management - FMEA / HAZOP / MOC',
        description: 'Conduct Failure Mode Effects Analysis (FMEA): identify potential failure modes, effects, causes, and controls. Calculate RPN (Risk Priority Number = Severity × Occurrence × Detection). Also consider HAZOP (Hazard and Operability) for process safety and MOC (Management of Change) for significant changes.',
        required: true,
        placeholder: 'FMEA ANALYSIS: | Potential Failure: ML model misroutes tickets | Effect: Customer gets wrong agent, delay in resolution (Severity=7) | Cause: Insufficient training data or model drift (Occurrence=4) | Current Controls: Model testing pre-launch (Detection=5) | RPN = 7×4×5 = 140 (MODERATE) | Recommended Actions: 1) Monitor model accuracy daily, alert if <90%, 2) Retain manual override option, 3) Quarterly model retraining | NEW RPN = 7×2×3 = 42 (ACCEPTABLE) | Potential Failure: System downtime during deployment | Effect: No ticket processing, customer impact (Severity=8) | Cause: Technical issues during cutover (Occurrence=3) | Controls: Deployment plan with rollback (Detection=4) | RPN = 96 (MODERATE) | Actions: Deploy during low-traffic window, parallel run for 24hrs, rollback procedure tested | NEW RPN = 8×2×2 = 32 | HAZOP: No safety hazards identified (digital service) | MOC (Management of Change): Significant change to routing process - requires: updated SOPs, training completion sign-off, 30-day close monitoring, change approval from Ops Director (obtained)...',
        multiline: true,
        supportsAttachments: true,
        aiPromptContext: 'Help conduct risk analysis using FMEA (Failure Mode Effects Analysis) and related tools. Guide through: FMEA PROCESS: 1) For each step in new process or each component of solution, ask "What could go wrong?" (failure modes), 2) For each failure mode, identify: Effect (what happens if this fails? impact on customer/process), Severity (1-10, how bad is the effect?), Cause (why would this failure occur? root cause), Occurrence (1-10, how often will this cause happen?), Current Controls (what prevents/detects this today?), Detection (1-10, how likely to catch before customer impact? 10=won\'t detect), 3) Calculate RPN (Risk Priority Number) = Severity × Occurrence × Detection (max 1000), 4) Prioritize high RPNs (typically >100 or top 20%), 5) Develop actions to reduce Severity, Occurrence, or improve Detection, 6) Recalculate RPN after actions. HAZOP: For process changes involving safety/environmental concerns, conduct Hazard and Operability study (what hazards introduced?). MOC: For significant changes, complete Management of Change review (regulatory, safety, environmental, quality implications). Document all risks and mitigation plans.'
      },
      {
        id: 'environmental-safety-review',
        text: 'Environmental and Safety Review',
        description: 'Assess environmental and safety impacts of the proposed change. Does it introduce new hazards? Reduce waste/energy? Comply with regulations? Create ergonomic issues?',
        required: false,
        placeholder: 'ENVIRONMENTAL REVIEW: POSITIVE IMPACTS: Reduces paper usage by 80% (digital workflow eliminates printing), reduces energy consumption (streamlined process = less server time, faster resolution = less computer idle time), eliminates physical file storage (space reduction). NEGATIVE IMPACTS: Increased server load for ML model (MITIGATION: optimize model efficiency, use cloud scaling). NET: Positive environmental impact. | SAFETY REVIEW: ERGONOMIC: Reduced screen switching (4 systems → 1) reduces eye strain and repetitive motion, agents report less fatigue. No new physical hazards introduced (digital process). MENTAL HEALTH: Reduced stress from workload (WIP reduction, clearer priorities, less customer escalation). COMPLIANCE: Meets data privacy regulations (GDPR, CCPA) - ML model does not store PII, audit trail maintained...',
        multiline: true,
        aiPromptContext: 'Help assess environmental and safety implications of the change. Guide through: ENVIRONMENTAL REVIEW: 1) Waste reduction: Does change reduce physical waste, energy consumption, material use? Quantify if possible. 2) Pollution/emissions: Any new sources or reductions? 3) Resource efficiency: Better use of energy, water, materials? 4) Sustainability: Long-term environmental footprint? 5) Regulatory compliance: Environmental regulations (EPA, local laws). SAFETY REVIEW: 1) Physical safety: New hazards introduced (equipment, chemicals, ergonomics)? Safety risks reduced? 2) Ergonomics: Impact on repetitive motion, posture, eye strain, cognitive load? 3) Mental health: Stress levels, workload, job satisfaction impact? 4) Compliance: OSHA regulations, industry safety standards? For each area: Identify positive impacts, negative impacts, mitigation for negatives, compliance verification, net assessment. If operating in regulated industry (manufacturing, healthcare, food), ensure change doesn\'t violate permits or standards.'
      },
      {
        id: 'summary-final-recommendations',
        text: 'Summary of Final Recommendations',
        description: 'Synthesize all analysis into clear, concise final recommendations. What are you recommending? Why? What\'s the expected impact? What are the key risks and mitigations?',
        required: true,
        placeholder: 'FINAL RECOMMENDATIONS: IMPLEMENT the following two-part solution to address customer service response time delays: | RECOMMENDATION 1: Deploy ML-based automated ticket routing system | RATIONALE: Addresses primary root cause (manual routing delay = 45% of problem), validated through Analyze phase time studies and Golden Batch comparison, high benefit/low complexity on prioritization matrix, lowest risk per FMEA | EXPECTED IMPACT: Eliminate 1.8hrs avg routing delay, reduce mis-routing from 22% to <5%, improve first-contact resolution | RECOMMENDATION 2: Adjust staffing model to add 1 agent during peak hours (2-4pm Mon-Fri) | RATIONALE: Addresses secondary root cause (peak understaffing = 25% of problem), queuing model shows 80% reduction in queue time, quick to implement, low cost ($35K/yr) | EXPECTED IMPACT: Reduce peak queue time from 45min to 10min avg, improve service consistency | COMBINED IMPACT: Response time 4.2hrs → 1.8hrs (57% improvement, exceeds <2hr goal), CSAT 72% → 85%+ (meets goal), COPQ reduction $85K/yr (exceeds $45K goal), ROI 190% in Year 1 | KEY RISKS: 1) ML accuracy <95% (mitigation: daily monitoring, manual override), 2) Staff resistance to automation (mitigation: ADKAR change plan, involvement in design), 3) Implementation delays (mitigation: phased rollout, dedicated PM). APPROVED BY: Ops Director (Jane Smith), IT Director (Bob Jones), CS Manager (Sue Williams). TIMELINE: 90-day implementation starting [date]...',
        multiline: true,
        aiPromptContext: 'Help synthesize all Improve phase analysis into executive-ready recommendations. Structure as: 1) EXECUTIVE SUMMARY: In 2-3 sentences, what are you recommending and why? 2) RECOMMENDATIONS: List each specific recommendation (usually 1-3 primary), 3) For each recommendation provide: Rationale (why this solution? tie to root causes and analysis), Expected impact (quantified outcomes on CTQs and goals), Cost/effort (investment required), Timeline (how long to implement), 4) COMBINED IMPACT: Overall predicted results if all recommendations implemented, compare to project goals from Define phase, show ROI/payback, 5) KEY RISKS: Top 3-5 risks and mitigation plans (from FMEA), 6) DECISION: Are you recommending to proceed? Any conditions or prerequisites? 7) APPROVALS: Who has reviewed and approved? (stakeholders from Define phase), 8) NEXT STEPS: What happens after approval? This document should stand alone as the business case for executive decision-making.'
      },
      {
        id: 'improvement-trial-plan',
        text: 'Improvement Trial / Pilot Plan',
        description: 'Define how you will test the solution before full rollout. What will you pilot? What\'s the scope? How long? What metrics will you track? What are success criteria?',
        required: true,
        placeholder: 'PILOT PLAN: SCOPE: Email support channel only (40% of volume), 2-week duration, 50% of email tickets routed by ML (A/B test: 50% auto, 50% manual control group) | OBJECTIVES: 1) Validate ML routing accuracy >90%, 2) Confirm response time improvement >30%, 3) Identify user issues and training gaps, 4) Test system stability and performance | METRICS TRACKED (daily): Routing accuracy (% correct), response time (ML vs manual), CSAT (pilot vs control), system uptime, agent satisfaction survey, defect/error rate | SUCCESS CRITERIA: Routing accuracy >90%, Response time improvement >30% vs control, No major system issues, Agent satisfaction >7/10, CSAT maintained or improved | SAMPLE SIZE: ~500 tickets over 2 weeks (statistically significant per power analysis, 95% confidence, 80% power) | RISK MITIGATION: Manual override available 24/7, daily check-ins with pilot team, rollback plan if success criteria not met | PILOT TEAM: 5 senior agents (volunteers, high performers), 1 dedicated support from IT, project manager monitoring daily | GO/NO-GO DECISION: Day 14 review, require all success criteria met to proceed to full rollout, if 2+ criteria failed = pause and refine...',
        multiline: true,
        aiPromptContext: 'Help design a rigorous pilot/trial plan to test the solution before full implementation. Guide through: 1) PILOT SCOPE: What subset will you test? (one location, one product line, one shift, limited volume, time-boxed). Balance: large enough for meaningful data, small enough to limit risk. 2) DURATION: How long? (typically 2-4 weeks for process changes, longer for major system changes). Long enough to see results and variation, short enough to maintain momentum. 3) OBJECTIVES: What questions are you trying to answer? (Does it work? Is it better? What issues arise? Can people do it?) 4) METRICS: What will you measure? (same CTQs as full project, plus pilot-specific: user satisfaction, system stability, ease of use). Track pilot vs control group or pilot vs baseline. 5) SUCCESS CRITERIA: Define specific thresholds for go/no-go decision (e.g., >X% improvement, <Y defects, >Z satisfaction). 6) SAMPLE SIZE: Ensure statistical validity - enough data for confidence. 7) RISKS & MITIGATION: What could go wrong in pilot? Rollback plan? Support available? 8) TEAM: Who participates? (often volunteers, champions, or representative sample). 9) DECISION PROCESS: When and how do you decide to proceed, pause, or stop? Document all learnings.'
      },
      {
        id: 'communication-plan',
        text: 'Communication Plan',
        description: 'Define communication strategy: Who needs to be informed? What message? When? Through what channel? Who delivers it? Tailor message to each audience (executives, frontline staff, customers).',
        required: true,
        placeholder: 'COMMUNICATION PLAN: | AUDIENCE: Executive Leadership | MESSAGE: Business case, ROI, risk mitigation, decision needed | TIMING: Week -2 (before pilot), Week 2 (pilot results), Week 8 (pre-launch) | CHANNEL: Executive briefing deck, steering committee meeting | SENDER: Project Sponsor | FREQUENCY: Monthly updates | AUDIENCE: Frontline Agents (CS Reps) | MESSAGE: What\'s changing, why, what\'s in it for them, training schedule, support available | TIMING: Week -1 (announcement), Week 0 (training), Weekly during pilot, Week 6 (full rollout prep) | CHANNEL: Team meetings, email, Slack channel, training sessions | SENDER: CS Manager + Project Team | FREQUENCY: Weekly updates during transition | AUDIENCE: Customers | MESSAGE: Service improvements coming, what they can expect (faster response times) | TIMING: Week 8 (launch week) | CHANNEL: Email announcement, website banner, automated email signature | SENDER: Customer Success Team | FREQUENCY: One-time announcement + follow-up survey 30 days post-launch | AUDIENCE: IT Support Staff | MESSAGE: Technical implementation details, support procedures, escalation process | TIMING: Week -2 (technical brief), Week 0 (go-live support) | CHANNEL: Technical documentation, handoff meeting, on-call rotation | SENDER: IT Director | FREQUENCY: As needed during implementation | Key Messages: "We heard your feedback about slow response times. We\'re implementing AI-powered routing to get you answers faster while ensuring quality." | Feedback Mechanism: Anonymous survey, open office hours, Slack #project-feedback channel...',
        multiline: true,
        aiPromptContext: 'Help create a comprehensive communication plan. Guide the user to build a communication matrix: 1) IDENTIFY AUDIENCES: List all stakeholder groups (from Define phase stakeholder analysis): executives, middle management, frontline staff, customers, IT/support, vendors, etc. 2) For EACH AUDIENCE, define: MESSAGE - What do they need to know? Tailor message to their concerns and WIIFM (what\'s in it for me?). Executives care about ROI, staff care about "how does this affect my job?", customers care about "will service improve?" | TIMING - When should they hear it? Before/during/after changes? How much advance notice? | CHANNEL - How will you reach them? (email, meetings, town halls, posters, intranet, training sessions, newsletters). Match channel to audience preference and message complexity. | SENDER - Who should deliver the message? (right level of authority, trusted voice). Executives hear from executives, staff hear from direct managers. | FREQUENCY - One-time or ongoing? (launch announcement vs weekly updates vs monthly newsletters). 3) MESSAGE CONSISTENCY: Ensure core message is consistent across audiences (but tailored). 4) FEEDBACK MECHANISM: How will people ask questions or share concerns? (Q&A sessions, feedback forms, open door hours). 5) Create timeline/calendar showing all communications. Good change communication is frequent, transparent, two-way, and answers "why, what, when, how, WIIFM?"'
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
