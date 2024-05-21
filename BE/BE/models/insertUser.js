import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from './User.js'; // Ensure this path is correct

async function createUsers() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.rjipatt.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Clear existing users
    await User.deleteMany({});

    // Create users
    const users = [
      {
        username: "john_doe",
        password: await bcrypt.hash("password123", 10),
        role: "customer"
      },
      {
        username: "jane_smith",
        password: await bcrypt.hash("password123", 10),
        role: "admin"
      },
      {
        username: "alex_jones",
        password: await bcrypt.hash("password123", 10),
        role: "customer"
      }
    ];

    // Insert users into the collection
    await User.insertMany(users);

    console.log('Users inserted successfully');
    process.exit();
  } catch (error) {
    console.error('Error inserting users:', error);
    process.exit(1);
  }
}

createUsers();
