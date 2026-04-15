# 🚀 Real-Time Chat Application (MERN Stack)

<p align="center">
  <b>Visitor Count</b><br>
  <img src="https://profile-counter.glitch.me/chat-app/count.svg" />
</p>

---

## 🌐 Live Demo

🔗 https://chat-application-jack.vercel.app/

---

## 📌 Project Overview

A real-time **Chat Application** built using the **MERN Stack (MongoDB, Express, React, Node.js)** with modern UI powered by **Tailwind CSS**.

This application enables users to communicate instantly through private and group chats with real-time updates using **Socket.IO**. It also includes authentication, notifications, and efficient state management using Redux.

---

## 🛠️ Technologies Used

- **MongoDB** – NoSQL database
- **Express.js** – Backend framework
- **Node.js** – Server runtime
- **React.js** – Frontend library
- **Tailwind CSS** – Styling
- **Socket.IO** – Real-time communication
- **JWT (JSON Web Token)** – Authentication
- **Redux** – State management
- **React-Toastify** – Notifications

---

## ✨ Key Features

- 🔐 User Authentication (Login / Signup / Logout)
- 💬 Real-time messaging
- 👥 Group chat functionality
- 🔔 Notifications with alerts
- ⚡ Fast and responsive UI
- 🧠 Centralized state management using Redux

---

## 🔑 Demo Credentials

Use this to test the app:

Email: [testuser@gmail.com](mailto:testuser@gmail.com)
Password: 123456

---

## ⚙️ Installation Guide

### 1. Clone Repository

```bash
git clone https://github.com/akashdeep023/Chat_App.git
cd Chat_App
```

---

### 2. Install Dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd backend
npm install
```

---

### 3. Environment Variables

Create `.env` file in both folders

#### Frontend (.env)

```bash
VITE_BACKEND_URL=http://localhost:9000
```

#### Backend (.env)

```bash
FRONTEND_URL=http://localhost:5173
MONGODB_URI=mongodb://127.0.0.1:27017/chat-app
PORT=9000
JWT_SECRET=your_secret_key
```

---

### 4. Run Project

#### Frontend

```bash
npm run dev
```

#### Backend

```bash
npm run dev
```

---

### 5. Open in Browser

```
http://localhost:5173
```

---

## 📁 Project Structure

```
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   ├── redux
│   ├── socket
│   └── utils
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middlewares
│   └── config
```

---

## 🔗 API Endpoints

### Auth Routes

- POST /api/auth/signup
- POST /api/auth/login

### Chat Routes

- GET /api/chat
- POST /api/chat

### Message Routes

- GET /api/message/:chatId
- POST /api/message

---

## 🏗️ Architecture

```
Frontend (React)
       ↓
Backend (Node + Express)
       ↓
MongoDB Database

↔ Real-time communication using Socket.IO
```

---

## 🔒 Security Features

- Password hashing (bcrypt)
- JWT authentication
- Protected routes
- Environment variable protection

---

## ⚡ Performance Optimization

- Optimized API calls
- Efficient Redux state updates
- Lazy loading components

---

## 🚀 Future Enhancements

- 📞 Video/Audio Calling
- 📎 File & Image Sharing
- 🌙 Dark Mode
- 👀 Seen/Delivered Status
- ⌨️ Typing Indicator

---

## 🐞 Known Issues

- Socket reconnect issue sometimes
- Notification delay on slow networks

---

## 🎯 Why This Project?

This project demonstrates:

- Real-time communication
- Full-stack development skills
- Scalable architecture design
- Modern UI/UX practices

---

## 🏆 Highlights

- Real-time chat with Socket.IO
- Fully responsive UI
- Clean and scalable code structure

---

## 👨‍💻 Author

**Aryan Singh Chauhan**

---

## 🙌 Thank You

Thanks for checking out this project!
If you like it, feel free to ⭐ the repository and share your feedback 😊
