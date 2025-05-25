import mongoose from "mongoose"
import { NextResponse } from "next/server"
import DBString from "@/database/db"
import UserModel from "@/database/models/productModel"

export const GET = async ()=>{
    await mongoose.connect(DBString)
    const UserData = await UserModel.find()
    return NextResponse.json({Result : UserData})
}