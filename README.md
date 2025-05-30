
# GreenCart 🛒

GreenCart is a full-stack e-commerce web application developed from scratch, aiming to provide a seamless shopping experience. It features a user-friendly interface, robust backend, and secure authentication mechanisms.

## 🌟 Features

* **User Authentication**: Secure login and registration system.
* **Product Management**: Browse, search, and filter products.
* **Shopping Cart**: Add, remove, and manage products in the cart.
* **Order Processing**: Place orders and view order history.
* **Admin Dashboard**: Manage products, orders, and users.
* **Responsive Design**: Optimized for both desktop and mobile devices.

## 🛠️ Technologies Used

### Frontend

* **React.js**: For building interactive user interfaces.
* **Redux**: State management across the application.
* **React Router**: Handling client-side routing.
* **Axios**: Making HTTP requests to the backend.
* **Bootstrap**: Responsive design and styling.([GitHub Docs][1])

### Backend

* **Node.js**: JavaScript runtime environment.
* **Express.js**: Web framework for Node.js.
* **MongoDB**: NoSQL database for storing application data.
* **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
* **JWT**: JSON Web Tokens for authentication.

## 🚀 Getting Started

### Prerequisites

* Node.js and npm installed on your machine.
* MongoDB installed and running.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Amolraut638/GreenCart.git
   cd GreenCart
   ```



2. **Install dependencies for the server**:

   ```bash
   cd server
   npm install
   ```



3. **Install dependencies for the client**:

   ```bash
   cd ../client
   npm install
   ```



### Running the Application

1. **Start the backend server**:

   ```bash
   cd server
   npm start
   ```



2. **Start the frontend application**:

   ```bash
   cd ../client
   npm start
   ```



The application should now be running at `http://localhost:3000/`.

## 📁 Project Structure

```bash
GreenCart/
├── client/            # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── redux/
│       └── App.js
├── server/            # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
└── README.md
```



## 🌐 Live Demo

Check out the live version of the application: [green-cart-nine.vercel.app](https://green-cart-nine.vercel.app/)


