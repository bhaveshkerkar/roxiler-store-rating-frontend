# StoreSphere 🌐

A modern Store Rating Platform built with React, Node.js, Express, and MySQL that allows users to explore stores, submit ratings, and manage store-related activities through role-based dashboards.

---

# 📌 Project Overview

StoreSphere is a full-stack web application designed to help users discover and rate stores while providing separate dashboards for Admins and Store Owners.

The platform focuses on:

* Clean UI/UX
* Role-based authentication
* Store discovery and ratings
* Dashboard management
* Responsive modern design

---

# 🚀 Features

## 👤 User Features

* User Signup & Login
* Explore Stores
* Search Stores
* Sort Stores by Ratings
* Submit & Update Ratings
* View Store Details
* Responsive User Interface

---

## 🛠️ Admin Features

* Admin Dashboard
* View Total Users
* View Total Stores
* View Total Ratings
* Store Management Table

---

## 🏪 Store Owner Features

* Owner Dashboard
* View Average Store Rating
* View Submitted Ratings
* Dashboard Statistics

---

## 🔐 Authentication & Security

* Protected Routes
* Role-based Access Control
* Login State Management using LocalStorage

---

# 🧑‍💻 Tech Stack

## Frontend

* React.js
* React Router DOM
* CSS Modules
* React Toastify
* Vite

---

## Backend

* Node.js
* Express.js
* MySQL
* dotenv

---

# 📂 Project Structure

```bash
StoreSphere/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│
├── backend/
│   ├── src/
│   ├── package.json
│   ├── .env
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_LINK>
```

---

## 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 3️⃣ Backend Setup

```bash
cd backend
npm install
npm start
```

---

# 🔑 Environment Variables

Create a `.env` file inside backend folder.

```env
MYSQLHOST=localhost
MYSQLPORT=3306
MYSQLUSER=root
MYSQLPASSWORD=yourpassword
MYSQLDATABASE=storesphere
```

---

# 🗄️ Database Setup

Run the following command in MySQL:

```sql
CREATE DATABASE storesphere;
```

---

# 📸 Screenshots

## 🏠 Home Page

*Add screenshot here*

---

## 🔍 Explore Stores Page

*Add screenshot here*

---

## 🔐 Login Page

*Add screenshot here*

---

## 📝 Signup Page

*Add screenshot here*

---

## 🛠️ Admin Dashboard

*Add screenshot here*

---

## 🏪 Store Owner Dashboard

*Add screenshot here*

---

# ✨ UI Highlights

* Modern Dark Theme
* Responsive Layout
* Smooth Animations
* Interactive Rating Modal
* Clean Component Architecture
* Modular CSS Design

---

# 🔮 Future Improvements

* JWT Authentication
* Real Database Integration
* Review & Comment System
* Pagination
* Mobile Navigation Menu
* API Integration
* Profile Management

---

# 🧠 Learning Outcomes

This project helped in understanding:

* React Component Architecture
* State Management
* Protected Routing
* Form Validation
* Role-based Authentication
* Responsive UI Design
* Modular CSS Styling

---

# 👨‍💻 Author

## Bhavesh Kerkar

* GitHub: *Add GitHub Link*
* LinkedIn: *Add LinkedIn Link*

---

# 📄 License

This project was developed as part of the Roxiler Systems coding assignment.
