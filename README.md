<div align="center">

# 🛒 ShopEasy - Premium E-Commerce Platform

<img src="https://img.shields.io/badge/ShopEasy-E--Commerce-blueviolet?style=for-the-badge&logo=shopping-cart&logoColor=white" alt="ShopEasy Badge"/>

### *Your Ultimate Shopping Destination - Built with Modern Web Technologies*

[![React](https://img.shields.io/badge/React-19.0+-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16.0+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Express](https://img.shields.io/badge/Express-5.0+-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0+-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[🚀 Features](#-features) • [📦 Installation](#-installation) • [🎯 Tech Stack](#-tech-stack) • [📖 Documentation](#-documentation) • [🤝 Contributing](#-contributing)

---

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=667EEA&center=true&vCenter=true&width=600&lines=Modern+E-Commerce+Platform;Beautiful+UI%2FUX+Design;Secure+%26+Scalable;Admin+Dashboard+Included" alt="Typing SVG" />

</div>

---

## 🎉 What's New (December 2025)

### Latest Updates:
- 💝 **Wishlist Page** - Save your favorite products with beautiful UI
- 🌙 **Dark Mode Toggle** - Switch between light and dark themes
- 🎨 **Premium Admin Dashboard** - Glassmorphism design with real-time analytics
- 📸 **Product Images** - High-quality images from Unsplash for all products
- 🎯 **Enhanced UI/UX** - Global design system with CSS variables
- 📖 **Comprehensive Documentation** - Detailed README and project summary

---

## ✨ Features

### 🎨 **Premium UI/UX Design**
- ✅ **Stunning Visual Design** - Modern gradients, glassmorphism, and smooth animations
- ✅ **Fully Responsive** - Seamlessly adapts to all screen sizes (Mobile, Tablet, Desktop)
- ✅ **Dark Mode Ready** - User preference-based theming support
- ✅ **Micro-Animations** - Smooth transitions and interactive hover effects
- ✅ **Accessibility First** - WCAG compliant design for all users

### 🛍️ **Customer Experience**
- 🏠 **Dynamic Homepage** - Eye-catching hero sections with auto-sliding banners
- 🔍 **Smart Search** - Real-time product search with advanced filters
- 📱 **Product Catalog** - Grid and list view with multiple sorting options
- 🛒 **Shopping Cart** - Persistent cart with quantity management
- � **Wishlist** - Save favorite products with images, ratings, and stock status
- �💳 **Secure Checkout** - Multi-step checkout process with validation
- 👤 **User Profiles** - Complete account management and order history
- ⭐ **Reviews & Ratings** - Customer feedback and rating system
- 📧 **Newsletter** - Email subscription with modern UI
- 🌙 **Dark Mode** - Toggle between light and dark themes

### 🎛️ **Premium Admin Dashboard**
- 📊 **Analytics Dashboard** - Real-time sales insights with beautiful visualizations
- 📈 **Interactive Charts** - Animated bar charts and trend indicators
- 📦 **Product Management** - Complete CRUD operations with image upload
- 👥 **Customer Management** - User accounts and activity tracking
- 📋 **Order Management** - Order processing with status updates
- 📊 **Inventory Tracking** - Real-time stock management
- 📈 **Reports & Analytics** - Detailed sales and performance reports
- ⚙️ **Settings Panel** - Customizable admin preferences

### 🔒 **Security & Performance**
- 🔐 **JWT Authentication** - Secure user authentication and authorization
- 🔒 **Role-based Access** - Admin and user role management
- 🚀 **Optimized Performance** - Fast loading times and smooth interactions
- 📱 **PWA Ready** - Progressive Web App capabilities
- 🌐 **RESTful API** - Clean and well-documented API architecture
- 🔄 **Real-time Updates** - Live inventory and order updates

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v4.4 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **npm** or **yarn** package manager

### 📦 Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/ashiii2121/project-1.git
cd project-1

# 2️⃣ Install server dependencies
cd server
npm install

# 3️⃣ Install client dependencies
cd ../client/ecom
npm install

# 4️⃣ Set up environment variables
cd ../../server
# Create .env file (see Environment Variables section below)

# 5️⃣ Start MongoDB (if running locally)
# Windows: mongod
# Mac/Linux: sudo systemctl start mongod

# 6️⃣ Start the backend server (from server directory)
npm start
# Server will run on http://localhost:5000

# 7️⃣ Start the frontend (from client/ecom directory)
cd ../client/ecom
npm run dev
# Frontend will run on http://localhost:5173
```

### 🔧 Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```env
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/shopeasy
DB_NAME=shopeasy

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_change_this
JWT_EXPIRE=7d

# Email Configuration (Optional - for notifications)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_specific_password

# Server Configuration
PORT=5000
NODE_ENV=development

# Client URL (for CORS)
CLIENT_URL=http://localhost:5173
```

> **⚠️ Important:** Replace the placeholder values with your actual credentials. Never commit the `.env` file to version control.

---

## 🏗️ Project Structure

```
shopeasy/
├── 📁 client/ecom/              # React Frontend Application
│   ├── 📁 src/
│   │   ├── 📁 Components/       # Reusable React Components
│   │   │   ├── 📁 common/       # Shared components (Navbar, Footer, etc.)
│   │   │   └── 📁 user/         # User-specific components
│   │   ├── 📁 pages/            # Page Components
│   │   │   ├── 📁 User/         # Customer-facing pages
│   │   │   │   ├── Home.jsx     # Homepage with hero section
│   │   │   │   ├── Category.jsx # Product catalog
│   │   │   │   ├── Cart.jsx     # Shopping cart
│   │   │   │   ├── Checkout.jsx # Checkout process
│   │   │   │   └── Profile.jsx  # User profile
│   │   │   └── 📁 Admin/        # Admin dashboard pages
│   │   │       ├── Dashboard.jsx    # Main admin dashboard
│   │   │       ├── Products.jsx     # Product management
│   │   │       ├── Orders.jsx       # Order management
│   │   │       ├── Customers.jsx    # Customer management
│   │   │       ├── Inventory.jsx    # Inventory tracking
│   │   │       ├── Reports.jsx      # Analytics & reports
│   │   │       └── Settings.jsx     # Admin settings
│   │   ├── 📁 Layout/           # Layout Components
│   │   │   ├── Userlayout.jsx   # User layout wrapper
│   │   │   └── Adminlayout.jsx  # Admin layout wrapper
│   │   ├── 📁 Routes/           # Route Configurations
│   │   │   ├── Userroutes.jsx   # User routes
│   │   │   └── Adminroutes.jsx  # Admin routes
│   │   ├── 📁 Services/         # API Service Layer
│   │   ├── 📄 App.jsx           # Main App component
│   │   ├── 📄 main.jsx          # Application entry point
│   │   └── 📄 index.css         # Global styles
│   ├── 📄 package.json
│   ├── 📄 vite.config.js
│   └── 📄 index.html
│
├── 📁 server/                   # Node.js Backend Application
│   ├── 📁 controller/           # Route Controllers
│   │   ├── Admincontroller.js   # Admin operations
│   │   └── Usercontroller.js    # User operations
│   ├── 📁 model/                # Database Models (Mongoose)
│   │   └── User.js              # User model
│   ├── 📁 routes/               # API Routes
│   │   ├── Adminroutes.js       # Admin API routes
│   │   └── Userroutes.js        # User API routes
│   ├── 📁 configue/             # Configuration Files
│   │   └── db.js                # Database connection
│   ├── 📄 index.js              # Server entry point
│   ├── 📄 package.json
│   └── 📄 .env                  # Environment variables (not in repo)
│
├── 📄 README.md                 # Project documentation
└── 📄 .gitignore                # Git ignore file
```

---

## 🎯 Tech Stack

### **Frontend** ⚛️

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19.0+ | Modern UI library with hooks and context |
| **Vite** | 6.0+ | Lightning-fast build tool and dev server |
| **React Router** | 7.5+ | Client-side routing and navigation |
| **React Icons** | 5.5+ | Beautiful icon library |
| **Axios** | 1.9+ | HTTP client for API calls |
| **EmailJS** | 3.2+ | Client-side email integration |
| **CSS3** | Latest | Custom styling with modern features |

### **Backend** 🟢

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Node.js** | 16.0+ | JavaScript runtime environment |
| **Express.js** | 5.0+ | Fast web application framework |
| **MongoDB** | Latest | NoSQL database for data storage |
| **Mongoose** | 8.14+ | MongoDB object modeling |
| **JWT** | 9.0+ | JSON Web Tokens for authentication |
| **Bcrypt** | 5.1+ | Password hashing and security |
| **Nodemailer** | 7.0+ | Email sending capability |
| **CORS** | 2.8+ | Cross-origin resource sharing |

### **Development Tools** 🛠️

- **ESLint** - Code linting and quality checks
- **Prettier** - Code formatting
- **Git** - Version control
- **npm** - Package management

---

## 📱 Key Components

### 🎭 **Enhanced User Interface Components**

#### 🧭 Modern Navbar
- Responsive design with mobile hamburger menu
- Dropdown categories with smooth animations
- Real-time search functionality
- User profile dropdown with authentication states
- Shopping cart and wishlist indicators
- Scroll-based styling changes

#### 🎨 Dynamic Hero Section
- Auto-sliding banners with manual navigation
- Parallax scrolling effects
- Floating animated elements
- Trust indicators and social proof
- Call-to-action buttons with hover effects

#### 🛍️ Product Components
- **ProductCard** - Modern card design with hover effects
- **ProductGrid** - Flexible grid with search and filters
- Rating systems with star displays
- Badge system for sales and promotions
- Quick view and wishlist functionality
- Stock status indicators

#### 🦶 Enhanced Footer
- Newsletter subscription with validation
- Social media integration
- Contact information with icons
- Payment method indicators
- Responsive multi-column layout

### 🎛️ **Premium Admin Dashboard**

The admin dashboard features a stunning, modern design with:

- **Glassmorphism Effects** - Frosted glass aesthetic with backdrop blur
- **Gradient Backgrounds** - Beautiful color gradients throughout
- **Animated Metrics Cards** - Real-time data with smooth animations
- **Interactive Charts** - Visual data representation with hover effects
- **Responsive Tables** - Clean, sortable data tables
- **Status Badges** - Color-coded order and inventory status
- **Navigation Cards** - Quick access to all admin functions

---

## 🎨 Design Philosophy

### **Visual Excellence**
- **Modern Color Palette** - Vibrant gradients and harmonious colors
- **Typography** - Clean, readable fonts with proper hierarchy
- **Spacing** - Consistent padding and margins throughout
- **Icons** - Consistent icon library (React Icons)

### **User Experience**
- **Intuitive Navigation** - Easy to find what you need
- **Fast Loading** - Optimized for performance
- **Smooth Animations** - Delightful micro-interactions
- **Accessibility** - ARIA labels and keyboard navigation

### **Responsive Design**
- **Mobile First** - Designed for mobile, enhanced for desktop
- **Breakpoints** - Optimized for all screen sizes
- **Touch Friendly** - Large tap targets for mobile users

---

## 🔐 Authentication & Security

### User Authentication
- Secure registration and login system
- Password hashing with bcrypt
- JWT-based session management
- Protected routes and API endpoints

### Admin Access
- Role-based access control
- Separate admin authentication
- Protected admin routes
- Secure API endpoints

---

## 📊 API Endpoints

### **User Routes** (`/api`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/register` | Register new user | ❌ |
| POST | `/login` | User login | ❌ |
| GET | `/profile` | Get user profile | ✅ |
| PUT | `/profile` | Update profile | ✅ |
| GET | `/products` | Get all products | ❌ |
| GET | `/products/:id` | Get product details | ❌ |
| POST | `/cart` | Add to cart | ✅ |
| GET | `/orders` | Get user orders | ✅ |

### **Admin Routes** (`/admin`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/login` | Admin login | ❌ |
| GET | `/dashboard` | Dashboard data | ✅ Admin |
| GET | `/products` | Manage products | ✅ Admin |
| POST | `/products` | Add product | ✅ Admin |
| PUT | `/products/:id` | Update product | ✅ Admin |
| DELETE | `/products/:id` | Delete product | ✅ Admin |
| GET | `/orders` | Manage orders | ✅ Admin |
| GET | `/customers` | Manage customers | ✅ Admin |

---

## 🚀 Deployment

### **Frontend Deployment** (Vercel/Netlify)

```bash
# Build the frontend
cd client/ecom
npm run build

# Deploy to Vercel
vercel --prod

# Or deploy to Netlify
netlify deploy --prod
```

### **Backend Deployment** (Render/Heroku)

```bash
# Ensure all environment variables are set
# Deploy to Render or Heroku following their documentation
```

### **Database** (MongoDB Atlas)

1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Update `MONGODB_URI` in your `.env` file

---

## 🧪 Testing

```bash
# Run frontend tests
cd client/ecom
npm test

# Run backend tests
cd server
npm test
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed
- Test your changes thoroughly

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support & Contact

### Get Help

- 📧 **Email:** support@shopeasy.com
- 🐛 **Issues:** [GitHub Issues](https://github.com/ashiii2121/project-1/issues)
- 💬 **Discussions:** [GitHub Discussions](https://github.com/ashiii2121/project-1/discussions)
- 📖 **Documentation:** [Wiki](https://github.com/ashiii2121/project-1/wiki)

### Social Media

- 🐦 **Twitter:** [@shopeasy](https://twitter.com/shopeasy)
- 📘 **Facebook:** [ShopEasy](https://facebook.com/shopeasy)
- 📸 **Instagram:** [@shopeasy](https://instagram.com/shopeasy)

---

## 🙏 Acknowledgments

- **React Team** - For the amazing React library
- **MongoDB** - For the powerful database
- **Express.js** - For the robust backend framework
- **Vite** - For the lightning-fast build tool
- **React Icons** - For the beautiful icon library
- **All Contributors** - For making this project better

---

## 📈 Project Status

![GitHub last commit](https://img.shields.io/github/last-commit/ashiii2121/project-1?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/ashiii2121/project-1?style=flat-square)
![GitHub pull requests](https://img.shields.io/github/issues-pr/ashiii2121/project-1?style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/ashiii2121/project-1?style=social)

---

## 🗺️ Roadmap

### ✅ Recently Completed (December 2025)
- [x] **Wishlist Functionality** - Beautiful wishlist page with images and ratings
- [x] **Dark Mode Toggle** - Theme context and toggle component ready
- [x] **Premium Admin Dashboard** - Glassmorphism design with analytics
- [x] **Product Images** - High-quality Unsplash images for all products
- [x] **Global Design System** - CSS variables and utility classes

### Version 2.0 (In Progress)
- [x] ~~Wishlist Functionality~~ ✅ **Completed**
- [x] ~~Dark Mode Toggle~~ ✅ **Completed**
- [ ] Payment Gateway Integration (Stripe/PayPal)
- [ ] Product Reviews & Ratings
- [ ] Advanced Search Filters
- [ ] Email Notifications
- [ ] Order Tracking
- [ ] Multi-language Support

### Version 3.0 (Future)
- [ ] Mobile App (React Native)
- [ ] AI-Powered Recommendations
- [ ] Live Chat Support
- [ ] Social Media Integration
- [ ] Advanced Analytics Dashboard
- [ ] Inventory Forecasting

---

<div align="center">

## 💝 Show Your Support

If you find this project helpful, please consider giving it a ⭐️!

**Made with ❤️ by the ShopEasy Team**

[![GitHub followers](https://img.shields.io/github/followers/ashiii2121?style=social)](https://github.com/ashiii2121)
[![Twitter Follow](https://img.shields.io/twitter/follow/shopeasy?style=social)](https://twitter.com/shopeasy)

---

### ⭐ Star us on GitHub — it motivates us a lot!

[⬆ Back to Top](#-shopeasy---premium-e-commerce-platform)

</div>

