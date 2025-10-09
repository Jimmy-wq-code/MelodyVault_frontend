import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();
  const { login, error, loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result) navigate("/home"); // ✅ Redirect after successful login
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h1>Welcome to MelodyVault!</h1>
        <p>Don’t have an account?</p>
        <button onClick={() => navigate("/signup")}>Sign Up</button>
      </div>

      <div className="right-panel">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="forgot">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p style={{ textAlign: "center", margin: "20px 0" }}>
          or login with social platforms
        </p>
        <div className="social-login">
          <button>G</button>
          <button>F</button>
          <button>GH</button>
          <button>In</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
