
DataProtect Co. — Full-Stack Consultancy Platform
=================================================

A complete Next.js application with robust backend services for a data protection consultancy platform.

## Features

### Frontend
- Landing pages (Home, Services, Industries, Resources)
- User authentication (Signup/Login)
- Protected user dashboard
- Responsive design with Tailwind CSS

### Backend Services
- **PostgreSQL + Prisma ORM**: Production-ready database
- **JWT Authentication**: Secure token-based auth with HTTP-only cookies
- **Role-Based Access Control**: Admin, Consultant, Analyst, Client roles
- **Password Security**: bcrypt hashing with configurable rounds
- **Session Management**: Automatic token expiration and cleanup
- **Input Validation**: Joi schema validation for all endpoints
- **RESTful APIs**: Complete CRUD operations for users and roles

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Setup database** (see SETUP.md for details):
   ```bash
   npm run db:setup
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open http://localhost:3000**

## Documentation

- [Setup Instructions](SETUP.md) - Complete backend setup guide
- [API Documentation](API.md) - Full API reference
- [Database Schema](prisma/schema.prisma) - Data model definitions

## User Management

### User Registration Fields
- First Name
- Last Name
- Email (unique)
- Phone Number (optional)
- Password (strong validation)
- Role Assignment

### Default Roles
- **Admin**: Full system access
- **Consultant**: Client management and reporting
- **Analyst**: Data analysis and reporting
- **Client**: Limited dashboard access

## Security Features

- Password strength validation
- Secure password hashing (bcrypt)
- JWT tokens with expiration
- HTTP-only cookies
- Role-based API protection
- Session management
- Input sanitization

## Production Ready

This implementation includes:
- Proper database integration
- Secure authentication
- Role management
- Session handling
- Input validation
- Error handling
- API documentation

For production deployment, ensure:
- Secure environment variables
- HTTPS configuration
- Rate limiting
- CORS setup
- Database backups
