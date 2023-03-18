import mongoose from "mongoose";

export default async function connect(){
    await mongoose.connect("mongodb+srv://admin2:admin123@quiz-app-cluster.fmxcghl.mongodb.net/?retryWrites=true&w=majority")
    console.log("Database Connected");
}