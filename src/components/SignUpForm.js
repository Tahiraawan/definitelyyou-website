import React, { useState } from "react";
import { UserOutlined, MailTwoTone, LockTwoTone, LoginOutlined, FormOutlined} from "@ant-design/icons";
import { Link } from "react-router-dom";

function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e)=>{
    e.preventDefault();


  }
  
  return (
    <div className="form-container">
      <form className="signup-form" onSubmit={handleSignUp}>
      <h2>Create Account</h2>
      <div className="input-container">
        <input type="text" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required />
        <UserOutlined className="input-icon" />
      </div>
      <div className="input-container">
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)} required />
        <UserOutlined className="input-icon" />
      </div>
      <div className="input-container">
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <MailTwoTone className="input-icon" />
      </div>
      <div className="input-container">
        <input type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)} required />
        <LockTwoTone className="input-icon" />
      </div>
      <button className="signup-btn" type="submit">
        <FormOutlined className="btn-icon" />
        <span>SignUp</span>
      </button>

      <div className="login-link">
      <span>Already have an account? </span>
      <Link to='/login'>Login</Link>
      </div>
    </form>
    </div>
  );
}

export default SignUpForm;
