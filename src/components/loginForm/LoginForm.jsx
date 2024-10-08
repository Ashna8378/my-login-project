
import React, { useState } from "react";
import style from"./LoginForm.module.css"
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';


const LoginForm = () => {
   const [email, setEmail] = useState("")
   const [password,setPassword] = useState("")
   

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({email:email, password:password}))
    console.log(email,password)
  }
  return (
    <>  
    <form className={style.form} onSubmit={handleSubmit}>
    <h1>🔏Login🔏</h1>
 <div className={style.inputContainer}>
 <EmailIcon className={style.icon}/>
 <input 
 type="email" 
 placeholder="Enter email..." 
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 required
 />
 </div>
 <div className={style.inputContainer}>
 <LockIcon className={style.icon}/>
 <input 
 type="password" 
 placeholder="Enter password..."
 className={style.passwordInput}
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 required
 />

    
 
 </div>
  
<button className={style.loginButton} type="submit" >
Login
</button>
    
    </form>
    </>
  )
}
export default LoginForm;



