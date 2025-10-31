# DataProtect Co. API Documentation

## Authentication Endpoints

### POST /api/auth/signup
Register a new user account.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe", 
  "email": "john@example.com",
  "phone": "+1234567890",
  "password": "SecurePass123",
  "roleId": "role_id_here"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "user_id",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "role": { "name": "client", "description": "..." },
    "isActive": true,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### POST /api/auth/login
Authenticate user credentials.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "SecurePass123"
}
```

### GET /api/auth/me
Get current authenticated user information.

### POST /api/auth/logout
Logout and revoke session.

## User Management Endpoints

### GET /api/users
List all users (Admin/Consultant only).

**Query Parameters:**
- `roleId`: Filter by role ID
- `isActive`: Filter by active status (true/false)
- `search`: Search by name or email

### GET /api/users/[id]
Get specific user by ID.

### PUT /api/users/[id]
Update user information.

**Request Body:**
```json
{
  "firstName": "Updated Name",
  "lastName": "Updated Last",
  "phone": "+0987654321",
  "roleId": "new_role_id"
}
```

### DELETE /api/users/[id]
Deactivate user account.

### POST /api/users/change-password
Change current user's password.

**Request Body:**
```json
{
  "currentPassword": "OldPass123",
  "newPassword": "NewPass123"
}
```

## Role Management Endpoints

### GET /api/roles
List all available roles.

### POST /api/roles
Create new role (Admin only).

**Request Body:**
```json
{
  "name": "manager",
  "description": "Team manager role",
  "permissions": {
    "users": "read",
    "reports": true
  }
}
```

## Database Schema

### Users Table
- `id`: Unique identifier
- `firstName`: User's first name
- `lastName`: User's last name  
- `email`: Unique email address
- `phone`: Phone number (optional)
- `password`: Hashed password
- `roleId`: Reference to role
- `isActive`: Account status
- `isVerified`: Email verification status
- `lastLoginAt`: Last login timestamp
- `createdAt`: Account creation date
- `updatedAt`: Last update timestamp

### Roles Table
- `id`: Unique identifier
- `name`: Role name (unique)
- `description`: Role description
- `permissions`: JSON permissions object
- `createdAt`: Creation timestamp
- `updatedAt`: Last update timestamp

### Sessions Table
- `id`: Unique identifier
- `userId`: Reference to user
- `token`: JWT token
- `expiresAt`: Expiration timestamp
- `createdAt`: Creation timestamp

## Default Roles

1. **admin**: Full system access
2. **consultant**: Senior consultant with client management access
3. **analyst**: Data protection analyst with report access
4. **client**: Client user with limited dashboard access

## Security Features

- Password hashing with bcrypt
- JWT-based authentication
- HTTP-only cookies
- Session management
- Role-based access control
- Input validation with Joi
- SQL injection protection via Prisma