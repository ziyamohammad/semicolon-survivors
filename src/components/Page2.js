import React from 'react'
import { Link } from 'react-router'

export default function Page2() {
  return (
    <div className="page2" >
    <div className="caregiver" id="page2">
      <span className="head">Became a Caregiver</span>
      <p>Join our platform and make a difference in someoen's life.</p>
      <ul className="caregiverli">
        <li>Comprehensive Credential Collection</li>
        <li>Professional Background Verification</li>
        <li>Fraud Prevention Measures </li>
      </ul>
    <Link to ="/Login"><button className="app1">Start</button></Link>

    </div>
    <div className="client">
    <span className="head">Find the Right Caregiver</span>
      <p>Browse our curated pool of caregivers to find the perfect match.</p>
      <ul className="caregiverli">
        <li>Customize your Services</li>
        <li>Negotiate Terms</li>
        <li>Flexible Engagements</li>
      </ul>
      <button className="app2">Browse</button>

    </div>
    <div className="services" id="page2service">
    <span className="head">Our Services</span>
    <p>Full-Time Caretaking Assistance</p>
    <p>Round-the-clock, 24/7 care tailored to the clients's needs.</p>
    <span className="heada">Medical and Logistical Assistance</span>
    <p>Transportation to medical facilities and management of paperwork</p>
    </div>
  </div>
  )
}
