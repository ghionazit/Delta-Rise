import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  FolderPlus,
  Settings,
  ExternalLink,
  LogOut,
  Menu,
  X,
  ArrowRight,
  Pencil,
  Trash2,
  Image as ImageIcon,
} from "lucide-react";

function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const location = useLocation();

  // =========================
  // LOAD PROJECTS
  // =========================
  useEffect(() => {
    const savedProjects = JSON.parse(
      localStorage.getItem("deltaRiseProjects") || "[]"
    );

    setProjects(savedProjects);
  }, []);

  // =========================
  // DELETE PROJECT
  // =========================
  const handleDelete = (projectId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmed) return;

    const updatedProjects = projects.filter(
      (project) => project.id !== projectId
    );

    setProjects(updatedProjects);

    localStorage.setItem(
      "deltaRiseProjects",
      JSON.stringify(updatedProjects)
    );
  };

  // =========================
  // SIDEBAR LINKS
  // =========================
  const navLinks = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: LayoutDashboard,
    },
    {
     name: "Admins",
     path: "/admin/admins",
     icon: ShieldCheck,
    },
    {
      name: "Projects",
      path: "/admin/projects",
      icon: FolderKanban,
    },
    {
      name: "Add Project",
      path: "/admin/add-project",
      icon: FolderPlus,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1E9]">

      {/* =========================
          MOBILE HEADER
      ========================= */}
      <header className="flex items-center justify-between border-b border-[#E6DED2] bg-white px-5 py-4 lg:hidden">
        <div>
          <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#89643D]">
            Delta Rise
          </p>

          <h1 className="mt-1 font-serif text-xl text-[#171717]">
            Admin
          </h1>
        </div>

        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2C0901] text-white"
          aria-label="Open menu"
        >
          <Menu size={20} strokeWidth={1.5} />
        </button>
      </header>

      {/* =========================
          MOBILE OVERLAY
      ========================= */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
        />
      )}

      {/* =========================
          SIDEBAR
      ========================= */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[260px] flex-col border-r border-white/10 bg-[#F5F1E9] transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.28em] text-#2C0901 ">
              Delta Rise
            </p>

            <h2 className="mt-1 font-serif text-xl text-#2C0901">
              Engineering
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="text-white/60 transition hover:text-white lg:hidden"
            aria-label="Close menu"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <p className="mb-3 px-3 text-[9px] font-medium uppercase tracking-[0.2em] text-white/40">
            Main Menu
          </p>

          <div className="space-y-1">
            {navLinks.map((item) => {
              const Icon = item.icon;

              const isActive =
                location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/55 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.5} />

                  <span>{item.name}</span>

                  {item.name === "Projects" && (
                    <span className="ml-auto text-[10px] text-white/40">
                      {projects.length}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Other */}
          <p className="mb-3 mt-10 px-3 text-[9px] font-medium uppercase tracking-[0.2em] text-white/40">
            Other
          </p>

          <div className="space-y-1">
            <Link
              to="/admin/settings"
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-white/55 transition hover:bg-white/5 hover:text-white"
            >
              <Settings size={18} strokeWidth={1.5} />
              Settings
            </Link>

            <Link
              to="/"
              target="_blank"
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-white/55 transition hover:bg-white/5 hover:text-white"
            >
              <ExternalLink size={18} strokeWidth={1.5} />
              View Website
            </Link>
          </div>
        </nav>

        {/* Sidebar Bottom */}
        <div className="border-t border-white/10 p-4">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-white/55 transition hover:bg-white/5 hover:text-white"
          >
            <LogOut size={18} strokeWidth={1.5} />
            Logout
          </button>
        </div>
      </aside>

      {/* =========================
          MAIN CONTENT
      ========================= */}
      <main className="lg:ml-[260px]">
        <div className="mx-auto max-w-[1400px] px-5 py-8 md:px-8 md:py-10 lg:px-10">

          {/* =========================
              PAGE HEADER
          ========================= */}
          <div className=" text-white flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#89643D]">
                Dashboard
              </p>

              <h1 className="mt-3 font-serif text-4xl font-light tracking-[-0.04em] text-[#171717] md:text-5xl">
                Projects
              </h1>

              <p className="mt-3 max-w-[500px] text-sm leading-6 text-[#77716A]">
                Manage your portfolio projects and project images.
              </p>
            </div>

            {/* Add Project */}
            <Link
              to="/admin/add-project"
              className="group inline-flex w-fit items-center gap-3 rounded-xl bg-[#2C0901] px-6 py-3.5 text-sm font-medium  transition hover:shadow-[0_12px_30px_rgba(44,9,1,0.18)] "
            >
              <FolderPlus size={18} strokeWidth={1.5} />

              Add New Project

              <ArrowRight
                size={17}
                strokeWidth={1.5}
                className="transition-transform duration-300  group-hover:translate-x-1  text-white"
              />
            </Link>
          </div>

          {/* =========================
              STATS
          ========================= */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {/* Total Projects */}
            <div className=" rounded-2xl border border-[#E6DED2] bg-white p-5">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#89643D]">
                  Total Projects
                </p>

                <FolderKanban
                  size={18}
                  strokeWidth={1.4}
                  className="text-[#89643D]"
                />
              </div>

              <p className="mt-4 font-serif text-3xl font-light text-[#171717]">
                {projects.length}
              </p>
            </div>

            {/* Project Images */}
            <div className="rounded-2xl border border-[#E6DED2] bg-white p-5">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#89643D]">
                  Project Images
                </p>

                <ImageIcon
                  size={18}
                  strokeWidth={1.4}
                  className="text-[#89643D]"
                />
              </div>

              <p className="mt-4 font-serif text-3xl font-light text-[#171717]">
                {projects.reduce(
                  (total, project) =>
                    total + (project.images?.length || 0),
                  0
                )}
              </p>
            </div>

            {/* Portfolio */}
            <div className="hidden rounded-2xl border border-[#E6DED2] bg-white p-5 lg:block">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#89643D]">
                  Portfolio
                </p>

                <ExternalLink
                  size={18}
                  strokeWidth={1.4}
                  className="text-[#89643D]"
                />
              </div>

              <p className="mt-4 font-serif text-3xl font-light text-[#171717]">
                Active
              </p>
            </div>
          </div>

          {/* =========================
              PROJECT SECTION
          ========================= */}
          <div className="mt-12">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#89643D]">
                  Portfolio
                </p>

                <h2 className="mt-2 font-serif text-2xl font-light text-[#171717]">
                  Your Projects
                </h2>
              </div>

              <span className="text-xs text-[#9D968E]">
                {projects.length} projects
              </span>
            </div>

            {/* =========================
                PROJECT GRID
            ========================= */}
            {projects.length > 0 ? (
              <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

                {projects.map((project) => (
                  <article
                    key={project.id}
                    className="group overflow-hidden rounded-[22px] border border-[#E6DED2] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(80,60,40,0.1)]"
                  >

                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE4DB]">
                      {project.mainImage ? (
                        <img
                          src={project.mainImage}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-[#9D968E]">
                          <ImageIcon
                            size={32}
                            strokeWidth={1.3}
                          />
                        </div>
                      )}
                    </div>

                    {/* Information */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">

                        <div>
                          <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#89643D]">
                            {project.category || "Project"}
                          </p>

                          <h3 className="mt-2 font-serif text-2xl font-light text-[#171717]">
                            {project.title}
                          </h3>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs text-[#9D968E]">
                          <ImageIcon
                            size={14}
                            strokeWidth={1.4}
                          />

                          {project.images?.length || 0}
                        </div>
                      </div>

                      {/* Location */}
                      {project.location && (
                        <p className="mt-4 text-sm text-[#77716A]">
                          {project.location}
                        </p>
                      )}

                      {/* Actions */}
                      <div className=" text-white mt-6 flex items-center gap-3 border-t border-[#E6DED2] pt-5">

                        {/* Edit */}
                        <Link
                          to={`/admin/edit-project/${project.id}`}
                          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#2C0901] px-4 py-3 text-xs font-medium text-white transition hover:bg-[#3D1006]"
                        >
                          <Pencil
                            size={15}
                            strokeWidth={1.5}
                          />

                          Edit
                        </Link>

                        {/* Delete */}
                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(project.id)
                          }
                          className="flex items-center justify-center rounded-lg border border-[#E6DED2] bg-white p-3 text-[#77716A] transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                          aria-label={`Delete ${project.title}`}
                        >
                          <Trash2
                            size={16}
                            strokeWidth={1.5}
                          />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              /* =========================
                  EMPTY STATE
              ========================= */
              <div className="mt-6 flex min-h-[400px] flex-col items-center justify-center rounded-[28px] border border-dashed border-[#D8CFC3] bg-white px-6 text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F5F1E9] text-[#89643D]">
                  <FolderPlus
                    size={28}
                    strokeWidth={1.3}
                  />
                </div>

                <h2 className="mt-6 font-serif text-3xl font-light text-[#171717]">
                  No projects yet
                </h2>

                <p className="mt-3 max-w-[360px] text-sm leading-6 text-[#77716A]">
                  Start building your portfolio by adding your first
                  Delta Rise project.
                </p>

                <Link
                  to="/admin/add-project"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#2C0901] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#3D1006]"
                >
                  Add Your First Project

                  <ArrowRight
                    size={16}
                    strokeWidth={1.5}
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;