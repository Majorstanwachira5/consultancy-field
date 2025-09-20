import Layout from '../components/Layout'

export default function Home(){
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6 fade-in">Trusted Data Protection Consultancy</h1>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">We help organizations achieve GDPR compliance, manage data risks, and build customer trust through expert consultancy and proven methodologies.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg">Book Free Consultation</a>
            <a href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">Explore Services</a>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive data protection solutions tailored to your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">GDPR Compliance</h3>
              <p className="text-gray-600 mb-4">End-to-end GDPR compliance including legal basis mapping, consent management, cross-border transfer mechanisms, and regulatory liaison.</p>
              <a href="/services#gdpr" className="text-primary font-medium hover:underline">Learn More →</a>
            </div>
            
            <div className="card text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Risk Assessments</h3>
              <p className="text-gray-600 mb-4">Systematic DPIAs, algorithmic impact assessments, vendor risk evaluations, and continuous monitoring frameworks with regulatory reporting.</p>
              <a href="/services#risk" className="text-primary font-medium hover:underline">Learn More →</a>
            </div>
            
            <div className="card text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">IT Security Audits</h3>
              <p className="text-gray-600 mb-4">Penetration testing, cloud security assessments, API security reviews, encryption audits, and multi-framework compliance (ISO 27001, SOC 2, NIST).</p>
              <a href="/services#audit" className="text-primary font-medium hover:underline">Learn More →</a>
            </div>
            
            <div className="card text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Data Governance</h3>
              <p className="text-gray-600 mb-4">Data lifecycle management, automated policy enforcement, AI governance frameworks, privacy-by-design integration, and executive dashboards.</p>
              <a href="/services#governance" className="text-primary font-medium hover:underline">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-gray-50">
        <div className="container">
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
            <div className="text-2xl font-bold text-gray-400">Safaricom</div>
            <div className="text-2xl font-bold text-gray-400">Equity Bank</div>
            <div className="text-2xl font-bold text-gray-400">NCBA Group</div>
            <div className="text-2xl font-bold text-gray-400">Britam</div>
            <div className="text-2xl font-bold text-gray-400">KCB Bank</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Data?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Get a free audit readiness check and discover how we can help you achieve compliance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">Start Free Assessment</a>
            <a href="/resources" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">Download Guide</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
