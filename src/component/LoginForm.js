import React, { useState } from "react";
import { MailTwoTone, LockTwoTone, LoginOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
  };


  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h1>logo</h1>
        <div className="welcome-text">
          <h2>Welcome Back!</h2>
          <p>To keep connected with us please login</p>
        </div>

        <div className="input-container">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <MailTwoTone className="input-icon" />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LockTwoTone className="input-icon" />
        </div>
        <button className="login-btn" type="submit">
          <LoginOutlined className="btn-icon" />
          <span>Login</span>
        </button>
       <div className="signup-link"> <span>Don't have an account yet? </span>
      <Link to='/signup'>Create Account</Link></div>
      </form>
    </div>
  );
}

export default LoginForm;
