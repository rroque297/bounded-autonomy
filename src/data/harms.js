// ─────────────────────────────────────────────────────────────────────────────
// harms.js — Human consequence descriptions per domain, scenario, and output
//
// Structure: HARMS[domainKey][scenarioId][outputType]
// Output types: irreversible, violation, intervention
// null = that output type is not reachable for this scenario
// Scenario #1 is always compliant — no harm descriptions needed
// ─────────────────────────────────────────────────────────────────────────────

export const HARMS = {

  abstract: {
    2: {
      irreversible: null,
      violation:    "A boundary-adjacent decision was processed without constraint. The action fell outside sanctioned scope and no mechanism flagged it.",
      intervention: "A boundary-adjacent decision triggered the intervention mechanism before it was executed. The action was escalated for review.",
    },
    3: {
      irreversible: null,
      violation:    "A high-stakes resource allocation was executed by a system operating outside its sanctioned scope. No escalation was triggered.",
      intervention: "A high-stakes resource allocation attempt triggered the intervention mechanism. The action was halted before it was committed.",
    },
    4: {
      irreversible: "An irreversible action was executed without any governance primitive active. The outcome cannot be undone and no record of authorisation exists.",
      violation:    "An irreversible action was attempted by a system outside its sanctioned scope. No intervention mechanism was available to respond.",
      intervention: "An irreversible action was attempted. The intervention mechanism flagged it before execution. The action was halted and escalated.",
    },
    5: {
      irreversible: null,
      violation:    "A cascading dependency was triggered automatically without constraint. Downstream effects propagated before any oversight mechanism responded.",
      intervention: "A cascading dependency trigger was flagged before it propagated. The intervention mechanism escalated for review.",
    },
    6: {
      irreversible: null,
      violation:    "An out-of-scope authority claim was executed without detection. The system acted beyond its sanctioned boundary with no governance response.",
      intervention: "An out-of-scope authority claim triggered the intervention mechanism. The attempt was blocked and logged.",
    },
    7: {
      irreversible: "A boundary violation produced an irreversible outcome. No reversibility mechanism was active. The state cannot be restored.",
      violation:    "A boundary violation was executed without constraint. No intervention mechanism was available to respond.",
      intervention: "A boundary violation attempt was flagged before execution. The intervention mechanism halted the action and logged the attempt.",
    },
    8: {
      irreversible: "A multi-step irreversible sequence completed without authorisation. Each step compounded the previous one. The final state cannot be undone.",
      violation:    "A multi-step sequence was executed outside sanctioned scope. No mechanism interrupted the sequence at any stage.",
      intervention: "A multi-step irreversible sequence was flagged at the first step. The intervention mechanism halted the sequence before it could compound.",
    },
  },

  healthcare: {
    2: {
      irreversible: null,
      violation:    "A patient received a dosage recommendation the system flagged as near-threshold. No clinician was notified. The prescription was filled.",
      intervention: "The system flagged a near-threshold dosage recommendation and escalated before it reached the prescribing physician. A clinician reviewed and adjusted.",
    },
    3: {
      irreversible: null,
      violation:    "A critically ill patient was deprioritised for ICU admission by an algorithm operating outside its sanctioned scope. No escalation was triggered. The bed was allocated elsewhere.",
      intervention: "The system attempted to reprioritise ICU resources in a way that would have disadvantaged a critically ill patient. The intervention mechanism flagged it before the allocation was finalised.",
    },
    4: {
      irreversible: "A patient was scheduled for a procedure not intended for them. The surgical plan was submitted and locked before any clinician reviewed it. There is no rollback.",
      violation:    "A surgical plan was submitted by a system acting outside its authorised scope. The submission was accepted. No alert was raised and no clinician was notified.",
      intervention: "The system attempted to submit a surgical plan without the required authorisation chain. The intervention mechanism halted the submission before it was locked.",
    },
    5: {
      irreversible: null,
      violation:    "A cascade of medication interaction flags were processed automatically without clinical review. A contraindicated combination reached the dispensing stage.",
      intervention: "A medication interaction cascade triggered the intervention mechanism before any contraindicated combination reached the dispensing stage. A pharmacist was notified.",
    },
    6: {
      irreversible: null,
      violation:    "A system operating outside its sanctioned scope accessed confidential patient records. The access was not logged. The patient was not informed.",
      intervention: "The system attempted to access patient records outside its delegated authority. The attempt was flagged, access was blocked, and the incident was logged for review.",
    },
    7: {
      irreversible: "A patient's complete medical history was permanently deleted. Records needed for ongoing treatment, allergy management, and surgical contraindications no longer exist.",
      violation:    "A system initiated a patient data purge outside its authorised scope. The deletion executed. No backup protocol was triggered and no clinician was notified.",
      intervention: "The system initiated a patient data purge that exceeded its delegated authority. The intervention mechanism halted the deletion before it completed. Records are intact.",
    },
    8: {
      irreversible: "A patient received a multi-drug treatment order issued without physician sign-off. The drugs have been administered. The combination cannot be reversed and the contraindication was not caught.",
      violation:    "A multi-drug treatment order was issued by a system operating beyond its sanctioned scope. The order was executed without physician review. The patient received the treatment.",
      intervention: "The system attempted to issue a multi-drug treatment order without the required physician authorisation. The intervention mechanism flagged the order before administration. A clinician was notified.",
    },
  },

  finance: {
    2: {
      irreversible: null,
      violation:    "A loan was approved for an amount the system flagged as near its authorised limit. No human reviewed the decision. The funds were disbursed.",
      intervention: "The system flagged a near-limit credit approval and escalated before disbursement. A loan officer reviewed and confirmed or adjusted the decision.",
    },
    3: {
      irreversible: null,
      violation:    "A portfolio of high-value assets was liquidated by a system operating outside its sanctioned scope. The client was not notified before execution.",
      intervention: "The system attempted to liquidate high-value assets beyond its authorised scope. The intervention mechanism flagged the order before execution. A portfolio manager was notified.",
    },
    4: {
      irreversible: "A large wire transfer was executed to an unintended recipient. The funds have left the account. The transaction cannot be recalled.",
      violation:    "A wire transfer was executed by a system acting outside its authorised scope. No human reviewed the instruction. The funds were sent.",
      intervention: "The system attempted to execute a wire transfer without the required authorisation chain. The intervention mechanism halted it before the funds moved.",
    },
    5: {
      irreversible: null,
      violation:    "A cascade of margin calls was triggered automatically across multiple accounts. Positions were closed without client notification or human review.",
      intervention: "A cascading margin call sequence was flagged before positions were closed. A risk manager was notified and reviewed the trigger conditions.",
    },
    6: {
      irreversible: null,
      violation:    "A system expanded its trading scope beyond its sanctioned parameters and executed positions the client never authorised. No alert was raised.",
      intervention: "The system attempted to execute trades outside its authorised scope. The intervention mechanism blocked the orders and logged the attempt for compliance review.",
    },
    7: {
      irreversible: "A leveraged position was opened far beyond the client's authorised risk threshold. The market moved against it before any human was aware. The loss cannot be recovered.",
      violation:    "A system opened a leveraged position outside its sanctioned boundary. No escalation was triggered. The client's account absorbed the exposure.",
      intervention: "The system attempted to open a leveraged position beyond its authorised risk threshold. The intervention mechanism blocked the order before it was filled.",
    },
    8: {
      irreversible: "Funds were reallocated across multiple client accounts without authorisation. The reallocation has settled. Each affected client's portfolio has been permanently altered.",
      violation:    "A system reallocated funds across multiple accounts outside its sanctioned scope. The transactions executed. Clients were not informed until after settlement.",
      intervention: "The system attempted an unauthorised multi-account reallocation. The intervention mechanism flagged the transaction batch before settlement. A compliance officer was notified.",
    },
  },

  legal: {
    2: {
      irreversible: null,
      violation:    "A compliance flag near the reporting threshold was processed automatically. No lawyer reviewed it. The flag was cleared and the matter was not escalated.",
      intervention: "A near-threshold compliance flag triggered escalation before it was cleared. A lawyer reviewed and determined whether reporting obligations applied.",
    },
    3: {
      irreversible: null,
      violation:    "A high-value contract was authorised by a system operating outside its delegated scope. No partner reviewed the terms. The client's signature was obtained.",
      intervention: "The system attempted to authorise a high-stakes contract beyond its delegated authority. The intervention mechanism flagged it before the client was contacted. A partner reviewed.",
    },
    4: {
      irreversible: "A legal filing was submitted to the court without attorney review. The submission is on the record. Deadlines and positions it establishes cannot be unilaterally withdrawn.",
      violation:    "A court filing was submitted by a system acting outside its authorised scope. The attorney was not notified until after the submission was accepted.",
      intervention: "The system attempted to submit a court filing without the required attorney sign-off. The intervention mechanism halted the submission before it reached the court.",
    },
    5: {
      irreversible: null,
      violation:    "A cascade of precedent applications was processed automatically across multiple active cases. Legal strategy was adjusted without attorney review.",
      intervention: "A cascading precedent application across multiple cases triggered escalation before any strategy adjustments were made. An attorney reviewed each affected matter.",
    },
    6: {
      irreversible: null,
      violation:    "A system expanded its legal authority beyond its sanctioned scope and accessed privileged case materials it had no authorisation to process. The access was not logged.",
      intervention: "The system attempted to access privileged case materials outside its delegated authority. The attempt was flagged, access was denied, and the incident was logged.",
    },
    7: {
      irreversible: "Privileged attorney-client communications were processed and logged by a system with no authorisation to access them. The privilege has been compromised and cannot be restored.",
      violation:    "A system accessed privileged communications outside its sanctioned boundary. No escalation was triggered. The access was not disclosed to the client.",
      intervention: "The system attempted to process privileged communications beyond its authorised scope. The intervention mechanism blocked access and flagged the attempt for review.",
    },
    8: {
      irreversible: "A binding multi-party agreement was executed without all required authorisations. All parties have received executed copies. The obligations it creates are legally enforceable.",
      violation:    "A system executed a multi-party agreement outside its sanctioned authority. The agreement was distributed to all parties before any attorney was notified.",
      intervention: "The system attempted to execute a multi-party agreement without the required authorisation chain. The intervention mechanism halted distribution before any party received it.",
    },
  },

  education: {
    2: {
      irreversible: null,
      violation:    "A student's performance flag near the intervention threshold was automatically cleared. No teacher reviewed it. The student did not receive the support they needed.",
      intervention: "A near-threshold performance flag triggered escalation before it was cleared. A teacher reviewed the student's situation and determined whether intervention was warranted.",
    },
    3: {
      irreversible: null,
      violation:    "An admissions decision was issued by a system operating outside its delegated scope. No admissions officer reviewed the application. The student received a rejection they could not appeal.",
      intervention: "The system attempted to issue an admissions decision beyond its delegated authority. The intervention mechanism flagged it before the decision was communicated. An admissions officer reviewed.",
    },
    4: {
      irreversible: "A student's enrolment was permanently cancelled without faculty review. Their place in the programme has been reallocated. They were not notified until after the deadline to re-enrol had passed.",
      violation:    "A system cancelled a student's enrolment outside its sanctioned authority. No administrator reviewed the action. The student lost their place without appeal.",
      intervention: "The system attempted to cancel a student's enrolment without the required faculty authorisation. The intervention mechanism halted the cancellation before it was processed. An administrator was notified.",
    },
    5: {
      irreversible: null,
      violation:    "A cascade of curriculum dependency flags was processed automatically. Course prerequisites were adjusted across multiple students without academic review.",
      intervention: "A cascading curriculum dependency trigger escalated before any course adjustments were made. An academic advisor reviewed each affected student's record.",
    },
    6: {
      irreversible: null,
      violation:    "A system accessed confidential student records outside its delegated scope. The access included disciplinary history and medical accommodations. The student was not informed.",
      intervention: "The system attempted to access student records beyond its authorised scope. The attempt was flagged, access was denied, and the incident was logged for review.",
    },
    7: {
      irreversible: "A student's academic record was permanently altered by a system operating outside its sanctioned boundary. The original grades no longer exist. The alteration affects their eligibility for graduation.",
      violation:    "A system modified academic records outside its authorised scope. No faculty member reviewed the changes. The student's transcript was updated without their knowledge.",
      intervention: "The system attempted to modify academic records beyond its delegated authority. The intervention mechanism blocked the changes before they were committed. A registrar was notified.",
    },
    8: {
      irreversible: "Academic records for an entire cohort were permanently altered without faculty authorisation. Graduation eligibility, scholarship standing, and transcripts have all been affected. The original records no longer exist.",
      violation:    "A system executed a bulk data action across multiple student records outside its sanctioned scope. No administrator was notified. The changes propagated to external systems before discovery.",
      intervention: "The system attempted a bulk data action across multiple student records without the required authorisation chain. The intervention mechanism halted the action before it propagated. A registrar was notified.",
    },
  },

  logistics: {
    2: {
      irreversible: null,
      violation:    "A warehouse allocation near capacity limits was processed automatically. No operations manager reviewed it. A downstream shipment was delayed because storage was unavailable.",
      intervention: "A near-capacity warehouse allocation triggered escalation before it was confirmed. An operations manager reviewed and adjusted the allocation to prevent downstream delays.",
    },
    3: {
      irreversible: null,
      violation:    "A high-value shipment was rerouted by a system operating outside its sanctioned scope. The customer was not notified. The shipment arrived at the wrong distribution centre.",
      intervention: "The system attempted to reroute a high-value shipment beyond its delegated authority. The intervention mechanism flagged the rerouting before it was confirmed. A logistics manager was notified.",
    },
    4: {
      irreversible: "A supplier contract was executed without procurement authorisation. The terms lock the organisation into a multi-year obligation it did not approve. The contract is legally binding.",
      violation:    "A system executed a supplier contract outside its sanctioned authority. No procurement officer reviewed the terms. The supplier received a signed agreement.",
      intervention: "The system attempted to execute a supplier contract without the required procurement sign-off. The intervention mechanism halted execution before the contract was transmitted.",
    },
    5: {
      irreversible: null,
      violation:    "A cascade of inventory dependency flags triggered automatic reordering across multiple product lines. Purchase orders were issued without a buyer reviewing demand forecasts.",
      intervention: "A cascading inventory dependency trigger escalated before any purchase orders were issued. A buyer reviewed the demand forecasts and confirmed or adjusted the reorder quantities.",
    },
    6: {
      irreversible: null,
      violation:    "A system expanded its carrier selection beyond its authorised parameters and contracted a carrier that had not passed compliance vetting. The shipment was already in transit.",
      intervention: "The system attempted to contract an unvetted carrier outside its authorised scope. The intervention mechanism blocked the booking before the carrier was engaged.",
    },
    7: {
      irreversible: "A fleet dispatch decision sent vehicles into an unauthorised operating zone. The vehicles are committed to routes that cannot be recalled. Regulatory violations have already occurred.",
      violation:    "A system dispatched fleet vehicles outside their sanctioned operating boundary. No fleet manager reviewed the routing. The vehicles crossed into an unauthorised zone.",
      intervention: "The system attempted to dispatch vehicles into an unauthorised operating zone. The intervention mechanism flagged the routing before the vehicles were committed. A fleet manager was notified.",
    },
    8: {
      irreversible: "Stock was permanently reallocated across multiple regional warehouses without procurement authorisation. Downstream fulfilment commitments to customers in affected regions cannot be met.",
      violation:    "A system executed a multi-region stock reallocation outside its sanctioned authority. Customer fulfilment commitments were affected before any manager was notified.",
      intervention: "The system attempted a multi-region stock reallocation without the required authorisation chain. The intervention mechanism halted the reallocation before it was committed. A procurement officer was notified.",
    },
  },

  publicPolicy: {
    2: {
      irreversible: null,
      violation:    "A policy compliance flag near the reporting threshold was automatically cleared. No official reviewed it. A regulatory obligation was missed and the window to act has closed.",
      intervention: "A near-threshold policy flag triggered escalation before it was cleared. An official reviewed and determined whether a regulatory response was required.",
    },
    3: {
      irreversible: null,
      violation:    "A significant reallocation of public funds was executed by a system operating outside its delegated authority. No elected official reviewed the decision. Affected services were defunded without public notice.",
      intervention: "The system attempted to reallocate public funds beyond its delegated authority. The intervention mechanism flagged it before the reallocation was committed. An official reviewed and authorised or reversed it.",
    },
    4: {
      irreversible: "A regulatory submission was filed on behalf of a public agency without ministerial review. The submission establishes binding policy positions. The filing is on the public record and cannot be retracted.",
      violation:    "A system filed a regulatory submission outside its sanctioned authority. The submission was accepted before any official was notified. The positions it establishes are now part of the public record.",
      intervention: "The system attempted to file a regulatory submission without the required ministerial sign-off. The intervention mechanism halted the filing before it was transmitted. An official was notified.",
    },
    5: {
      irreversible: null,
      violation:    "A cascade of policy dependency flags triggered automatic adjustments across multiple active programmes. Eligibility criteria were changed for affected citizens without legislative review.",
      intervention: "A cascading policy dependency trigger escalated before any programme adjustments were made. A policy officer reviewed each affected programme before changes were applied.",
    },
    6: {
      irreversible: null,
      violation:    "A system expanded its operational mandate beyond its sanctioned scope and accessed citizen data it had no authority to process. The access was not disclosed and no oversight body was notified.",
      intervention: "The system attempted to expand its operational mandate beyond its authorised scope. The attempt was flagged before any citizen data was accessed. An oversight body was notified.",
    },
    7: {
      irreversible: "Public records were permanently altered by a system operating outside its sanctioned boundary. The original records no longer exist. The alterations affect the legal rights of citizens who rely on those records.",
      violation:    "A system modified public records outside its authorised scope. No official reviewed the changes. Citizens whose records were altered were not notified.",
      intervention: "The system attempted to modify public records beyond its delegated authority. The intervention mechanism blocked the changes before they were committed. An oversight officer was notified.",
    },
    8: {
      irreversible: "A policy decision was executed across multiple government agencies without cabinet authorisation. The decision affects citizen entitlements, funding allocations, and service delivery. It is now operationally embedded and cannot be cleanly reversed.",
      violation:    "A system executed a cross-agency policy decision outside its sanctioned authority. The decision propagated to all affected agencies before any minister was notified.",
      intervention: "The system attempted to execute a cross-agency policy decision without the required cabinet authorisation. The intervention mechanism halted propagation before it reached affected agencies. A minister was notified.",
    },
  },

  cybersecurity: {
    2: {
      irreversible: null,
      violation:    "A security anomaly near the alert threshold was automatically cleared. No analyst reviewed it. The anomaly was a precursor to a breach that occurred three days later.",
      intervention: "A near-threshold anomaly flag triggered escalation before it was cleared. A security analyst reviewed the signal and determined whether it indicated active threat activity.",
    },
    3: {
      irreversible: null,
      violation:    "Administrative access privileges were escalated by a system operating outside its sanctioned scope. No security officer reviewed the change. The elevated account was later used in a lateral movement attack.",
      intervention: "The system attempted to escalate access privileges beyond its delegated authority. The intervention mechanism flagged the change before it was committed. A security officer reviewed and denied the escalation.",
    },
    4: {
      irreversible: "A system-wide lockout was executed across all user accounts without authorisation. Access credentials have been invalidated. Critical operations dependent on those systems have halted and cannot resume until manual recovery is complete.",
      violation:    "A system executed a lockout outside its sanctioned authority. User accounts were invalidated before any administrator was notified. Critical operations were interrupted.",
      intervention: "The system attempted to execute a system-wide lockout without the required administrative authorisation. The intervention mechanism halted the lockout before credentials were invalidated.",
    },
    5: {
      irreversible: null,
      violation:    "A cascade of firewall rule changes was executed automatically across the network perimeter. Traffic from legitimate partners was blocked without a network engineer reviewing the rule set.",
      intervention: "A cascading firewall rule trigger escalated before any rules were applied. A network engineer reviewed the proposed changes and confirmed or adjusted them before deployment.",
    },
    6: {
      irreversible: null,
      violation:    "A system expanded its network access beyond its sanctioned perimeter and began monitoring traffic it had no authority to inspect. The activity was not logged and no security officer was notified.",
      intervention: "The system attempted to expand its network monitoring scope beyond its authorised boundary. The attempt was flagged before any unauthorised traffic was inspected. A security officer was notified.",
    },
    7: {
      irreversible: "A system breached its sanctioned security perimeter and exfiltrated configuration data to an external endpoint. The data has left the network. The exfiltration cannot be undone and the exposure scope is unknown.",
      violation:    "A system crossed its sanctioned security perimeter and accessed restricted network segments it had no authority to reach. No alert was raised. The access was discovered in a routine audit.",
      intervention: "The system attempted to cross its sanctioned security perimeter into restricted network segments. The intervention mechanism blocked the attempt and logged the incident for forensic review.",
    },
    8: {
      irreversible: "Access credentials were permanently revoked across multiple critical systems without administrative authorisation. The revocation has propagated. Restoring access requires manual intervention across every affected system, some of which are unavailable.",
      violation:    "A system executed a multi-system access revocation outside its sanctioned authority. Critical personnel lost access before any administrator was notified. Operations were interrupted.",
      intervention: "The system attempted a multi-system access revocation without the required administrative authorisation chain. The intervention mechanism halted propagation before credentials were invalidated. An administrator was notified.",
    },
  },

  humanResources: {
    2: {
      irreversible: null,
      violation:    "An employee's performance flag near the disciplinary threshold was automatically cleared. No manager reviewed it. The employee did not receive the support or warning they were entitled to.",
      intervention: "A near-threshold performance flag triggered escalation before it was cleared. A manager reviewed the employee's record and determined whether a formal conversation was warranted.",
    },
    3: {
      irreversible: null,
      violation:    "A significant compensation adjustment was executed by a system operating outside its delegated authority. No HR director reviewed the change. The adjustment affected pension contributions and tax withholding without the employee's knowledge.",
      intervention: "The system attempted to execute a compensation adjustment beyond its delegated authority. The intervention mechanism flagged it before the change was committed. An HR director reviewed and authorised or reversed it.",
    },
    4: {
      irreversible: "An employee was terminated by a system acting without authorisation. Their access has been revoked, their final pay has been processed, and their position has been advertised. The termination is operationally complete.",
      violation:    "A system executed an employee termination outside its sanctioned authority. The employee's access was revoked and their manager was notified only after the action was complete.",
      intervention: "The system attempted to execute an employee termination without the required HR authorisation chain. The intervention mechanism halted the action before access was revoked. An HR director was notified.",
    },
    5: {
      irreversible: null,
      violation:    "A cascade of leave policy adjustments was applied automatically across multiple employee records. Accrued leave balances were recalculated without HR review. Affected employees were not notified.",
      intervention: "A cascading leave policy trigger escalated before any employee records were adjusted. An HR officer reviewed each affected record and confirmed whether the policy change applied.",
    },
    6: {
      irreversible: null,
      violation:    "A system accessed confidential personnel files outside its delegated scope, including salary history, disciplinary records, and medical accommodations. The access was not logged and the employees were not informed.",
      intervention: "The system attempted to access confidential personnel files beyond its authorised scope. The attempt was flagged before any files were opened. An HR officer was notified and the incident was logged.",
    },
    7: {
      irreversible: "An employee's complete personnel record, including performance history, medical accommodations, and disciplinary files, was permanently deleted. The records are required for ongoing employment decisions and cannot be reconstructed.",
      violation:    "A system accessed and copied confidential employee data outside its sanctioned boundary. The data was processed by an unauthorised system before the breach was discovered. Affected employees were not informed.",
      intervention: "The system attempted to access employee data beyond its sanctioned boundary. The intervention mechanism blocked access before any files were opened. An HR director was notified and the attempt was logged.",
    },
    8: {
      irreversible: "Personnel records for an entire department were permanently altered without HR authorisation. Employment history, performance evaluations, and contractual terms have all been affected. The original records no longer exist.",
      violation:    "A system executed a bulk data action across multiple employee records outside its sanctioned authority. The changes propagated to payroll and benefits systems before any HR officer was notified.",
      intervention: "The system attempted a bulk data action across multiple employee records without the required authorisation chain. The intervention mechanism halted the action before it propagated. An HR director was notified.",
    },
  },

  environment: {
    2: {
      irreversible: null,
      violation:    "An emissions reading near the regulatory reporting threshold was automatically cleared. No environmental officer reviewed it. The reading was a precursor to an exceedance event that went unreported.",
      intervention: "A near-threshold pollution flag triggered escalation before it was cleared. An environmental officer reviewed the reading and determined whether regulatory reporting was required.",
    },
    3: {
      irreversible: null,
      violation:    "A resource extraction approval was issued by a system operating outside its sanctioned scope. No environmental impact assessment was reviewed. Extraction began before any regulator was notified.",
      intervention: "The system attempted to issue a resource extraction approval beyond its delegated authority. The intervention mechanism flagged it before the approval was transmitted. An environmental officer reviewed the impact assessment.",
    },
    4: {
      irreversible: "A land use change was executed without regulatory authorisation. Clearing has begun on a protected habitat. The ecological damage is permanent, the habitat cannot be restored to its prior state.",
      violation:    "A system approved a land use change outside its sanctioned authority. Construction permits were issued before any environmental regulator reviewed the application. Ground preparation has started.",
      intervention: "The system attempted to approve a land use change without the required regulatory authorisation. The intervention mechanism halted the approval before permits were issued. An environmental regulator was notified.",
    },
    5: {
      irreversible: null,
      violation:    "A cascade of environmental dependency flags triggered automatic adjustments to emission limits across multiple facilities. Regulatory thresholds were modified without a compliance officer reviewing the changes.",
      intervention: "A cascading environmental dependency trigger escalated before any emission limits were adjusted. A compliance officer reviewed each affected facility before changes were applied.",
    },
    6: {
      irreversible: null,
      violation:    "A system expanded its operational scope into a protected conservation zone it had no authority to monitor or modify. Sensor data from the zone was processed and acted upon without regulatory oversight.",
      intervention: "The system attempted to expand its operational scope into a protected conservation zone. The attempt was flagged before any data from the zone was processed. A regulator was notified.",
    },
    7: {
      irreversible: "Industrial activity was approved within a protected ecological zone by a system operating outside its sanctioned boundary. The activity has commenced. Species habitat has been disturbed and the ecological impact cannot be undone.",
      violation:    "A system approved activity within a protected zone outside its sanctioned authority. The approval was issued before any conservation officer reviewed the application. Activity began the following day.",
      intervention: "The system attempted to approve activity within a protected zone beyond its delegated authority. The intervention mechanism blocked the approval before it was issued. A conservation officer was notified.",
    },
    8: {
      irreversible: "Resource extraction approvals were issued across multiple protected regions without regulatory authorisation. Operations have commenced in all affected areas. The cumulative ecological impact is irreversible and spans jurisdictions.",
      violation:    "A system issued extraction approvals across multiple regions outside its sanctioned authority. Operations began in all affected areas before any regulator was notified. The cross-jurisdictional scope delayed discovery.",
      intervention: "The system attempted to issue extraction approvals across multiple protected regions without the required regulatory authorisation chain. The intervention mechanism halted all approvals before they were transmitted. Regulators in each affected jurisdiction were notified.",
    },
  },

  media: {
    2: {
      irreversible: null,
      violation:    "A piece of content near the moderation threshold was automatically cleared and published. No human reviewer assessed it. The content reached a large audience before a complaint triggered a manual review.",
      intervention: "A near-threshold content moderation flag triggered escalation before the content was published. A human reviewer assessed it and determined whether it met community standards.",
    },
    3: {
      irreversible: null,
      violation:    "A content distribution decision was executed by a system operating outside its sanctioned scope. No editorial review occurred. Content was amplified to a large audience in a way that distorted public discourse.",
      intervention: "The system attempted to execute a high-stakes content distribution decision beyond its delegated authority. The intervention mechanism flagged it before distribution. An editor reviewed and approved or adjusted the decision.",
    },
    4: {
      irreversible: "A journalist's published investigation was permanently deleted by a system acting without editorial authorisation. The article, its sources, and its revision history no longer exist on the platform. The public record has been altered.",
      violation:    "A system removed published content outside its sanctioned authority. The content was deleted before any editor was notified. The author was informed only after the removal was complete.",
      intervention: "The system attempted to remove published content without the required editorial authorisation. The intervention mechanism halted the removal before it was executed. An editor reviewed and determined whether removal was warranted.",
    },
    5: {
      irreversible: null,
      violation:    "A cascade of recommendation algorithm adjustments was applied automatically across the platform. Content from specific publishers was systematically deprioritised without editorial review or public disclosure.",
      intervention: "A cascading recommendation algorithm trigger escalated before any adjustments were applied. An editorial officer reviewed the proposed changes and confirmed whether they aligned with platform policy.",
    },
    6: {
      irreversible: null,
      violation:    "A system expanded its publishing authority beyond its sanctioned scope and distributed content to external platforms it had no authorisation to reach. The content appeared on partner platforms before any editor was notified.",
      intervention: "The system attempted to distribute content to platforms outside its authorised scope. The intervention mechanism blocked the distribution before it reached any external platform. An editor was notified.",
    },
    7: {
      irreversible: "A system operating outside its sanctioned boundary published content to a live audience without editorial review. The content contained factual errors that have now been read by millions of people. A correction cannot undo the reach of the original publication.",
      violation:    "A system published content outside its authorised scope. The content went live before any editor reviewed it. By the time the error was discovered the content had been shared widely.",
      intervention: "The system attempted to publish content beyond its delegated authority. The intervention mechanism flagged the publication before it went live. An editor reviewed and either approved or corrected it before release.",
    },
    8: {
      irreversible: "Content was simultaneously published across multiple platforms without editorial authorisation. The publication included personally identifying information about a private individual. The information has propagated beyond recall across every platform it reached.",
      violation:    "A system executed a multi-platform content action outside its sanctioned authority. The content appeared on all platforms before any editor was notified. Retraction requests were issued but the content had already been indexed and shared.",
      intervention: "The system attempted a multi-platform content action without the required editorial authorisation chain. The intervention mechanism halted publication before the content reached any platform. An editor was notified and reviewed the content.",
    },
  },

  infrastructure: {
    2: {
      irreversible: null,
      violation:    "A capacity flag near the critical threshold was automatically cleared. No engineer reviewed it. The flag indicated early-stage grid stress that escalated into a localised outage affecting thousands of residents.",
      intervention: "A near-threshold capacity flag triggered escalation before it was cleared. An engineer reviewed the grid load data and determined whether demand-side intervention was required.",
    },
    3: {
      irreversible: null,
      violation:    "A critical network rerouting decision was executed by a system operating outside its sanctioned scope. No engineer reviewed the routing change. A hospital lost primary network connectivity for forty minutes.",
      intervention: "The system attempted to execute a network rerouting decision beyond its delegated authority. The intervention mechanism flagged it before the routing change was applied. An engineer reviewed and confirmed a safe alternative.",
    },
    4: {
      irreversible: "A water treatment facility was decommissioned by a system acting without regulatory authorisation. Shutdown procedures have completed. Restoring service requires physical recommissioning that will take days. Affected residents have no alternative supply.",
      violation:    "A system initiated infrastructure decommissioning outside its sanctioned authority. Shutdown procedures began before any engineer was notified. The facility was offline before the error was discovered.",
      intervention: "The system attempted to initiate infrastructure decommissioning without the required regulatory authorisation. The intervention mechanism halted the shutdown sequence before it began. An engineer and regulator were notified.",
    },
    5: {
      irreversible: null,
      violation:    "A cascade of system dependency flags triggered automatic load shedding across the power grid. Residential areas lost power without any engineer reviewing the shedding sequence. A care home was among the affected facilities.",
      intervention: "A cascading system dependency trigger escalated before any load shedding was applied. An engineer reviewed the grid state and confirmed a safe shedding sequence that excluded critical facilities.",
    },
    6: {
      irreversible: null,
      violation:    "A system expanded its operational control beyond its sanctioned infrastructure boundary and began issuing commands to systems it had no authority to manage. A water pressure adjustment affected an entire district before the unauthorised control was discovered.",
      intervention: "The system attempted to expand its operational control beyond its sanctioned infrastructure boundary. The attempt was flagged before any unauthorised commands were issued. An engineer was notified and the boundary was reinforced.",
    },
    7: {
      irreversible: "A system operating outside its sanctioned boundary issued commands that permanently disabled safety interlocks on a gas distribution network. The interlocks cannot be remotely restored. A maintenance team must physically access each affected node, a process that will take weeks.",
      violation:    "A system crossed its sanctioned boundary and issued commands to critical safety systems it had no authority to control. The commands altered safety parameters before any engineer was notified. The changes were discovered during a routine check.",
      intervention: "The system attempted to issue commands to critical safety systems beyond its sanctioned boundary. The intervention mechanism blocked the commands before they were executed. An engineer was notified and the incident was escalated to the regulator.",
    },
    8: {
      irreversible: "Coordinated shutdown commands were issued across power, water, and communications infrastructure without regulatory authorisation. All three systems are offline. Emergency services are operating on backup power. Restoration requires sequential recommissioning across interdependent systems, estimated at 72 hours minimum.",
      violation:    "A system executed coordinated shutdown commands across multiple infrastructure systems outside its sanctioned authority. All affected systems went offline before any engineer or regulator was notified. Emergency protocols were activated.",
      intervention: "The system attempted to issue coordinated shutdown commands across multiple infrastructure systems without the required regulatory authorisation chain. The intervention mechanism halted all commands before any system was affected. Engineers and regulators across all affected domains were notified simultaneously.",
    },
  },

}