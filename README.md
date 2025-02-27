# Task Management API

A backend API built with Node.js, Express.js, and MongoDB for managing user tasks. It includes user authentication with JWT and allows users to create, view, update, and delete tasks aling with login and signup. 

## Tech Stack:
- **Express.js** - Backend framework
- **MongoDB** & **Mongoose** - Database & ODM
- **bcrypt.js** - Password hashing
- **jsonwebtoken (JWT)** - Authentication
- **CORS** & **Express JSON Middleware** - Request handling

## API Endpoints

### Authentication (JWT-based)
- **POST /auth/signup**: Register a new user.
- **POST /auth/login**: Authenticate user and return JWT.

### Task Management (Protected Routes - Requires JWT)
- **POST /tasks**: Create a new task.
- **GET /tasks**: Get all tasks for the logged-in user.
- **GET /tasks/:id**: Get a specific task.
- **PUT /tasks/:id**: Update a task.
- **DELETE /tasks/:id**: Delete a task.
- **GET /users**: Fetch all users (requires JWT).

## Setup

1. Clone the repository:
   ```bash
   https://github.com/DeepakM02/todo-backend.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables (e.g., `JWT_SECRET`, `MONGODB_URI`).
4. Start the server:
   ```bash
   npm start
   ```

## License
MIT License
