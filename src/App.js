
import './App.css';
import Navbar from './components/Navbar';
// import Page1 from './components/Page1';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Registration from './components/Registration';
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';
import Fullpage from './components/Fullpage';
import Login from './components/Login';
import Signup from './components/Signup';
import { useEffect, useState } from 'react';



function App() {
 
  const[master,setmaster]=useState({})

  // SIGNUP FUNCTIONALITY

 
  const handlemaster = (user)=>{
    setmaster(user)
  }

 
 
  // LOGIN FUNCTIONALITY

  

  return (
    <div className="App">
      <Router>
      <Navbar master={master} setmaster={setmaster}/>
      
      <Routes>
      <Route path="/" element={<Fullpage master={master} />} />
      <Route path="/Registration" element={<Registration/>} />
      <Route path="/Login" element={<Login handlemaster ={handlemaster}/>} />
      <Route path="/signup" element={<Signup />}/>
      {/* <Route path="/page2" element={<Page2/>} />
      <Route path="/page3" element={<Page3/>} />
      <Route path="/" element={<Page1/>} /> */}

       </Routes>
       </Router>
       <ToastContainer position="top-center" background-color="blue" autoClose={2000} />

     </div>
  );
}

export default App;
