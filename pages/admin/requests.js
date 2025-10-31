import { useState, useEffect } from 'react'
import AdminLayout from '../../components/AdminLayout'

export default function AdminRequests() {
  const [requests, setRequests] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedRequest, setSelectedRequest] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [filters, setFilters] = useState({
    search: '',
    status: '',
    service: '',
    priority: ''
  })

  useEffect(() => {
    fetchRequests()
  }, [])

  async function fetchRequests() {
    // Mock data - replace with actual API
    const mockRequests = [
      {
        id: 1,
        type: 'Website Development',
        client: 'Fashion Store Inc',
        email: 'contact@fashionstore.com',
        phone: '+1-555-0123',
        status: 'New',
        priority: 'Medium',
        budget: '$5,000 - $10,000',
        timeline: '3-4 weeks',
        submittedAt: '2024-01-20T10:30:00Z',
        description: 'Need a modern e-commerce website with payment integration and inventory management system.',
        requirements: 'Responsive design, SEO optimization, payment gateway integration, admin panel',
        projectName: 'Fashion Store E-commerce Platform'
      },
      {
        id: 2,
        type: 'Data Protection',
        client: 'HealthCare Plus',
        email: 'admin@healthcareplus.com',
        phone: '+1-555-0456',
        status: 'In Review',
        priority: 'High',
        budget: '$10,000 - $25,000',
        timeline: 'Within 3 months',
        submittedAt: '2024-01-19T14:15:00Z',
        description: 'GDPR compliance implementation for healthcare data processing.',
        requirements: 'GDPR audit, policy development, staff training, technical implementation',
        organization: 'HealthCare Plus Medical Center',
        industry: 'Healthcare',
        dataTypes: ['Health Records', 'Personal Data', 'Employee Data']
      },
      {
        id: 3,
        type: 'DevOps Consulting',
        client: 'TechStartup XYZ',
        email: 'cto@techstartup.com',
        phone: '+1-555-0789',
        status: 'Approved',
        priority: 'High',
        budget: '$10,000+',
        timeline: 'ASAP',
        submittedAt: '2024-01-18T09:45:00Z',
        description: 'Need help setting up CI/CD pipeline and cloud infrastructure optimization.',
        requirements: 'AWS infrastructure, Docker containers, automated deployment, monitoring setup',
        company: 'TechStartup XYZ',
        currentSetup: 'Basic AWS setup with manual deployments',
        challenges: 'Slow deployment process, lack of monitoring, scaling issues'
      },
      {
        id: 4,
        type: 'Security Audit',
        client: 'Financial Corp',
        email: 'security@financialcorp.com',
        phone: '+1-555-0321',
        status: 'Completed',
        priority: 'High',
        budget: '$25,000 - $50,000',
        timeline: 'Within 1 month',
        submittedAt: '2024-01-10T16:20:00Z',
        description: 'Comprehensive security audit of financial systems and compliance review.',
        requirements: 'PCI DSS compliance, vulnerability assessment, penetration testing',
        organization: 'Financial Corp Ltd',
        industry: 'Financial Services',
        auditScope: ['IT Infrastructure', 'Data Security', 'Financial Controls']
      }
    ]
    
    setRequests(mockRequests)
    setLoading(false)
  }

  async function updateRequestStatus(requestId, newStatus) {
    // Mock update - replace with actual API call
    setRequests(requests.map(req => 
      req.id === requestId ? { ...req, status: newStatus } : req
    ))
    setShowModal(false)
    setSelectedRequest(null)
  }

  const filteredRequests = requests.filter(request => {
    const matchesSearch = request.client.toLowerCase().includes(filters.search.toLowerCase()) ||
                         request.type.toLowerCase().includes(filters.search.toLowerCase())
    const matchesStatus = !filters.status || request.status === filters.status
    const matchesService = !filters.service || request.type === filters.service
    const matchesPriority = !filters.priority || request.priority === filters.priority
    
    return matchesSearch && matchesStatus && matchesService && matchesPriority
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-800'
      case 'In Review': return 'bg-yellow-100 text-yellow-800'
      case 'Approved': return 'bg-green-100 text-green-800'
      case 'Rejected': return 'bg-red-100 text-red-800'
      case 'Completed': return 'bg-gray-100 text-gray-800'
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
          <div className="text-center">Loading requests...</div>
        </div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Service Requests</h1>
          <p className="text-gray-600 mt-2">Manage all incoming service requests and consultations</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <span className="text-2xl">📋</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Requests</p>
                <p className="text-2xl font-semibold text-gray-900">{requests.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <span className="text-2xl">⏳</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {requests.filter(r => r.status === 'New' || r.status === 'In Review').length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <span className="text-2xl">✅</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Approved</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {requests.filter(r => r.status === 'Approved').length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <span className="text-2xl">🔥</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">High Priority</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {requests.filter(r => r.priority === 'High').length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                value={filters.search}
                onChange={(e) => setFilters({...filters, search: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                placeholder="Search requests..."
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
                <option value="New">New</option>
                <option value="In Review">In Review</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
                <option value="Completed">Completed</option>
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
                <option value="Website Development">Website Development</option>
                <option value="Data Protection">Data Protection</option>
                <option value="DevOps Consulting">DevOps Consulting</option>
                <option value="Security Audit">Security Audit</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
              <select
                value={filters.priority}
                onChange={(e) => setFilters({...filters, priority: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              >
                <option value="">All Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => setFilters({search: '', status: '', service: '', priority: ''})}
                className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Requests Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">#{request.id}</div>
                        <div className="text-sm text-gray-500">{request.projectName || request.organization || 'Service Request'}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{request.client}</div>
                        <div className="text-sm text-gray-500">{request.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                        {request.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(request.status)}`}>
                        {request.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(request.priority)}`}>
                        {request.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {request.budget}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(request.submittedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button
                        onClick={() => {setSelectedRequest(request); setShowModal(true)}}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        View
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        Approve
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Request Details Modal */}
        {showModal && selectedRequest && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-10 mx-auto p-5 border w-11/12 max-w-4xl shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Request Details #{selectedRequest.id}</h3>
                  <button
                    onClick={() => {setShowModal(false); setSelectedRequest(null)}}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Client Information</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Client:</span>
                        <span className="font-medium">{selectedRequest.client}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Email:</span>
                        <span className="font-medium">{selectedRequest.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Phone:</span>
                        <span className="font-medium">{selectedRequest.phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service:</span>
                        <span className="font-medium">{selectedRequest.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Budget:</span>
                        <span className="font-medium">{selectedRequest.budget}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Timeline:</span>
                        <span className="font-medium">{selectedRequest.timeline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Submitted:</span>
                        <span className="font-medium">{new Date(selectedRequest.submittedAt).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4">Request Details</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium mb-2">Description</h5>
                        <p className="text-gray-600 text-sm">{selectedRequest.description}</p>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Requirements</h5>
                        <p className="text-gray-600 text-sm">{selectedRequest.requirements}</p>
                      </div>
                      {selectedRequest.dataTypes && (
                        <div>
                          <h5 className="font-medium mb-2">Data Types</h5>
                          <div className="flex flex-wrap gap-2">
                            {selectedRequest.dataTypes.map((type, index) => (
                              <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                {type}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-8">
                  <div className="flex space-x-2">
                    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(selectedRequest.status)}`}>
                      {selectedRequest.status}
                    </span>
                    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getPriorityColor(selectedRequest.priority)}`}>
                      {selectedRequest.priority}
                    </span>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => updateRequestStatus(selectedRequest.id, 'Approved')}
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateRequestStatus(selectedRequest.id, 'Rejected')}
                      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => {setShowModal(false); setSelectedRequest(null)}}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}