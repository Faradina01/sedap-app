import React, { Suspense } from 'react';
import './assets/tailwind.css';
import { Route, Routes } from 'react-router-dom';
import Loading from './components/LOading.jsx';

// Lazy Loaded Pages
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Users = React.lazy(() => import("./pages/Users.jsx"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage.jsx"));

// Layouts
const MainLayout = React.lazy(() => import("./layouts/MainLayout.jsx"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout.jsx"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout.jsx")); // ✅ Tambahan ini

// Auth Pages
const Login = React.lazy(() => import("./pages/auth/Login.jsx"));
const Register = React.lazy(() => import("./pages/auth/Register.jsx"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot.jsx"));

// Guest Page
const Guest = React.lazy(() => import("./pages/guest.jsx")); // ✅ Tambahan ini

function App() {
return (
<Suspense fallback={<Loading />}>
<Routes>
{/* MAIN ROUTES with layout */}
<Route element={<MainLayout />}>
<Route path="/" element={<Dashboard />} />
<Route path="/orders" element={<Orders />} />
<Route path="/customers" element={<Customers />} />
<Route path="/users" element={<Users />} />
</Route>

    {/* AUTH ROUTES */}
    <Route element={<AuthLayout />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot" element={<Forgot />} />
    </Route>

    {/* ✅ GUEST ROUTE (INI YANG BELUM ADA) */}
    <Route element={<GuestLayout />}>
      <Route path="/guest" element={<Guest />} />
    </Route>

    {/* GLOBAL ERROR PAGES */}
    <Route path="/error/400" element={<ErrorPage code="400" description="Bad Request" />} />
    <Route path="/error/401" element={<ErrorPage code="401" description="Unauthorized" />} />
    <Route path="/error/403" element={<ErrorPage code="403" description="Forbidden" />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</Suspense>
);
}

export default App;
