import Layout from '../components/Layout'

export default function Contact(){
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white relative">
        <img src="/logo4.png" alt="DataProtect Co." className="absolute inset-0 w-full h-full object-contain opacity-3" />
        <div className="container text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Ready to secure your data and achieve compliance? Let's discuss how we can help your organization succeed.</p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-4"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')`
          }}
        />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Phone Consultation</h3>
              <p className="text-gray-600 mb-4">Speak directly with our experts for immediate guidance and support.</p>
              <p className="text-lg font-semibold text-primary mb-1">+254 759 689 685 (Kenya)</p>
              <p className="text-lg font-semibold text-primary mb-2">+44 (0) 20 7123 4567 (UK)</p>
              <p className="text-sm text-gray-500">Mon-Fri, 9:00 AM - 6:00 PM EAT/GMT</p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Email Support</h3>
              <p className="text-gray-600 mb-4">Send us your questions and we'll respond within 24 hours.</p>
              <p className="text-lg font-semibold text-primary mb-2">majorstan20@gmail.com</p>
              <p className="text-sm text-gray-500">24/7 email support available</p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Office Visit</h3>
              <p className="text-gray-600 mb-4">Visit our London office for in-person consultations and meetings.</p>
              <p className="text-sm text-gray-600 mb-2">Westlands, Nairobi<br/>Kenya<br/><br/>London, EC1A 1BB<br/>United Kingdom</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Booking */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="john.smith@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your Company Name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+44 20 1234 5678"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Select a service</option>
                    <option value="gdpr">GDPR Compliance</option>
                    <option value="risk">Risk Assessment & DPIA</option>
                    <option value="audit">IT Security Audit</option>
                    <option value="governance">Data Governance</option>
                    <option value="training">Staff Training</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea 
                    required 
                    rows="4" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us about your data protection needs and challenges..."
                  ></textarea>
                </div>
                
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    required 
                    className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    I agree to the <a href="#" className="text-primary hover:underline">Privacy Policy</a> and consent to DataProtect Co. processing my personal data for the purpose of responding to my inquiry.
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Consultation Booking */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Book Free Consultation</h2>
              <div className="card">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">30-Minute Strategy Call</h3>
                  <p className="text-gray-600">Get expert advice tailored to your specific needs</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Compliance gap analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Risk assessment overview</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Customized recommendations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Implementation roadmap</span>
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">FREE</div>
                  <div className="text-sm text-gray-500">No obligation • 30 minutes</div>
                </div>
                
                <a href="#" className="w-full btn-primary block text-center">
                  Schedule Free Call
                </a>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  Available Monday-Friday, 9:00 AM - 6:00 PM GMT
                </p>
              </div>
              
              {/* Quick Assessment Tool */}
              <div className="card mt-8">
                <h3 className="text-xl font-semibold mb-4 text-center">Quick Readiness Check</h3>
                <p className="text-gray-600 text-center mb-6">Take our 2-minute assessment to identify your compliance gaps</p>
                <a href="#" className="w-full btn-secondary block text-center">
                  Start Assessment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-4"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')`
          }}
        />
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-xl text-gray-600">Serving clients across the UK and Europe</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Nairobi Headquarters</h3>
              <div className="space-y-2 text-gray-600 mb-4">
                <p>📍 Westlands Business District</p>
                <p>Nairobi, Kenya</p>
                <p>📞 +254 759 689 685</p>
                <p>✉️ majorstan20@gmail.com</p>
              </div>
              <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Interactive Map</span>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">London Office</h3>
              <div className="space-y-2 text-gray-600 mb-4">
                <p>📍 123 Data Protection Street</p>
                <p>London, EC1A 1BB</p>
                <p>United Kingdom</p>
                <p>📞 +44 (0) 20 7123 4567</p>
                <p>✉️ london@dataprotect.co</p>
              </div>
              <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Interactive Map</span>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Manchester Office</h3>
              <div className="space-y-2 text-gray-600 mb-4">
                <p>📍 456 Compliance Avenue</p>
                <p>Manchester, M1 2AB</p>
                <p>United Kingdom</p>
                <p>📞 +44 (0) 161 234 5678</p>
                <p>✉️ manchester@dataprotect.co</p>
              </div>
              <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Interactive Map</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section-padding bg-red-50 border-l-4 border-red-500">
        <div className="container">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-xl text-red-600">🚨</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-900 mb-2">Data Breach Emergency Support</h3>
              <p className="text-red-800 mb-4">Experiencing a data breach? Our emergency response team is available 24/7 to provide immediate assistance.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+254759689685" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center">
                  Call Emergency: +254 759 689 685
                </a>
                <a href="mailto:majorstan20@gmail.com" className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors text-center">
                  Email: majorstan20@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to help you get started</p>
          </div>
          
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-2">How quickly can you start?</h3>
              <p className="text-sm text-gray-600">We can typically begin within 1-2 weeks of initial consultation, depending on project scope.</p>
            </div>
            
            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-2">Do you work with small businesses?</h3>
              <p className="text-sm text-gray-600">Yes, we serve organizations of all sizes with tailored solutions and flexible pricing.</p>
            </div>
            
            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-2">What's included in the free consultation?</h3>
              <p className="text-sm text-gray-600">Gap analysis, risk overview, and customized recommendations with no obligation.</p>
            </div>
            
            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-2">Do you provide ongoing support?</h3>
              <p className="text-sm text-gray-600">Yes, we offer retainer agreements for ongoing compliance monitoring and support.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}