import { Check, Heart, IndianRupee } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Profile = ({pass}) => {
    const[like,Setlikes]=useState(false)
    const[language,setLanguage]=useState([])
    const[edu,setEdu]=useState([])
    const[amount,setamount]=useState(null);


    const handleclick = () =>{
        Setlikes(!like);
      }
    const {phone,name,experience,image,field,dob,email,education,lang,aadhar}=pass;
    useEffect(() => {
        if (lang) {
          const splitlanguage = lang
            .split(',')
            .map(item => item.trim())
            .filter(item => item !== '');
          setLanguage(splitlanguage);
        }
      }, [lang]);

      useEffect(() => {
        if (education) {
          const splitedu = education
            .split(',')
            .map(item => item.trim())
            .filter(item => item !== '');
          setEdu(splitedu);
        }
      }, [education]);
  
     useEffect(() => {
         let newAmount;
         if (experience === "Less than 1 year") {
           newAmount = Math.floor(Math.random() * (600 - 500 + 1)) + 500;
         } else if (experience === "1-3 years") {
           newAmount = Math.floor(Math.random() * (800 - 700 + 1)) + 700;
         } else if (experience === "3-5 years") {
           newAmount = Math.floor(Math.random() * (1000 - 900 + 1)) + 900;
         } else {
           newAmount = Math.floor(Math.random() * (1100 - 1000 + 1)) + 1000;
         }
         setamount(newAmount);
       }, [experience]);

       const handlePayment = () => {
        const options = {
          key: "YOUR_RAZORPAY_KEY_ID", // 🔑 Replace this with your Razorpay Key ID
          amount: amount * 100, // Razorpay works with paise, not rupees
          currency: "INR",
          name: name || "Caregiver Service",
          description: "Service Payment",
          image: image, // optional logo/image
          handler: function (response) {
            alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
            // ✅ You can also save this to your DB here
          },
          prefill: {
            name: name,
            email: email,
            contact: phone,
          },
          theme: {
            color: "#03ACF0",
          },
        };
      
        const rzp = new window.Razorpay(options);
        rzp.open();
      };
      
  
  return (
    <div className="profile">
      <p className="profilehead">Profile</p>
      <div className="both">
      <div className="profileimage">
         <img src ={image} height="100%" width="100%" alt="/"/>
      </div>
      <div className="profiledetails">
        <div className="previous">
        <div className = "heart">
              <span className="username">{name}</span>
              <div className="likes"><Heart onClick={handleclick} fill={like?"rgba(3, 172, 240, 1)":"rgba(255, 255, 255, 0.3)"}/>
               {amount}
              </div>
              </div>
              <span className="aboutcaregiver">I have more than yrs of nanny/housekeeping works and i love children</span>
              <div className= "caregiverexpertise">
               <Check  fill ="rgba(3, 172, 240, 1)" color="rgba(3, 172, 240, 1)"/><span className="expertise">{field}</span>
              </div>
              <div className="allthreedetails">
              <div className="careexperience">
                <h5>Work Experience</h5>
                <ul>
                 <li>{experience}</li>
                </ul>
              </div>
              <div className="Nationality">
                <h5>Nationality</h5>
                <ul>
                 <li>Indian</li>
                </ul>
              </div>
              <div className="dob">
                <h5>DOB</h5>
                <ul>
                 <li>{dob}</li>
                </ul>
              </div>
              </div>
        </div>
        <div className="otherdetails">
            <div className="lang">
                <h5>Language Spoken</h5>
              <ul className="lang">
                 {language && language.map((l)=>{
                    return(
                        <li>{l}</li>
                    )
                 })}
              </ul>
            </div>
            <div className="ed">
            <h5>Education</h5>
              <ul className="lang">
                 {edu && edu.map((edu)=>{
                    return(
                        <li>{edu}</li>
                    )
                 })}
              </ul>
            </div>
            <div className="contact">
              <h5>Contact</h5>
              <div className="impdetails">
                <span className="profileemail">Email : {email}</span>
                <span className="profilephone">Phone no : {phone}</span>
              </div>
            </div>
        </div>
        <div className="payment">
            <div className="validid">
             <h5>Vailid Id Proof</h5>
            
             <div className="aadharimage">
                <img src={aadhar} width="100%" height="100%" alt="/" />
             </div>
             </div>
           
            <div className="rupay">
              <h5>Payment : <IndianRupee size="16px"/>{amount}</h5>
              <button className="razorpay" onClick={handlePayment}>Pay Now</button>
            </div>
            </div>
        </div>
      </div>
      </div>
    
  )
}

export default Profile
