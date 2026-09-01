import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setErrorMessage("");
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);

      setMessage(
        "Password reset link sent. Please check your email inbox."
      );
    } catch (error) {
      console.error(error);

      if (error.code === "auth/invalid-email") {
        setErrorMessage(
          "Please enter a valid email address."
        );
      } else if (error.code === "auth/user-not-found") {
        setErrorMessage(
          "No account found with this email."
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

          {/* Back */}
          <Link
            to="/admin"
            className="inline-flex items-center gap-2 text-xs text-[#89643D] transition hover:text-[#2C0901]"
          >
            <ArrowLeft
              size={16}
              strokeWidth={1.5}
            />

            Back to login
          </Link>

          {/* Heading */}
          <div className="mt-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#89643D]">
              Account Recovery
            </p>

            <h1 className="mt-4 font-serif text-4xl font-light tracking-[-0.03em] text-[#171717] md:text-5xl">
              Forgot Password?
            </h1>

            <p className="mt-4 text-sm leading-6 text-[#77716A]">
              Enter your admin email and we will send you a link to reset your password.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-10"
          >
            <label
              htmlFor="email"
              className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-[#6D6963]"
            >
              Admin Email
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
                  setMessage("");
                }}
                placeholder="admin@example.com"
                className="w-full rounded-xl border border-[#DED5CA] bg-[#F5F1E9]/50 py-4 pl-12 pr-4 text-sm text-[#171717] outline-none transition focus:border-[#8B653E] focus:bg-white"
                required
              />
            </div>

            {/* Success Message */}
            {message && (
              <div className="mt-5 flex items-start gap-3 rounded-xl border border-green-100 bg-green-50 px-4 py-3 text-green-700">
                <CheckCircle2
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0"
                />

                <p className="text-sm leading-6">
                  {message}
                </p>
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div className="mt-5 flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-red-600">
                <AlertCircle
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0"
                />

                <p className="text-sm leading-6">
                  {errorMessage}
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="group mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#2C0901] px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:shadow-[0_12px_30px_rgba(139,101,62,0.2)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading
                ? "Sending..."
                : "Send Reset Link"}

              {!loading && (
                <ArrowRight
                  size={18}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-xs leading-6 text-[#9D968E]">
            A secure password reset link will be sent to your registered admin email.
          </p>

        </div>
      </section>
    </main>
  );
}

export default ForgotPassword;