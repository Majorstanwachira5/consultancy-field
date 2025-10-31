# Backend Setup Instructions

## Prerequisites

1. **Node.js** (v18 or higher)
2. **PostgreSQL** database
3. **npm** or **yarn**

## Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Database Configuration
Create a PostgreSQL database and update `.env.local`:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/consultancy_db"
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
JWT_EXPIRES_IN="7d"
BCRYPT_ROUNDS=12
```

### 3. Database Setup
Run the automated setup script:
```bash
npm run db:setup
```

This will:
- Generate Prisma client
- Push database schema
- Seed default roles

### 4. Start Development Server
```bash
npm run dev
```

## Manual Database Setup

If you prefer manual setup:

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Seed default roles
npm run db:seed

# Open Prisma Studio (optional)
npm run db:studio
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | Required |
| `JWT_SECRET` | Secret key for JWT tokens | Required |
| `JWT_EXPIRES_IN` | Token expiration time | 7d |
| `BCRYPT_ROUNDS` | Password hashing rounds | 12 |

## Default Admin User

After setup, create an admin user via API:

```bash
curl -X POST http://localhost:3000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Admin",
    "lastName": "User",
    "email": "admin@dataprotect.com",
    "password": "AdminPass123",
    "roleId": "admin_role_id_from_db"
  }'
```

## Production Deployment

1. Set secure environment variables
2. Use production PostgreSQL database
3. Enable HTTPS for secure cookies
4. Set `NODE_ENV=production`
5. Use proper session management
6. Implement rate limiting
7. Add CORS configuration

## Database Management

- **View data**: `npm run db:studio`
- **Reset database**: Delete and recreate, then run `npm run db:setup`
- **Backup**: Use PostgreSQL dump tools
- **Migrations**: Use `prisma migrate` for production

## Troubleshooting

### Database Connection Issues
- Verify PostgreSQL is running
- Check DATABASE_URL format
- Ensure database exists
- Verify user permissions

### Authentication Issues
- Check JWT_SECRET is set
- Verify cookie settings
- Check token expiration
- Clear browser cookies

### Permission Errors
- Verify user roles are seeded
- Check role assignments
- Validate API permissions