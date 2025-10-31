import { useState } from 'react'
import AuthLayout from '../../components/AuthLayout'

export default function MediaLibrary() {
  const [files, setFiles] = useState([
    { id: 1, name: 'GDPR_Policy_Template.pdf', type: 'document', size: '245 KB', uploaded: '2024-01-15', category: 'Legal' },
    { id: 2, name: 'Company_Logo.png', type: 'image', size: '89 KB', uploaded: '2024-01-14', category: 'Branding' },
    { id: 3, name: 'Training_Video.mp4', type: 'video', size: '15.2 MB', uploaded: '2024-01-13', category: 'Training' },
    { id: 4, name: 'Audit_Report.docx', type: 'document', size: '1.2 MB', uploaded: '2024-01-12', category: 'Reports' }
  ])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploading, setUploading] = useState(false)

  const categories = ['all', 'Legal', 'Branding', 'Training', 'Reports', 'Templates']

  const getFileIcon = (type) => {
    switch (type) {
      case 'document': return '📄'
      case 'image': return '🖼️'
      case 'video': return '🎥'
      default: return '📁'
    }
  }

  const filteredFiles = selectedCategory === 'all' 
    ? files 
    : files.filter(file => file.category === selectedCategory)

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return

    setUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setUploading(false)
          // Add file to list
          const newFile = {
            id: files.length + 1,
            name: file.name,
            type: file.type.startsWith('image/') ? 'image' : 'document',
            size: `${(file.size / 1024).toFixed(1)} KB`,
            uploaded: new Date().toISOString().split('T')[0],
            category: 'Uploads'
          }
          setFiles([newFile, ...files])
          return 0
        }
        return prev + 10
      })
    }, 200)
  }

  return (
    <AuthLayout>
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Media Library</h1>
            <p className="text-gray-600 mt-2">Manage your documents, images, and media files</p>
          </div>
          <div>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleFileUpload}
              accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.mp4,.mov"
            />
            <label
              htmlFor="file-upload"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
            >
              Upload File
            </label>
          </div>
        </div>

        {/* Upload Progress */}
        {uploading && (
          <div className="mb-6 bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Uploading...</span>
              <span className="text-sm text-gray-500">{uploadProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Files Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFiles.map(file => (
            <div key={file.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{getFileIcon(file.type)}</div>
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <span className="text-sm">📥</span>
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <span className="text-sm">🗑️</span>
                  </button>
                </div>
              </div>
              <h3 className="font-medium text-gray-900 mb-2 truncate">{file.name}</h3>
              <div className="text-sm text-gray-500 space-y-1">
                <p>Size: {file.size}</p>
                <p>Uploaded: {file.uploaded}</p>
                <p>Category: {file.category}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredFiles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📁</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No files found</h3>
            <p className="text-gray-500">Upload your first file to get started</p>
          </div>
        )}
      </div>
    </AuthLayout>
  )
}