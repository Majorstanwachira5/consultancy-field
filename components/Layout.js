
export default function Layout({children}){
  return (
    <div className="min-h-screen flex flex-col">
      <header className="header text-white p-4 w-full">
        <div className="w-full px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo4.png" alt="DataProtect Co." className="h-8"/>
            <div className="text-sm font-semibold">Trusted Data Protection & Consultancy</div>
          </div>
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-1">
              <a href="/" className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 font-medium">Home</a>
              <a href="/services" className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 font-medium">Services</a>
              <a href="/about" className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 font-medium">About</a>
              <a href="/industries" className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 font-medium">Industries</a>
              <a href="/case-studies" className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 font-medium">Case Studies</a>
              <a href="/resources" className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 font-medium">Resources</a>
              <a href="/contact" className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 font-medium">Contact</a>
            </nav>
            <a href="/login" className="bg-white text-primary px-6 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium shadow-lg">Sign In</a>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="footer p-8 mt-12 w-full">
        <div className="w-full px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo4.png" alt="DataProtect Co." className="h-6"/>
                <span className="font-semibold">DataProtect Co.</span>
              </div>
              <p className="text-gray-300 text-sm">Professional data protection consultancy helping organizations achieve compliance and build trust.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/services#gdpr" className="hover:text-white">GDPR Compliance</a></li>
                <li><a href="/services#risk" className="hover:text-white">Risk Assessments</a></li>
                <li><a href="/services#audit" className="hover:text-white">IT Audits</a></li>
                <li><a href="/services#governance" className="hover:text-white">Data Governance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/industries" className="hover:text-white">Industries</a></li>
                <li><a href="/case-studies" className="hover:text-white">Case Studies</a></li>
                <li><a href="/resources" className="hover:text-white">Resources</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>📧 majorstan20@gmail.com</p>
                <p>📞 +254 759 689 685 (Kenya)</p>
                <p>📞 +44 (0) 20 7123 4567 (UK)</p>
                <p>📍 Nairobi, Kenya | London, UK</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 flex justify-between items-center text-sm text-gray-400">
            <div>© 2025 DataProtect Co. All rights reserved.</div>
            <div>Privacy Policy | Terms of Service</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
