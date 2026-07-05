require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
const corsConfig = require('./config/cors');
app.use(cors(corsConfig));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/", (req, res) => {
    console.log('[v0] Health check requested');
    res.json({
        message: "Bhavana Technology API Running",
        version: "1.0.0",
        timestamp: new Date().toISOString()
    });
});

app.get("/health", (req, res) => {
    console.log('[v0] Health check requested');
    res.json({
        status: "OK",
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Routes
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/admin/auth", require("./routes/adminAuthRoutes"));
app.use("/api/admin/contacts", require("./routes/adminContactRoutes"));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: process.env.NODE_ENV === "development" ? err.message : undefined
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Start server only if not running in a serverless environment (like Vercel)
if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 5000;
    const server = app.listen(PORT, () => {
        console.log(`✓ Server running on port ${PORT}`);
    });

    // Graceful shutdown
    process.on("SIGTERM", () => {
        console.log("SIGTERM received, shutting down gracefully...");
        server.close(() => {
            console.log("Server closed");
            process.exit(0);
        });
    });
}

// Export the app for Vercel serverless deployment
module.exports = app;
