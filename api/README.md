# Store Rating Application API

This is the backend API for a Store Rating Application that allows users to submit ratings for stores registered on the platform.

## Features

- User authentication with JWT tokens
- Role-based authorization (Admin, User, Store Owner)
- CRUD operations for users, stores, and ratings
- Support for pagination in all listing endpoints
- Rate limiting to prevent abuse
- CSRF protection
- Comprehensive error handling
- Idempotent API design

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Knex.js (SQL query builder)
- JSON Web Tokens (JWT) for authentication

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd storeapp/api
```

2. Install dependencies:

```bash
npm install
```

3. Create a PostgreSQL database and update the `.env` file with your database credentials.

4. Run the database migrations:

```bash
npx knex migrate:latest
```

5. Start the development server:

```bash
npm run dev
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=storeapp
DB_PORT=5432

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_replace_in_production
JWT_EXPIRES_IN=1d
JWT_REFRESH_EXPIRES_IN=7d

# Rate Limiting
RATE_LIMIT_WINDOW_MS=15*60*1000  # 15 minutes
RATE_LIMIT_MAX=100  # 100 requests per window
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user profile
- `PUT /api/auth/password` - Update password
- `POST /api/auth/refresh-token` - Refresh JWT token
- `POST /api/auth/logout` - Logout user

### Users

- `GET /api/users` - Get all users (Admin only)
- `GET /api/users/:id` - Get user by ID (Admin only)
- `POST /api/users` - Create new user (Admin only)
- `PUT /api/users/:id` - Update user (Admin only)
- `DELETE /api/users/:id` - Delete user (Admin only)

### Stores

- `GET /api/stores` - Get all stores
- `GET /api/stores/:id` - Get store by ID
- `POST /api/stores` - Create new store (Admin only)
- `PUT /api/stores/:id` - Update store (Admin only)
- `DELETE /api/stores/:id` - Delete store (Admin only)
- `GET /api/stores/:id/raters` - Get users who rated a store (Admin, Store Owner)

### Ratings

- `GET /api/ratings` - Get all ratings (Admin only)
- `POST /api/ratings` - Submit or update a rating (User)
- `GET /api/ratings/store/:storeId` - Get user's rating for a store (User)
- `GET /api/ratings/count` - Get total ratings count (Admin only)

### Dashboard

- `GET /api/dashboard/admin` - Get admin dashboard data (Admin only)
- `GET /api/dashboard/store-owner` - Get store owner dashboard data (Store Owner only)

## Security Features

- **JWT Authentication**: Secure token-based authentication
- **CSRF Protection**: Cross-Site Request Forgery protection
- **Helmet**: Sets various HTTP headers to protect against common attacks
- **Rate Limiting**: Prevents abuse of the API
- **Input Validation**: Validates user input to prevent injection attacks
- **CORS**: Configurable Cross-Origin Resource Sharing
- **Parameter Pollution Protection**: Prevents HTTP Parameter Pollution attacks

## Error Handling

The API uses a centralized error handling mechanism with appropriate HTTP status codes and error messages.

## Idempotency

All endpoints are designed to be idempotent, ensuring that making the same request multiple times has the same effect as making it once.
