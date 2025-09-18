# Store Rating Application - Frontend

This is the frontend React application for the Store Rating platform, allowing users to submit ratings for stores.

## Features

- User authentication with JWT tokens
- Role-based access control
- Admin dashboard for system management
- Store listing and rating submission
- Store owner dashboard to view ratings
- Form validations as per requirements
- Responsive UI

## Tech Stack

- React.js
- Redux Toolkit (RTK) for state management
- Material-UI for components
- Formik and Yup for form handling
- React Router for navigation
- Axios for API requests

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
cd client
npm install
```

3. Start the development server:

```bash
npm start
```

The application will be available at http://localhost:3000.

## Project Structure

- `/src/components` - Reusable UI components
- `/src/pages` - Page components
- `/src/layouts` - Layout components
- `/src/store` - Redux store configuration
- `/src/store/slices` - Redux slices
- `/src/store/api` - RTK Query API definitions
- `/src/utils` - Utility functions
- `/src/hooks` - Custom React hooks
- `/src/assets` - Static assets

## User Roles

### Admin
- View dashboard statistics
- Manage users
- Manage stores

### Normal User
- View and search stores
- Submit and update ratings

### Store Owner
- View dashboard with rating statistics
- View users who rated their store

## Validation Rules

- Name: 20-60 characters
- Address: Max 400 characters
- Password: 8-16 characters, at least one uppercase letter and one special character
- Email: Standard email validation
- Rating: Integer between 1 and 5
