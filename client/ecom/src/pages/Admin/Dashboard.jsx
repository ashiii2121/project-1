import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBoxOpen,
  FaUsers,
  FaShoppingCart,
  FaChartBar,
  FaWarehouse,
  FaCog,
  FaBell,
  FaSearch,
  FaUserCircle,
  FaArrowUp,
  FaArrowDown,
  FaDollarSign,
  FaShoppingBag,
  FaChartLine,
} from "react-icons/fa";
import "./Dashboard.css";

const menuItems = [
  {
    label: "Products",
    icon: <FaBoxOpen />,
    path: "/admin/products",
    color: "#667eea",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    label: "Customers",
    icon: <FaUsers />,
    path: "/admin/customers",
    color: "#f093fb",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    label: "Orders",
    icon: <FaShoppingCart />,
    path: "/admin/orders",
    color: "#4facfe",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    label: "Reports",
    icon: <FaChartBar />,
    path: "/admin/reports",
    color: "#43e97b",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
  {
    label: "Inventory",
    icon: <FaWarehouse />,
    path: "/admin/inventory",
    color: "#fa709a",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
  {
    label: "Settings",
    icon: <FaCog />,
    path: "/admin/settings",
    color: "#30cfd0",
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateCards(true), 100);
  }, []);

  const metrics = [
    {
      label: "Total Sales",
      value: "$45,231",
      change: "+12.5%",
      trend: "up",
      icon: <FaDollarSign />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#667eea",
    },
    {
      label: "Total Orders",
      value: "1,234",
      change: "+8.2%",
      trend: "up",
      icon: <FaShoppingBag />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      color: "#f093fb",
    },
    {
      label: "Customers",
      value: "567",
      change: "+15.3%",
      trend: "up",
      icon: <FaUsers />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      color: "#4facfe",
    },
    {
      label: "Revenue",
      value: "$89,432",
      change: "+23.1%",
      trend: "up",
      icon: <FaChartLine />,
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      color: "#43e97b",
    },
  ];

  const recentOrders = [
    { id: "#ORD-001", customer: "John Doe", amount: "$234", status: "Completed", date: "Dec 18, 2025" },
    { id: "#ORD-002", customer: "Jane Smith", amount: "$567", status: "Pending", date: "Dec 18, 2025" },
    { id: "#ORD-003", customer: "Mike Johnson", amount: "$123", status: "Processing", date: "Dec 17, 2025" },
    { id: "#ORD-004", customer: "Sarah Williams", amount: "$890", status: "Completed", date: "Dec 17, 2025" },
    { id: "#ORD-005", customer: "Tom Brown", amount: "$456", status: "Shipped", date: "Dec 16, 2025" },
  ];

  const topProducts = [
    { name: "Fresh Carrots", sales: 234, revenue: "$1,234", trend: "+12%" },
    { name: "Red Apples", sales: 189, revenue: "$987", trend: "+8%" },
    { name: "Chicken Wings", sales: 156, revenue: "$2,345", trend: "+15%" },
    { name: "Broccoli", sales: 145, revenue: "$876", trend: "+5%" },
  ];

  return (
    <div className="admin-dashboard">
      {/* Animated Background */}
      <div className="dashboard-bg-animation"></div>

      {/* Top Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <h1 className="dashboard-title">
            <FaChartBar className="title-icon" />
            Admin Dashboard
          </h1>
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search anything..."
              className="search-input"
            />
          </div>
        </div>
        <div className="header-right">
          <div className="notification-bell">
            <FaBell />
            <span className="notification-badge">3</span>
          </div>
          <div className="admin-profile">
            <FaUserCircle className="profile-icon" />
            <div className="profile-info">
              <span className="profile-name">Admin</span>
              <span className="profile-role">Administrator</span>
            </div>
          </div>
        </div>
      </header>

      {/* Metrics Cards */}
      <section className="metrics-section">
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className={`metric-card ${animateCards ? "animate" : ""}`}
            style={{
              animationDelay: `${index * 0.1}s`,
              background: metric.gradient,
            }}
          >
            <div className="metric-icon-wrapper">
              <div className="metric-icon">{metric.icon}</div>
            </div>
            <div className="metric-content">
              <span className="metric-label">{metric.label}</span>
              <h2 className="metric-value">{metric.value}</h2>
              <div className="metric-change">
                {metric.trend === "up" ? (
                  <FaArrowUp className="trend-icon up" />
                ) : (
                  <FaArrowDown className="trend-icon down" />
                )}
                <span className={`change-text ${metric.trend}`}>
                  {metric.change}
                </span>
                <span className="change-period">vs last month</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Charts and Analytics */}
      <section className="analytics-section">
        <div className="chart-card">
          <div className="card-header">
            <h3>Sales Overview</h3>
            <select className="time-filter">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
            </select>
          </div>
          <div className="chart-placeholder">
            <FaChartLine className="chart-icon" />
            <div className="chart-bars">
              <div className="bar" style={{ height: "60%" }}></div>
              <div className="bar" style={{ height: "80%" }}></div>
              <div className="bar" style={{ height: "45%" }}></div>
              <div className="bar" style={{ height: "90%" }}></div>
              <div className="bar" style={{ height: "70%" }}></div>
              <div className="bar" style={{ height: "85%" }}></div>
              <div className="bar" style={{ height: "95%" }}></div>
            </div>
          </div>
        </div>

        <div className="chart-card">
          <div className="card-header">
            <h3>Top Products</h3>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="top-products-list">
            {topProducts.map((product, index) => (
              <div key={index} className="product-item">
                <div className="product-info">
                  <span className="product-rank">#{index + 1}</span>
                  <div>
                    <p className="product-name">{product.name}</p>
                    <p className="product-sales">{product.sales} sales</p>
                  </div>
                </div>
                <div className="product-stats">
                  <span className="product-revenue">{product.revenue}</span>
                  <span className="product-trend">{product.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Orders */}
      <section className="recent-orders-section">
        <div className="section-header">
          <h3>Recent Orders</h3>
          <button className="view-all-btn" onClick={() => navigate("/admin/orders")}>
            View All Orders
          </button>
        </div>
        <div className="orders-table-wrapper">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="order-id">{order.id}</td>
                  <td>{order.customer}</td>
                  <td className="order-amount">{order.amount}</td>
                  <td>
                    <span className={`status-badge ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="order-date">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Navigation Menu */}
      <nav className="dashboard-nav">
        <div className="nav-container">
          {menuItems.map((item, index) => (
            <div
              key={item.label}
              className="nav-item"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => navigate(item.path)}
            >
              <div
                className="nav-icon-wrapper"
                style={{ background: item.gradient }}
              >
                {item.icon}
              </div>
              <span className="nav-label">{item.label}</span>
              <div className="nav-hover-effect" style={{ background: item.gradient }}></div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
