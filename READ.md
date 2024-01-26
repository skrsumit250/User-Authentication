# Authentication System
This Node.js application provides user authentication features, including signup, login, and secure password storage using bcrypt and MongoDB.

## Project Structure
- index.js: Main entry point for the application.
- server.js: Express server configuration.
- config.js: MongoDB schema and model configuration.
- views/login.ejs: HTML template for the login page.

## Dependencies
- bcrypt: Password hashing library.
- body-parser: Middleware for handling form data.
- ejs: Templating engine for HTML pages.
- express: Web application framework.
- mongodb: MongoDB driver for Node.js.
- mongoose: MongoDB object modeling.
- nodemon: Development tool for automatic server restarts.

## Database Configuration
- Ensure MongoDB is running.
- Update the MongoDB connection string in config.js if needed.

**Running the Application**
- Navigate to project directory
- npm start
- Access the server at http://localhost:3000