import { useState } from 'react'
import AuthLayout from '../../components/AuthLayout'

export default function Support() {
  const [activeTab, setActiveTab] = useState('contact')
  const [ticketForm, setTicketForm] = useState({
    subject: '',
    category: '',
    priority: '',
    description: '',
    attachments: []
  })
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    preferredContact: 'email',
    timeframe: ''
  })

  const supportCategories = [
    { id: 'technical', name: 'Technical Support', icon: '🔧' },
    { id: 'billing', name: 'Billing & Payments', icon: '💳' },
    { id: 'consultation', name: 'Consultation Request', icon: '💬' },
    { id: 'compliance', name: 'Compliance Questions', icon: '📋' },
    { id: 'certification', name: 'Certification Support', icon: '🏆' },
    { id: 'training', name: 'Training & Education', icon: '🎓' },
    { id: 'general', name: 'General Inquiry', icon: '❓' }
  ]

  const faqItems = [
    {
      category: 'General',
      questions: [
        {
          q: 'What services does DataProtect Co. offer?',
          a: 'We offer comprehensive consultancy services including website development, DevOps consulting, data protection & GDPR compliance, security audits, certification support, and training programs.'
        },
        {
          q: 'How do I get started with your services?',
          a: 'Simply navigate to the specific service page from your dashboard and fill out the consultation request form. Our experts will contact you within 24 hours to discuss your requirements.'
        },
        {
          q: 'Do you work with companies of all sizes?',
          a: 'Yes, we work with startups, SMEs, and large enterprises across various industries. Our solutions are tailored to meet the specific needs and budget of each organization.'
        }
      ]
    },
    {
      category: 'Pricing & Billing',
      questions: [
        {
          q: 'How is pricing determined for your services?',
          a: 'Pricing varies based on the scope, complexity, and timeline of each project. We provide detailed quotes after an initial consultation to understand your specific requirements.'
        },
        {
          q: 'Do you offer payment plans?',
          a: 'Yes, we offer flexible payment plans for larger projects. Payment terms are typically structured as milestones or monthly installments based on project phases.'
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept bank transfers, credit cards, and for enterprise clients, we can accommodate purchase orders and invoicing arrangements.'
        }
      ]
    },
    {
      category: 'Compliance & Certification',
      questions: [
        {
          q: 'How long does it take to achieve GDPR compliance?',
          a: 'GDPR compliance typically takes 4-8 months depending on your current state, organization size, and complexity of data processing activities.'
        },
        {
          q: 'What certifications do you help with?',
          a: 'We support ISO 27001, SOC 2, PCI DSS, HIPAA, GDPR, FedRAMP, and other industry-specific certifications. Each has different timelines and requirements.'
        },
        {
          q: 'Do you provide ongoing compliance support?',
          a: 'Yes, we offer ongoing compliance monitoring, annual reviews, and support for maintaining certifications through our managed services programs.'
        }
      ]
    }
  ]

  const handleTicketSubmit = async (e) => {
    e.preventDefault()
    console.log('Support ticket:', ticketForm)
    alert('Support ticket submitted successfully! Ticket ID: #' + Math.random().toString(36).substr(2, 9).toUpperCase())
    setTicketForm({ subject: '', category: '', priority: '', description: '', attachments: [] })
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    console.log('Contact form:', contactForm)
    alert('Thank you for contacting us! We will respond within 24 hours.')
    setContactForm({ name: '', email: '', phone: '', company: '', service: '', message: '', preferredContact: 'email', timeframe: '' })
  }

  return (
    <AuthLayout>
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Support Center</h1>
          <p className="text-gray-600 mt-2">Get help, ask questions, and connect with our expert team</p>
        </div>

        {/* Support Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-2xl font-bold text-blue-600">&lt; 2hrs</div>
            <div className="text-sm text-gray-600">Average Response Time</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-green-600">98%</div>
            <div className="text-sm text-gray-600">Customer Satisfaction</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-purple-600">500+</div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl mb-2">🌍</div>
            <div className="text-2xl font-bold text-orange-600">24/7</div>
            <div className="text-sm text-gray-600">Global Support</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'contact', name: 'Contact Us', icon: '📞' },
                { id: 'ticket', name: 'Submit Ticket', icon: '🎫' },
                { id: 'faq', name: 'FAQ', icon: '❓' },
                { id: 'resources', name: 'Resources', icon: '📚' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Contact Form */}
            {activeTab === 'contact' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                          <input
                            type="text"
                            required
                            value={contactForm.name}
                            onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                          <input
                            type="email"
                            required
                            value={contactForm.email}
                            onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                          <input
                            type="tel"
                            value={contactForm.phone}
                            onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                          <input
                            type="text"
                            value={contactForm.company}
                            onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                        <select
                          value={contactForm.service}
                          onChange={(e) => setContactForm({...contactForm, service: e.target.value})}
                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                        >
                          <option value="">Select a service</option>
                          <option value="website">Website Development</option>
                          <option value="devops">DevOps Consulting</option>
                          <option value="gdpr">Data Protection & GDPR</option>
                          <option value="audit">Security Audit</option>
                          <option value="certification">Certification Support</option>
                          <option value="training">Training Programs</option>
                          <option value="custom">Custom Solution</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Contact</label>
                          <select
                            value={contactForm.preferredContact}
                            onChange={(e) => setContactForm({...contactForm, preferredContact: e.target.value})}
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                          >
                            <option value="email">Email</option>
                            <option value="phone">Phone</option>
                            <option value="video">Video Call</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Timeframe</label>
                          <select
                            value={contactForm.timeframe}
                            onChange={(e) => setContactForm({...contactForm, timeframe: e.target.value})}
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                          >
                            <option value="">Select timeframe</option>
                            <option value="asap">ASAP</option>
                            <option value="1week">Within 1 week</option>
                            <option value="1month">Within 1 month</option>
                            <option value="3months">Within 3 months</option>
                            <option value="planning">Just planning</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                        <textarea
                          required
                          rows={4}
                          value={contactForm.message}
                          onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                          placeholder="Tell us about your project or requirements..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 font-medium"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <span className="text-xl mr-3">📧</span>
                          <div>
                            <div className="font-medium">Email</div>
                            <div className="text-gray-600">majorstan20@gmail.com</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xl mr-3">📞</span>
                          <div>
                            <div className="font-medium">Phone</div>
                            <div className="text-gray-600">+254 759 689 685 (Kenya)</div>
                            <div className="text-gray-600">+44 (0) 20 7123 4567 (UK)</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xl mr-3">📍</span>
                          <div>
                            <div className="font-medium">Locations</div>
                            <div className="text-gray-600">Nairobi, Kenya</div>
                            <div className="text-gray-600">London, UK</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xl mr-3">🕒</span>
                          <div>
                            <div className="font-medium">Business Hours</div>
                            <div className="text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM EAT</div>
                            <div className="text-gray-600">24/7 Emergency Support</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Response Times</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>General Inquiries:</span>
                          <span className="font-medium">Within 24 hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Technical Support:</span>
                          <span className="font-medium">Within 2 hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Emergency Issues:</span>
                          <span className="font-medium">Within 30 minutes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Support Ticket */}
            {activeTab === 'ticket' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Submit Support Ticket</h2>
                <form onSubmit={handleTicketSubmit} className="max-w-2xl space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <input
                      type="text"
                      required
                      value={ticketForm.subject}
                      onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      placeholder="Brief description of your issue"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                      <select
                        required
                        value={ticketForm.category}
                        onChange={(e) => setTicketForm({...ticketForm, category: e.target.value})}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                      >
                        <option value="">Select category</option>
                        {supportCategories.map(cat => (
                          <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Priority *</label>
                      <select
                        required
                        value={ticketForm.priority}
                        onChange={(e) => setTicketForm({...ticketForm, priority: e.target.value})}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                      >
                        <option value="">Select priority</option>
                        <option value="low">Low - General question</option>
                        <option value="medium">Medium - Non-urgent issue</option>
                        <option value="high">High - Urgent issue</option>
                        <option value="critical">Critical - System down</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                    <textarea
                      required
                      rows={6}
                      value={ticketForm.description}
                      onChange={(e) => setTicketForm({...ticketForm, description: e.target.value})}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      placeholder="Please provide detailed information about your issue, including steps to reproduce, error messages, and any relevant context..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Attachments</label>
                    <input
                      type="file"
                      multiple
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.txt"
                    />
                    <p className="text-xs text-gray-500 mt-1">Supported formats: PDF, DOC, DOCX, PNG, JPG, TXT (Max 10MB each)</p>
                  </div>

                  <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 font-medium"
                  >
                    Submit Ticket
                  </button>
                </form>
              </div>
            )}

            {/* FAQ */}
            {activeTab === 'faq' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-8">
                  {faqItems.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      <h3 className="text-lg font-semibold text-blue-600 mb-4">{category.category}</h3>
                      <div className="space-y-4">
                        {category.questions.map((item, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-4">
                            <h4 className="font-medium text-gray-900 mb-2">{item.q}</h4>
                            <p className="text-gray-600 text-sm">{item.a}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Resources */}
            {activeTab === 'resources' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Helpful Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="text-3xl mb-3">📖</div>
                    <h3 className="font-semibold mb-2">Documentation</h3>
                    <p className="text-gray-600 text-sm mb-4">Comprehensive guides and documentation for all our services</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View Docs →</button>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="text-3xl mb-3">🎥</div>
                    <h3 className="font-semibold mb-2">Video Tutorials</h3>
                    <p className="text-gray-600 text-sm mb-4">Step-by-step video guides for common tasks and processes</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Watch Videos →</button>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="text-3xl mb-3">📋</div>
                    <h3 className="font-semibold mb-2">Checklists</h3>
                    <p className="text-gray-600 text-sm mb-4">Ready-to-use checklists for compliance and security assessments</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Download →</button>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="text-3xl mb-3">📊</div>
                    <h3 className="font-semibold mb-2">Templates</h3>
                    <p className="text-gray-600 text-sm mb-4">Professional templates for policies, procedures, and documentation</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Browse Templates →</button>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="text-3xl mb-3">🎓</div>
                    <h3 className="font-semibold mb-2">Training Materials</h3>
                    <p className="text-gray-600 text-sm mb-4">Educational content and training resources for your team</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Access Training →</button>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="text-3xl mb-3">💬</div>
                    <h3 className="font-semibold mb-2">Community Forum</h3>
                    <p className="text-gray-600 text-sm mb-4">Connect with other clients and share experiences</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Join Forum →</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}