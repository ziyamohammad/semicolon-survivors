import React, { useState } from 'react'
import { Link} from 'react-router';
import { useNavigate } from 'react-router-dom';


const Login = ({Handlelog}) => {
  const navigate=useNavigate();
  const[name,setName]=useState();
  const[password,setPassword]=useState();
  
  // const[isLoggedIn,setisLoggedIn]=useState(localStorage.getItem("isLoggedIn") === "true")
  
 const handleChange=(e)=>{
  if(e.target.className==="username"){
    setName(e.target.value)
    
  }
  else{
    setPassword(e.target.value)
    
  }

  }

  const Handlelogin=()=>{
    if(name==="" || password===""){
      alert("Please enter all mandatory fields")
      return;
    }
   
    Handlelog({name,password},navigate)
    setName("")
    setPassword("")

  }

  return (
    <div className="login">
        <div className="logform">
          <h3>WELCOME BACK!</h3>
          <span>Don't have a account,<Link to="/signup">< span className="valid">Sign up</span></Link> </span>
          <form className="loginform">
            <label htmlFor='username'>Username</label>
            <input type="text" value={name} className="username" onChange={handleChange}/>
            <label htmlFor='password'>Password</label>
            <input type="text" value={password} className="password" onChange={handleChange}/>
            <div className="remember">
            <input type="radio" className="radio" value="Remember me"/>
            <span className="rem">Remember me</span>
            </div>
            <button className="signin" onClick={Handlelogin}>Sign In</button>

          </form>
        </div>
        <div className="logimg">
         <img src="./doc.png" alt="frame"/>
         <div className="full">Compassion Meets<span className="uhv">Care</span></div>
        </div>
      
    </div>
  )
}

export default Login
