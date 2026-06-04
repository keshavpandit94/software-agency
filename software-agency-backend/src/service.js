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

// Enhanced Gmail Transporter optimized for Cloud Deployments (Render IPv4 Force)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // Use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS 
  },
  tls: {
    rejectUnauthorized: false,
    servername: 'smtp.gmail.com' // Matches SSL certificate domain
  },
  // 💡 CRITICAL FIX FOR ENETUNREACH: Forces Node to use IPv4 instead of IPv6
  family: 4, 
  connectionTimeout: 15000, // Generous timeout for cloud cold starts
  greetingTimeout: 10000
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

// Render assigns a dynamic port via process.env.PORT.
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