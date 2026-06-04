const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Update CORS to allow all origins safely for testing
app.use(cors({
  origin: '*', 
  methods: ['POST', 'GET'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Enhanced Gmail Transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // Use SSL
  auth: {
    // These will pull from Render's Environment tab in production
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS 
  },
  tls: {
    rejectUnauthorized: false // Bypasses certificate issues on cloud containers
  }
});

// Verify connection configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ SMTP Connection Error:", error);
  } else {
    console.log("🚀 Mail Server is ready to take transmissions");
  }
});

app.post('/send-transmission', (req, res) => {
  const { name, email, service, budget, message } = req.body;

  const mailOptions = {
    from: `"Apex System" <${process.env.EMAIL_USER}>`, 
    to: process.env.EMAIL_USER, 
    replyTo: email, // Direct reply path to customer
    subject: `[SYSTEM] New Project: ${service}`,
    text: `
--- INCOMING TRANSMISSION ---
IDENTITY: ${name}
CONTACT: ${email}
CAPABILITY: ${service}
SCALE: ${budget}

TECHNICAL BRIEF:
"${message}"
-----------------------------
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("❌ Nodemailer Error:", error);
      return res.status(500).json({ success: false, message: "Transmission Failed" });
    }
    console.log("📨 Email sent successfully: " + info.response);
    res.status(200).json({ success: true, message: "Transmission Successful" });
  });
});

// CRITICAL FIX: Render assigns a random port via process.env.PORT. 
// Forcing 5000 directly breaks Render's routing architecture.
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
  -----------------------------------------
  Node.js Backend Operational
  Port: ${PORT}
  Status: Listening for discovery packets
  -----------------------------------------
  `);
});