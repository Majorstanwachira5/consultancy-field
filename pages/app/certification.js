import { useState } from 'react'
import AuthLayout from '../../components/AuthLayout'

export default function Certification() {
  const [selectedCert, setSelectedCert] = useState('')
  const [formData, setFormData] = useState({
    organization: '',
    industry: '',
    employees: '',
    currentStatus: '',
    targetDate: '',
    budget: '',
    previousCerts: '',
    businessJustification: '',
    technicalContact: '',
    managementContact: '',
    urgency: '',
    specificRequirements: ''
  })

  const certifications = [
    {
      id: 'iso27001',
      name: 'ISO 27001',
      icon: '🔐',
      fullName: 'Information Security Management System',

      duration: '6-12 months',
      description: 'International standard for information security management systems',
      benefits: [
        'Enhanced security posture',
        'Regulatory compliance',
        'Customer trust',
        'Risk management',
        'Competitive advantage',
        'Improved processes'
      ],
      requirements: [
        'Management commitment',
        'Risk assessment process',
        'Security policies',
        'Employee training',
        'Incident management',
        'Continuous monitoring'
      ],
      phases: [
        'Gap Analysis & Planning',
        'ISMS Implementation',
        'Risk Assessment',
        'Policy Development',
        'Training & Awareness',
        'Internal Audit',
        'Management Review',
        'Certification Audit'
      ]
    },
    {
      id: 'soc2',
      name: 'SOC 2',
      icon: '🛡️',
      fullName: 'Service Organization Control 2',

      duration: '4-8 months',
      description: 'Audit framework for service organizations handling customer data',
      benefits: [
        'Customer confidence',
        'Vendor qualification',
        'Risk mitigation',
        'Process improvement',
        'Competitive differentiation',
        'Regulatory readiness'
      ],
      requirements: [
        'Security controls',
        'Availability measures',
        'Processing integrity',
        'Confidentiality controls',
        'Privacy protection',
        'Continuous monitoring'
      ],
      phases: [
        'Readiness Assessment',
        'Control Design',
        'Implementation',
        'Testing Period',
        'Evidence Collection',
        'Audit Preparation',
        'SOC 2 Examination',
        'Report Issuance'
      ]
    },
    {
      id: 'pcidss',
      name: 'PCI DSS',
      icon: '💳',
      fullName: 'Payment Card Industry Data Security Standard',

      duration: '3-6 months',
      description: 'Security standard for organizations handling credit card data',
      benefits: [
        'Payment processing compliance',
        'Reduced breach risk',
        'Customer trust',
        'Avoid penalties',
        'Secure transactions',
        'Brand protection'
      ],
      requirements: [
        'Secure network',
        'Cardholder data protection',
        'Vulnerability management',
        'Access controls',
        'Network monitoring',
        'Security policies'
      ],
      phases: [
        'Scope Definition',
        'Gap Assessment',
        'Remediation Planning',
        'Control Implementation',
        'Vulnerability Scanning',
        'Penetration Testing',
        'Documentation Review',
        'Compliance Validation'
      ]
    },
    {
      id: 'hipaa',
      name: 'HIPAA',
      icon: '🏥',
      fullName: 'Health Insurance Portability and Accountability Act',

      duration: '2-6 months',
      description: 'Healthcare data privacy and security compliance',
      benefits: [
        'Healthcare compliance',
        'Patient trust',
        'Avoid penalties',
        'Data protection',
        'Business continuity',
        'Risk reduction'
      ],
      requirements: [
        'Privacy policies',
        'Security safeguards',
        'Employee training',
        'Business associate agreements',
        'Breach notification',
        'Risk assessments'
      ],
      phases: [
        'Compliance Assessment',
        'Policy Development',
        'Technical Safeguards',
        'Administrative Controls',
        'Physical Security',
        'Training Program',
        'Documentation',
        'Ongoing Monitoring'
      ]
    },
    {
      id: 'gdpr',
      name: 'GDPR',
      icon: '🇪🇺',
      fullName: 'General Data Protection Regulation',

      duration: '4-8 months',
      description: 'EU data protection and privacy regulation compliance',
      benefits: [
        'EU market access',
        'Privacy compliance',
        'Customer trust',
        'Avoid fines',
        'Data governance',
        'Competitive advantage'
      ],
      requirements: [
        'Lawful basis for processing',
        'Data subject rights',
        'Privacy by design',
        'Data protection officer',
        'Impact assessments',
        'Breach notification'
      ],
      phases: [
        'Data Mapping',
        'Legal Basis Review',
        'Privacy Impact Assessment',
        'Policy Development',
        'Technical Implementation',
        'Training & Awareness',
        'Monitoring Setup',
        'Compliance Validation'
      ]
    },
    {
      id: 'fedramp',
      name: 'FedRAMP',
      icon: '🏛️',
      fullName: 'Federal Risk and Authorization Management Program',

      duration: '12-24 months',
      description: 'US government cloud security authorization program',
      benefits: [
        'Government contracts',
        'Federal market access',
        'Security assurance',
        'Competitive advantage',
        'Risk management',
        'Standardized security'
      ],
      requirements: [
        'NIST 800-53 controls',
        'Continuous monitoring',
        'Security documentation',
        'Third-party assessment',
        'Authority to operate',
        'Ongoing compliance'
      ],
      phases: [
        'Readiness Assessment',
        'System Security Plan',
        'Control Implementation',
        'Security Assessment',
        'Plan of Action',
        'Authorization Package',
        'ATO Decision',
        'Continuous Monitoring'
      ]
    }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Certification request:', { ...formData, certification: selectedCert })
    alert('Certification consultation request submitted! Our experts will contact you within 24 hours to discuss your certification journey.')
  }

  const selectedCertification = certifications.find(cert => cert.id === selectedCert)

  return (
    <AuthLayout>
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Certification Services</h1>
          <p className="text-gray-600 mt-2">Expert guidance to achieve industry-leading certifications and compliance standards</p>
        </div>

        {/* Certification Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                selectedCert === cert.id
                  ? 'border-yellow-500 bg-yellow-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedCert(cert.id)}
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h3 className="text-xl font-bold mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{cert.fullName}</p>

                <div className="text-sm text-gray-500">{cert.duration}</div>
              </div>
              <p className="text-gray-700 text-sm text-center">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Detailed Information */}
        {selectedCertification && (
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">{selectedCertification.name} Certification Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Benefits */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-600">Key Benefits</h3>
                <ul className="space-y-2">
                  {selectedCertification.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">Requirements</h3>
                <ul className="space-y-2">
                  {selectedCertification.requirements.map((req, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <span className="text-blue-500 mr-2">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process Phases */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-purple-600">Process Phases</h3>
                <ol className="space-y-2">
                  {selectedCertification.phases.map((phase, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <span className="text-purple-500 mr-2 font-medium">{index + 1}.</span>
                      {phase}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* Request Form */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-6">Request Certification Consultation</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Organization Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name *</label>
                <input
                  type="text"
                  required
                  value={formData.organization}
                  onChange={(e) => setFormData({...formData, organization: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry *</label>
                <select
                  required
                  value={formData.industry}
                  onChange={(e) => setFormData({...formData, industry: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="">Select industry</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="financial">Financial Services</option>
                  <option value="technology">Technology</option>
                  <option value="government">Government</option>
                  <option value="education">Education</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                <select
                  value={formData.employees}
                  onChange={(e) => setFormData({...formData, employees: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="">Select size</option>
                  <option value="startup">Startup (1-10)</option>
                  <option value="small">Small (11-50)</option>
                  <option value="medium">Medium (51-200)</option>
                  <option value="large">Large (201-1000)</option>
                  <option value="enterprise">Enterprise (1000+)</option>
                </select>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Technical Contact *</label>
                <input
                  type="text"
                  required
                  value={formData.technicalContact}
                  onChange={(e) => setFormData({...formData, technicalContact: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  placeholder="Name and email of technical lead"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Management Contact</label>
                <input
                  type="text"
                  value={formData.managementContact}
                  onChange={(e) => setFormData({...formData, managementContact: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  placeholder="Name and email of management sponsor"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Status</label>
                <select
                  value={formData.currentStatus}
                  onChange={(e) => setFormData({...formData, currentStatus: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="">Select status</option>
                  <option value="planning">Planning phase</option>
                  <option value="started">Already started</option>
                  <option value="partial">Partially implemented</option>
                  <option value="renewal">Renewal/recertification</option>
                  <option value="new">New to certification</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Completion</label>
                <select
                  value={formData.targetDate}
                  onChange={(e) => setFormData({...formData, targetDate: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="">Select timeline</option>
                  <option value="3months">Within 3 months</option>
                  <option value="6months">Within 6 months</option>
                  <option value="1year">Within 1 year</option>
                  <option value="18months">Within 18 months</option>
                  <option value="flexible">Flexible timeline</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="">Select budget</option>
                  <option value="under-25k">Under $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-250k">$100,000 - $250,000</option>
                  <option value="250k+">$250,000+</option>
                </select>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Previous Certifications</label>
              <textarea
                rows={3}
                value={formData.previousCerts}
                onChange={(e) => setFormData({...formData, previousCerts: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                placeholder="List any current or previous certifications, compliance frameworks, or security standards..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Business Justification</label>
              <textarea
                rows={3}
                value={formData.businessJustification}
                onChange={(e) => setFormData({...formData, businessJustification: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                placeholder="Explain the business drivers for this certification (customer requirements, regulatory needs, competitive advantage, etc.)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Specific Requirements & Challenges</label>
              <textarea
                rows={4}
                value={formData.specificRequirements}
                onChange={(e) => setFormData({...formData, specificRequirements: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                placeholder="Describe any specific requirements, known challenges, or areas where you need particular support..."
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!selectedCert}
                className="bg-yellow-600 text-white px-8 py-3 rounded-md hover:bg-yellow-700 disabled:bg-gray-400 font-medium"
              >
                Request Certification Consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  )
}