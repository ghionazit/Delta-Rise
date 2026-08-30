import { useEffect, useState } from "react";
import {
  ShieldCheck,
  UserPlus,
  Mail,
  Trash2,
  Users,
  X,
} from "lucide-react";

import { auth } from "../../firebase";

function AdminManagement() {
  const [admins, setAdmins] = useState([]);
  const [showAddAdmin, setShowAddAdmin] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // =========================
  // LOAD ADMINS
  // =========================
  useEffect(() => {
    const savedAdmins = JSON.parse(
      localStorage.getItem("deltaRiseAdmins") || "[]"
    );

    // Add currently logged-in admin if not already saved
    if (auth.currentUser) {
      const currentAdmin = {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName || "Main Admin",
        email: auth.currentUser.email,
        role: "Administrator",
      };

      const adminExists = savedAdmins.some(
        (admin) => admin.id === currentAdmin.id
      );

      if (!adminExists) {
        const updatedAdmins = [
          currentAdmin,
          ...savedAdmins,
        ];

        localStorage.setItem(
          "deltaRiseAdmins",
          JSON.stringify(updatedAdmins)
        );

        setAdmins(updatedAdmins);
      } else {
        setAdmins(savedAdmins);
      }
    } else {
      setAdmins(savedAdmins);
    }
  }, []);

  // =========================
  // ADD ADMIN
  // =========================
  const handleAddAdmin = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      return;
    }

    const newAdmin = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      role: "Administrator",
    };

    const updatedAdmins = [
      ...admins,
      newAdmin,
    ];

    setAdmins(updatedAdmins);

    localStorage.setItem(
      "deltaRiseAdmins",
      JSON.stringify(updatedAdmins)
    );

    setName("");
    setEmail("");
    setShowAddAdmin(false);
  };

  // =========================
  // REMOVE ADMIN
  // =========================
  const handleRemoveAdmin = (adminId) => {
    const isCurrentAdmin =
      auth.currentUser?.uid === adminId;

    if (isCurrentAdmin) {
      alert(
        "You cannot remove the currently logged-in admin."
      );
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to remove this administrator?"
    );

    if (!confirmed) return;

    const updatedAdmins = admins.filter(
      (admin) => admin.id !== adminId
    );

    setAdmins(updatedAdmins);

    localStorage.setItem(
      "deltaRiseAdmins",
      JSON.stringify(updatedAdmins)
    );
  };

  return (
    <main className="min-h-screen bg-[#F5F1E9] px-5 py-8 md:px-8 md:py-10 lg:px-10">
      <div className="mx-auto max-w-[1200px]">

        {/* =========================
            HEADER
        ========================= */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#89643D]">
              Administration
            </p>

            <h1 className="mt-3 font-serif text-4xl font-light tracking-[-0.04em] text-[#171717] md:text-5xl">
              Admins
            </h1>

            <p className="mt-3 max-w-[500px] text-sm leading-6 text-[#77716A]">
              Manage administrators with access to the Delta Rise dashboard.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowAddAdmin(true)}
            className="inline-flex w-fit items-center gap-3 rounded-xl bg-[#2C0901] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#3D1006]"
          >
            <UserPlus
              size={18}
              strokeWidth={1.5}
            />

            Add Admin
          </button>

        </div>


        {/* =========================
            STATS
        ========================= */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl border border-[#E6DED2] bg-white p-6">

            <div className="flex items-center justify-between">

              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#89643D]">
                Total Admins
              </p>

              <Users
                size={20}
                strokeWidth={1.5}
                className="text-[#89643D]"
              />

            </div>

            <p className="mt-5 font-serif text-4xl font-light text-[#171717]">
              {admins.length}
            </p>

          </div>


          <div className="rounded-2xl border border-[#E6DED2] bg-white p-6">

            <div className="flex items-center justify-between">

              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#89643D]">
                Access
              </p>

              <ShieldCheck
                size={20}
                strokeWidth={1.5}
                className="text-[#89643D]"
              />

            </div>

            <p className="mt-5 font-serif text-2xl font-light text-[#171717]">
              Protected
            </p>

          </div>

        </div>


        {/* =========================
            ADMIN LIST
        ========================= */}
        <section className="mt-8 overflow-hidden rounded-[24px] border border-[#E6DED2] bg-white">

          <div className="flex items-center justify-between border-b border-[#E6DED2] px-6 py-5">

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#89643D]">
                Administrators
              </p>

              <h2 className="mt-2 font-serif text-2xl font-light text-[#171717]">
                Admin Access
              </h2>
            </div>

            <span className="text-sm text-[#9D968E]">
              {admins.length} admins
            </span>

          </div>


          {/* LIST */}
          <div>

            {admins.length > 0 ? (
              admins.map((admin) => {

                const isCurrentAdmin =
                  auth.currentUser?.uid === admin.id;

                return (
                  <div
                    key={admin.id}
                    className="flex flex-col gap-5 border-b border-[#E6DED2] px-6 py-5 last:border-0 md:flex-row md:items-center md:justify-between"
                  >

                    {/* ADMIN INFO */}
                    <div className="flex items-center gap-4">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F5F1E9] text-[#89643D]">

                        <ShieldCheck
                          size={19}
                          strokeWidth={1.5}
                        />

                      </div>


                      <div>

                        <div className="flex items-center gap-3">

                          <h3 className="font-medium text-[#171717]">
                            {admin.name}
                          </h3>

                          {isCurrentAdmin && (
                            <span className="rounded-full bg-[#F5F1E9] px-3 py-1 text-[8px] font-medium uppercase tracking-[0.15em] text-[#89643D]">
                              You
                            </span>
                          )}

                        </div>


                        <div className="mt-2 flex items-center gap-2 text-sm text-[#77716A]">

                          <Mail
                            size={14}
                            strokeWidth={1.5}
                          />

                          {admin.email}

                        </div>

                      </div>

                    </div>


                    {/* ACTION */}
                    <div className="flex items-center gap-4">

                      <span className="rounded-full border border-[#E6DED2] px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.15em] text-[#77716A]">
                        {admin.role}
                      </span>


                      {!isCurrentAdmin && (

                        <button
                          type="button"
                          onClick={() =>
                            handleRemoveAdmin(admin.id)
                          }
                          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E6DED2] text-[#77716A] transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                          aria-label={`Remove ${admin.name}`}
                        >
                          <Trash2
                            size={17}
                            strokeWidth={1.5}
                          />
                        </button>

                      )}

                    </div>

                  </div>
                );
              })
            ) : (

              <div className="px-6 py-20 text-center">

                <Users
                  size={32}
                  strokeWidth={1.3}
                  className="mx-auto text-[#9D968E]"
                />

                <h3 className="mt-5 font-serif text-2xl font-light text-[#171717]">
                  No admins found
                </h3>

              </div>

            )}

          </div>

        </section>


        {/* =========================
            ADD ADMIN MODAL
        ========================= */}
        {showAddAdmin && (

          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4">

            <div className="relative w-full max-w-[480px] rounded-[28px] bg-white p-6 shadow-2xl md:p-8">

              <button
                type="button"
                onClick={() => setShowAddAdmin(false)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F1E9] text-[#77716A] transition hover:text-[#2C0901]"
              >
                <X
                  size={18}
                  strokeWidth={1.5}
                />
              </button>


              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#89643D]">
                New Administrator
              </p>

              <h2 className="mt-3 font-serif text-3xl font-light text-[#171717]">
                Add Admin
              </h2>


              <form
                onSubmit={handleAddAdmin}
                className="mt-8 space-y-5"
              >

                {/* NAME */}
                <div>

                  <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-[#6D6963]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    placeholder="Administrator name"
                    className="w-full rounded-xl border border-[#DED5CA] bg-[#F5F1E9]/50 px-4 py-4 text-sm outline-none transition focus:border-[#89643D] focus:bg-white"
                    required
                  />

                </div>


                {/* EMAIL */}
                <div>

                  <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-[#6D6963]">
                    Email
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    placeholder="admin@example.com"
                    className="w-full rounded-xl border border-[#DED5CA] bg-[#F5F1E9]/50 px-4 py-4 text-sm outline-none transition focus:border-[#89643D] focus:bg-white"
                    required
                  />

                </div>


                {/* BUTTONS */}
                <div className="flex gap-3 pt-3">

                  <button
                    type="button"
                    onClick={() =>
                      setShowAddAdmin(false)
                    }
                    className="flex-1 rounded-xl border border-[#E6DED2] px-5 py-3.5 text-sm text-[#77716A] transition hover:bg-[#F5F1E9]"
                  >
                    Cancel
                  </button>


                  <button
                    type="submit"
                    className="flex-1 rounded-xl bg-[#2C0901] px-5 py-3.5 text-sm font-medium text-white transition hover:bg-[#3D1006]"
                  >
                    Add Admin
                  </button>

                </div>

              </form>

            </div>

          </div>

        )}

      </div>
    </main>
  );
}

export default AdminManagement;