🔐 Authentication & Password Reset System (MERN)

A full-stack authentication system built using React, Node.js, Express, MongoDB, featuring secure user registration, login, and password reset via email. The application is fully deployed with frontend and backend hosted separately.

🚀 Live Demo

Frontend: https://restpass-front-end.vercel.app/

Backend API:https://back-endcode-restpass.onrender.com/

🧩 Features
✅ User Authentication

User registration with hashed passwords

Secure login using JWT authentication

Token stored securely on the client

🔑 Password Reset Flow

Forgot password via email

Secure reset link with random token

Password update with token validation

Token invalidation after successful reset

⏳ User Experience

Global loading spinner during API calls

Toast notifications for success & errors

Clean UI with Tailwind CSS

Client-side form validation

🛠 Tech Stack
Frontend

React

React Router DOM

Axios

Tailwind CSS

React Toastify

Backend

Node.js

Express.js

MongoDB (Mongoose)

JWT (Authentication)

Bcrypt (Password hashing)

Nodemailer (Email service)

Crypto (Secure reset tokens)

Deployment

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

📂 Project Structure
Frontend
src/
 ├── Pages/
 │   ├── Register.jsx
 │   ├── Login.jsx
 │   ├── ForgotPassword.jsx
 │   ├── ResetPassword.jsx
 │   ├── Welcome.jsx
 │   └── NotFound.jsx
 ├── Components/
 │   ├── Loader.jsx
 │   └── NavBar.jsx
 ├── service/
 │   └── api.js
 └── App.jsx

Backend
backend/
 ├── Controller/
 │   └── authController.js
 ├── Router/
 │   └── userRouter.js
 ├── Model/
 │   └── userSchema.js
 ├── Utils/
 │   └── mailer.js
 ├── database/
 │   └── dbConfig.js
 └── index.js

🔐 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user
POST	/api/auth/forgot-password	Send reset email
POST	/api/auth/reset-password/:id/:token	Reset password
🔒 Security Measures

Passwords hashed using bcrypt

JWT-based authentication

Random password reset tokens stored in DB

Tokens cleared after password reset

CORS configured for deployed frontend only

⚙️ Environment Variables (Backend)
PORT=3000
MONGODB_URL=your_mongodb_connection
SECRET_KEY=your_jwt_secret
PASS_MAIL=your_email@gmail.com
PASS_KEY=your_app_password

🧪 Testing

API tested via frontend (Postman not required)

Error handling implemented on both client and server

Loading state prevents duplicate submissions

📌 Notes

Free Render instance may have cold-start delays

Reset password emails may take a few seconds

This project focuses on authentication, no product APIs included

✅ Submission Status

✔ All required features implemented
✔ Frontend & backend deployed
✔ Authentication & reset flow working
✔ Ready for evaluation

👤 Author

Rahin Mon S
Full-Stack Developer