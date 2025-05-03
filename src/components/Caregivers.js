import React from 'react';
import CaregiverCard from './CaregiverCard';

const Caregivers = ({ caregiver }) => {
   
  return (
    <div className="choosecaregivers">
      <span className="choosehead">Choose Your Caregiver!!</span>
      {caregiver && caregiver.map((cg)=>{
        return(
         
            <CaregiverCard  phone={cg.mobileNumber} name={cg.fullName} dob={cg.dateOfBirth} experience={cg.yearsOfExpertise} field={cg.fieldOfExpertise} email={cg.email} image={cg.careGiverImage}/>
            
        )
      })}
        
     
    </div>
  );
};

export default Caregivers;
