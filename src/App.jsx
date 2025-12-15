import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { UserProvider, useUser } from './components/usercontext';
import Header from './components/header';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import About from './pages/about';
import Files from './pages/files';

// Protected Route Wrapper
const ProtectedLayout = () => {
  const { user } = useUser();
  if (!user) return <Navigate to="/login" />;

  return (
    <>
      {/* 1. Header sits here (Full Width) */}
      <Header />

      {/* 2. The rest of the page sits inside the centered layout */}
      <div className="main-layout">
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes */}
          <Route element={<ProtectedLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/files" element={<Files />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;