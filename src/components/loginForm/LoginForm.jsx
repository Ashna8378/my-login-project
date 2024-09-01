import React, { useState, useEffect } from "react";
import style from "./LoginForm.module.css";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const LoginForm = () => {
  // Initialize state with values from localStorage, or empty strings if none are found
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "");
  const [password, setPassword] = useState(() => localStorage.getItem("password") || "");

  useEffect(() => {
    // Load saved values from localStorage on component mount
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    if (savedEmail) setEmail(savedEmail);
    if (savedPassword) setPassword(savedPassword);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save values to localStorage
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    console.log(email, password);
  };

  return (
    <>  
      <form className={style.form} onSubmit={handleSubmit}>
        <h1>🔏Login🔏</h1>
        <div className={style.inputContainer}>
          <EmailIcon className={style.icon} />
          <input 
            type="email" 
            placeholder="Enter email..." 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={style.inputContainer}>
          <LockIcon className={style.icon} />
          <input 
            type="password" 
            placeholder="Enter password..."
            className={style.passwordInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className={style.loginButton} type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
