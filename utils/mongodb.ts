import mongoose from "mongoose";


const connectMongoDB = async() => {
    try {
      const mongoUri = process.env.MONGODB_URI
      if(!mongoUri) throw new Error('MONGODB URI not found in .env.local')
  
      const conn = await mongoose.connect(mongoUri)
      console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
      console.log('Error connecting to MongoDB', error)
    }
  }
  
  export default connectMongoDB
  
