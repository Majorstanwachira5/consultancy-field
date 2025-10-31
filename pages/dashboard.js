import AuthLayout from '../components/AuthLayout'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalProjects: 12,
    activeConsultations: 3,
    completedAudits: 8,
    certifications: 2
  })
  const [recentActivity, setRecentActivity] = useState([
    { id: 1, type: 'Website Request', status: 'In Progress', date: '2024-01-15' },
    { id: 2, type: 'DevOps Consultation', status: 'Completed', date: '2024-01-14' },
    { id: 3, type: 'Data Protection Audit', status: 'Scheduled', date: '2024-01-16' }
  ])
  const router = useRouter()

  return (
    <AuthLayout>
      <div className="p-6">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome to your comprehensive consultancy platform</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <span className="text-2xl">📊</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Projects</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.totalProjects}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <span className="text-2xl">💬</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Consultations</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.activeConsultations}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <span className="text-2xl">📋</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed Audits</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.completedAudits}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <span className="text-2xl">🏆</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Certifications</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.certifications}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-lg font-semibold mb-2">Website Builder</h3>
              <p className="text-gray-600 text-sm mb-4">Create professional websites with our expert team</p>
              <button 
                onClick={() => router.push('/app/website-builder')}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full"
              >
                Get Started
              </button>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-lg font-semibold mb-2">DevOps Consulting</h3>
              <p className="text-gray-600 text-sm mb-4">Optimize your infrastructure and deployment processes</p>
              <button 
                onClick={() => router.push('/app/devops')}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 w-full"
              >
                Consult Now
              </button>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold mb-2">Data Protection</h3>
              <p className="text-gray-600 text-sm mb-4">GDPR compliance and data security consulting</p>
              <button 
                onClick={() => router.push('/app/data-protection')}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 w-full"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{activity.type}</p>
                    <p className="text-sm text-gray-600">{activity.date}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    activity.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    activity.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {activity.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}