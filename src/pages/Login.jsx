import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; 

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch {
      setError("Failed to login. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">

      <div className="login-left">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 className="login-title">Login</h2>
          <p className="login-subtitle">Enter your account details</p>

          {error && <p className="error-text">{error}</p>}

          <input
            type="email"
            placeholder="Username or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

       
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>

          <a href="#" className="forgot-password">
            Forgot Password?
          </a>

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="signup-text">
            Don’t have an account?
            <Link to="/register" className="signup-link">
              Sign up
            </Link>
          </p>
        </form>
      </div>

      <div className="login-right">
        <h1>
          Welcome to <span>student portal</span>
        </h1>
        <p>Login to access your account</p>
        <img src="/transparent_background.png" alt="Student portal" />
      </div>
    </div>
  );
}
