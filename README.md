🚀 Project Management System (Full-Stack GraphQL App)

A full-stack Project Management System built using GraphQL, Express, MongoDB, React, and Apollo Client/Server. This application allows users to manage projects, clients, and tasks efficiently with a modern and scalable architecture.

🔗 Live Demo

🌍 Frontend:
👉 [https://project-management-graph-ql.vercel.app](https://project-management-graph-ql.vercel.app)

⚙️ Backend (GraphQL API):
👉 [https://your-backend-link.onrender.com/graphql](https://project-management-graphql-2.onrender.com/)

🧩 Tech Stack

🔹 Frontend
React.js
Apollo Client
Tailwind CSS (optional UI styling)
🔹 Backend
Node.js
Express.js
Apollo Server (GraphQL API)
🔹 Database
MongoDB (Mongoose)

✨ Features

📁 Create, update, and delete projects
👤 Manage clients associated with projects
🔄 Real-time UI updates using Apollo Client cache
🔍 Fetch data efficiently with GraphQL queries
✏️ Update project status (e.g., Active, Pending, Completed)
❌ Delete projects and clients
🌐 REST-free architecture using GraphQL

📂 Project Structure

project-root/
│
├── client/        # React frontend
│   ├── src/
│   └── package.json
│
├── server/        # Express + GraphQL backend
│   ├── config/
│   ├── graphql/
│   ├── models/
│   └── index.js
│
└── README.md

⚙️ Installation & Setup
🔹 Clone the repository
git clone https://github.com/your-username/project-management-graphql.git
cd project-management-graphql

🔹 Backend Setup
cd server
npm install

Create a .env file inside server/:
PORT=5000
MONGO_URI=your_mongodb_connection_string

Run backend server:
npm run dev
# or
node index.js

🔹 Frontend Setup
cd client
npm install
npm start

🔗 GraphQL Endpoint
http://localhost:5000/graphql

Use tools like:
Apollo Sandbox
Postman
GraphQL Playground

📌 Example Queries
🔹 Get All Projects
query {
  projects {
    id
    name
    status
  }
}

🔹 Add Project
mutation {
  addProject(name: "New Project", description: "Test", status: ACTIVE) {
    id
    name
  }
}

🔐 Environment Variables
| Variable  | Description               |
| --------- | ------------------------- |
| MONGO_URI | MongoDB connection string |
| PORT      | Server port               |


📈 Future Improvements
🔐 Authentication (JWT)
👥 User roles (Admin/User)
📊 Dashboard analytics
📅 Task deadlines & notifications
🌐 Real-time updates with subscriptions

💡 Author
Yeasin Riyad
Full-Stack Developer 🚀
