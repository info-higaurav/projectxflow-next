import mongoose from "mongoose";

export const connect = async()=>{
    try {
       const res = await mongoose.connect(process.env.DB_URI as string,{dbName:process.env.DB_NAME as string})
       return res;
    } catch (error) {
        throw error;
    }
}