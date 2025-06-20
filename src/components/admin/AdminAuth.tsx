
import React from 'react';
import { Navigate } from 'react-router-dom';

// This component is now deprecated in favor of AdminLogin page
// Redirecting to the new login route
const AdminAuth = () => {
  return <Navigate to="/admin/login" replace />;
};

export default AdminAuth;
