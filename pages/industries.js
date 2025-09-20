import Layout from '../components/Layout'

export default function Industries(){
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">Industry Expertise</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Specialized data protection solutions tailored to your industry's unique challenges and regulatory requirements.</p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Financial Services */}
            <div className="card hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏦</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Financial Services</h3>
              <p className="text-gray-600 mb-4">Banking, insurance, fintech compliance with PCI DSS, Basel III, and local financial regulations.</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Payment card data protection</li>
                <li>• Anti-money laundering compliance</li>
                <li>• Customer due diligence frameworks</li>
                <li>• Cross-border transaction monitoring</li>
              </ul>
              <a href="/contact" className="text-primary font-medium hover:underline">Learn More →</a>
            </div>

            {/* Healthcare */}
            <div className="card hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Healthcare & Life Sciences</h3>
              <p className="text-gray-600 mb-4">Medical data protection, clinical trial compliance, and health information security.</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Patient data anonymization</li>
                <li>• Clinical research compliance</li>
                <li>• Medical device security</li>
                <li>• Telemedicine privacy frameworks</li>
              </ul>
              <a href="/contact" className="text-primary font-medium hover:underline">Learn More →</a>
            </div>

            {/* Technology */}
            <div className="card hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-warning/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Technology & SaaS</h3>
              <p className="text-gray-600 mb-4">Software development, cloud services, and AI/ML privacy compliance.</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Privacy by design integration</li>
                <li>• API security assessments</li>
                <li>• AI bias detection & mitigation</li>
                <li>• Cloud architecture reviews</li>
              </ul>
              <a href="/contact" className="text-primary font-medium hover:underline">Learn More →</a>
            </div>

            {/* E-commerce */}
            <div className="card hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">E-commerce & Retail</h3>
              <p className="text-gray-600 mb-4">Customer data protection, payment processing, and marketing compliance.</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Customer consent management</li>
                <li>• Marketing automation compliance</li>
                <li>• Cross-border e-commerce</li>
                <li>• Loyalty program privacy</li>
              </ul>
              <a href="/contact" className="text-primary font-medium hover:underline">Learn More →</a>
            </div>

            {/* Education */}
            <div className="card hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-gray-600 mb-4">Student data protection, research compliance, and educational technology privacy.</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Student record protection</li>
                <li>• Research data governance</li>
                <li>• EdTech platform compliance</li>
                <li>• International student data</li>
              </ul>
              <a href="/contact" className="text-primary font-medium hover:underline">Learn More →</a>
            </div>

            {/* Government */}
            <div className="card hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Government & Public Sector</h3>
              <p className="text-gray-600 mb-4">Citizen data protection, transparency requirements, and public service delivery.</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Citizen privacy rights</li>
                <li>• Digital government services</li>
                <li>• Public procurement compliance</li>
                <li>• Inter-agency data sharing</li>
              </ul>
              <a href="/contact" className="text-primary font-medium hover:underline">Learn More →</a>
            </div>

          </div>
        </div>
      </section>

      {/* Regional Expertise */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Regional Compliance Expertise</h2>
            <p className="text-xl text-gray-600">Navigate complex multi-jurisdictional requirements</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-3xl">🇰🇪</span>
                East Africa
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Kenya Data Protection Act (DPA) 2019</li>
                <li>• Uganda Data Protection and Privacy Act</li>
                <li>• Tanzania Personal Data Protection Act</li>
                <li>• Rwanda Data Protection and Privacy Law</li>
                <li>• EAC regional harmonization initiatives</li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-3xl">🇪🇺</span>
                Europe & UK
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• EU General Data Protection Regulation (GDPR)</li>
                <li>• UK Data Protection Act 2018</li>
                <li>• Brexit adequacy decisions</li>
                <li>• Digital Services Act compliance</li>
                <li>• AI Act preparation and implementation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Industry-Specific Solutions</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Get tailored compliance strategies for your industry's unique challenges.</p>
          <a href="/contact" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">Discuss Your Industry Needs</a>
        </div>
      </section>
    </Layout>
  )
}