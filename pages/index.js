import Layout from '../components/Layout'

export default function Home(){
  return (
    <Layout>
      {/* Full Page Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto backdrop-blur-sm bg-black bg-opacity-30 rounded-2xl p-8">
          <img src="/logo4.png" alt="DataProtect Co." className="w-32 h-32 mx-auto mb-4 object-contain" />
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">Trusted Data Protection Consultancy</h1>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed">We help organizations achieve GDPR compliance, manage data risks, and build customer trust through expert consultancy and proven methodologies.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/contact" className="bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-2xl">Book Free Consultation</a>
            <a href="/services" className="border-3 border-white text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">Explore Services</a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll Down</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding w-full relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-4"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')`
          }}
        />
        <div className="w-full px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive data protection solutions tailored to your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white/90 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <div className="h-full bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')"}}></div>
                <div className="absolute inset-0 bg-blue-600 bg-opacity-20"></div>
                <img src="/logomain.jpeg" alt="DataProtect Co." className="absolute bottom-4 right-4 w-16 h-16 opacity-20 object-contain" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <a href="/services#gdpr" className="text-white px-6 py-3 rounded-lg font-medium bg-primary hover:bg-primary-dark transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">GDPR Compliance</h3>
                <p className="text-gray-600 text-sm">End-to-end GDPR compliance including legal basis mapping, consent management, cross-border transfer mechanisms, and regulatory liaison.</p>
              </div>
            </div>
            
            <div className="group bg-white/90 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <div className="h-full bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')"}}></div>
                <div className="absolute inset-0 bg-green-600 bg-opacity-20"></div>
                <img src="/logomain.jpeg" alt="DataProtect Co." className="absolute bottom-4 right-4 w-16 h-16 opacity-20 object-contain" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <a href="/services#risk" className="text-white px-6 py-3 rounded-lg font-medium bg-green-600 hover:bg-green-700 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Risk Assessments</h3>
                <p className="text-gray-600 text-sm">Systematic DPIAs, algorithmic impact assessments, vendor risk evaluations, and continuous monitoring frameworks with regulatory reporting.</p>
              </div>
            </div>
            
            <div className="group bg-white/90 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <div className="h-full bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')"}}></div>
                <div className="absolute inset-0 bg-orange-600 bg-opacity-20"></div>
                <img src="/logomain.jpeg" alt="DataProtect Co." className="absolute bottom-4 right-4 w-16 h-16 opacity-20 object-contain" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔍</span>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <a href="/services#audit" className="text-white px-6 py-3 rounded-lg font-medium bg-orange-600 hover:bg-orange-700 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">IT Security Audits</h3>
                <p className="text-gray-600 text-sm">Penetration testing, cloud security assessments, API security reviews, encryption audits, and multi-framework compliance (ISO 27001, SOC 2, NIST).</p>
              </div>
            </div>
            
            <div className="group bg-white/90 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <div className="h-full bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')"}}></div>
                <div className="absolute inset-0 bg-purple-600 bg-opacity-20"></div>
                <img src="/logomain.jpeg" alt="DataProtect Co." className="absolute bottom-4 right-4 w-16 h-16 opacity-20 object-contain" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚖️</span>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <a href="/services#governance" className="text-white px-6 py-3 rounded-lg font-medium bg-purple-600 hover:bg-purple-700 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Data Governance</h3>
                <p className="text-gray-600 text-sm">Data lifecycle management, automated policy enforcement, AI governance frameworks, privacy-by-design integration, and executive dashboards.</p>
              </div>
            </div>
          </div>
          
          {/* Additional Services Row */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 transform">
              <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')"}}>
                <div className="absolute inset-0 bg-blue-600 bg-opacity-20"></div>
                <img src="/logomain.jpeg" alt="DataProtect Co." className="absolute bottom-4 right-4 w-16 h-16 opacity-20 object-contain" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌐</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Website Development</h3>
                <p className="text-gray-600 mb-4 text-sm">Professional website development from concept to deployment with modern design, SEO optimization, and CMS integration.</p>
                <a href="/app/website-builder" className="text-primary font-medium hover:underline">Get Started →</a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 transform">
              <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')"}}>
                <div className="absolute inset-0 bg-green-600 bg-opacity-20"></div>
                <img src="/logomain.jpeg" alt="DataProtect Co." className="absolute bottom-4 right-4 w-16 h-16 opacity-20 object-contain" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚙️</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">DevOps Consulting</h3>
                <p className="text-gray-600 mb-4 text-sm">Infrastructure optimization, CI/CD pipelines, cloud migration, and deployment automation for scalable systems.</p>
                <a href="/app/devops" className="text-primary font-medium hover:underline">Consult Now →</a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 transform">
              <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')"}}>
                <div className="absolute inset-0 bg-yellow-600 bg-opacity-20"></div>
                <img src="/logomain.jpeg" alt="DataProtect Co." className="absolute bottom-4 right-4 w-16 h-16 opacity-20 object-contain" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Certification Support</h3>
                <p className="text-gray-600 mb-4 text-sm">Expert guidance for ISO 27001, SOC 2, PCI DSS, HIPAA, GDPR, and FedRAMP certifications with complete implementation support.</p>
                <a href="/app/certification" className="text-primary font-medium hover:underline">Get Certified →</a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 transform">
              <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')"}}>
                <div className="absolute inset-0 bg-red-600 bg-opacity-20"></div>
                <img src="/logomain.jpeg" alt="DataProtect Co." className="absolute bottom-4 right-4 w-16 h-16 opacity-20 object-contain" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">📁</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Media Library</h3>
                <p className="text-gray-600 mb-4 text-sm">Secure document management, file storage, categorization, and sharing with advanced search and organization features.</p>
                <a href="/app/media" className="text-primary font-medium hover:underline">Manage Files →</a>
              </div>
            </div>
          </div>
          
          {/* Third Services Row */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 transform">
              <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')"}}>
                <div className="absolute inset-0 bg-purple-600 bg-opacity-20"></div>
                <img src="/logomain.jpeg" alt="DataProtect Co." className="absolute bottom-4 right-4 w-16 h-16 opacity-20 object-contain" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">🛒</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Consultancy Shop</h3>
                <p className="text-gray-600 mb-4 text-sm">Professional templates, training courses, toolkits, and consultation services for data protection and compliance.</p>
                <a href="/app/shop" className="text-primary font-medium hover:underline">Browse Shop →</a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 transform">
              <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')"}}>
                <div className="absolute inset-0 bg-indigo-600 bg-opacity-20"></div>
                <img src="/logomain.jpeg" alt="DataProtect Co." className="absolute bottom-4 right-4 w-16 h-16 opacity-20 object-contain" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Support Center</h3>
                <p className="text-gray-600 mb-4 text-sm">24/7 expert support, comprehensive FAQ, ticket system, and extensive resources for all your consultancy needs.</p>
                <a href="/app/support" className="text-primary font-medium hover:underline">Get Support →</a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 transform">
              <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')"}}>
                <div className="absolute inset-0 bg-teal-600 bg-opacity-20"></div>
                <img src="/logomain.jpeg" alt="DataProtect Co." className="absolute bottom-4 right-4 w-16 h-16 opacity-20 object-contain" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">All Services</h3>
                <p className="text-gray-600 mb-4 text-sm">Explore our complete range of consultancy services including custom solutions tailored to your business needs.</p>
                <a href="/app/services" className="text-primary font-medium hover:underline">View All →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-gray-50 w-full relative">
        <img src="/logo4.png" alt="DataProtect Co." className="absolute inset-0 w-full h-full object-contain opacity-5" />
        <div className="w-full px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted Across Africa & Europe</h2>
            <p className="text-gray-600">Join 500+ companies across Kenya, UK, and beyond who trust us with their data protection needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Companies Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Compliance Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
          
          <div className="flex justify-center items-center space-x-8 opacity-60 flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div className="text-xl font-bold text-gray-400">Safaricom</div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <div className="text-xl font-bold text-gray-400">Equity Bank</div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <div className="text-xl font-bold text-gray-400">NCBA Group</div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <div className="text-xl font-bold text-gray-400">Britam</div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <div className="text-xl font-bold text-gray-400">KCB Bank</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding w-full relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>
        <div className="relative z-10 w-full px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Data?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Get a free audit readiness check and discover how we can help you achieve compliance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">Start Free Assessment</a>
            <a href="/resources" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">Download Guide</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
