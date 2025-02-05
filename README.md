# Bistro Boss 🍽️

Bistro Boss is a modern food delivery web application built with React and powered by Node.js, Firebase, and MongoDB. It provides a seamless experience for users to browse, order, and pay for their favorite meals online. The app features authentication, payment processing, and an admin dashboard for managing orders and menus.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [API Endpoints](#api-endpoints)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## Features 🚀

✅ User authentication (Firebase Auth + JWT)  
✅ Secure payments with Stripe  
✅ Admin dashboard for managing menu items and orders  
✅ Real-time order tracking  
✅ Responsive UI for mobile & desktop  
✅ MongoDB database for storing user orders and menu items  

## Tech Stack 🛠️

- **Frontend:** React, React Router, Context API  
- **Backend:** Node.js, Express, Firebase  
- **Database:** MongoDB  
- **Authentication:** Firebase Auth, JWT  
- **Payments:** Stripe  
- **Hosting:** Vercel  

## Installation ⚙️

1. **Clone the repository**  
   ```sh
   git clone https://github.com/your-username/bistro-boss.git
   cd bistro-boss

2.Install dependencies
npm install

3.Set up environment variables
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
BACKEND_URL=http://localhost:5000

4.Run the development server
npm start

5. Start the backend server
   npm run dev

   
Usage 💡

    Users can:
        Sign up/login via Firebase
        Browse menu items
        Add items to the cart
        Checkout using Stripe
        Track orders

    Admins can:
        Manage menu items (add, edit, delete)
        View and process orders
        Manage users
Screenshots 📸

(Add relevant screenshots here!)
API Endpoints 🌐
Method	Endpoint	Description
GET	/menu	Fetch all menu items
POST	/order	Create a new order
GET	/orders/:userId	Get user-specific orders
POST	/login	Authenticate user
Troubleshooting 🛠️

    If Firebase auth isn't working, check your .env file.
    Make sure MongoDB is running and connected.
    Ensure Stripe keys are correct for payment processing.

Contributing 🤝

Contributions are welcome! Fork the repo, make your changes, and submit a pull request.

