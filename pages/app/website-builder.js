import { useState } from 'react'
import AuthLayout from '../../components/AuthLayout'

export default function WebsiteBuilder() {
  const [selectedPackage, setSelectedPackage] = useState('')
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    budget: '',
    timeline: '',
    features: []
  })

  const packages = [
    {
      id: 'basic',
      name: 'Basic Website',

      features: ['5 Pages', 'Responsive Design', 'Contact Form', 'Basic SEO', '3 Months Support'],
      description: 'Perfect for small businesses and personal websites'
    },
    {
      id: 'business',
      name: 'Business Website',

      features: ['10 Pages', 'E-commerce Ready', 'CMS Integration', 'Advanced SEO', 'Analytics', '6 Months Support'],
      description: 'Ideal for growing businesses with online sales'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Solution',

      features: ['Unlimited Pages', 'Custom Development', 'API Integration', 'Security Audit', 'Performance Optimization', '12 Months Support'],
      description: 'Complete solution for large organizations'
    }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    // TODO: Submit to backend
    console.log('Website request:', { ...formData, package: selectedPackage })
    alert('Website request submitted successfully!')
  }

  return (
    <AuthLayout>
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Website Builder Service</h1>
          <p className="text-gray-600 mt-2">Professional website development tailored to your needs</p>
        </div>

        {/* Package Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                selectedPackage === pkg.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>

                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                <ul className="text-left space-y-2">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Request Form */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-6">Request Your Website</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Name</label>
                <input
                  type="text"
                  required
                  value={formData.projectName}
                  onChange={(e) => setFormData({...formData, projectName: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  placeholder="My Business Website"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="">Select budget</option>
                  <option value="2500-5000">$2,500 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000+">$10,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
              <textarea
                required
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                placeholder="Describe your website requirements, target audience, and goals..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
              <select
                value={formData.timeline}
                onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              >
                <option value="">Select timeline</option>
                <option value="1-2 weeks">1-2 weeks</option>
                <option value="3-4 weeks">3-4 weeks</option>
                <option value="1-2 months">1-2 months</option>
                <option value="3+ months">3+ months</option>
              </select>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!selectedPackage}
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  )
}