import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function AuthLayout({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const router = useRouter()

  useEffect(() => {
    fetchUser()
  }, [])

  async function fetchUser() {
    try {
      const res = await fetch('/api/auth/me')
      const data = await res.json()
      if (data.user) setUser(data.user)
    } catch (error) {
      console.error('Auth check failed:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleLogout() {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      setUser(null)
      router.push('/')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: '🏠' },
    { name: 'Services', href: '/app/services', icon: '🛠️' },
    { name: 'Website Builder', href: '/app/website-builder', icon: '🌐' },
    { name: 'DevOps Consulting', href: '/app/devops', icon: '⚙️' },
    { name: 'Data Protection', href: '/app/data-protection', icon: '🔒' },
    { name: 'Audit & Compliance', href: '/app/audit', icon: '📋' },
    { name: 'Certification', href: '/app/certification', icon: '🏆' },
    { name: 'Media Library', href: '/app/media', icon: '📁' },
    { name: 'Shop', href: '/app/shop', icon: '🛒' },
    { name: 'Support', href: '/app/support', icon: '💬' }
  ]

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 lg:hidden"
              >
                <span className="sr-only">Open sidebar</span>
                ☰
              </button>
              <div className="flex-shrink-0 flex items-center">
                <img src="/logo.svg" alt="DataProtect Co." className="h-8 w-auto" />
                <span className="text-xl font-bold text-gray-900">DataProtect Co.</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <button
                      onClick={() => router.push('/app/profile')}
                      className="flex items-center space-x-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                        {user.firstName?.[0]}{user.lastName?.[0]}
                      </div>
                      <span className="hidden md:block text-gray-700 font-medium">
                        {user.firstName} {user.lastName}
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <a href="/login" className="text-gray-500 hover:text-gray-700">Sign in</a>
                  <a href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Sign up
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="flex h-screen">
        {/* Sidebar */}
        {user && (
          <div className={`${sidebarOpen ? 'block' : 'hidden'} lg:block ${sidebarCollapsed ? 'w-16' : 'w-1/5'} bg-gradient-to-b from-blue-50 to-blue-100 shadow-sm border-r border-blue-200 h-full transition-all duration-300`}>
            <div className="h-full flex flex-col">
              {/* Collapse Button */}
              <div className="p-2 border-b border-blue-200">
                <button
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  className="w-full flex items-center justify-center p-2 text-blue-600 hover:bg-blue-200 rounded-md transition-colors"
                >
                  <span className="text-lg">{sidebarCollapsed ? '→' : '←'}</span>
                </button>
              </div>
              
              <div className="flex-1 space-y-3 p-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`${
                      router.pathname === item.href
                        ? 'bg-blue-200 border-blue-600 text-blue-800 shadow-sm'
                        : 'border-transparent text-blue-700 hover:bg-blue-200 hover:text-blue-800'
                    } group flex items-center ${sidebarCollapsed ? 'justify-center px-2' : 'px-4'} py-3 text-base font-medium border-l-4 rounded-r-md transition-all duration-200`}
                    title={sidebarCollapsed ? item.name : ''}
                  >
                    <span className={`text-lg ${sidebarCollapsed ? '' : 'mr-4'}`}>{item.icon}</span>
                    {!sidebarCollapsed && item.name}
                  </a>
                ))}
              </div>
              
              <div className="p-4 border-t border-blue-200">
                <button
                  onClick={handleLogout}
                  className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center px-2' : 'px-4'} py-3 text-base font-medium text-red-600 hover:bg-red-100 rounded-md transition-colors`}
                  title={sidebarCollapsed ? 'Logout' : ''}
                >
                  <span className={`text-lg ${sidebarCollapsed ? '' : 'mr-4'}`}>🚪</span>
                  {!sidebarCollapsed && 'Logout'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className={`${user ? (sidebarCollapsed ? 'w-[84%]' : 'w-4/5') : 'w-full'} h-full overflow-auto`}>
          {children}
        </div>
      </div>
    </div>
  )
}