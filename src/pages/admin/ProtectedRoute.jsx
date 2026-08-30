import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Loading
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F5F1E9]">
        <div className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#89643D]">
            Delta Rise
          </p>

          <p className="mt-3 font-serif text-xl text-[#171717]">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return (
      <Navigate
        to="/admin"
        replace
      />
    );
  }

  // Logged in
  return children;
}

export default ProtectedRoute;