import { useEffect, useState } from "react";
import {
  LockKeyhole,
  Mail,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";

import { auth } from "../../firebase";

function AdminSettings() {
  const [adminEmail, setAdminEmail] = useState("");

  const [currentPassword, setCurrentPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showCurrentPassword, setShowCurrentPassword] =
    useState(false);

  const [showNewPassword, setShowNewPassword] =
    useState(false);

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] =
    useState("");

  const [loading, setLoading] = useState(false);

  // =========================
  // GET CURRENT ADMIN
  // =========================
  useEffect(() => {
    if (auth.currentUser) {
      setAdminEmail(auth.currentUser.email || "");
    }
  }, []);

  // =========================
  // CHANGE PASSWORD
  // =========================
  const handleChangePassword = async (e) => {
    e.preventDefault();

    setMessage("");
    setErrorMessage("");

    if (!auth.currentUser) {
      setErrorMessage(
        "No authenticated admin user found."
      );
      return;
    }

    if (
      !currentPassword ||
      !newPassword ||
      !confirmPassword
    ) {
      setErrorMessage(
        "Please fill in all password fields."
      );
      return;
    }

    if (newPassword.length < 6) {
      setErrorMessage(
        "New password must be at least 6 characters."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage(
        "New passwords do not match."
      );
      return;
    }

    setLoading(true);

    try {
      const user = auth.currentUser;

      // Verify current password first
      const credential =
        EmailAuthProvider.credential(
          user.email,
          currentPassword
        );

      await reauthenticateWithCredential(
        user,
        credential
      );

      // Update password in Firebase
      await updatePassword(
        user,
        newPassword
      );

      setMessage(
        "Password changed successfully."
      );

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

    } catch (error) {
      console.error(error);

      if (
        error.code ===
        "auth/invalid-credential"
      ) {
        setErrorMessage(
          "Your current password is incorrect."
        );
      } else if (
        error.code ===
        "auth/requires-recent-login"
      ) {
        setErrorMessage(
          "Please log in again and try changing your password."
        );
      } else if (
        error.code ===
        "auth/weak-password"
      ) {
        setErrorMessage(
          "Please choose a stronger password."
        );
      } else {
        setErrorMessage(
          "Unable to change password. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F1E9] px-5 py-8 md:px-8 md:py-10 lg:px-10">
      <div className="mx-auto max-w-[900px]">

        {/* =========================
            HEADER
        ========================= */}
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#89643D]">
            Admin Panel
          </p>

          <h1 className="mt-3 font-serif text-4xl font-light tracking-[-0.04em] text-[#171717] md:text-5xl">
            Settings
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#77716A]">
            Manage your administrator account and security settings.
          </p>
        </div>


        {/* =========================
            ACCOUNT INFORMATION
        ========================= */}
        <section className="mt-10 rounded-[24px] border border-[#E6DED2] bg-white p-6 md:p-8">

          <div className="flex items-start gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5F1E9] text-[#89643D]">
              <Mail
                size={19}
                strokeWidth={1.5}
              />
            </div>

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#89643D]">
                Account
              </p>

              <h2 className="mt-2 font-serif text-2xl font-light text-[#171717]">
                Admin Account
              </h2>

              <p className="mt-2 text-sm text-[#77716A]">
                {adminEmail || "No admin email found"}
              </p>
            </div>

          </div>

        </section>


        {/* =========================
            CHANGE PASSWORD
        ========================= */}
        <section className="mt-6 rounded-[24px] border border-[#E6DED2] bg-white p-6 md:p-8">

          <div className="flex items-start gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5F1E9] text-[#89643D]">
              <LockKeyhole
                size={19}
                strokeWidth={1.5}
              />
            </div>

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#89643D]">
                Security
              </p>

              <h2 className="mt-2 font-serif text-2xl font-light text-[#171717]">
                Change Password
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#77716A]">
                Use your current password to create a new secure password.
              </p>
            </div>

          </div>


          <form
            onSubmit={handleChangePassword}
            className="mt-8 max-w-[600px] space-y-5"
          >

            {/* CURRENT PASSWORD */}
            <div>

              <label
                htmlFor="currentPassword"
                className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-[#6D6963]"
              >
                Current Password
              </label>

              <div className="relative">

                <LockKeyhole
                  size={18}
                  strokeWidth={1.5}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9D968E]"
                />

                <input
                  id="currentPassword"
                  type={
                    showCurrentPassword
                      ? "text"
                      : "password"
                  }
                  value={currentPassword}
                  onChange={(e) => {
                    setCurrentPassword(
                      e.target.value
                    );
                    setErrorMessage("");
                    setMessage("");
                  }}
                  placeholder="Enter current password"
                  className="w-full rounded-xl border border-[#DED5CA] bg-[#F5F1E9]/50 py-4 pl-12 pr-12 text-sm text-[#171717] outline-none transition focus:border-[#89643D] focus:bg-white"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowCurrentPassword(
                      !showCurrentPassword
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9D968E] hover:text-[#2C0901]"
                >
                  {showCurrentPassword ? (
                    <EyeOff
                      size={18}
                      strokeWidth={1.5}
                    />
                  ) : (
                    <Eye
                      size={18}
                      strokeWidth={1.5}
                    />
                  )}
                </button>

              </div>

            </div>


            {/* NEW PASSWORD */}
            <div>

              <label
                htmlFor="newPassword"
                className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-[#6D6963]"
              >
                New Password
              </label>

              <div className="relative">

                <LockKeyhole
                  size={18}
                  strokeWidth={1.5}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9D968E]"
                />

                <input
                  id="newPassword"
                  type={
                    showNewPassword
                      ? "text"
                      : "password"
                  }
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(
                      e.target.value
                    );
                    setErrorMessage("");
                    setMessage("");
                  }}
                  placeholder="Enter new password"
                  className="w-full rounded-xl border border-[#DED5CA] bg-[#F5F1E9]/50 py-4 pl-12 pr-12 text-sm text-[#171717] outline-none transition focus:border-[#89643D] focus:bg-white"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowNewPassword(
                      !showNewPassword
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9D968E] hover:text-[#2C0901]"
                >
                  {showNewPassword ? (
                    <EyeOff
                      size={18}
                      strokeWidth={1.5}
                    />
                  ) : (
                    <Eye
                      size={18}
                      strokeWidth={1.5}
                    />
                  )}
                </button>

              </div>

            </div>


            {/* CONFIRM PASSWORD */}
            <div>

              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-[#6D6963]"
              >
                Confirm New Password
              </label>

              <div className="relative">

                <LockKeyhole
                  size={18}
                  strokeWidth={1.5}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9D968E]"
                />

                <input
                  id="confirmPassword"
                  type={
                    showNewPassword
                      ? "text"
                      : "password"
                  }
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(
                      e.target.value
                    );
                    setErrorMessage("");
                    setMessage("");
                  }}
                  placeholder="Confirm new password"
                  className="w-full rounded-xl border border-[#DED5CA] bg-[#F5F1E9]/50 py-4 pl-12 pr-4 text-sm text-[#171717] outline-none transition focus:border-[#89643D] focus:bg-white"
                  required
                />

              </div>

            </div>


            {/* SUCCESS MESSAGE */}
            {message && (

              <div className="flex items-center gap-3 rounded-xl border border-green-100 bg-green-50 px-4 py-3 text-green-700">

                <CheckCircle2
                  size={18}
                  strokeWidth={1.5}
                />

                <p className="text-sm">
                  {message}
                </p>

              </div>

            )}


            {/* ERROR MESSAGE */}
            {errorMessage && (

              <div className="flex items-center gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-red-600">

                <AlertCircle
                  size={18}
                  strokeWidth={1.5}
                />

                <p className="text-sm">
                  {errorMessage}
                </p>

              </div>

            )}


            {/* SAVE BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="mt-3 rounded-xl bg-[#2C0901] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#3D1006] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading
                ? "Updating Password..."
                : "Update Password"}
            </button>

          </form>

        </section>

      </div>
    </main>
  );
}

export default AdminSettings;