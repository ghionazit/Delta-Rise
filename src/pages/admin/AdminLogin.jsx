import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  LockKeyhole,
  Mail,
  Eye,
  EyeOff,
} from "lucide-react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [errorMessage, setErrorMessage] =
    useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // =========================
  // LOGIN
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/admin/dashboard");
    } catch (error) {
      console.error(error);

      if (
        error.code === "auth/invalid-credential"
      ) {
        setErrorMessage(
          "Incorrect email or password."
        );
      } else if (
        error.code === "auth/user-not-found"
      ) {
        setErrorMessage(
          "No account found with this email."
        );
      } else if (
        error.code === "auth/wrong-password"
      ) {
        setErrorMessage(
          "Incorrect password."
        );
      } else {
        setErrorMessage(
          "Something went wrong. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5F1E9] p-4 md:p-6">
      <section className="flex w-full max-w-[520px] items-center justify-center rounded-[32px] bg-white px-6 py-16 shadow-[0_20px_60px_rgba(80,60,40,0.08)] md:px-12">

        <div className="w-full max-w-[420px]">

          {/* Heading */}
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#89643D]">
              Welcome back
            </p>

            <h1 className="mt-4 font-serif text-4xl font-light tracking-[-0.03em] text-[#171717] md:text-5xl">
              Admin Login
            </h1>

            <p className="mt-4 text-sm leading-6 text-[#77716A]">
              Sign in to manage Delta Rise projects and portfolio content.
            </p>
          </div>

          {/* Login Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-5"
          >

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-[#6D6963]"
              >
                Email
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  strokeWidth={1.5}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9D968E]"
                />

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrorMessage("");
                  }}
                  placeholder="admin@example.com"
                  className="w-full rounded-xl border border-[#DED5CA] bg-[#F5F1E9]/50 py-4 pl-12 pr-4 text-sm text-[#171717] outline-none transition focus:border-[#8B653E] focus:bg-white"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>

              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#6D6963]"
                >
                  Password
                </label>

                <Link
                  to="/admin/forgot-password"
                  className="text-[10px] font-medium text-[#89643D] transition hover:text-[#2C0901]"
                >
                  Forgot Password?
                </Link>
              </div>

              <div className="relative">
                <LockKeyhole
                  size={18}
                  strokeWidth={1.5}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9D968E]"
                />

                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrorMessage("");
                  }}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-[#DED5CA] bg-[#F5F1E9]/50 py-4 pl-12 pr-12 text-sm text-[#171717] outline-none transition focus:border-[#8B653E] focus:bg-white"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9D968E] transition hover:text-[#2C0901]"
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
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

            {/* Error */}
            {errorMessage && (
              <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3">
                <p className="text-sm text-red-600">
                  {errorMessage}
                </p>
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="group mt-3 flex w-full items-center justify-center gap-3 rounded-xl bg-[#2C0901] px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#3D1006] hover:shadow-[0_12px_30px_rgba(44,9,1,0.2)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading
                ? "Signing In..."
                : "Sign In"}

              {!loading && (
                <ArrowRight
                  size={18}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              )}
            </button>

          </form>

          {/* Security Text */}
          <p className="mt-8 text-center text-xs leading-6 text-[#9D968E]">
            Secure access for authorized Delta Rise administrators only.
          </p>

        </div>

      </section>
    </main>
  );
}

export default AdminLogin;