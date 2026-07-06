// server.js
const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
require('dotenv').config();

const app = express();

// Enable Production Cross-Origin Resource Sharing for Frontend Access
app.use(cors({
  origin: '*', 
  methods: ['POST', 'GET'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// 1. BULLETPROOF GOOGLE SHEETS AUTHENTICATION HANDSHAKE
const auth = new google.auth.GoogleAuth({
  keyFile: './google-credentials.json', 
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;

// 2. SEPARATE MONTH-BY-MONTH GRID VALIDATOR / GENERATOR
async function getOrCreateMonthlySheet(sheetTitle) {
  try {
    const doc = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
    const sheetExists = doc.data.sheets.some(s => s.properties.title === sheetTitle);

    if (!sheetExists) {
      // Append a completely fresh workspace sheet tab
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: {
          requests: [{
            addSheet: { properties: { title: sheetTitle } }
          }]
        }
      });

      // FIXED: Removed 'Raw Logs Reference Layout' header. Now strictly contains 6 data columns.
      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${sheetTitle}!A1`,
        valueInputOption: 'RAW',
        requestBody: {
          values: [['Timestamp', 'Identity', 'Digital Mail', 'Capability', 'Scale (INR)', 'Technical Brief']]
        }
      });
      console.log(`📁 Generated fresh monthly structural matrix tab: ${sheetTitle}`);
    }
  } catch (err) {
    console.error("❌ Failed sheet structural directory parsing validation:", err);
    throw err;
  }
}

// 3. MAIN NETWORK TRANSMISSION RECEIVER INBOUND ENDPOINT
app.post('/send-transmission', async (req, res) => {
  const { name, email, service, budget, message } = req.body;

  const now = new Date();
  
  // FIXED: Explicitly forced Indian Standard Time (IST) for calendar sheet consistency.
  // This guarantees tabs create sequentially on the right month independent of Render's server locations.
  const currentMonthYear = now.toLocaleString('en-US', { 
    month: 'long', 
    year: 'numeric',
    timeZone: 'Asia/Kolkata'
  }); // Output format: "July 2026"
  
  const formattedDate = now.toLocaleDateString('en-GB', { timeZone: 'Asia/Kolkata' }) + ' ' + 
                        now.toLocaleTimeString('en-US', { hour12: false, timeZone: 'Asia/Kolkata' }); // Output format: "06/07/2026 20:30:15"

  try {
    // Structural guard check ensures proper target layout exists
    await getOrCreateMonthlySheet(currentMonthYear);

    // FIXED: Stripped out the raw multi-line template argument string. 
    // Data appends directly, cleaning up the sheet view.
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${currentMonthYear}!A:F`,
      valueInputOption: 'USER_ENTERED', 
      requestBody: {
        values: [[formattedDate, name, email, service, budget, message]]
      }
    });

    console.log(`📑 Transmission logged smoothly date by date inside sheet matrix [${currentMonthYear}]`);
    res.status(200).json({ success: true, message: "Transmission stored successfully." });

  } catch (error) {
    console.error("❌ Google Sheets Core API Execution Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Root router status path for handling frontend mount pre-warming requests safely
app.get('/', (req, res) => {
  res.status(200).send("System Online. Ready for discovery packets.");
});

// 4. SERVER INITIALIZATION PORTS
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`
  -------------------------------------------------------------
  Node.js Production Pipeline Operational
  Active Mapping Port: ${PORT}
  Targeting Grid Matrix: ${SPREADSHEET_ID ? 'CONFIGURED' : 'MISSING SPREADSHEET ID'}
  Authentication Mode: JSON KEYFILE SECURED
  -------------------------------------------------------------
  `);
});