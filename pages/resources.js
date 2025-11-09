import Layout from '../components/Layout'

export default function Resources(){
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white relative">
        <img src="/logo4.png" alt="DataProtect Co." className="absolute inset-0 w-full h-full object-contain opacity-3" />
        <div className="container text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4">Resources & Insights</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Expert guidance, practical tools, and industry insights to help you navigate the world of data protection.</p>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Resources</h2>
            <p className="text-xl text-gray-600">Essential guides and tools for data protection professionals</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 transform">
              <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')"}}>
                <div className="absolute inset-0 bg-blue-600 bg-opacity-20"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">GDPR Compliance Checklist</h3>
                <p className="text-gray-600 mb-4">Complete 50-point checklist to ensure your organization meets all GDPR requirements.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">PDF • 12 pages</span>
                  <a href="/api/download?resource=gdpr-checklist" className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark transition-colors" download>Download Free</a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 transform">
              <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')"}}>
                <div className="absolute inset-0 bg-red-600 bg-opacity-20"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Data Breach Response Plan</h3>
                <p className="text-gray-600 mb-4">Step-by-step template for managing data breaches and regulatory notifications.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Template • Word Doc</span>
                  <a href="/api/download?resource=breach-response" className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark transition-colors" download>Download Free</a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 transform">
              <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')"}}>
                <div className="absolute inset-0 bg-yellow-600 bg-opacity-20"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">DPIA Assessment Tool</h3>
                <p className="text-gray-600 mb-4">Interactive tool to conduct comprehensive Data Protection Impact Assessments.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Excel • Interactive</span>
                  <a href="/api/download?resource=dpia-tool" className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark transition-colors" download>Download Free</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Insights</h2>
            <p className="text-xl text-gray-600">Stay updated with the latest trends and regulatory changes</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <article className="card">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">GDPR</span>
                <span className="text-sm text-gray-500">March 15, 2024</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">New GDPR Enforcement Trends: What Organizations Need to Know</h3>
              <p className="text-gray-600 mb-4">Recent regulatory actions show evolving enforcement patterns. Learn how to stay ahead of compliance requirements and avoid costly penalties.</p>
              <a href="#" className="text-primary font-medium hover:underline">Read More →</a>
            </article>
            
            <article className="card">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded">Security</span>
                <span className="text-sm text-gray-500">March 10, 2024</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">AI and Data Protection: Navigating the New Landscape</h3>
              <p className="text-gray-600 mb-4">As AI adoption accelerates, organizations must balance innovation with privacy protection. Explore key considerations and best practices.</p>
              <a href="#" className="text-primary font-medium hover:underline">Read More →</a>
            </article>
            
            <article className="card">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-warning/10 text-warning text-xs font-medium rounded">Compliance</span>
                <span className="text-sm text-gray-500">March 5, 2024</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Cross-Border Data Transfers: Post-Brexit Considerations</h3>
              <p className="text-gray-600 mb-4">Understanding the evolving landscape of international data transfers and adequacy decisions in a post-Brexit world.</p>
              <a href="#" className="text-primary font-medium hover:underline">Read More →</a>
            </article>
            
            <article className="card">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-purple/10 text-purple text-xs font-medium rounded">Training</span>
                <span className="text-sm text-gray-500">February 28, 2024</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Building a Privacy-First Culture: Employee Training Best Practices</h3>
              <p className="text-gray-600 mb-4">Effective strategies for creating organization-wide privacy awareness and embedding data protection into daily operations.</p>
              <a href="#" className="text-primary font-medium hover:underline">Read More →</a>
            </article>
          </div>
          
          <div className="text-center mt-8">
            <a href="#" className="btn-secondary">View All Articles</a>
          </div>
        </div>
      </section>

      {/* Webinars & Events */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Webinars & Events</h2>
            <p className="text-xl text-gray-600">Join our experts for live discussions and Q&A sessions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card border-l-4 border-primary">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">25</div>
                  <div className="text-sm text-gray-500">MAR</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">GDPR Compliance Masterclass</h3>
                  <p className="text-sm text-gray-600">2:00 PM GMT • 90 minutes</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Comprehensive overview of GDPR requirements with practical implementation strategies and real-world case studies.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-green-600">Free Registration</span>
                <a href="#" className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark transition-colors">Register Now</a>
              </div>
            </div>
            
            <div className="card border-l-4 border-accent">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">08</div>
                  <div className="text-sm text-gray-500">APR</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Data Breach Response Workshop</h3>
                  <p className="text-sm text-gray-600">10:00 AM GMT • 2 hours</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Interactive workshop covering incident response planning, breach notification requirements, and crisis management.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-green-600">Free Registration</span>
                <a href="#" className="bg-accent text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">Register Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Calculators */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive Tools</h2>
            <p className="text-xl text-gray-600">Free tools to assess and improve your data protection posture</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Compliance Readiness Check</h3>
              <p className="text-gray-600 mb-4">Quick assessment to identify gaps in your current data protection practices.</p>
              <a href="#" className="btn-primary">Start Assessment</a>
            </div>
            
            <div className="card text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">GDPR Fine Calculator</h3>
              <p className="text-gray-600 mb-4">Estimate potential GDPR fines based on your organization size and breach severity.</p>
              <a href="#" className="btn-primary">Calculate Risk</a>
            </div>
            
            <div className="card text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">ROI Calculator</h3>
              <p className="text-gray-600 mb-4">Calculate the return on investment for your data protection compliance program.</p>
              <a href="#" className="btn-primary">Calculate ROI</a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-primary text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
            <p className="text-xl text-blue-100 mb-8">Get the latest data protection insights, regulatory updates, and practical guidance delivered to your inbox.</p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button 
                type="submit" 
                className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-sm text-blue-100 mt-4">No spam. Unsubscribe anytime. Privacy policy applies.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about data protection and compliance</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">What is GDPR and who does it apply to?</h3>
              <p className="text-gray-600">The General Data Protection Regulation (GDPR) is a comprehensive privacy law that applies to any organization processing personal data of EU residents, regardless of where the organization is located.</p>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">How long does GDPR compliance implementation take?</h3>
              <p className="text-gray-600">Implementation timelines vary based on organization size and complexity, but typically range from 3-12 months. We provide detailed project timelines during our initial assessment.</p>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">What are the potential fines for GDPR non-compliance?</h3>
              <p className="text-gray-600">GDPR fines can reach up to €20 million or 4% of annual global turnover, whichever is higher. However, regulators consider various factors when determining actual penalties.</p>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Do I need a Data Protection Officer (DPO)?</h3>
              <p className="text-gray-600">A DPO is required for public authorities, organizations whose core activities involve regular monitoring of individuals, or processing of special categories of data on a large scale.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}