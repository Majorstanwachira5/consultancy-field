import { useState, useEffect } from 'react'
import AdminLayout from '../../components/AdminLayout'

export default function AdminProjects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedProject, setSelectedProject] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [filters, setFilters] = useState({
    search: '',
    status: '',
    service: ''
  })

  useEffect(() => {
    fetchProjects()
  }, [])

  async function fetchProjects() {
    try {
      const res = await fetch('/api/projects')
      const data = await res.json()
      if (data.projects) {
        setProjects(data.projects)
      }
    } catch (error) {
      console.error('Failed to fetch projects:', error)
      // Fallback to mock data
      const mockProjects = [
      {
        id: 1,
        title: 'GDPR Compliance Implementation',
        client: 'TechCorp Ltd',
        service: 'Data Protection',
        status: 'In Progress',
        priority: 'High',
        startDate: '2024-01-15',
        dueDate: '2024-03-15',
        budget: 25000,
        progress: 65,
        assignedTo: 'Sarah Johnson',
        description: 'Complete GDPR compliance implementation including policy development and staff training'
      },
      {
        id: 2,
        title: 'E-commerce Website Development',
        client: 'Fashion Store Inc',
        service: 'Website Development',
        status: 'Planning',
        priority: 'Medium',
        startDate: '2024-02-01',
        dueDate: '2024-04-01',
        budget: 15000,
        progress: 20,
        assignedTo: 'Mike Chen',
        description: 'Full e-commerce website with payment integration and inventory management'
      },
      {
        id: 3,
        title: 'Security Audit',
        client: 'HealthCare Plus',
        service: 'Security Audit',
        status: 'Completed',
        priority: 'High',
        startDate: '2024-01-01',
        dueDate: '2024-01-31',
        budget: 18000,
        progress: 100,
        assignedTo: 'David Wilson',
        description: 'Comprehensive security audit of healthcare systems and data protection measures'
      },
      {
        id: 4,
        title: 'DevOps Infrastructure Setup',
        client: 'StartupXYZ',
        service: 'DevOps Consulting',
        status: 'In Progress',
        priority: 'Medium',
        startDate: '2024-01-20',
        dueDate: '2024-02-20',
        budget: 12000,
        progress: 45,
        assignedTo: 'Alex Rodriguez',
        description: 'CI/CD pipeline setup and cloud infrastructure optimization'
      }
    ]
    
      setProjects(mockProjects)
    } finally {
      setLoading(false)
    }
  }

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                         project.client.toLowerCase().includes(filters.search.toLowerCase())
    const matchesStatus = !filters.status || project.status === filters.status
    const matchesService = !filters.service || project.service === filters.service
    
    return matchesSearch && matchesStatus && matchesService
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'Planning': return 'bg-yellow-100 text-yellow-800'
      case 'In Progress': return 'bg-blue-100 text-blue-800'
      case 'Completed': return 'bg-green-100 text-green-800'
      case 'On Hold': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800'
      case 'Medium': return 'bg-yellow-100 text-yellow-800'
      case 'Low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <AdminLayout>
        <div className="p-6">
          <div className="text-center">Loading projects...</div>
        </div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Project Management</h1>
            <p className="text-gray-600 mt-2">Track and manage all client projects</p>
          </div>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
            Create New Project
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                value={filters.search}
                onChange={(e) => setFilters({...filters, search: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                placeholder="Search projects..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={filters.status}
                onChange={(e) => setFilters({...filters, status: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              >
                <option value="">All Status</option>
                <option value="Planning">Planning</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="On Hold">On Hold</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service</label>
              <select
                value={filters.service}
                onChange={(e) => setFilters({...filters, service: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              >
                <option value="">All Services</option>
                <option value="Data Protection">Data Protection</option>
                <option value="Website Development">Website Development</option>
                <option value="Security Audit">Security Audit</option>
                <option value="DevOps Consulting">DevOps Consulting</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => setFilters({search: '', status: '', service: ''})}
                className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900 truncate">{project.title}</h3>
                <div className="flex space-x-2">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(project.priority)}`}>
                    {project.priority}
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Client:</span>
                  <span className="font-medium">{project.client}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Service:</span>
                  <span className="font-medium">{project.service}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Assigned to:</span>
                  <span className="font-medium">{project.assignedTo}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Budget:</span>
                  <span className="font-medium">${project.budget.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Due Date:</span>
                  <span className="font-medium">{new Date(project.dueDate).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{project.description}</p>

              <div className="flex justify-between items-center">
                <button
                  onClick={() => {setSelectedProject(project); setShowModal(true)}}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  View Details
                </button>
                <div className="flex space-x-2">
                  <button className="text-green-600 hover:text-green-800 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {showModal && selectedProject && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-10 mx-auto p-5 border w-11/12 max-w-4xl shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
                  <button
                    onClick={() => {setShowModal(false); setSelectedProject(null)}}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Project Information</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Client:</span>
                        <span className="font-medium">{selectedProject.client}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service:</span>
                        <span className="font-medium">{selectedProject.service}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedProject.status)}`}>
                          {selectedProject.status}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Priority:</span>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(selectedProject.priority)}`}>
                          {selectedProject.priority}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Assigned to:</span>
                        <span className="font-medium">{selectedProject.assignedTo}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Budget:</span>
                        <span className="font-medium">${selectedProject.budget.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Start Date:</span>
                        <span className="font-medium">{new Date(selectedProject.startDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Due Date:</span>
                        <span className="font-medium">{new Date(selectedProject.dueDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4">Progress & Timeline</h4>
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Overall Progress</span>
                        <span className="font-medium">{selectedProject.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                          style={{ width: `${selectedProject.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium mb-2">Description</h5>
                        <p className="text-gray-600 text-sm">{selectedProject.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 mt-8">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Edit Project
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                    Update Status
                  </button>
                  <button
                    onClick={() => {setShowModal(false); setSelectedProject(null)}}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}