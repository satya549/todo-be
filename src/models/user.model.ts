import mongoose, { Schema, } from "mongoose";



export interface User {
    email: string;
    password: string;
  }

const userSchema =new Schema<User>({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
})
const UserModel = mongoose.model<User>('User', userSchema);
export default UserModel;