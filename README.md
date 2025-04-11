🚀 How to Run the Project Locally (Step-by-Step)
🧰 Prerequisites
Before you begin, ensure you have the following installed:

Node.js & npm

MongoDB or MongoDB Atlas (for cloud)

Git

A code editor like VS Code

📥 Step 1: Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/mentor-connect.git
cd mentor-connect
📦 Step 2: Set Up the Backend
Navigate to the server directory:

bash
Copy
Edit
cd server
Install backend dependencies:

bash
Copy
Edit
npm install
Create a .env file inside the server folder and add the following:

ini
Copy
Edit
PORT=5000
MONGODB_URI=your_mongodb_connection_string
Replace your_mongodb_connection_string with your local MongoDB URI or Atlas connection string.

Start the backend server:

bash
Copy
Edit
npm start
The server will run at http://localhost:5000

💻 Step 3: Set Up the Frontend
Open a new terminal window/tab.

Navigate to the client directory:

bash
Copy
Edit
cd client
Install frontend dependencies:

bash
Copy
Edit
npm install
(Optional but Recommended) Add a proxy to client/package.json:

json
Copy
Edit
"proxy": "http://localhost:5000",
Start the React development server:

bash
Copy
Edit
npm start
The frontend will open at http://localhost:3000

✅ Step 4: Access the Application
Frontend: http://localhost:3000

Backend APIs (optional to test): http://localhost:5000/api

🧪 Step 5: Testing Features
Now that everything is up and running, you can:

Register/login as Admin or Mentee/Mentor

Try sending messages and schedule meetings

Test session handling, validations, and API functionality
