import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import  Sidebar from './sidebar.tsx';
import HeaderDashboard from './headerDashboard.tsx';

const Layout: React.FC = () => {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />      
      <main className="flex-1 bg-gray-100">
        <HeaderDashboard/>
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
