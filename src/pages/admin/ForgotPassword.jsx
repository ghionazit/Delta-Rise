import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  CheckCircle2,
} from "lucide-react";

import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // =========================
  // SEND RESET EMAIL
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setErrorMessage("");
    setLoading(true);

    try {
      await sendPasswordResetEmail(
        auth,
        email.trim()
      );

      setMessage(
        "Password reset email sent. Please check your inbox."
      );

      setEmail("");

    } catch (error) {
      console.error(error);

      if (error.code === "auth/invalid-email") {
        setErrorMessage(
          "Please enter a valid email address."
        );
      } else if (error.code === "auth/user-not-found") {
        setErrorMessage(
          "No admin account was found with this email."
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

      <section className="w-full max-w-[520px] rounded-[32px] bg-white px-6 py-12 shadow-[0_20px_60px_rgba(80,60,40,0.08)] md:px-12 md:py-16">

        <div className="mx-auto w-full max-w-[420px]">

          {/* BACK TO LOGIN */}
          <Link
            to="/admin"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#89643D] transition hover:text-[#2C0901]"
          >
            <ArrowLeft
              size={16}
              strokeWidth={1.5}
            />

            Back to login
          </Link>


          {/* HEADER */}
          <div className="mt-10">

            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#89643D]">
              Account Recovery
            </p>

            <h1 className="mt-4 font-serif text-4xl font-light tracking-[-0.03em] text-[#171717] md:text-5xl">
              Forgot Password?
            </h1>

            <p className="mt-4 text-sm leading-6 text-[#77716A]">
              Enter your admin email and we will send you a password reset link.
            </p>

          </div>


          {/* SUCCESS STATE */}
          {message ? (

            <div className="mt-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F5F1E9] text-[#89643D]">

                <CheckCircle2
                  size={32}
                  strokeWidth={1.5}
                />

              </div>

              <h2 className="mt-6 font-serif text-3xl font-light text-[#171717]">
                Check Your Email
              </h2>

              <p className="mx-auto mt-4 max-w-[340px] text-sm leading-6 text-[#77716A]">
                {message}
              </p>

              <Link
                to="/admin"
                className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-[#2C0901] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#3D1006]"
              >
                Back to Login

                <ArrowRight
                  size={17}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </Link>

            </div>

          ) : (

            /* FORM */
            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-5"
            >

              {/* EMAIL */}
              <div>

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
                    }}
                    placeholder="admin@example.com"
                    className="w-full rounded-xl border border-[#DED5CA] bg-[#F5F1E9]/50 py-4 pl-12 pr-4 text-sm text-[#171717] outline-none transition focus:border-[#89643D] focus:bg-white"
                    required
                  />

                </div>

              </div>


              {/* ERROR */}
              {errorMessage && (

                <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3">

                  <p className="text-sm text-red-600">
                    {errorMessage}
                  </p>

                </div>

              )}


              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#2C0901] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#3D1006] disabled:cursor-not-allowed disabled:opacity-70"
              >

                {loading
                  ? "Sending Email..."
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

          )}

        </div>

      </section>

    </main>
  );
}

export default ForgotPassword;