import Layout from '../components/Layout'

export default function Services(){
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white relative">
        <img src="/logo4.png" alt="DataProtect Co." className="absolute inset-0 w-full h-full object-contain opacity-3" />
        <div className="container text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4">Comprehensive Data Protection Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Expert consultancy services to help your organization achieve compliance, manage risks, and build customer trust.</p>
        </div>
      </section>

      {/* GDPR Compliance */}
      <section id="gdpr" className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">🛡️ GDPR Compliance</h2>
              <p className="text-lg text-gray-600 mb-6">Achieve bulletproof GDPR compliance with our 360-degree assessment covering legal basis optimization, data subject rights automation, international transfer mechanisms, and regulatory relationship management.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Advanced Gap Analysis & AI-Powered Assessment</h4>
                    <p className="text-gray-600">Deep-dive evaluation using proprietary assessment tools, automated compliance scoring, and predictive risk modeling.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Strategic Implementation Roadmap</h4>
                    <p className="text-gray-600">Phased implementation with resource optimization, change management, and continuous compliance monitoring integration.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Documentation & Templates</h4>
                    <p className="text-gray-600">Privacy notices, consent forms, and policy templates tailored to your business.</p>
                  </div>
                </div>
              </div>
              
              <a href="/contact" className="btn-primary">Get GDPR Assessment</a>
            </div>
            <div className="card">
              <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop" 
                  alt="GDPR Compliance"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">What You Get:</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Complete compliance audit report</li>
                <li>• Risk assessment and mitigation plan</li>
                <li>• Staff training materials</li>
                <li>• Ongoing compliance monitoring</li>
                <li>• Breach response procedures</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      {/* Risk Assessments */}
      <section id="risk" className="section-padding bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="card">
              <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop" 
                  alt="Risk Assessment"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">DPIA Process:</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span className="text-gray-700">Data flow mapping and analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span className="text-gray-700">Risk identification and assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span className="text-gray-700">Mitigation strategies development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <span className="text-gray-700">Implementation and monitoring</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">📊 Risk Assessments & DPIAs</h2>
              <p className="text-lg text-gray-600 mb-6">Advanced DPIAs with algorithmic bias detection, automated risk scoring, third-party integration assessments, and continuous monitoring for emerging technologies like AI and IoT.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Systematic Risk Evaluation</h4>
                    <p className="text-gray-600">Thorough analysis of data processing activities and associated privacy risks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Regulatory Documentation</h4>
                    <p className="text-gray-600">Compliant DPIA reports ready for regulatory review and approval.</p>
                  </div>
                </div>
              </div>
              
              <a href="/contact" className="btn-secondary">Request DPIA</a>
            </div>
          </div>
        </div>
      </section>

      {/* IT Audits */}
      <section id="audit" className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🔍 IT Security Audits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive security assessments to identify vulnerabilities and ensure your IT infrastructure meets data protection standards.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop" 
                  alt="Security Assessment"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Security Assessment</h3>
              <p className="text-gray-600">Network security, access controls, and vulnerability scanning to identify potential threats.</p>
            </div>
            <div className="card text-center">
              <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop" 
                  alt="Compliance Verification"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compliance Verification</h3>
              <p className="text-gray-600">Verify adherence to ISO 27001, SOC 2, and other security frameworks.</p>
            </div>
            <div className="card text-center">
              <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop" 
                  alt="Remediation Plan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Remediation Plan</h3>
              <p className="text-gray-600">Detailed action plan with prioritized recommendations and implementation guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Governance */}
      <section id="governance" className="section-padding bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">⚖️ Data Governance & Training</h2>
              <p className="text-lg text-gray-600 mb-6">Build a culture of data protection with comprehensive governance frameworks, policies, and staff training programs.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Policy Development</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Data retention policies</li>
                    <li>• Privacy by design frameworks</li>
                    <li>• Incident response procedures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Training Programs</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• GDPR awareness training</li>
                    <li>• Phishing simulations</li>
                    <li>• Tabletop exercises</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop" 
                  alt="Training Programs"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Training Modules:</h3>
              <div className="space-y-3">
                <div className="p-3 bg-purple/5 rounded-lg">
                  <h5 className="font-medium text-gray-900">Executive Briefing</h5>
                  <p className="text-sm text-gray-600">Strategic overview for leadership teams</p>
                </div>
                <div className="p-3 bg-purple/5 rounded-lg">
                  <h5 className="font-medium text-gray-900">Staff Awareness</h5>
                  <p className="text-sm text-gray-600">General data protection principles</p>
                </div>
                <div className="p-3 bg-purple/5 rounded-lg">
                  <h5 className="font-medium text-gray-900">Technical Deep-Dive</h5>
                  <p className="text-sm text-gray-600">For IT and security teams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Contact us today for a free consultation and discover how we can help protect your organization.</p>
          <a href="/contact" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">Book Free Consultation</a>
        </div>
      </section>
    </Layout>
  )
}
