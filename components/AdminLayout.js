import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function AdminLayout({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const router = useRouter()

  useEffect(() => {
    fetchUser()
  }, [])

  async function fetchUser() {
    try {
      const res = await fetch('/api/auth/me')
      const data = await res.json()
      if (data.user && data.user.role.name === 'admin') {
        setUser(data.user)
      } else {
        router.push('/dashboard')
      }
    } catch (error) {
      router.push('/login')
    } finally {
      setLoading(false)
    }
  }

  async function handleLogout() {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: '📊' },
    { name: 'Users', href: '/admin/users', icon: '👥' },
    { name: 'Projects', href: '/admin/projects', icon: '📁' },
    { name: 'Requests', href: '/admin/requests', icon: '📋' },
    { name: 'Analytics', href: '/admin/analytics', icon: '📈' },
    { name: 'Settings', href: '/admin/settings', icon: '⚙️' },
    { name: 'Reports', href: '/admin/reports', icon: '📄' },
    { name: 'Billing', href: '/admin/billing', icon: '💰' }
  ]

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading Admin Panel...</div>
      </div>
    )
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img src="/logo.svg" alt="DataProtect Co." className="h-8 w-auto" />
                <span className="ml-2 text-xl font-bold text-red-600">Admin Panel</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center text-white font-medium">
                  {user.firstName?.[0]}{user.lastName?.[0]}
                </div>
                <span className="text-gray-700 font-medium">
                  {user.firstName} {user.lastName}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex h-screen">
        {/* Sidebar */}
        <div className={`${sidebarCollapsed ? 'w-16' : 'w-1/5'} bg-white shadow-sm border-r border-gray-200 h-full transition-all duration-300`}>
          <div className="h-full flex flex-col">
            {/* Collapse Button */}
            <div className="p-4 border-b border-gray-200">
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="w-full flex items-center justify-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
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
                      ? 'bg-red-50 border-red-500 text-red-700'
                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  } group flex items-center ${sidebarCollapsed ? 'justify-center px-2' : 'px-4'} py-3 text-base font-medium border-l-4 rounded-r-md`}
                  title={sidebarCollapsed ? item.name : ''}
                >
                  <span className={`text-lg ${sidebarCollapsed ? '' : 'mr-4'}`}>{item.icon}</span>
                  {!sidebarCollapsed && item.name}
                </a>
              ))}
            </div>
            
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={handleLogout}
                className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center px-2' : 'px-4'} py-3 text-base font-medium text-red-600 hover:bg-red-50 rounded-md`}
                title={sidebarCollapsed ? 'Logout' : ''}
              >
                <span className={`text-lg ${sidebarCollapsed ? '' : 'mr-4'}`}>🚪</span>
                {!sidebarCollapsed && 'Logout'}
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={`${sidebarCollapsed ? 'w-[84%]' : 'w-4/5'} h-full overflow-auto`}>
          {children}
        </div>
      </div>
    </div>
  )
}