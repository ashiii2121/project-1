import React from 'react';
// import './Dashboard.css';
function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>
      <div className="cards">
        <div className="card">Users: 150</div>
        <div className="card">Sales: $1,200</div>
        <div className="card">Orders: 80</div>
      </div>
    </div>
  );
}

export default Dashboard;
