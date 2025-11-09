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

      color: 'blue',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop'
    },
    {
      id: 'devops',
      name: 'DevOps Consulting',
      icon: '⚙️',
      description: 'Infrastructure optimization and deployment automation',
      features: ['CI/CD Pipelines', 'Cloud Migration', 'Monitoring Setup', 'Security Integration'],

      color: 'green',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=250&fit=crop'
    },
    {
      id: 'data-protection',
      name: 'Data Protection & GDPR',
      icon: '🔒',
      description: 'Comprehensive data protection and privacy compliance',
      features: ['GDPR Compliance', 'Privacy Audits', 'Policy Development', 'Staff Training'],

      color: 'red',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop'
    },
    {
      id: 'audit',
      name: 'Security Audits',
      icon: '🔍',
      description: 'Thorough security assessments and compliance audits',
      features: ['Vulnerability Assessment', 'Compliance Review', 'Risk Analysis', 'Remediation Plan'],

      color: 'purple',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop'
    },
    {
      id: 'certification',
      name: 'Certification Support',
      icon: '🏆',
      description: 'Support for various industry certifications',
      features: ['ISO 27001', 'SOC 2', 'PCI DSS', 'HIPAA Compliance'],

      color: 'yellow',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'
    },
    {
      id: 'training',
      name: 'Training Programs',
      icon: '🎓',
      description: 'Customized training programs for your team',
      features: ['Security Awareness', 'GDPR Training', 'DevOps Practices', 'Custom Curriculum'],

      color: 'indigo',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop'
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
            <div key={service.id} className="group bg-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => router.push(`/app/${service.id}`)}
                    className={`text-white px-6 py-3 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ${getButtonClasses(service.color)}`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
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