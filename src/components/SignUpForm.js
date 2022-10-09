import React, { useState } from "react";
import {
  UserOutlined,
  MailTwoTone,
  LockTwoTone,
  FormOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import { toast } from "react-hot-toast";
import { createAccount } from "./../api/authApi";

function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const data = {
      first_name: firstName,
      last_name: lastName,
      password: password,
      email: email,
    };

    if (!validator.isEmail(email) && password !== confirmPassword) {
      toast.error("Invalid email and password");
    } else if (!validator.isEmail(email)) {
      toast.error("Invalid email");
    } else if (password !== confirmPassword) {
      toast.error("Password not matched");
    } else {
      try {
        const res = await createAccount(data);
        console.log(res);
        if (res.ok) {
          toast.success("Account created successfully");
          navigate("/login");
        }
      } catch (err) {
        toast.error(err);
      }
    }
  };

  return (
    <div className="form-container">
      <form className="signup-form" onSubmit={handleSignUp}>
        <h2>Create Account</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <UserOutlined className="input-icon" />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <UserOutlined className="input-icon" />
        </div>
        <div className="input-container">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <MailTwoTone className="input-icon" />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <LockTwoTone className="input-icon" />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <LockTwoTone className="input-icon" />
        </div>
        <button className="signup-btn" type="submit">
          <FormOutlined className="btn-icon" />
          <span>SignUp</span>
        </button>

        <div className="login-link">
          <span>Already have an account? </span>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
