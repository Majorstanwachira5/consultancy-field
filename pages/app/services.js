import { useRouter } from 'next/router'
import AuthLayout from '../../components/AuthLayout'

export default function Services() {
  const router = useRouter()

  const services = [
    {
      id: 'website-builder',
      name: 'Website Development',
      icon: '🌐',
      description: 'Professional website development from concept to deployment',
      features: ['Custom Design', 'Responsive Layout', 'SEO Optimization', 'CMS Integration'],
      pricing: 'From $2,500',
      color: 'blue'
    },
    {
      id: 'devops',
      name: 'DevOps Consulting',
      icon: '⚙️',
      description: 'Infrastructure optimization and deployment automation',
      features: ['CI/CD Pipelines', 'Cloud Migration', 'Monitoring Setup', 'Security Integration'],
      pricing: 'From $150/hour',
      color: 'green'
    },
    {
      id: 'data-protection',
      name: 'Data Protection & GDPR',
      icon: '🔒',
      description: 'Comprehensive data protection and privacy compliance',
      features: ['GDPR Compliance', 'Privacy Audits', 'Policy Development', 'Staff Training'],
      pricing: 'From $1,500',
      color: 'red'
    },
    {
      id: 'audit',
      name: 'Security Audits',
      icon: '🔍',
      description: 'Thorough security assessments and compliance audits',
      features: ['Vulnerability Assessment', 'Compliance Review', 'Risk Analysis', 'Remediation Plan'],
      pricing: 'From $2,000',
      color: 'purple'
    },
    {
      id: 'certification',
      name: 'Certification Support',
      icon: '🏆',
      description: 'Support for various industry certifications',
      features: ['ISO 27001', 'SOC 2', 'PCI DSS', 'HIPAA Compliance'],
      pricing: 'From $3,000',
      color: 'yellow'
    },
    {
      id: 'training',
      name: 'Training Programs',
      icon: '🎓',
      description: 'Customized training programs for your team',
      features: ['Security Awareness', 'GDPR Training', 'DevOps Practices', 'Custom Curriculum'],
      pricing: 'From $800',
      color: 'indigo'
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: 'border-blue-500 bg-blue-50 text-blue-600',
      green: 'border-green-500 bg-green-50 text-green-600',
      red: 'border-red-500 bg-red-50 text-red-600',
      purple: 'border-purple-500 bg-purple-50 text-purple-600',
      yellow: 'border-yellow-500 bg-yellow-50 text-yellow-600',
      indigo: 'border-indigo-500 bg-indigo-50 text-indigo-600'
    }
    return colors[color] || colors.blue
  }

  const getButtonClasses = (color) => {
    const colors = {
      blue: 'bg-blue-600 hover:bg-blue-700',
      green: 'bg-green-600 hover:bg-green-700',
      red: 'bg-red-600 hover:bg-red-700',
      purple: 'bg-purple-600 hover:bg-purple-700',
      yellow: 'bg-yellow-600 hover:bg-yellow-700',
      indigo: 'bg-indigo-600 hover:bg-indigo-700'
    }
    return colors[color] || colors.blue
  }

  return (
    <AuthLayout>
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive consultancy services to help your business thrive in the digital age. 
            From website development to data protection compliance, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map(service => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`p-6 border-t-4 ${getColorClasses(service.color)}`}>
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getColorClasses(service.color)}`}>
                    {service.pricing}
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => router.push(`/app/${service.id}`)}
                  className={`w-full text-white py-3 rounded-md font-medium transition-colors ${getButtonClasses(service.color)}`}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-lg mb-6">
            Can't find exactly what you're looking for? We offer custom consultancy solutions 
            tailored to your specific business needs.
          </p>
          <button
            onClick={() => router.push('/app/support')}
            className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Our Experts
          </button>
        </div>
      </div>
    </AuthLayout>
  )
}