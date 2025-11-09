import { useState } from 'react'
import AuthLayout from '../../components/AuthLayout'

export default function AuditCompliance() {
  const [selectedAudit, setSelectedAudit] = useState('')
  const [formData, setFormData] = useState({
    organization: '',
    industry: '',
    employees: '',
    currentCompliance: '',
    auditScope: [],
    timeline: '',
    budget: '',
    previousAudits: '',
    specificRequirements: '',
    contactPerson: '',
    phone: '',
    urgency: ''
  })

  const auditTypes = [
    {
      id: 'security',
      name: 'Security Audit',
      icon: '🔒',

      duration: '2-6 weeks',
      description: 'Comprehensive security assessment of your IT infrastructure',
      includes: [
        'Network Security Assessment',
        'Vulnerability Scanning',
        'Penetration Testing',
        'Access Control Review',
        'Security Policy Evaluation',
        'Incident Response Assessment',
        'Risk Assessment Report',
        'Remediation Roadmap'
      ]
    },
    {
      id: 'compliance',
      name: 'Compliance Audit',
      icon: '📋',

      duration: '1-4 weeks',
      description: 'Regulatory compliance assessment for various standards',
      includes: [
        'GDPR Compliance Review',
        'HIPAA Assessment',
        'PCI DSS Evaluation',
        'SOX Compliance Check',
        'Industry-Specific Standards',
        'Documentation Review',
        'Gap Analysis',
        'Compliance Roadmap'
      ]
    },
    {
      id: 'operational',
      name: 'Operational Audit',
      icon: '⚙️',

      duration: '3-8 weeks',
      description: 'Business process and operational efficiency audit',
      includes: [
        'Process Efficiency Review',
        'Resource Utilization Analysis',
        'Workflow Optimization',
        'Cost-Benefit Analysis',
        'Performance Metrics Review',
        'Technology Assessment',
        'Operational Risk Analysis',
        'Improvement Recommendations'
      ]
    },
    {
      id: 'financial',
      name: 'Financial Systems Audit',
      icon: '💰',

      duration: '4-10 weeks',
      description: 'Financial controls and systems audit',
      includes: [
        'Internal Controls Review',
        'Financial Reporting Assessment',
        'Fraud Risk Evaluation',
        'Accounting Systems Review',
        'Budget Process Analysis',
        'Revenue Recognition Review',
        'Expense Management Audit',
        'Financial Risk Assessment'
      ]
    }
  ]

  const industries = [
    'Healthcare', 'Financial Services', 'Technology', 'Manufacturing', 
    'Retail', 'Education', 'Government', 'Legal', 'Real Estate', 
    'Non-Profit', 'Energy', 'Transportation', 'Other'
  ]

  const auditScopes = [
    'IT Infrastructure', 'Data Security', 'Privacy Controls', 'Access Management',
    'Network Security', 'Application Security', 'Physical Security', 'Business Processes',
    'Financial Controls', 'Compliance Frameworks', 'Risk Management', 'Vendor Management'
  ]

  const handleScopeChange = (scope) => {
    const updatedScopes = formData.auditScope.includes(scope)
      ? formData.auditScope.filter(s => s !== scope)
      : [...formData.auditScope, scope]
    setFormData({...formData, auditScope: updatedScopes})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Audit request:', { ...formData, auditType: selectedAudit })
    alert('Audit request submitted successfully! Our team will contact you within 24 hours.')
  }

  return (
    <AuthLayout>
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Audit & Compliance Services</h1>
          <p className="text-gray-600 mt-2">Professional audit services to ensure your organization meets all regulatory and security requirements</p>
        </div>

        {/* Audit Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {auditTypes.map((audit) => (
            <div
              key={audit.id}
              className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                selectedAudit === audit.id
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedAudit(audit.id)}
            >
              <div className="flex items-start mb-4">
                <span className="text-3xl mr-4">{audit.icon}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{audit.name}</h3>
                  <div className="flex justify-end items-center mb-2">
                    <span className="text-sm text-gray-500">{audit.duration}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{audit.description}</p>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-medium text-gray-900 mb-2">What's Included:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                  {audit.includes.map((item, index) => (
                    <div key={index} className="text-sm text-gray-700 flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Request Form */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-6">Request Audit Assessment</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
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
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Employees</label>
                <select
                  value={formData.employees}
                  onChange={(e) => setFormData({...formData, employees: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="">Select range</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-1000">201-1000</option>
                  <option value="1000+">1000+</option>
                </select>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person *</label>
                <input
                  type="text"
                  required
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
            </div>

            {/* Audit Scope */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Audit Scope (Select all that apply)</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {auditScopes.map(scope => (
                  <label key={scope} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.auditScope.includes(scope)}
                      onChange={() => handleScopeChange(scope)}
                      className="mr-2"
                    />
                    <span className="text-sm">{scope}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Compliance Status</label>
                <select
                  value={formData.currentCompliance}
                  onChange={(e) => setFormData({...formData, currentCompliance: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="">Select status</option>
                  <option value="none">No formal compliance program</option>
                  <option value="basic">Basic compliance measures</option>
                  <option value="partial">Partially compliant</option>
                  <option value="full">Fully compliant</option>
                  <option value="unknown">Not sure</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Timeline</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP (Rush job)</option>
                  <option value="1-2weeks">1-2 weeks</option>
                  <option value="1month">Within 1 month</option>
                  <option value="3months">Within 3 months</option>
                  <option value="flexible">Flexible</option>
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
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Previous Audit History</label>
              <textarea
                rows={3}
                value={formData.previousAudits}
                onChange={(e) => setFormData({...formData, previousAudits: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                placeholder="Describe any previous audits, findings, or compliance initiatives..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Specific Requirements & Concerns</label>
              <textarea
                rows={4}
                value={formData.specificRequirements}
                onChange={(e) => setFormData({...formData, specificRequirements: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                placeholder="Describe specific areas of concern, regulatory requirements, or audit objectives..."
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!selectedAudit}
                className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 disabled:bg-gray-400 font-medium"
              >
                Request Audit Assessment
              </button>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  )
}