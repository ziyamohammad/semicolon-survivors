import { Check } from 'lucide-react'
import React from 'react'

const CaregiverCard = ({name,experience,image,field,dob,email}) => {
 
  return (
    <div className="caregivercard">
     <div className="caregiverimage">
       <img src = {image} alt="/" height="100%" width="100%"/>
     </div>
     <div className="caredetails">
       <span className="username">{name}</span>
       <span className="aboutcaregiver">I have more than yrs of nanny/housekeeping works and i love children</span>
       <div className= "caregiverexpertise">
        <Check  fill ="rgba(3, 172, 240, 1)" color="rgba(3, 172, 240, 1)"/><span className="expertise">{field}</span>
       </div>
       <div className = "careheadings">
        <span>Work Experience</span>
        <span>Email</span>
        
        <span>DOB</span>
       </div>
       <div className = "careheadingsanswer">
        <span className="careexp">{experience}</span>
        <span className="careemail">{email}</span>
      
        <span className="duo">{dob}</span>
       </div>
     </div>
    </div>
  )
}

export default CaregiverCard
