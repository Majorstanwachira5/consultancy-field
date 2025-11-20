import { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout';
import prisma from '../../lib/prisma';

export async function getServerSideProps() {
  const certifications = await prisma.certification.findMany();
  return {
    props: {
      initialCertifications: certifications,
    },
  };
}

export default function CertificationsPage({ initialCertifications }) {
  const [certifications, setCertifications] = useState(initialCertifications);
  const [showModal, setShowModal] = useState(false);
  const [newCertification, setNewCertification] = useState({
    name: '',
    issuingBody: '',
    dateIssued: '',
    expiryDate: '',
    imageUrl: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCertification((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/certifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCertification),
      });
      if (res.ok) {
        const createdCertification = await res.json();
        setCertifications((prev) => [...prev, createdCertification]);
        setShowModal(false);
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <AdminLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Certifications</h1>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Certification
          </button>
        </div>
        <div className="bg-white shadow rounded-lg">
          <ul className="divide-y divide-gray-200">
            {certifications.map((cert) => (
              <li key={cert.id} className="px-6 py-4 flex items-center">
                {cert.imageUrl && (
                  <img
                    src={cert.imageUrl}
                    alt={cert.name}
                    className="w-16 h-16 mr-4 object-cover rounded-md"
                  />
                )}
                <div>
                  <p className="font-medium text-gray-900">{cert.name}</p>
                  <p className="text-sm text-gray-500">
                    Issued by {cert.issuingBody} on{' '}
                    {new Date(cert.dateIssued).toLocaleDateString()}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Add New Certification
                  </h3>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Certification Name"
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded"
                      required
                    />
                    <input
                      type="text"
                      name="issuingBody"
                      placeholder="Issuing Body"
                      onChange={handleInputChange}
                      className="w-full mt-2 px-3 py-2 border rounded"
                      required
                    />
                    <input
                      type="date"
                      name="dateIssued"
                      onChange={handleInputChange}
                      className="w-full mt-2 px-3 py-2 border rounded"
                      required
                    />
                    <input
                      type="date"
                      name="expiryDate"
                      onChange={handleInputChange}
                      className="w-full mt-2 px-3 py-2 border rounded"
                    />
                    <input
                      type="text"
                      name="imageUrl"
                      placeholder="Image URL"
                      onChange={handleInputChange}
                      className="w-full mt-2 px-3 py-2 border rounded"
                    />
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
