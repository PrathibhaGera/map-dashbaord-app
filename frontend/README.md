# Full-Stack Project - Dashboard & Map View

## 📌 Project Overview

This project is a **full-stack application** built using **React.js, Node.js, Express.js, and JWT Authentication**.

### 🔹 Features

- **User Login** (JWT Authentication)
- **Dashboard** (Displays Card Components)
- **Map View** (OpenStreetMap - Leaflet.js)
- **Protected API Endpoints** (Requires Authentication)

## ⚙️ Tech Stack

- **Frontend:** React.js (Class Components), React Router
- **Backend:** Node.js, Express.js
- **Authentication:** JWT
- **Map Integration:** Leaflet.js

## 🚀 Setup Instructions

### 1️⃣ Clone & Install Dependencies

git clone https://github.com/PrathibhaGera/map-dashbaord-app.git

cd map-dashbaord-app

2️⃣ Backend Setup

cd backend

npm install

npm start # or node server.js

3️⃣ Frontend Setup

npm create-vite map-dashboard-app

cd frontend

npm install

npm run dev

📝 Project Details

🔹 1️⃣ Login Page:

-Users enter username & password to authenticate.

-On success, a JWT token is stored in localStorage.

-Users are redirected to the Dashboard after login.

🔹 2️⃣ Dashboard:

-Displays multiple card components with unique IDs.

-Clicking a card redirects to the Map View page.

🔹 3️⃣ Map View:

-Uses Leaflet.js to display India's map.

-Supports zoom in & zoom out.

-Displays the user’s current location.

🔹 4️⃣ Authentication Flow:

-JWT token is required for accessing Dashboard & Map APIs.

-If a user is not logged in, they see a message:

"User not logged in".

📌 API Endpoints

## Authentication API

#POST - /api/login → User Login (returns JWT token)

#GET - /api/dashboard → Fetch Dashboard Data (Protected)

#GET - /api/map → Fetch Map Configuration (Protected)
