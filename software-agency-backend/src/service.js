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

// UPDATED: Shifted to Secure Port 465 (SSL) to bypass Cloud Provider Firewall Blocks
const transporter = nodemailer.createTransport({
  service: 'gmail', // Native shortcut handles host, port rules, and TLS servernames cleanly
  port: 465,        // Secure port 465 is rarely blocked by hosting providers
  secure: true,     // Must be true for port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // Must be your 16-character Google App Password
  },
  tls: {
    rejectUnauthorized: false // Keeps cloud environments from breaking on handshake mismatches
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
    replyTo: email, 
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