import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import About from "./pages/About";
import ProjectDetails from "./pages/ProjectDetails";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProject from "./pages/admin/AddProject";
import EditProject from "./pages/admin/EditProject";
import AdminSettings from "./pages/admin/AdminSettings";
import ForgotPassword from "./pages/admin/ForgotPassword";

function App() {
  const location = useLocation();

  // Hide website navbar and footer on admin pages
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div className="flex min-h-screen flex-col bg-[#F6F2E9]">

      {/* Website Navbar */}
      {!isAdminPage && <Navbar />}

      {/* Main Content */}
      <main
        className={`flex-1 bg-[#F6F2E9] ${
          !isAdminPage ? "pt-20" : ""
        }`}
      >
        <Routes>

          {/* =========================
              WEBSITE ROUTES
          ========================= */}

          <Route path="/" element={<Home />} />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/about"
            element={<About />}
          />
          <Route
           path="/projects/:slug"
           element={<ProjectDetails />}
          />


          {/* =========================
              ADMIN LOGIN
          ========================= */}

          <Route
            path="/admin"
            element={<AdminLogin />}
          />


          {/* =========================
              PROTECTED ADMIN ROUTES
          ========================= */}

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/add-project"
            element={
              <ProtectedRoute>
                <AddProject />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/edit-project/:id"
            element={
              <ProtectedRoute>
                <EditProject />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/settings"
            element={
              <ProtectedRoute>
                <AdminSettings />
              </ProtectedRoute>
            }
          />
         <Route
            path="/admin/forgot-password"
            element={<ForgotPassword />}
         />

        </Routes>
      </main>

      {/* Website Footer */}
      {!isAdminPage && <Footer />}

    </div>
  );
}

export default App;