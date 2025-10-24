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
