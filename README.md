# Software Agency Website

A modern, full-stack software agency website built with React, Vite, Tailwind CSS, and Express.js. Features a responsive landing page with services, portfolio, pricing, testimonials, and a functional contact form with email delivery.

**Live Demo:** Coming Soon  
**Repository:** [GitHub Link]  
**Documentation:** See sections below

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Frontend Components](#frontend-components)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Documentation Links](#documentation-links)
- [License](#license)

---

## 🎯 Overview

This project showcases a professional software agency website with modern web technologies. It includes:
- **Frontend**: A responsive React application with dynamic routing and smooth animations
- **Backend**: An Express API for handling contact form submissions with email delivery
- **Styling**: Tailwind CSS for utility-first CSS styling
- **Animations**: Framer Motion for elegant page transitions and effects

The website is designed to be SEO-friendly, mobile-responsive, and user-engaging.

---

## ✨ Features

### Frontend Features
- ✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ✅ **Hero Section** - Eye-catching landing section with call-to-action
- ✅ **Services Page** - Showcase of services offered with detailed descriptions
- ✅ **Portfolio Section** - Display of completed projects with filters
- ✅ **Pricing Plans** - Tiered pricing options with feature comparisons
- ✅ **Testimonials** - Client reviews and success stories
- ✅ **Contact Form** - Functional contact form with validation
- ✅ **Navigation** - Smooth scrolling navigation with active states
- ✅ **Animations** - Smooth transitions and entrance animations using Framer Motion
- ✅ **Client Routing** - Seamless page navigation with React Router DOM

### Backend Features
- ✅ **Email API** - RESTful API for sending contact form emails
- ✅ **SMTP Integration** - Gmail SMTP for reliable email delivery
- ✅ **CORS Support** - Configured for cross-origin requests
- ✅ **Error Handling** - Comprehensive error handling and logging
- ✅ **Environment Variables** - Secure configuration management with dotenv

---

## 🛠 Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.4 | UI Framework |
| **Vite** | 8.0.4 | Build tool & dev server |
| **Tailwind CSS** | 4.2.4 | Utility-first CSS framework |
| **Framer Motion** | 12.38.0 | Animation library |
| **React Router DOM** | 7.14.2 | Client-side routing |
| **EmailJS** | 4.4.1 | Browser-based email service |
| **ESLint** | 9.39.4 | Code linting |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 18+ (recommended) | JavaScript runtime |
| **Express** | 5.2.1 | Web framework |
| **Nodemailer** | 8.0.6 | Email sending library |
| **CORS** | 2.8.6 | Cross-origin resource sharing |
| **dotenv** | 17.4.2 | Environment variable management |
| **Nodemon** | 3.1.14 | Development auto-reload |
| **Google APIs** | 173.0.0 | Gmail integration |

---

## 📁 Project Structure

```
software-agency-website/
│
├── software-agency/                 # Frontend React Application
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx          # Navigation header
│   │   │   ├── Home.jsx            # Homepage/hero section
│   │   │   ├── Services.jsx        # Services showcase
│   │   │   ├── Portfolio.jsx       # Project portfolio
│   │   │   ├── Pricing.jsx         # Pricing plans
│   │   │   ├── Testimonials.jsx    # Client testimonials
│   │   │   ├── Contact.jsx         # Contact form
│   │   │   ├── Footer.jsx          # Footer section
│   │   │   └── ScrollToTop.jsx     # Scroll-to-top utility
│   │   ├── data/
│   │   │   ├── mockData.js         # Mock content data
│   │   │   └── projectsData.js     # Portfolio project data
│   │   ├── App.jsx                 # Main app component
│   │   ├── main.jsx                # React entry point
│   │   ├── App.css                 # App styles
│   │   └── index.css               # Global styles
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── index.html
│
├── software-agency-backend/         # Express Backend API
│   ├── src/
│   │   └── service.js              # Main backend service file
│   ├── google-credentials.json      # Google OAuth credentials
│   ├── package.json
│   └── .env                        # Environment variables (not in repo)
│
└── README.md                        # This file
```

---

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** 18.0 or higher ([Download](https://nodejs.org/))
- **npm** 9.0 or higher (comes with Node.js)
- **Git** for version control

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd "software-agency-website"
```

### Step 2: Install Frontend Dependencies
```bash
cd software-agency
npm install
```

### Step 3: Install Backend Dependencies
```bash
cd ../software-agency-backend
npm install
```

### Step 4: Configure Environment Variables

**Backend (.env file):**
Create a `.env` file in `software-agency-backend/` directory:
```env
PORT=5000
GMAIL_USER=your-email@gmail.com
GMAIL_PASSWORD=your-app-specific-password
CORS_ORIGIN=http://localhost:5173
NODE_ENV=development
```

**Frontend (.env.local file - optional):**
Create a `.env.local` file in `software-agency/` if needed for EmailJS:
```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
```

### Step 5: Run the Development Servers

**Terminal 1 - Frontend:**
```bash
cd software-agency
npm run dev
```
Frontend will be available at: `http://localhost:5173`

**Terminal 2 - Backend:**
```bash
cd software-agency-backend
npm run dev
```
Backend will be available at: `http://localhost:5000`

---

## ⚙️ Configuration

### Gmail Setup for Backend Email Sending

1. **Enable 2-Step Verification** on your Google Account:
   - Go to https://myaccount.google.com/security
   - Click on "2-Step Verification"
   - Follow the steps to enable it

2. **Generate App Password**:
   - Visit https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer" (or your device)
   - Google will generate a 16-character password
   - Use this password in your `.env` file as `GMAIL_PASSWORD`

### EmailJS Frontend Setup (Optional)

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Set up an Email Service
3. Create an Email Template
4. Get your Service ID, Template ID, and Public Key
5. Add them to your frontend `.env.local`

---

## 💻 Usage

### Frontend Usage

**Starting the Development Server:**
```bash
cd software-agency
npm run dev
```

**Building for Production:**
```bash
npm run build
```
Creates optimized build in `dist/` folder.

**Preview Production Build:**
```bash
npm run preview
```

**Running Linter:**
```bash
npm run lint
```

### Backend Usage

**Starting the Development Server:**
```bash
cd software-agency-backend
npm run dev
```

**API Endpoints:**

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |
| GET | `/api/health` | Health check |

---

## 📡 API Documentation

### Contact Form Submission

**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "subject": "Project Inquiry",
  "message": "I would like to discuss a project..."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "error": "Error message describing what went wrong"
}
```

---

## 🧩 Frontend Components

### Navbar
- Navigation header with logo and menu items
- Responsive mobile navigation
- Smooth scroll to sections
- **File:** `src/components/Navbar.jsx`

### Home
- Hero section with headline and CTA button
- Eye-catching animations
- **File:** `src/components/Home.jsx`

### Services
- Showcase of services offered
- Service cards with descriptions
- **File:** `src/components/Services.jsx`

### Portfolio
- Project showcase with images
- Project filtering functionality
- **File:** `src/components/Portfolio.jsx`

### Pricing
- Pricing tiers with features
- Plan comparison
- **File:** `src/components/Pricing.jsx`

### Testimonials
- Client reviews and ratings
- Carousel or grid layout
- **File:** `src/components/Testimonials.jsx`

### Contact
- Contact form with validation
- Form submission handling
- **File:** `src/components/Contact.jsx`

### Footer
- Footer with links and copyright
- Social media links
- **File:** `src/components/Footer.jsx`

### ScrollToTop
- Utility component for scroll behavior
- **File:** `src/components/ScrollToTop.jsx`

---

## 🌐 Deployment

### Frontend Deployment

**Deploy to Vercel:**
1. Push code to GitHub
2. Connect GitHub repository to Vercel
3. Configure build settings: `npm run build` | `dist`
4. Deploy with one click

**Deploy to Netlify:**
1. Push code to GitHub
2. Connect GitHub repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

**Deploy to GitHub Pages:**
```bash
npm install --save-dev gh-pages
# Update package.json scripts and vite.config.js
npm run build
npm run deploy
```

### Backend Deployment

**Deploy to Render, Railway, or Heroku:**
1. Push backend code to GitHub
2. Connect repository to hosting platform
3. Set environment variables
4. Deploy

**Example Render Configuration:**
- Build Command: `npm install`
- Start Command: `node src/service.js`
- Environment Variables: `PORT`, `GMAIL_USER`, `GMAIL_PASSWORD`

---

## 🐛 Troubleshooting

### Frontend Issues

**Port 5173 already in use:**
```bash
# Kill the process or specify a different port
npm run dev -- --port 3000
```

**Build fails:**
```bash
# Clear node modules and reinstall
rm -rf node_modules
npm install
npm run build
```

**CSS not loading:**
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server

### Backend Issues

**Gmail authentication fails:**
- Verify 2-Step Verification is enabled
- Use App Password (not regular password)
- Check CORS_ORIGIN matches frontend URL

**Port 5000 already in use:**
```bash
# Change PORT in .env file
PORT=5001
```

**CORS errors:**
- Update `CORS_ORIGIN` in `.env`
- Ensure backend is running
- Check frontend API endpoint URL

---

## 📚 Documentation Links

### Official Documentation
- **[React Documentation](https://react.dev/)** - React framework docs
- **[Vite Documentation](https://vitejs.dev/)** - Vite build tool guide
- **[Tailwind CSS Documentation](https://tailwindcss.com/docs)** - CSS framework guide
- **[Framer Motion Documentation](https://www.framer.com/motion/)** - Animation library docs
- **[React Router Documentation](https://reactrouter.com/)** - Client-side routing guide
- **[Express Documentation](https://expressjs.com/)** - Backend framework guide
- **[Node.js Documentation](https://nodejs.org/docs/)** - Node.js API reference

### Integration Guides
- **[EmailJS Documentation](https://www.emailjs.com/docs/)** - Browser email service
- **[Nodemailer Documentation](https://nodemailer.com/about/)** - Node.js email library
- **[Gmail App Passwords](https://support.google.com/accounts/answer/185833)** - Gmail security setup
- **[Google APIs Guide](https://developers.google.com/mail/api)** - Gmail API reference

### Deployment Guides
- **[Vercel Deployment](https://vercel.com/docs)** - Deploy React apps to Vercel
- **[Netlify Deployment](https://docs.netlify.com/)** - Deploy to Netlify
- **[Render Deployment](https://render.com/docs)** - Deploy backend services
- **[Railway Deployment](https://docs.railway.app/)** - Railway hosting guide
- **[Heroku Deployment](https://devcenter.heroku.com/)** - Heroku platform guide

### Tools & Resources
- **[MDN Web Docs](https://developer.mozilla.org/)** - Web development reference
- **[Can I Use](https://caniuse.com/)** - Browser compatibility checker
- **[npm Registry](https://www.npmjs.com/)** - Node package manager
- **[GitHub Documentation](https://docs.github.com/)** - Git and GitHub guide

---

## 👥 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Use ESLint for JavaScript code
- Follow Tailwind CSS naming conventions
- Use functional components with hooks in React
- Add meaningful comments for complex logic

---

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Email: support@example.com
- Visit: https://example.com

---

## 🎉 Acknowledgments

- React community for excellent documentation
- Tailwind CSS for utility-first CSS framework
- Framer Motion for smooth animations
- Express.js for the backend framework

---

**Last Updated:** 2026-07-06  
**Version:** 1.0.0
npm install
npm run dev
```

The backend listens on port `5000`.

## Backend Configuration

Create a `.env` file inside `software-agency-backend/` with the following values:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-app-password
```

> Note: Use an App Password if your Gmail account has 2FA enabled.

## Contact Form API

The frontend sends POST requests to:

- `http://localhost:5000/send-transmission`

Payload fields:
- `name`
- `email`
- `service`
- `budget`
- `message`

## Notes

- The backend currently allows CORS from any origin. Restrict it to your frontend domain for production.
- The email `from` address is currently hard-coded to `Apex System` and forwards form replies to the customer email.

## Development Tips

- Keep frontend and backend servers running in separate terminals
- Update Tailwind classes inside `software-agency/src/components/` for design changes
- Use `npm run build` inside `software-agency/` to create a production frontend bundle

## License

Copyright (c) 2026 Keshav Chandra Pandit.
All rights reserved.

