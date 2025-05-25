import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name:String,
    description:String,
    Cateroy:String,
    Price:String,
})
const UserModel = mongoose.models.users || mongoose.model("users", UserSchema)
export default UserModel