import React from "react";
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
} from "react-icons/fa";

const menuItems = [
  {
    label: "Products",
    icon: <FaBoxOpen />,
    path: "/admin/products",
    color: "#4f8cff",
  },
  {
    label: "Customers",
    icon: <FaUsers />,
    path: "/admin/customers",
    color: "#34c759",
  },
  {
    label: "Orders",
    icon: <FaShoppingCart />,
    path: "/admin/orders",
    color: "#ff9500",
  },
  {
    label: "Reports",
    icon: <FaChartBar />,
    path: "/admin/reports",
    color: "#ff3b30",
  },
  {
    label: "Inventory",
    icon: <FaWarehouse />,
    path: "/admin/inventory",
    color: "#a259ff",
  },
  {
    label: "Settings",
    icon: <FaCog />,
    path: "/admin/settings",
    color: "#232b43",
  },
];

const metrics = [
  { label: "Sales", value: "$12,340", color: "#4f8cff" },
  { label: "Orders", value: "1,234", color: "#34c759" },
  { label: "Customers", value: "567", color: "#ff9500" },
  { label: "Inventory Alerts", value: "3", color: "#ff3b30" },
];

const Dashboard = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#f4f6fa" }}>
      {/* Top Header */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.5rem 2rem 1rem 2rem",
          background: "#fff",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ position: "relative" }}>
            <FaSearch
              style={{
                position: "absolute",
                left: 12,
                top: 10,
                color: "#b0b7c3",
              }}
            />
            <input
              type="text"
              placeholder="Search..."
              style={{
                padding: "0.5rem 0.5rem 0.5rem 2.5rem",
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                background: "#f4f6fa",
                fontSize: 15,
                outline: "none",
                width: 220,
              }}
            />
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <FaBell
            style={{ fontSize: 22, color: "#4f8cff", cursor: "pointer" }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
            }}
          >
            <FaUserCircle style={{ fontSize: 28, color: "#232b43" }} />
            <span style={{ fontWeight: 500, color: "#232b43" }}>Admin</span>
          </div>
        </div>
      </header>
      {/* Metrics Cards */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 24,
          padding: "2rem",
        }}
      >
        {metrics.map((metric) => (
          <div
            key={metric.label}
            style={{
              background: "#fff",
              borderRadius: 14,
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              padding: "1.5rem 1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              borderLeft: `5px solid ${metric.color}`,
            }}
          >
            <span style={{ color: "#7b7f8a", fontSize: 15 }}>
              {metric.label}
            </span>
            <span
              style={{ fontWeight: 700, fontSize: 28, color: metric.color }}
            >
              {metric.value}
            </span>
          </div>
        ))}
      </section>
      {/* Analytics Charts Placeholder */}
      <section
        style={{
          padding: "0 2rem 2rem 2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 14,
            minHeight: 260,
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#b0b7c3",
            fontSize: 18,
          }}
        >
          [Sales Chart Placeholder]
        </div>
        <div
          style={{
            background: "#fff",
            borderRadius: 14,
            minHeight: 260,
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#b0b7c3",
            fontSize: 18,
          }}
        >
          [Orders Chart Placeholder]
        </div>
      </section>
      {/* Attractive Menu Bar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 32,
          padding: "1.5rem 2rem 0.5rem 2rem",
          background: "#fff",
          borderBottom: "1px solid #e5e7eb",
          boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
          borderRadius: "0 0 16px 16px",
        }}
      >
        {/* Dashboard Menu List */}
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 28,
            listStyle: "none",
            padding: "1.5rem 2rem 0.5rem 2rem",
            margin: 0,
            background: "#fff",
            borderBottom: "1px solid #e5e7eb",
            borderRadius: "0 0 16px 16px",
          }}
        >
          {menuItems.map((item) => (
            <li
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "0.6rem 1.2rem",
                borderRadius: 10,
                background: "#f4f6fa",
                color: item.color,
                fontWeight: 600,
                fontSize: 16,
                cursor: "pointer",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = item.color;
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#f4f6fa";
                e.currentTarget.style.color = item.color;
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
