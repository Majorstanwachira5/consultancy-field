import { useState } from 'react'
import AuthLayout from '../../components/AuthLayout'

export default function DataProtection() {
  const [selectedService, setSelectedService] = useState('')
  const [formData, setFormData] = useState({
    organization: '',
    industry: '',
    dataTypes: [],
    currentCompliance: '',
    requirements: ''
  })

  const services = [
    {
      id: 'gdpr',
      name: 'GDPR Compliance',
      icon: '🇪🇺',
      description: 'Complete GDPR compliance assessment and implementation',

      features: ['Data Mapping', 'Privacy Impact Assessment', 'Policy Development', 'Staff Training']
    },
    {
      id: 'dpia',
      name: 'Data Protection Impact Assessment',
      icon: '📊',
      description: 'Comprehensive DPIA for high-risk processing activities',

      features: ['Risk Assessment', 'Mitigation Strategies', 'Documentation', 'Ongoing Monitoring']
    },
    {
      id: 'audit',
      name: 'Data Protection Audit',
      icon: '🔍',
      description: 'Full audit of your data protection practices',

      features: ['Compliance Review', 'Gap Analysis', 'Recommendations', 'Action Plan']
    },
    {
      id: 'training',
      name: 'Staff Training Program',
      icon: '🎓',
      description: 'Comprehensive data protection training for your team',

      features: ['Custom Curriculum', 'Interactive Sessions', 'Certification', 'Ongoing Support']
    }
  ]

  const industries = [
    'Healthcare', 'Financial Services', 'Technology', 'Retail', 'Education', 
    'Government', 'Manufacturing', 'Legal', 'Real Estate', 'Other'
  ]

  const dataTypeOptions = [
    'Personal Data', 'Financial Data', 'Health Records', 'Employee Data', 
    'Customer Data', 'Marketing Data', 'Technical Data', 'Special Category Data'
  ]

  const handleDataTypeChange = (dataType) => {
    const updatedTypes = formData.dataTypes.includes(dataType)
      ? formData.dataTypes.filter(type => type !== dataType)
      : [...formData.dataTypes, dataType]
    setFormData({...formData, dataTypes: updatedTypes})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Data protection request:', { ...formData, service: selectedService })
    alert('Data protection consultation request submitted!')
  }

  return (
    <AuthLayout>
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Data Protection Services</h1>
          <p className="text-gray-600 mt-2">Comprehensive data protection and privacy compliance solutions</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                selectedService === service.id
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedService(service.id)}
            >
              <div className="flex items-start mb-4">
                <span className="text-2xl mr-3">{service.icon}</span>
                <h3 className="text-lg font-semibold">{service.name}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Request Form */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-6">Request Data Protection Consultation</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name</label>
                <input
                  type="text"
                  required
                  value={formData.organization}
                  onChange={(e) => setFormData({...formData, organization: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                <select
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
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Types of Data Processed</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {dataTypeOptions.map(dataType => (
                  <label key={dataType} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.dataTypes.includes(dataType)}
                      onChange={() => handleDataTypeChange(dataType)}
                      className="mr-2"
                    />
                    <span className="text-sm">{dataType}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Compliance Status</label>
              <select
                value={formData.currentCompliance}
                onChange={(e) => setFormData({...formData, currentCompliance: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              >
                <option value="">Select current status</option>
                <option value="none">No compliance measures</option>
                <option value="basic">Basic measures in place</option>
                <option value="partial">Partially compliant</option>
                <option value="full">Fully compliant</option>
                <option value="unknown">Not sure</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Specific Requirements</label>
              <textarea
                rows={4}
                value={formData.requirements}
                onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                placeholder="Describe your specific data protection needs, concerns, or compliance requirements..."
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!selectedService}
                className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 disabled:bg-gray-400"
              >
                Request Consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  )
}