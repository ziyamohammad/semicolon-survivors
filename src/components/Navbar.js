
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router';
export default function Navbar({master}) {
  const [menuopen,setMenuopen]=useState(false);
  const[menu,setMenu]=useState(false)
  // console.log(storeduser.name)
const handlemenu=()=>{
  setMenuopen(true);
}
const handlemenuclose=()=>{
  setMenuopen(false);
}

const handlelogout=()=>{
  setMenu(!menu)

  }
  return (
    <>
    <div className="navbar">
     <Link to="/"><p>Care<span className="logo">Connect</span></p></Link> 
      <ul className="navli remove">
       <Link to="/"><li>Home</li></Link> 
       <a href ="#page2"> <li>About Us</li></a>
       <a href="#page2service"> <li>Services</li></a>
       <a href ="#page3"> <li>Testimonials</li></a>
      <a href="#contactus"><li>Contact Us</li></a>

      </ul>
      <div className="idphoto" onClick={handlelogout}>
      <img src="./img6.png" alt="/"/>
      <span className="idname" >{master ? `${master.name}` : "Guest"}</span>
      <div className={menu===true?"logout":"nologout"}>
     <span>Logout</span>
     <span>Login</span>
     <span>Signup</span>
    </div>
      </div>
      {/* <button className="mainbtn">FindCare</button>
      
      <Link to="/Registration"><button className="mainbtn">Caregiver</button></Link> */}
      <button className="menu"onClick={handlemenu}><MenuIcon/></button>
    </div>
    <div className={`${menuopen?'togglemenu':'menuclose'}`}>
    <ul>
    <Link to="/"><li>Home</li></Link>
    <a href ="#page2"><li>About Us</li></a>
    <a href="#page2service"><li>Services</li></a>
      <a href="#page3"><li>Testimonials</li></a> 
      <a href="#contactus"><li>Contact Us</li></a>
      </ul>
      <button className="closemenu"onClick={handlemenuclose}><CloseIcon/></button>
    </div>
    </>
  )
}
