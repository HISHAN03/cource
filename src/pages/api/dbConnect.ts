import mongoose from 'mongoose';

const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb+srv://hishan:1234@cluster0.sksy2nt.mongodb.net/?retryWrites=true&w=majority', { dbName: "courses" });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default dbConnect;
