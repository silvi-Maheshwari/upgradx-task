# 📝 Task Management API

This is a simple **Task Management API** built using **Node.js, Express, MongoDB, and JWT Authentication**.

## 📌 Features
- ✅ **User Authentication** (Login & Register) using JWT
- ✅ **Task Management** (Create, Read, Update, Delete)
- ✅ **Categories** (Assign tasks to categories like Work, Personal, etc.)
- ✅ **Filter tasks by category**

---

## 🚀 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT (JSON Web Token), Bcrypt.js for password hashing
- **Other Tools:** dotenv, cors

---

## 📁 Folder Structure
📦 task-management-api ┣ 📂 models ┃ ┣ 📜 Usermodel.js ┃ ┣ 📜 Taskmodel.js ┃ ┗ 📜 Categorymodel.js ┣ 📂 routes ┃ ┣ 📜 userroute.js ┃ ┣ 📜 taskroute.js ┃ ┗ 📜 categoryrtoutes.js ┣ 📜 index.js ┣ 📜 .env ┣ 📜 package.json ┗ 📜 README.md


## ⚙️ Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/task-management-api.git
cd task-management-api

2️⃣ Install Dependencies
npm install

3️⃣ Setup Environment Variables
Create a .env file in the root directory and add:

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
4️⃣ Start the Server
npm run start
The server will run on http://localhost:3000

📌 API Endpoints
🔹 Authentication (User)
Method	Endpoint	Description
POST	/user/register	Register a new user
POST	/user/login	Login and get JWT token


🔹 Categories
Method	Endpoint	Description
POST	/categories	Create a new category
GET	/categories	Get all categories

🔹 Tasks
Method	Endpoint	Description
POST	/tasks	Add a new task
GET	/tasks	Get all tasks
GET	/tasks?category_id=X	Get tasks by category
GET	/tasks/:id	Get a specific task
PUT	tasks/:id	Update a task
DELETE	/tasks/:id	Delete a task
🛠 Testing with Postman
Import the API collection into Postman.
Use the JWT token for protected routes.
Test API endpoints by sending requests.
📜 License
This project is open-source and free to use.
