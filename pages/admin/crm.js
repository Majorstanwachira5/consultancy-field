import { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout';
import prisma from '../../lib/prisma';

export async function getServerSideProps() {
  const users = await prisma.user.findMany();
  const serviceRequests = await prisma.serviceRequest.findMany();
  const roles = await prisma.role.findMany();
  return {
    props: {
      initialUsers: users,
      initialServiceRequests: serviceRequests,
      roles,
    },
  };
}

export default function CrmPage({ initialUsers, initialServiceRequests, roles }) {
  const [users, setUsers] = useState(initialUsers);
  const [serviceRequests, setServiceRequests] = useState(
    initialServiceRequests
  );
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleAddUser = () => {
    setIsEditing(false);
    setCurrentUser({
      firstName: '',
      lastName: '',
      email: '',
      roleId: roles.find((r) => r.name === 'user')?.id,
    });
    setShowModal(true);
  };

  const handleEditUser = (user) => {
    setIsEditing(true);
    setCurrentUser(user);
    setShowModal(true);
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const res = await fetch(`/api/users/${userId}`, { method: 'DELETE' });
        if (res.ok) {
          setUsers(users.filter((u) => u.id !== userId));
        } else {
          // Handle error
        }
      } catch (error) {
        // Handle error
      }
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const url = isEditing ? `/api/users/${currentUser.id}` : '/api/users';
    const method = isEditing ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentUser),
      });

      if (res.ok) {
        const updatedUser = await res.json();
        if (isEditing) {
          setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
        } else {
          setUsers([...users, updatedUser]);
        }
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
        <h1 className="text-3xl font-bold mb-4">CRM</h1>

        {/* Users Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Users</h2>
            <button
              onClick={handleAddUser}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add User
            </button>
          </div>
          <div className="bg-white shadow rounded-lg">
            <ul className="divide-y divide-gray-200">
              {users.map((user) => (
                <li key={user.id} className="px-6 py-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <div className="flex items-center">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.isActive
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {user.isActive ? 'Active' : 'Inactive'}
                    </span>
                    <button onClick={() => handleEditUser(user)} className="ml-4 text-sm text-blue-600 hover:text-blue-900">Edit</button>
                    <button onClick={() => handleDeleteUser(user.id)} className="ml-4 text-sm text-red-600 hover:text-red-900">Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service Requests Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Service Requests</h2>
          <div className="bg-white shadow rounded-lg">
            <ul className="divide-y divide-gray-200">
              {serviceRequests.map((request) => (
                <li key={request.id} className="px-6 py-4">
                  {/* ... service request display ... */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          {/* ... Modal for Add/Edit User ... */}
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleFormSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{isEditing ? 'Edit User' : 'Add User'}</h3>
                  <div className="mt-2">
                    <input type="text" name="firstName" placeholder="First Name" value={currentUser.firstName} onChange={handleFormChange} className="w-full mt-2 px-3 py-2 border rounded" required />
                    <input type="text" name="lastName" placeholder="Last Name" value={currentUser.lastName} onChange={handleFormChange} className="w-full mt-2 px-3 py-2 border rounded" required />
                    <input type="email" name="email" placeholder="Email" value={currentUser.email} onChange={handleFormChange} className="w-full mt-2 px-3 py-2 border rounded" required />
                    {!isEditing && <input type="password" name="password" placeholder="Password" onChange={handleFormChange} className="w-full mt-2 px-3 py-2 border rounded" required />}
                    <select name="roleId" value={currentUser.roleId} onChange={handleFormChange} className="w-full mt-2 px-3 py-2 border rounded">
                      {roles.map((role) => (
                        <option key={role.id} value={role.id}>{role.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 sm:ml-3 sm:w-auto sm:text-sm">Save</button>
                  <button type="button" onClick={() => setShowModal(false)} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
