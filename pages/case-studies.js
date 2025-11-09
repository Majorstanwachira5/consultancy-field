import Layout from '../components/Layout'

export default function CaseStudies(){
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white relative">
        <img src="/logo4.png" alt="DataProtect Co." className="absolute inset-0 w-full h-full object-contain opacity-3" />
        <div className="container text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4">Success Stories</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Real results from real clients. See how we've helped organizations achieve compliance and build customer trust.</p>
        </div>
      </section>

      {/* Case Study 1 */}
      <section className="section-padding">
        <div className="container">
          <div className="card mb-12">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🏦</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Regional Bank GDPR Transformation</h2>
                    <p className="text-gray-600">Financial Services • 2,500 employees</p>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-900">The Challenge</h3>
                <p className="text-gray-600 mb-4">A regional bank needed to achieve GDPR compliance across multiple branches while maintaining operational efficiency. They faced complex data flows, legacy systems, and tight regulatory deadlines.</p>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Our Solution</h3>
                <ul className="text-gray-600 space-y-2 mb-4">
                  <li>• Comprehensive data mapping across all systems and processes</li>
                  <li>• Risk assessment and DPIA for high-risk processing activities</li>
                  <li>• Staff training program for 2,500+ employees</li>
                  <li>• Implementation of privacy by design principles</li>
                  <li>• Ongoing compliance monitoring and support</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-900">The Outcome</h3>
                <p className="text-gray-600">Achieved full GDPR compliance 3 months ahead of deadline with zero regulatory findings during subsequent audits.</p>
              </div>
              
              <div className="space-y-6">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Compliance Achievement</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">3 months</div>
                  <div className="text-sm text-gray-600">Ahead of Schedule</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">£2.5M</div>
                  <div className="text-sm text-gray-600">Potential Fines Avoided</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 2 */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="card mb-12">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🏥</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Healthcare Provider Data Security Overhaul</h2>
                    <p className="text-gray-600">Healthcare • 1,200 employees</p>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-900">The Challenge</h3>
                <p className="text-gray-600 mb-4">A healthcare provider experienced a minor data breach and needed to strengthen their security posture while ensuring patient data protection compliance across multiple facilities.</p>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Our Solution</h3>
                <ul className="text-gray-600 space-y-2 mb-4">
                  <li>• Complete IT security audit and vulnerability assessment</li>
                  <li>• Implementation of ISO 27001 security framework</li>
                  <li>• Staff security awareness training and phishing simulations</li>
                  <li>• Incident response plan development and testing</li>
                  <li>• Ongoing security monitoring and compliance support</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-900">The Outcome</h3>
                <p className="text-gray-600">Achieved ISO 27001 certification and reduced security incidents by 95% within 12 months.</p>
              </div>
              
              <div className="space-y-6">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600">Incident Reduction</div>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">ISO 27001</div>
                  <div className="text-sm text-gray-600">Certification Achieved</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">12 months</div>
                  <div className="text-sm text-gray-600">Implementation Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 3 */}
      <section className="section-padding">
        <div className="container">
          <div className="card mb-12">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🛒</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">E-commerce Platform Privacy Enhancement</h2>
                    <p className="text-gray-600">Retail Technology • 500 employees</p>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-900">The Challenge</h3>
                <p className="text-gray-600 mb-4">A growing e-commerce platform needed to implement privacy by design principles while scaling their operations across multiple European markets.</p>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Our Solution</h3>
                <ul className="text-gray-600 space-y-2 mb-4">
                  <li>• Privacy by design integration into development processes</li>
                  <li>• Multi-jurisdiction compliance framework (GDPR, CCPA)</li>
                  <li>• Customer consent management system implementation</li>
                  <li>• Data minimization and retention policy development</li>
                  <li>• Regular privacy impact assessments for new features</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-900">The Outcome</h3>
                <p className="text-gray-600">Successfully expanded to 15 European markets with full regulatory compliance and improved customer trust scores.</p>
              </div>
              
              <div className="space-y-6">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">15</div>
                  <div className="text-sm text-gray-600">Markets Expanded</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">40%</div>
                  <div className="text-sm text-gray-600">Trust Score Increase</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Zero</div>
                  <div className="text-sm text-gray-600">Compliance Issues</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="section-padding bg-primary text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proven Results Across Industries</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">Our track record speaks for itself. Here's what we've achieved for our clients.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">£50M+</div>
              <div className="text-blue-100">Fines Prevented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 transform">
              <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')"}}>
                <div className="absolute inset-0 bg-blue-600 bg-opacity-20"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xl">👨💼</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold">James Mitchell</h4>
                    <p className="text-sm text-gray-600">CTO, TechCorp</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">"DataProtect Co. transformed our approach to data protection. Their expertise and practical guidance helped us achieve compliance while improving our operational efficiency."</p>
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 transform">
              <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')"}}>
                <div className="absolute inset-0 bg-green-600 bg-opacity-20"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xl">👩💼</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold">Sarah Davis</h4>
                    <p className="text-sm text-gray-600">Compliance Director, SecureBank</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">"Outstanding service and expertise. The team's knowledge of both regulatory requirements and practical implementation is unmatched."</p>
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 transform">
              <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')"}}>
                <div className="absolute inset-0 bg-red-600 bg-opacity-20"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xl">👨⚕️</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold">Dr. Robert Chen</h4>
                    <p className="text-sm text-gray-600">Medical Director, HealthTech</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">"Professional, thorough, and results-driven. DataProtect Co. helped us navigate complex healthcare regulations with confidence."</p>
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Let us help you achieve compliance excellence and build customer trust.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">Start Your Success Story</a>
            <a href="/resources" className="btn-secondary">Download Case Study Guide</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}