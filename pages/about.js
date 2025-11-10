import Layout from '../components/Layout'

export default function About(){
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">About DataProtect Co.</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Leading data protection consultancy with over a decade of experience helping organizations achieve compliance and build customer trust.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-4"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')`
          }}
        />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">Founded in 2012, DataProtect Co. emerged from a simple belief: every organization deserves expert guidance to navigate the complex world of data protection. What started as a small consultancy has grown into a trusted partner for over 500 organizations worldwide.</p>
              
              <p className="text-gray-600 mb-6">Our team of certified data protection professionals brings together expertise in law, technology, and business operations to deliver practical, actionable solutions that protect both your organization and your customers.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Our Mission</h4>
                  <p className="text-sm text-gray-600">To make data protection accessible, practical, and effective for organizations of all sizes.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Our Vision</h4>
                  <p className="text-sm text-gray-600">A world where data protection is seamlessly integrated into every business operation.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">Proven Track Record</h5>
                    <p className="text-sm text-gray-600">98% compliance success rate across 500+ projects</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">Expert Team</h5>
                    <p className="text-sm text-gray-600">Certified professionals with legal and technical expertise</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">Practical Approach</h5>
                    <p className="text-sm text-gray-600">Business-focused solutions that work in the real world</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-4"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')`
          }}
        />
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600">Certified professionals dedicated to your data protection success</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-primary font-medium mb-2">Managing Director & Lead Consultant</p>
              <p className="text-sm text-gray-600 mb-4">CIPP/E, CIPM, FIP - 15+ years in data protection law and compliance</p>
              <div className="flex justify-center space-x-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">GDPR Expert</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Legal</span>
              </div>
            </div>
            
            <div className="card text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
              <p className="text-primary font-medium mb-2">Technical Director</p>
              <p className="text-sm text-gray-600 mb-4">CISSP, CISA - Cybersecurity and IT audit specialist</p>
              <div className="flex justify-center space-x-2">
                <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Security</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">IT Audit</span>
              </div>
            </div>
            
            <div className="card text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👩‍🏫</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Emma Williams</h3>
              <p className="text-primary font-medium mb-2">Training & Compliance Manager</p>
              <p className="text-sm text-gray-600 mb-4">CIPP/E, CIPT - Specializes in staff training and awareness programs</p>
              <div className="flex justify-center space-x-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Training</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Partners */}
      <section className="section-padding relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-4"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')`
          }}
        />
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Partnerships</h2>
            <p className="text-xl text-gray-600">Recognized expertise and trusted partnerships</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Professional Certifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="card text-center">
                  <div className="text-2xl mb-2">🏆</div>
                  <h4 className="font-semibold">IAPP Certified</h4>
                  <p className="text-sm text-gray-600">CIPP/E, CIPM, CIPT</p>
                </div>
                <div className="card text-center">
                  <div className="text-2xl mb-2">🔒</div>
                  <h4 className="font-semibold">Security Certified</h4>
                  <p className="text-sm text-gray-600">CISSP, CISA, CISM</p>
                </div>
                <div className="card text-center">
                  <div className="text-2xl mb-2">📋</div>
                  <h4 className="font-semibold">ISO Certified</h4>
                  <p className="text-sm text-gray-600">ISO 27001 Lead Auditor</p>
                </div>
                <div className="card text-center">
                  <div className="text-2xl mb-2">⚖️</div>
                  <h4 className="font-semibold">Legal Qualified</h4>
                  <p className="text-sm text-gray-600">Solicitors & Barristers</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Trusted Partners</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <span className="font-medium">International Association of Privacy Professionals</span>
                  <span className="text-primary">IAPP</span>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <span className="font-medium">Information Commissioner's Office</span>
                  <span className="text-primary">ICO</span>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <span className="font-medium">British Standards Institution</span>
                  <span className="text-primary">BSI</span>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <span className="font-medium">Cyber Security Alliance</span>
                  <span className="text-primary">CSA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Let our experienced team help you achieve data protection excellence.</p>
          <a href="/contact" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">Get in Touch</a>
        </div>
      </section>
    </Layout>
  )
}