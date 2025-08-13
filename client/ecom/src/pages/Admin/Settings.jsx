import React from "react";
import { FaUserCog, FaLock, FaBell, FaPalette, FaSave } from "react-icons/fa";

const settingsOptions = [
  {
    id: 1,
    icon: <FaUserCog size={28} />,
    title: "Profile Settings",
    description: "Update your admin profile information.",
  },
  {
    id: 2,
    icon: <FaLock size={28} />,
    title: "Security",
    description: "Change password and manage security options.",
  },
  {
    id: 3,
    icon: <FaBell size={28} />,
    title: "Notifications",
    description: "Configure notification preferences.",
  },
  {
    id: 4,
    icon: <FaPalette size={28} />,
    title: "Appearance",
    description: "Customize dashboard theme and layout.",
  },
];

const Settings = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        padding: "40px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 24px rgba(102,126,234,0.15)",
          padding: "32px 40px",
          marginBottom: "32px",
          width: "100%",
          maxWidth: "700px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ fontWeight: 700, fontSize: "2rem", margin: 0 }}>
          Admin Settings
        </h2>
        <button
          style={{
            background: "#fff",
            color: "#764ba2",
            border: "none",
            borderRadius: "50%",
            padding: "10px 12px",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(102,126,234,0.10)",
            transition: "background 0.2s",
          }}
          title="Save Settings"
        >
          <FaSave size={24} />
        </button>
      </div>
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
        }}
      >
        {settingsOptions.map((option) => (
          <div
            key={option.id}
            style={{
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 2px 12px rgba(102,126,234,0.10)",
              padding: "24px 28px",
              display: "flex",
              alignItems: "center",
              gap: "18px",
              transition: "box-shadow 0.2s",
              cursor: "pointer",
            }}
          >
            <div style={{ color: "#667eea" }}>{option.icon}</div>
            <div>
              <h3 style={{ margin: "0 0 8px 0", fontWeight: 600 }}>
                {option.title}
              </h3>
              <p style={{ margin: 0, color: "#555" }}>{option.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
