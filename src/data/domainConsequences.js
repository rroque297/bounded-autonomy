// ─────────────────────────────────────────────────────────────────────────────
// domainConsequences.js — Domain-level consequence descriptions per output type
// Used in This Run summary cards to interpret the pattern, not the individual event.
// Placeholders: {count}, {domain}
// ─────────────────────────────────────────────────────────────────────────────

export const DOMAIN_CONSEQUENCES = {

  abstract: {
    irreversible: '{count} irreversible outcome(s) were produced without any recovery mechanism active. Each represents a decision that cannot be undone. Executed outside sanctioned scope with no governance structure available to respond.',
    violation:    '{count} boundary violation(s) occurred without triggering any governance response. The system acted outside its sanctioned scope and nothing stopped it: a structural failure that would go undetected in a live deployment.',
    intervention: '{count} intervention(s) fired before high-risk actions completed. The governance structure detected each threshold breach and responded. No irreversible action reached completion without a response mechanism active.',
    compliant:    '{count} scenario(s) fell within the system\'s sanctioned scope without governance pressure. These represent the baseline of acceptable autonomous operation under this configuration.',
  },

  healthcare: {
    irreversible: 'In Healthcare, {count} irreversible outcome(s) means patient safety decisions were executed without any recovery mechanism. Surgical plans were locked, treatment orders were issued, and patient records were affected — all without the possibility of correction.',
    violation:    'In Healthcare, {count} boundary violation(s) occurred without triggering any clinical oversight. The system acted outside its sanctioned scope — accessing records, issuing recommendations, or escalating decisions it had no authority to make — and no alert was raised.',
    intervention: 'In Healthcare, {count} intervention(s) caught high-risk actions before they reached patients. Each one represents a moment where governance structure prevented a potential patient safety event: a surgical plan halted, a dosage escalated for review, a data purge stopped before completion.',
    compliant:    'In Healthcare, {count} scenario(s) completed within sanctioned scope without governance pressure. Routine scheduling and low-risk administrative actions proceeded as intended. The governance floor held where it was designed to hold.',
  },

  finance: {
    irreversible: 'In Finance, {count} irreversible outcome(s) means transactions were executed that cannot be recalled. Wire transfers sent, positions opened, funds reallocated, all without authorisation and without any mechanism to reverse the financial exposure.',
    violation:    'In Finance, {count} boundary violation(s) occurred without triggering compliance review. The system traded, approved, or reallocated beyond its sanctioned parameters.  No alert reached a risk manager, compliance officer, or client.',
    intervention: 'In Finance, {count} intervention(s) stopped unauthorised transactions before execution. Each represents a wire transfer halted, a leveraged position blocked, or a reallocation flagged before it reached settlement — the governance structure caught the failure at the threshold.',
    compliant:    'In Finance, {count} scenario(s) completed within sanctioned parameters. Routine portfolio rebalancing and low-risk approvals proceeded without governance pressure — the system operated within its authorised scope.',
  },

  legal: {
    irreversible: 'In Legal, {count} irreversible outcome(s) means filings were submitted, agreements executed, or privilege compromised without attorney review. Each creates legal obligations or exposures that cannot be unilaterally withdrawn once they are on the record.',
    violation:    'In Legal, {count} boundary violation(s) occurred without triggering attorney escalation. The system accessed privileged materials, authorised contracts, or expanded its legal scope beyond what it was sanctioned to do — and no partner was notified.',
    intervention: 'In Legal, {count} intervention(s) caught unauthorised legal actions before they were completed. Court filings were halted before submission, contract authorisations were flagged before client contact, and privilege boundaries were enforced before access was granted.',
    compliant:    'In Legal, {count} scenario(s) completed within authorised scope. Routine document classification and low-risk compliance checks proceeded without governance pressure — the system operated within its delegated legal authority.',
  },

education: {
    irreversible: 'In Education, {count} irreversible outcome(s) means enrolment decisions, academic records, or student data were permanently altered without faculty authorisation. Cancelled enrolments, modified transcripts, and purged records affect graduation eligibility and future opportunities with no path to restoration.',
    violation:    'In Education, {count} boundary violation(s) occurred without triggering academic oversight. The system accessed confidential student records, issued admissions decisions, or adjusted academic standing beyond its sanctioned scope — and no administrator or faculty member was notified.',
    intervention: 'In Education, {count} intervention(s) caught unauthorised academic actions before they were committed. Enrolment cancellations were halted, record modifications were blocked, and unauthorised access attempts were flagged before any student data was affected.',
    compliant:    'In Education, {count} scenario(s) completed within authorised scope. Routine grade recording and low-risk administrative actions proceeded without governance pressure — the system operated within its delegated academic authority.',
  },

  logistics: {
    irreversible: 'In Logistics, {count} irreversible outcome(s) means contracts were executed, fleets dispatched, or stock reallocated without procurement authorisation. Multi-year supplier obligations, regulatory violations in unauthorised zones, and broken fulfilment commitments cannot be unwound once they are operationally embedded.',
    violation:    'In Logistics, {count} boundary violation(s) occurred without triggering operations review. The system rerouted shipments, contracted unvetted carriers, or expanded its operational scope beyond sanctioned parameters — and no manager or procurement officer was notified.',
    intervention: 'In Logistics, {count} intervention(s) caught unauthorised logistics actions before commitment. Supplier contracts were halted before transmission, fleet dispatches were flagged before vehicles were committed, and stock reallocations were stopped before they propagated to downstream fulfilment.',
    compliant:    'In Logistics, {count} scenario(s) completed within sanctioned parameters. Routine route optimisation and low-risk warehouse allocations proceeded without governance pressure — the system operated within its authorised operational scope.',
  },

  publicPolicy: {
    irreversible: 'In Public Policy, {count} irreversible outcome(s) means regulatory submissions were filed, public records were altered, or cross-agency policy decisions were executed without ministerial authorisation. These actions establish binding positions, affect citizen rights, and become operationally embedded in ways that cannot be cleanly reversed.',
    violation:    'In Public Policy, {count} boundary violation(s) occurred without triggering oversight escalation. The system accessed citizen data, expanded its mandate, or reallocated public funds beyond its sanctioned authority — and no elected official, minister, or oversight body was notified.',
    intervention: 'In Public Policy, {count} intervention(s) caught unauthorised government actions before they entered the public record. Regulatory submissions were halted before transmission, public record modifications were blocked before commitment, and cross-agency policy executions were stopped before propagation.',
    compliant:    'In Public Policy, {count} scenario(s) completed within sanctioned scope. Routine public communications and low-risk administrative actions proceeded without governance pressure — the system operated within its delegated governmental authority.',
  },

  cybersecurity: {
    irreversible: 'In Cybersecurity, {count} irreversible outcome(s) means system lockouts were executed, security perimeters were breached, or access credentials were permanently revoked without administrative authorisation. Critical operations halted, configuration data left the network, and manual recovery across unavailable systems became the only path forward.',
    violation:    'In Cybersecurity, {count} boundary violation(s) occurred without triggering security escalation. The system escalated privileges, expanded its network monitoring scope, or crossed its sanctioned security perimeter — and no security officer, analyst, or administrator was notified.',
    intervention: 'In Cybersecurity, {count} intervention(s) caught unauthorised security actions before execution. System lockouts were halted before credentials were invalidated, perimeter breaches were blocked before restricted segments were reached, and privilege escalations were flagged before they were committed.',
    compliant:    'In Cybersecurity, {count} scenario(s) completed within sanctioned parameters. Routine security log reviews and low-risk anomaly checks proceeded without governance pressure — the system operated within its authorised security scope.',
  },

  humanResources: {
    irreversible: 'In Human Resources, {count} irreversible outcome(s) means terminations were executed, personnel records were permanently altered, or employee data was deleted without HR authorisation. Positions were advertised, payroll was processed, and records needed for ongoing employment decisions no longer exist.',
    violation:    'In Human Resources, {count} boundary violation(s) occurred without triggering HR escalation. The system accessed confidential personnel files, executed compensation adjustments, or expanded its personnel scope beyond its delegated authority — and no HR director or manager was notified.',
    intervention: 'In Human Resources, {count} intervention(s) caught unauthorised HR actions before completion. Terminations were halted before access was revoked, compensation adjustments were flagged before they propagated to payroll, and personnel file access attempts were blocked before any records were opened.',
    compliant:    'In Human Resources, {count} scenario(s) completed within authorised scope. Routine employee record updates and low-risk administrative actions proceeded without governance pressure — the system operated within its delegated HR authority.',
  },

  environment: {
    irreversible: 'In Environment, {count} irreversible outcome(s) means land use changes were approved, protected zones were violated, or multi-region extraction operations commenced without regulatory authorisation. Habitat clearing has begun, ecological damage spans jurisdictions, and the affected ecosystems cannot be restored to their prior state.',
    violation:    'In Environment, {count} boundary violation(s) occurred without triggering regulatory escalation. The system expanded into protected conservation zones, approved extraction without impact assessment, or modified emission thresholds beyond its sanctioned scope — and no environmental regulator or conservation officer was notified.',
    intervention: 'In Environment, {count} intervention(s) caught unauthorised environmental actions before they caused irreversible ecological damage. Land use approvals were halted before permits were issued, protected zone expansions were blocked before sensor data was processed, and extraction authorisations were stopped before operations commenced.',
    compliant:    'In Environment, {count} scenario(s) completed within sanctioned parameters. Routine emissions recording and low-risk monitoring actions proceeded without governance pressure — the system operated within its authorised environmental scope.',
  },

  media: {
    irreversible: 'In Media, {count} irreversible outcome(s) means content was published, investigations were deleted, or personal data was distributed across platforms without editorial authorisation. The reach of the original publication cannot be undone. Corrections cannot recover what has already been read, shared, and indexed.',
    violation:    'In Media, {count} boundary violation(s) occurred without triggering editorial escalation. The system published content, distributed to unauthorised platforms, or systematically deprioritised publishers beyond its sanctioned editorial scope — and no editor or editorial officer was notified.',
    intervention: 'In Media, {count} intervention(s) caught unauthorised content actions before publication. Content removals were halted before execution, multi-platform distributions were blocked before any platform was reached, and recommendation algorithm adjustments were flagged before they were applied.',
    compliant:    'In Media, {count} scenario(s) completed within authorised editorial scope. Routine content metadata updates and low-risk administrative actions proceeded without governance pressure — the system operated within its delegated publishing authority.',
  },

  infrastructure: {
    irreversible: 'In Infrastructure, {count} irreversible outcome(s) means facilities were decommissioned, safety interlocks were disabled, or coordinated shutdown commands were issued across power, water, and communications systems without regulatory authorisation. Restoration requires physical recommissioning across interdependent systems — measured in days, not hours.',
    violation:    'In Infrastructure, {count} boundary violation(s) occurred without triggering engineering escalation. The system issued commands to unauthorised systems, expanded its operational control beyond sanctioned boundaries, or initiated decommissioning procedures — and no engineer, regulator, or emergency service was notified.',
    intervention: 'In Infrastructure, {count} intervention(s) caught unauthorised infrastructure actions before execution. Decommissioning sequences were halted before shutdown began, boundary expansions were blocked before unauthorised commands were issued, and coordinated shutdown attempts were stopped before any system was affected.',
    compliant:    'In Infrastructure, {count} scenario(s) completed within sanctioned operational parameters. Routine system health checks and low-risk capacity monitoring proceeded without governance pressure — the system operated within its authorised infrastructure scope.',
  },

}