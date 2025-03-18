
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = ({handleClick}) => {
    const[name,setName]=useState();
      const[password,setPassword]=useState();
      const[email,setEmail]=useState();
    
      const navigate=useNavigate();
      
     const handleChange=(e)=>{
      if(e.target.className==="username"){
        setName(e.target.value)
      }
        
      else if(e.target.className==="email"){
        setEmail(e.target.value)
        
      }
      else{
        setPassword(e.target.value)
        
      }
    
      }

      const Handlesignup=()=>{
        if(name==="" || password===""||email===""){
            alert("Please enter all mandatory fields")
            return;
          }
        handleClick({name,email,password})
        setName("")
        setPassword("")
        setEmail("")

        
       
        alert("Signup Successfull")
        navigate("/Login")
      }
    return (
        <div className="login">
            <div className="logform">
              <h3>Sign Up</h3>
              <form className="loginform">
                <label htmlFor='username'>Username</label>
                <input type="text" value={name} className="username" onChange={handleChange}/>
                <label htmlFor='email'>Email</label>
                <input type="text" value={email} className="email" onChange={handleChange}/>
                <label htmlFor='password'>Password</label>
                <input type="text" value={password} className="password" onChange={handleChange}/>
                <div className="remember">
                <input type="radio" className="radio" value="Remember me"/>
                <span className="rem">Remember me</span>
                </div>
                <button className="signin" onClick={Handlesignup}>Sign Up</button>
    
              </form>
            </div>
            <div className="logimg">
             <img src="./doc.png" alt="frame"/>
             <div className="full">Compassion Meets<span className="uhv">Care</span></div>
            </div>
          
        </div>
      )
    }

export default Signup
