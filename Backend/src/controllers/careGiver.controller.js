import { asyncHandler } from "../utils/asyncHandle.js"
import {ApiError} from "../utils/ApiError.js"
import { CareGiver } from "../models/careGiverModel.js"
import { deletefromCloudinary, uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import mongoose from "mongoose"

const registerCareGiver= asyncHandler( async (req,res) => {

    const { fullName, dateOfBirth, mobileNumber, email, address, fieldOfExpertise, yearsOfExpertise, qualifications, preferredWorkSchedule, languageSpoken, drivingLicence} = req.body;

    const userExist= await CareGiver.findOne({email});

    const careGiverImageLocalPath=req.files?.image?.[0]?.path

    const aadharImageLocalPath=req.files?.aadharDetail?.[0]?.path

    if(!fullName || !dateOfBirth || !mobileNumber || !email || !address || !fieldOfExpertise || !yearsOfExpertise || !qualifications
        || !preferredWorkSchedule || !languageSpoken || drivingLicence === undefined)
        {
            throw new ApiError(400, "All fields arerequired")
        }

        const parsedMobileNumber = Number(mobileNumber);
        const parsedYearsOfExpertise = Number(yearsOfExpertise);
        const parsedDrivingLicence = drivingLicence === 'true'; 

        if (isNaN(parsedMobileNumber) || isNaN(parsedYearsOfExpertise)) {
            throw new ApiError(400, "Mobile number and years of expertise must be numbers");
        }

        if(userExist){
            throw new ApiError(402, "CareGiver Already Exists")
        }

        if(!careGiverImageLocalPath){
            throw new ApiError(400 ,"Image Not found")
        }

        if(!aadharImageLocalPath){
            throw new ApiError(400, "Aadhar Image not found")
        }

    const careGiverImage= await uploadOnCloudinary(careGiverImageLocalPath)

    const aadharImage= await uploadOnCloudinary(aadharImageLocalPath)

    console.log({
        fullName,
        dateOfBirth,
        mobileNumber,
        email,
        careGiverImage: careGiverImage.url,
        address,
        aadharImage: aadharImage.url,
        fieldOfExpertise,
        yearsOfExpertise,
        qualifications,
        preferredWorkSchedule,
        languageSpoken,
        drivingLicence
    });
    

    try{
        const careGiver= await CareGiver.create({
            fullName,
            dateOfBirth,
            mobileNumber:parsedMobileNumber,
            email,
            careGiverImage: careGiverImage.url,
            address,
            aadharImage: aadharImage.url,
            fieldOfExpertise,
            yearsOfExpertise:parsedYearsOfExpertise,
            qualifications,
            preferredWorkSchedule,
            languageSpoken,
            drivingLicence:parsedDrivingLicence
        })

        if(!careGiver){
            throw new ApiError(500, "Server Error while registering Care Giver")
        }

        return res.status(201).json( new ApiResponse(201, careGiver, "CAreGiver Registered Successfully"))
    }
    catch(error){
        console.log("Care Giver Creation failed");

        console.error("Care Giver Creation failed. Error details:", error);

        if(careGiverImage){
            await deletefromCloudinary(careGiverImage.public_id)
        }
        if(aadharImage){
            await deletefromCloudinary(aadharImage.public_id)
        }
        throw new ApiError(500,"Something went wrong while registerring the user and images were deleted")
    }

})

// Get All Caregivers
 const getAllCareGivers = asyncHandler( async (req, res) => {
    try {
        const caregivers = await CareGiver.find();
        if(!caregivers){
            throw new ApiError(404,"Error while Fetching")
        }
        return res.status(200).json(new ApiResponse(202, caregivers,"Fetched Successfully"));
    } 
    catch (err) {
        console.log(err);
        
        throw new ApiError(500, "Something went wrong while fetching the details")
    }
});

export{
    registerCareGiver, getAllCareGivers
}