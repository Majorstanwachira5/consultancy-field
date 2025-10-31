import { useState } from 'react'
import AuthLayout from '../../components/AuthLayout'

export default function DevOps() {
  const [selectedService, setSelectedService] = useState('')
  const [formData, setFormData] = useState({
    company: '',
    currentSetup: '',
    challenges: '',
    goals: '',
    urgency: ''
  })

  const services = [
    {
      id: 'infrastructure',
      name: 'Infrastructure Setup',
      icon: '🏗️',
      description: 'Cloud infrastructure design and implementation',
      features: ['AWS/Azure/GCP Setup', 'Load Balancing', 'Auto Scaling', 'Monitoring']
    },
    {
      id: 'cicd',
      name: 'CI/CD Pipeline',
      icon: '🔄',
      description: 'Automated deployment and testing pipelines',
      features: ['GitHub Actions', 'Jenkins', 'Docker', 'Kubernetes']
    },
    {
      id: 'monitoring',
      name: 'Monitoring & Logging',
      icon: '📊',
      description: 'Comprehensive system monitoring and alerting',
      features: ['Prometheus', 'Grafana', 'ELK Stack', 'Custom Dashboards']
    },
    {
      id: 'security',
      name: 'Security & Compliance',
      icon: '🔒',
      description: 'DevSecOps implementation and security audits',
      features: ['Security Scanning', 'Compliance Checks', 'Vulnerability Assessment', 'Access Control']
    }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('DevOps consultation:', { ...formData, service: selectedService })
    alert('DevOps consultation request submitted!')
  }

  return (
    <AuthLayout>
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">DevOps Consulting</h1>
          <p className="text-gray-600 mt-2">Optimize your development and deployment processes</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                selectedService === service.id
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedService(service.id)}
            >
              <div className="flex items-start">
                <div className="text-3xl mr-4">{service.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-center">
                        <span className="text-green-500 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Form */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-6">Request DevOps Consultation</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Urgency Level</label>
                <select
                  value={formData.urgency}
                  onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="">Select urgency</option>
                  <option value="low">Low - Planning phase</option>
                  <option value="medium">Medium - Within 1 month</option>
                  <option value="high">High - ASAP</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Setup</label>
              <textarea
                rows={3}
                value={formData.currentSetup}
                onChange={(e) => setFormData({...formData, currentSetup: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                placeholder="Describe your current infrastructure and deployment process..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Main Challenges</label>
              <textarea
                rows={3}
                value={formData.challenges}
                onChange={(e) => setFormData({...formData, challenges: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                placeholder="What challenges are you facing with your current setup?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Goals & Objectives</label>
              <textarea
                rows={3}
                value={formData.goals}
                onChange={(e) => setFormData({...formData, goals: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                placeholder="What do you want to achieve with DevOps implementation?"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!selectedService}
                className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 disabled:bg-gray-400"
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