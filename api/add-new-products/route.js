import mongoose from "mongoose"
import { NextResponse } from "next/server"
import UserModel from "@/database/models/productModel"
import MongoURL from "@/database/db"

export const POST = async (req) => {
    await mongoose.connect(MongoURL)
    
    // If you want to send static data
    // const newUserData = new UserModel({
    //     name: 'Ali',
    //     depart: "CS",
    //     uni: "QZ",
    // })

    // Getting data from request body (Postman)
    const payload = await req.json()
    const newUserData = new UserModel(payload)

    const fdata = await newUserData.save()
    return NextResponse.json({ result: fdata })
}