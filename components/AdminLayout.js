import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  ChartBarIcon,
  UsersIcon,
  DocumentTextIcon,
  FolderIcon,
  ClipboardIcon,
  TagIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';

export default function AdminLayout({ children, user }) {
  const router = useRouter();

  async function handleLogout() {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: ChartBarIcon },
    { name: 'CRM', href: '/admin/crm', icon: UsersIcon },
    { name: 'Media', href: '/admin/media', icon: DocumentTextIcon },
    { name: 'Projects', href: '/admin/projects', icon: FolderIcon },
    { name: 'Requests', href: '/admin/requests', icon: ClipboardIcon },
    { name: 'Categories', href: '/admin/categories', icon: TagIcon },
    { name: 'Articles', href: '/admin/articles', icon: DocumentTextIcon },
  ];

  if (!user) return null;

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
                  {user.firstName?.[0]}
                  {user.lastName?.[0]}
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
        <div className="w-64 bg-white shadow-sm border-r border-gray-200 h-full">
          <div className="h-full flex flex-col">
            <div className="flex-1 space-y-3 p-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${
                    router.pathname === item.href
                      ? 'bg-red-50 border-red-500 text-red-700'
                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  } group flex items-center px-4 py-3 text-base font-medium border-l-4 rounded-r-md`}
                >
                  <item.icon className="h-6 w-6 mr-4" />
                  {item.name}
                </a>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200">
              <button
                onClick={handleLogout}
                className="w-full flex items-center px-4 py-3 text-base font-medium text-red-600 hover:bg-red-50 rounded-md"
              >
                <ArrowLeftOnRectangleIcon className="h-6 w-6 mr-4" />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 h-full overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}