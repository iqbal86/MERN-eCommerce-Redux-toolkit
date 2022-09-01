import mongoose from 'mongoose'

const connecDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`MONGODB connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(`Error: ${error}`.red.bold)
    process.exit(1)
  }
}

export default connecDB
