import { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout';
import Link from 'next/link';

const ContentPage = () => {
  const [files, setFiles] = useState([]);
  const [projects, setProjects] = useState([]);
  const [message, setMessage] = useState('');

  const fetchFiles = async () => {
    try {
      const res = await fetch('/api/admin/media');
      const data = await res.json();
      setFiles(data);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects');
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  useEffect(() => {
    fetchFiles();
    fetchProjects();
  }, []);

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const file = e.target.file.files[0];
    const projectId = e.target.project.value;

    if (!file) {
      setMessage('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    if (projectId) {
      formData.append('projectId', projectId);
    }

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setMessage(`File uploaded successfully: ${data.filePath}`);
        fetchFiles(); // Refresh the file list
      } else {
        const error = await res.json();
        setMessage(`Error uploading file: ${error.error}`);
      }
    } catch (error) {
      setMessage(`Error uploading file: ${error.message}`);
    }
  };

  return (
    <AdminLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Content Management</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Media Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Media</h2>
            <div className="bg-white shadow rounded-lg p-6">
              <form onSubmit={handleFileUpload}>
                <div className="mb-4">
                  <label htmlFor="file" className="block text-gray-700 font-bold mb-2">
                    Upload File
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="project" className="block text-gray-700 font-bold mb-2">
                    Associate with Project (Optional)
                  </label>
                  <select
                    id="project"
                    name="project"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select a project</option>
                    {projects.map((project) => (
                      <option key={project.id} value={project.id}>
                        {project.title}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Upload
                </button>
              </form>
              {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Uploaded Files</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {files.map((file) => (
                  <div key={file.name} className="bg-white shadow rounded-lg p-4">
                    <img src={`/uploads/${file.name}`} alt={file.name} className="w-full h-48 object-cover mb-4" />
                    <p className="text-sm text-gray-600">{file.name}</p>
                    <p className="text-xs text-gray-400">{file.size} bytes</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Certifications</h2>
            <div className="bg-white shadow rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                Manage certifications that are displayed on the website.
              </p>
              <Link href="/admin/certifications">
                <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Manage Certifications
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ContentPage;
