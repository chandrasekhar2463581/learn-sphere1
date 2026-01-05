import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  checkDuplicateEmail,
  getUserByEmail,
} from "../components/registration/Api";
import { normalizeEmail } from "../components/registration/Validation";
import { InputField } from "../components/registration/InputField";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const normalized = normalizeEmail(email);
    const exists = await checkDuplicateEmail(normalized);
    setLoading(false);
    if (!exists) {
      setError("No account found for this email. Please register.");
      return;
    }

    // Retrieve user info (including role and optional password) from mock API
    const stored = await getUserByEmail(normalized);

    // If the stored user has a password set (seeded admin or registered user), require it.
    if (stored?.password) {
      if (!password) {
        setError("Password is required for this account");
        return;
      }
      if (password !== stored.password) {
        setError("Incorrect password");
        return;
      }
    }

    const registeredName =
      stored?.name || localStorage.getItem("studentName") || "Student";
    const user = {
      name: registeredName,
      email: normalized,
      role: stored?.role || "student",
    };
    localStorage.setItem("learnsphere_user", JSON.stringify(user));
    // notify same-window listeners
    window.dispatchEvent(new Event("userUpdated"));

    // Redirect admins to the admin area
    if (user.role === "admin") navigate("/admin");
    else navigate("/dashboard");
  };

  return (
    <div className="mx-auto max-w-md px-4 py-10">
      <h2 className="text-2xl font-bold text-slate-100 mb-6">Login</h2>
      <form onSubmit={onSubmit}>
        <label className="block mb-2 text-sm">Email</label>
        <input
          className="w-full rounded-md px-3 py-2 mb-4 bg-[var(--card)] border border-[var(--border)]"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error ? (
          <div className="text-sm text-red-400 mb-3">{error}</div>
        ) : null}

        <button
          type="submit"
          className="w-full rounded-lg px-4 py-2.5 font-semibold text-white bg-gradient-to-tr from-indigo-600 to-blue-500"
          disabled={loading}
        >
          {loading ? "Checking..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
