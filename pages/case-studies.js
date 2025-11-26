import Layout from '../components/Layout';

export default function CaseStudies() {
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

      {/* Placeholder for Case Studies - Removed dynamic content */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Case Studies</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Details of our successful projects will be available soon. Please check back later!
          </p>
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
  );
}