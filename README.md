# Bhavana Technology - Web Development & Testing Solutions

A modern, full-stack MERN application featuring Admin Dashboard, Manager Dashboard, and Public Client Website.

## Project Structure

```
/
├── admin/           - Admin Dashboard (React + Vite)
├── manager/         - Manager Dashboard (React + Vite)
├── client/          - Public Website (React + Vite)
└── server/          - Unified Backend (Express + MongoDB)
```

## Quick Start

### Prerequisites
- Node.js v16+
- MongoDB (local or Atlas)

### Setup Environment Variables

**Server (.env):**
```bash
cd server
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
```

**Admin (.env):**
```bash
cd admin
cp .env.example .env
```

**Manager (.env):**
```bash
cd manager
cp .env.example .env
```

**Client (.env):**
```bash
cd client
cp .env.example .env
```

### Installation & Running

**Terminal 1: Backend Server**
```bash
cd server
npm install
npm start
# Server runs on http://localhost:5000
```

**Terminal 2: Admin Dashboard**
```bash
cd admin
npm install
npm run dev
# Admin runs on http://localhost:5174
```

**Terminal 3: Manager Dashboard**
```bash
cd manager
npm install
npm run dev
# Manager runs on http://localhost:5175
```

**Terminal 4: Client Website**
```bash
cd client
npm install
npm run dev
# Client runs on http://localhost:5173
```

## Features

### Admin Dashboard
- User authentication (JWT)
- Contact management
- Dashboard analytics
- Protected routes

### Manager Dashboard
- Manager authentication
- Contact tracking
- Operations management
- Real-time updates

### Client Website
- Public landing page
- Contact form submission
- Service showcase
- Responsive design

### Backend Server
- Express REST API
- MongoDB database
- JWT authentication
- CORS support
- Error handling

## API Endpoints

```
POST   /api/contact                    - Submit contact form
POST   /api/admin/auth/register        - Admin registration
POST   /api/admin/auth/login           - Admin login
GET    /api/admin/auth/verify          - Verify token
GET    /api/admin/contacts             - Get all contacts
POST   /api/admin/contacts/:id         - Update contact
DELETE /api/admin/contacts/:id         - Delete contact
```

## Technologies Used

- **Frontend:** React 18, Vite, Tailwind CSS, React Router
- **Backend:** Express.js, Node.js, MongoDB, Mongoose
- **Authentication:** JWT, bcryptjs
- **HTTP Client:** Axios
- **UI:** React Icons

## Development

### Build for Production

```bash
cd admin && npm run build
cd manager && npm run build
cd client && npm run build
cd server && npm start
```

### Environment Configuration

All applications use environment variables. Copy `.env.example` to `.env` and update values accordingly.

## License

ISC

## Author

Bhavana Technology & Software Solutions
