import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  Star,
} from "lucide-react";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

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
  // LOGOUT
  // =========================
  const handleLogout = async () => {
    try {
      await signOut(auth);

      setSidebarOpen(false);

      navigate("/admin");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

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
  // SELECT / UNSELECT PROJECT
  // =========================
  const handleToggleSelected = (projectId) => {
    const selectedCount = projects.filter(
      (project) => project.isSelected
    ).length;

    const currentProject = projects.find(
      (project) => project.id === projectId
    );

    if (!currentProject) return;

    // If project is not selected and already have 3
    if (!currentProject.isSelected && selectedCount >= 3) {
      window.alert(
        "You can select a maximum of 3 projects for Selected Work."
      );
      return;
    }

    const updatedProjects = projects.map((project) =>
      project.id === projectId
        ? {
            ...project,
            isSelected: !project.isSelected,
          }
        : project
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
      path: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Projects",
      path: "/admin/dashboard",
      icon: FolderKanban,
    },
    {
      name: "Add Project",
      path: "/admin/add-project",
      icon: FolderPlus,
    },
  ];

  // =========================
  // SELECTED PROJECT COUNT
  // =========================
  const selectedProjectsCount = projects.filter(
    (project) => project.isSelected
  ).length;

  // =========================
  // TOTAL IMAGES
  // =========================
  const totalImages = projects.reduce(
    (total, project) =>
      total + (project.images?.length || 0),
    0
  );

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
        className={`fixed left-0 top-0 z-50 flex h-screen w-[260px] flex-col border-r border-[#2C0901]/10 bg-gradient-to-br from-[#F5F1E9] via-[#EDE1D2] to-[#DFCBB5] transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >

        {/* LOGO */}
        <div className="flex items-center justify-between border-b border-[#2C0901]/10 px-6 py-6">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#89643D]">
              Delta Rise
            </p>

            <h2 className="mt-1 font-serif text-xl text-[#2C0901]">
              Engineering
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#2C0901] transition hover:bg-[#2C0901]/5 lg:hidden"
            aria-label="Close menu"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 px-4 py-6">

          <p className="mb-3 px-3 text-[13px] font-medium uppercase tracking-[0.2em] text-[#2C0901]/40">
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
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-all duration-300 ${
                    isActive
                      ? " text-white"
                      : "text-[#2C0901]/60 hover:bg-[#2C0901]/5 hover:text-[#2C0901]"
                  }`}
                >
                  <Icon
                    size={18}
                    strokeWidth={1.5}
                  />

                  <span>{item.name}</span>

                  {item.name === "Projects" && (
                    <span className="ml-auto text-[10px] opacity-60">
                      {projects.length}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* OTHER */}
          <p className="mb-3 mt-10 px-3 text-[9px] font-medium uppercase tracking-[0.2em] text-[#2C0901]/40">
            Other
          </p>

          <div className="space-y-1">

            {/* SETTINGS */}
            <Link
              to="/admin/settings"
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-all duration-300 ${
                location.pathname === "/admin/settings"
                  ? "bg-[#2C0901] text-white"
                  : "text-[#2C0901]/60 hover:bg-[#2C0901]/5 hover:text-[#2C0901]"
              }`}
            >
              <Settings
                size={18}
                strokeWidth={1.5}
              />

              Settings
            </Link>

            {/* VIEW WEBSITE */}
            <Link
              to="/"
              target="_blank"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#2C0901]/60 transition hover:bg-[#2C0901]/5 hover:text-[#2C0901]"
            >
              <ExternalLink
                size={18}
                strokeWidth={1.5}
              />

              View Website
            </Link>

          </div>
        </nav>

        {/* SIDEBAR BOTTOM */}
        <div className="border-t border-[#2C0901]/10 p-4">

          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#2C0901]/60 transition hover:bg-red-50 hover:text-red-600"
          >
            <LogOut
              size={18}
              strokeWidth={1.5}
            />

            Logout
          </button>

        </div>
      </aside>

      {/* =========================
          MAIN CONTENT
      ========================= */}
      <main className="lg:ml-[260px]">
        <div className="mx-auto max-w-[1400px] px-5 py-8 md:px-8 md:py-10 lg:px-10">

          {/* PAGE HEADER */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#89643D]">
                Dashboard
              </p>

              <h1 className="mt-3 font-serif text-4xl font-light tracking-[-0.04em] text-[#171717] md:text-5xl">
                Projects
              </h1>

              <p className="mt-3 max-w-[500px] text-sm leading-6 text-[#77716A]">
                Manage your portfolio projects and select the projects
                shown on your homepage.
              </p>
            </div>

            <Link
              to="/admin/add-project"
              className="group inline-flex w-fit items-center gap-3 rounded-xl bg-[#F5F1E9] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#F5F1E9] hover:shadow-[0_12px_30px_rgba(44,9,1,0.18)]"
            >
              <FolderPlus
                size={18}
                strokeWidth={1.5}
              />

              Add New Project

              <ArrowRight
                size={17}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

          {/* =========================
              STATS
          ========================= */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">

            {/* TOTAL PROJECTS */}
            <div className="rounded-2xl border border-[#E6DED2] bg-[#3D1006] p-5">
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

            {/* PROJECT IMAGES */}
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
                {totalImages}
              </p>
            </div>

            {/* SELECTED WORK */}
            <div className="rounded-2xl border border-[#E6DED2] bg-white p-5">

              <div className="flex items-center justify-between">

                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#89643D]">
                  Selected Work
                </p>

                <Star
                  size={18}
                  strokeWidth={1.4}
                  className="fill-[#89643D] text-[#89643D]"
                />

              </div>

              <div className="mt-4 flex items-end gap-2">

                <p className="font-serif text-3xl font-light text-[#171717]">
                  {selectedProjectsCount}
                </p>

                <span className="mb-1 text-xs text-[#9D968E]">
                  / 3
                </span>

              </div>

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
                    className="
                      group
                      relative
                      aspect-[4/5]
                      overflow-hidden
                      rounded-[20px]
                      bg-[#2C0901]
                      shadow-[0_8px_25px_rgba(44,9,1,0.10)]
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:shadow-[0_20px_45px_rgba(44,9,1,0.18)]
                    "
                  >

                    {/* =========================
                        FULL IMAGE
                    ========================= */}
                    {project.mainImage ? (

                      <img
                        src={project.mainImage}
                        alt={project.title}
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-105
                        "
                      />

                    ) : (

                      <div className="absolute inset-0 flex items-center justify-center bg-[#2C0901] text-white/40">

                        <ImageIcon
                          size={40}
                          strokeWidth={1.3}
                        />

                      </div>

                    )}

                    {/* =========================
                        DARK GRADIENT
                    ========================= */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#2C0901]/95
                        via-[#2C0901]/35
                        to-transparent
                      "
                    />

                    {/* =========================
                        SELECTED STAR
                    ========================= */}
                    <button
                      type="button"
                      onClick={() =>
                        handleToggleSelected(project.id)
                      }
                      className={`
                        absolute
                        right-4
                        top-4
                        z-20
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        backdrop-blur-sm
                        transition-all
                        duration-300
                        ${
                          project.isSelected
                            ? "bg-[#F4F0E9] text-[#89643D] shadow-lg"
                            : "bg-black/30 text-white hover:bg-[#F4F0E9] hover:text-[#89643D]"
                        }
                      `}
                      aria-label={
                        project.isSelected
                          ? `Remove ${project.title} from Selected Work`
                          : `Add ${project.title} to Selected Work`
                      }
                      title={
                        project.isSelected
                          ? "Remove from Selected Work"
                          : "Add to Selected Work"
                      }
                    >
                      <Star
                        size={19}
                        strokeWidth={1.5}
                        className={
                          project.isSelected
                            ? "fill-[#89643D]"
                            : ""
                        }
                      />
                    </button>

                    {/* =========================
                        IMAGE COUNT
                    ========================= */}
                    <div
                      className="
                        absolute
                        left-4
                        top-4
                        flex
                        items-center
                        gap-2
                        rounded-full
                        bg-black/30
                        px-3
                        py-2
                        text-white
                        backdrop-blur-sm
                      "
                    >
                      <ImageIcon
                        size={13}
                        strokeWidth={1.5}
                      />

                      <span className="text-[9px] font-medium">
                        {project.images?.length || 0}
                      </span>
                    </div>

                    {/* =========================
                        CARD CONTENT
                    ========================= */}
                    <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6">

                      {/* CATEGORY */}
                      <p
                        className="
                          text-[9px]
                          font-medium
                          uppercase
                          tracking-[0.2em]
                          text-white/75
                          drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]
                        "
                      >
                        {project.category || "Project"}
                      </p>

                      {/* TITLE */}
                      <h3
                        className="
                          mt-2
                          font-serif
                          text-3xl
                          font-light
                          leading-tight
                          tracking-[-0.03em]
                          text-white
                          drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]
                        "
                      >
                        {project.title}
                      </h3>

                      {/* LOCATION */}
                      {project.location && (
                        <p
                          className="
                            mt-2
                            text-sm
                            text-white/75
                            drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]
                          "
                        >
                          {project.location}
                        </p>
                      )}

                      {/* =========================
                          ACTIONS
                      ========================= */}
                      <div className="mt-6 flex items-center gap-3 border-t border-white/20 pt-4">

                        {/* EDIT */}
                        <Link
                          to={`/admin/edit-project/${project.id}`}
                          className="
                            flex
                            flex-1
                            items-center
                            justify-center
                            gap-2
                            rounded-lg
                            bg-[#F4F0E9]
                            px-4
                            py-3
                            text-xs
                            font-medium
                            text-[#2C0901]
                            transition-all
                            duration-300
                            hover:bg-white
                          "
                        >
                          <Pencil
                            size={14}
                            strokeWidth={1.5}
                          />

                          Edit

                          <ArrowRight
                            size={14}
                            strokeWidth={1.5}
                          />
                        </Link>

                        {/* DELETE */}
                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(project.id)
                          }
                          className="
                            flex
                            h-[42px]
                            w-[42px]
                            items-center
                            justify-center
                            rounded-lg
                            border
                            border-white/30
                            bg-white/10
                            text-white
                            backdrop-blur-sm
                            transition-all
                            duration-300
                            hover:border-red-300
                            hover:bg-red-500
                          "
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
                  Start building your portfolio by adding
                  your first Delta Rise project.
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