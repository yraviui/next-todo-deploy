import mongoose from 'mongoose'

export const ConnectDB = async () => {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('MongoDB connected successfully!')
}