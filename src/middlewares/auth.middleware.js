import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken"
import {User} from "../models/user.model.js" 


export const verifyJWT = asyncHandler(async (req, res ,next) => {

    try {
        const authHeader = req.get("Authorization");
        const headerToken = authHeader && authHeader.startsWith("Bearer ") ? authHeader.slice(7) : undefined;
        const token = req.cookies?.accessToken || headerToken;
    
        if(!token)
        {
            throw new ApiError (401 , "Unauthorized request")
        }
    
        const decodedToken = await jwt.verify(token , process.env.ACCESS_TOKEN_SECRET)
    
       const user =  await User.findById(decodedToken?._id)
        .select("-password -refreshToken")
        if(!user) {
    
            throw new ApiError(401, "Invalid Access Token")
        
        }
    
        req.user = user;
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid Access Token")
        
    }



});