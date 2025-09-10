import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; 

export default function Register() {
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password, role);
      navigate("/dashboard");
    } catch {
      setError("Could not create account.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
      <form
        onSubmit={handleSubmit}
        className="login-form"
      >
        <h2 className="login-title">Register</h2>
        {error && <p className="error-text">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-2 w-full rounded"
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="login-btn"
        >
          Sign Up
        </button>
        <p className="signup-text">
          Already have an account?{" "}
          <Link className="/register" to="/login">
            Login
          </Link>
        </p>
      </form>
      </div>
      <div className="login-right">
        <h1>Welcome to <span>The Register Portal</span></h1>
        <p>Fill In Register Info</p>
        <img src="/transparent_background.png" alt="Student portal" />

      </div>
    </div>
  );
}

