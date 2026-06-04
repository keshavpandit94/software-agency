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

// Enhanced Gmail Transporter (Hardcoded IPv4 Bypass for Render Network Layer)
const transporter = nodemailer.createTransport({
  // 💡 DIRECT IPV4 BYPASS: Stops Render from forcing an unstable IPv6 connection path
  host: '74.125.134.108', 
  port: 465,
  secure: true, // Use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS 
  },
  tls: {
    rejectUnauthorized: false,
    // 💡 CRITICAL: Tells Google's SSL firewall that we are connecting to Gmail's certified network
    servername: 'smtp.gmail.com' 
  },
  connectionTimeout: 20000,
  greetingTimeout: 15000
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