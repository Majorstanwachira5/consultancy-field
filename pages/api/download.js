export default function handler(req, res) {
  const { resource } = req.query

  const resources = {
    'gdpr-checklist': {
      title: 'GDPR Compliance Checklist',
      content: `
GDPR COMPLIANCE CHECKLIST

1. LAWFUL BASIS FOR PROCESSING
☐ Identify lawful basis for each processing activity
☐ Document lawful basis in privacy notices
☐ Review consent mechanisms if using consent
☐ Implement opt-out mechanisms where required

2. DATA SUBJECT RIGHTS
☐ Implement right of access procedures
☐ Set up right to rectification processes
☐ Enable right to erasure (right to be forgotten)
☐ Provide data portability functionality
☐ Handle objection to processing requests

3. PRIVACY NOTICES
☐ Update privacy notices with GDPR requirements
☐ Use clear and plain language
☐ Include all required information
☐ Make notices easily accessible

4. DATA PROTECTION IMPACT ASSESSMENTS
☐ Identify high-risk processing activities
☐ Conduct DPIAs for high-risk processing
☐ Document DPIA outcomes
☐ Consult supervisory authority if required

5. BREACH NOTIFICATION
☐ Implement breach detection procedures
☐ Set up 72-hour notification process
☐ Create breach notification templates
☐ Train staff on breach response

6. RECORDS OF PROCESSING
☐ Create comprehensive processing records
☐ Document data flows and transfers
☐ Maintain up-to-date records
☐ Make records available to authorities

7. INTERNATIONAL TRANSFERS
☐ Review all international data transfers
☐ Implement appropriate safeguards
☐ Document transfer mechanisms
☐ Monitor adequacy decisions

8. VENDOR MANAGEMENT
☐ Review all processor agreements
☐ Update contracts with GDPR clauses
☐ Conduct vendor due diligence
☐ Monitor processor compliance

9. STAFF TRAINING
☐ Provide GDPR awareness training
☐ Train key personnel on procedures
☐ Regular refresher training
☐ Document training completion

10. GOVERNANCE
☐ Appoint Data Protection Officer if required
☐ Establish privacy governance structure
☐ Regular compliance monitoring
☐ Annual compliance review
      `
    },
    'breach-response': {
      title: 'Data Breach Response Plan',
      content: `
DATA BREACH RESPONSE PLAN TEMPLATE

IMMEDIATE RESPONSE (0-24 hours)
1. Contain the breach
2. Assess the scope and severity
3. Notify the incident response team
4. Document all actions taken

ASSESSMENT PHASE (24-72 hours)
1. Determine if personal data is involved
2. Assess risk to individuals
3. Identify affected data subjects
4. Evaluate notification requirements

NOTIFICATION PHASE (72 hours)
1. Notify supervisory authority if required
2. Prepare individual notifications
3. Consider public disclosure
4. Coordinate with legal team

RECOVERY PHASE
1. Implement remediation measures
2. Monitor for further incidents
3. Review and update procedures
4. Conduct lessons learned session

CONTACT INFORMATION
- Incident Response Team Leader: [Name/Contact]
- Legal Counsel: [Name/Contact]
- IT Security Team: [Name/Contact]
- Communications Team: [Name/Contact]
- Supervisory Authority: [Contact Details]

BREACH NOTIFICATION TEMPLATE
Subject: Data Breach Notification - [Organization Name]

Dear [Supervisory Authority],

We are writing to notify you of a personal data breach that occurred on [Date].

Nature of the breach: [Description]
Categories of data subjects affected: [Details]
Approximate number of data subjects: [Number]
Categories of personal data: [Details]
Likely consequences: [Assessment]
Measures taken: [Actions]

Contact: [DPO/Contact Person Details]
      `
    },
    'dpia-tool': {
      title: 'DPIA Assessment Tool',
      content: `
DATA PROTECTION IMPACT ASSESSMENT TOOL

PROJECT INFORMATION
Project Name: _______________
Project Owner: _______________
Date: _______________
Review Date: _______________

SCREENING QUESTIONS
1. Does the processing involve new technologies? Y/N
2. Is systematic monitoring involved? Y/N
3. Does it process special category data? Y/N
4. Is it large scale processing? Y/N
5. Does it involve automated decision-making? Y/N

If YES to any question, proceed with full DPIA.

NECESSITY AND PROPORTIONALITY
1. What is the purpose of the processing?
2. Is the processing necessary for this purpose?
3. Are there less intrusive alternatives?
4. Is the processing proportionate?

RISK ASSESSMENT
Risk Level: Low / Medium / High

Privacy Risks Identified:
1. _______________
2. _______________
3. _______________

Mitigation Measures:
1. _______________
2. _______________
3. _______________

CONSULTATION
☐ Data subjects consulted
☐ DPO consulted
☐ IT security consulted
☐ Legal team consulted

APPROVAL
☐ DPIA approved by: _______________
☐ Date: _______________
☐ Review required: Y/N
☐ Supervisory authority consultation required: Y/N

MONITORING
☐ Regular review scheduled
☐ Monitoring procedures in place
☐ Incident reporting process defined
      `
    }
  }

  if (!resource || !resources[resource]) {
    return res.status(404).json({ error: 'Resource not found' })
  }

  const resourceData = resources[resource]
  
  // Set headers for PDF download
  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader('Content-Disposition', `attachment; filename="${resource}.pdf"`)
  
  // Simple PDF-like content (in a real app, use a PDF library like jsPDF or puppeteer)
  const pdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 5 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Length ${resourceData.content.length + 100}
>>
stream
BT
/F1 12 Tf
50 750 Td
(${resourceData.title}) Tj
0 -20 Td
${resourceData.content.split('\n').map(line => `(${line.replace(/[()\\]/g, '\\$&')}) Tj 0 -15 Td`).join('\n')}
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000053 00000 n 
0000000110 00000 n 
0000000251 00000 n 
0000000${(400 + resourceData.content.length).toString().padStart(6, '0')} 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
${450 + resourceData.content.length}
%%EOF`

  res.send(pdfContent)
}