const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Admin = require("./src/models/admin"); // Ensure the correct path
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const createAdmin = async () => {
  try {
    const hashedPassword = await bcrypt.hash("Admin@123", 10); // Hash the password

    const admin = new Admin({
      email: "admin@example.com",
      password: hashedPassword, // Store hashed password
      firstname: "Super",
      lastname: "Admin",
    });

    await admin.save();
    console.log("✅ Admin created successfully!");
  } catch (error) {
    console.error("❌ Error creating admin:", error);
  } finally {
    mongoose.connection.close();
  }
};

createAdmin();
