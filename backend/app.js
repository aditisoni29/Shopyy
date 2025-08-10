require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");

// Import Utilities
const ExpressError = require("./utils/ExpressError");

// Import Models
const User = require("./models/User");

// Import Routers
const productRoutes = require("./routes/product");
const authRoutes = require("./routes/auth");
const cartRoutes = require("./routes/cart");
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = 3001;
const secret = process.env.SESSION_SECRET;

// Database Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Successfully connected to MongoDB!"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Middleware
app.use(cors());
app.use(express.json());

// Session and Passport Configuration
const sessionConfig = {
  secret: secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// API Routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/contact", contactRoutes);

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "API Route Not Found!"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).json({ message });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
