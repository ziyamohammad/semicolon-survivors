
import './App.css';
import Navbar from './components/Navbar';
// import Page1 from './components/Page1';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Registration from './components/Registration';
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';
import Fullpage from './components/Fullpage';
import Login from './components/Login';
import Signup from './components/Signup';
import { useEffect, useState } from 'react';



function App() {
 
  const localStorageKey ="user";

  // SIGNUP FUNCTIONALITY

  const[user,setUser]=useState(()=>{
    return JSON.parse(localStorage.getItem(localStorageKey))
  ||[]});

  const [master, setMaster] = useState(() => {
    return JSON.parse(localStorage.getItem("master")) || null;
  });

  const handleClick = (data) => {
    setUser([...user,data]);
  }
  
  useEffect(()=>{
    localStorage.setItem(localStorageKey,JSON.stringify(user));
  },[user]);
 
  // LOGIN FUNCTIONALITY

  const Handlelog = (check,navigate) => {
    const foundUser = user.find((u) => u.name === check.name && u.password === check.password);
   

    if (!foundUser) {
      alert("No data found. Please sign up first.");
      navigate('/signup')
    } else {
      alert("Login Successful");
      setMaster(check)
      localStorage.setItem("master", JSON.stringify(check));
      navigate('/')
    }
  };

  return (
    <div className="App">
      <Router>
      <Navbar master={master}/>
      
      <Routes>
      <Route path="/" element={<Fullpage/>} />
      <Route path="/Registration" element={<Registration/>} />
      <Route path="/Login" element={<Login Handlelog={Handlelog}/>} />
      <Route path="/signup" element={<Signup handleClick={handleClick}/>}/>
      {/* <Route path="/page2" element={<Page2/>} />
      <Route path="/page3" element={<Page3/>} />
      <Route path="/" element={<Page1/>} /> */}

       </Routes>
       </Router>
     </div>
  );
}

export default App;
