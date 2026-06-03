# Software Agency

A modern software agency website built with React, Vite, Tailwind CSS, and a lightweight Express backend for contact form email delivery.

## Project Structure

- `software-agency/` — React frontend built with Vite
- `software-agency-backend/` — Node.js Express backend for sending contact emails via Gmail SMTP

## Features

- Responsive landing page with hero section, services, portfolio, pricing, testimonials, and contact form
- Client-side routing using `react-router-dom`
- Smooth scroll reset on navigation with `ScrollToTop`
- Contact form submission backed by an Express API
- Email delivery through Gmail SMTP using `nodemailer`

## Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS 4
- Framer Motion
- React Router DOM
- EmailJS browser integration

### Backend
- Node.js
- Express 5
- CORS
- Nodemailer
- dotenv

## Getting Started

### 1. Run the frontend

```bash
cd "software-agency"
npm install
npm run dev
```

The frontend will start on the Vite development server, typically at `http://localhost:5173`.

### 2. Run the backend

```bash
cd "software-agency-backend"
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

