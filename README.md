A full-stack web application built using **Node.js, Express, MongoDB, and React (Vite)**. This project demonstrates a complete MERN-style architecture with a separated frontend and backend, connected via REST APIs.

---

## 📌 Project Overview

This application allows users to interact with a backend API built using Express.js, which stores and retrieves data from MongoDB. The frontend is built using React (Vite) and communicates with the backend using Axios.

---

## 🚀 Features

* RESTful API using Express.js
* MongoDB database integration using Mongoose
* React (Vite) frontend for UI
* Axios for API communication
* CORS enabled for secure frontend-backend interaction
* Environment variable management using dotenv
* Modular and scalable backend structure
* Live development support using nodemon

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* JavaScript (ES6+)
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* cors
* nodemon (development)

---

## 📁 Project Structure

```
project/
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── package.json
│
└── README.md
```

---

## 🧠 How It Works

1. Frontend sends request using Axios
2. Backend receives request via Express routes
3. Backend processes data using controllers
4. MongoDB stores/retrieves data
5. Response is sent back to frontend

---

## ⚠️ Important Notes

* Make sure MongoDB is running locally or use MongoDB Atlas
* Ensure backend is running before frontend API calls
* Do not push `.env` file to GitHub
* Always run `npm install` inside both frontend and backend


<img width="1890" height="897" alt="image" src="https://github.com/user-attachments/assets/614666dd-38f6-46f1-8ee3-747d9d6ec844" />

