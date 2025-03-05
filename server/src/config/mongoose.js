// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// // dotenv config
// dotenv.config();

// mongoose.connect(
//     process.env.MONGO_DB_URI,
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//     },
//     () => {
//         console.log("Connected to Database");
//     }
// );

//---------------------------2-------------------------------//


// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// // Load environment variables
// dotenv.config();

// // MongoDB Connection Function
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_DB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds if not connected
//       connectTimeoutMS: 10000, // Allow 10 seconds to establish the connection
//     });

//     console.log("✅ Connected to Database");
//   } catch (err) {
//     console.error("❌ MongoDB Connection Error:", err);
//     process.exit(1); // Stop the app if the database is not connected
//   }
// };

// // Call the function to connect
// connectDB();

// module.exports = mongoose;


//-------------------------------3---------------------------------//
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000, // Increase timeout to 10s
  })
  .then(() => console.log("✅ Connected to Database"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));
