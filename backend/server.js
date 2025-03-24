import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();
const PORT = 5000;
const SECRET_KEY = process.env.SECRET_KEY || "your_default_secret_key";

app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Dummy users for testing
const users = [
  { username: "admin", password: "password123" },
  { username: "user1", password: "test123" },
];

// Middleware to Verify JWT Token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "User not logged in" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// Root Route (For Testing)
app.get("/", (req, res) => {
  res.send("Backend is running! ");
});

// Login API - Generate JWT Token
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Generate JWT Token
  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "30d" });

  res.json({ token });
});

// Secure Dashboard API (Requires JWT)
app.get("/api/dashboard", verifyToken, (req, res) => {
  const cards = [
    { id: 1, title: "Location A" },
    { id: 2, title: "Location B" },
    { id: 3, title: "Location C" },
  ];
  res.json(cards);
});

// Map View API
app.get("/api/mapview", verifyToken, (req, res) => {
  const mapConfig = {
    center: [20.5937, 78.9629],
    zoom: 5,
  };
  res.json(mapConfig);
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on port : http://localhost:${PORT}`);
});
