import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Dashboard() {
  const { user, role, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="dashboard">
        <h2>Welcome</h2>
        <p>Email: <b>{user?.email}</b></p>
        <p>Role: <b>{role}</b></p>

        {role === "admin" && <p className="badge admin">Admin Dashboard</p>}
        {role === "teacher" && <p className="badge teacher">Teacher Dashboard</p>}
        {role === "student" && <p className="badge student">Student Dashboard</p>}

        <button className="btn btn-red" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
