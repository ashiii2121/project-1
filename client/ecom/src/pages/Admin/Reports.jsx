import React from "react";
import "./Dashboard.css";
function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <div className="cards">
        <div className="card">Users: 150</div>
        <div className="card">Sales: $1,200</div>
        <div className="card">Orders: 80</div>
        <div className="card">Products: 45</div>
        <div className="card">Pending Shipments: 12</div>
      </div>
      <h3>Recent Orders</h3>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#1001</td>
            <td>John Doe</td>
            <td>$120</td>
            <td>Delivered</td>
          </tr>
          <tr>
            <td>#1002</td>
            <td>Jane Smith</td>
            <td>$80</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>#1003</td>
            <td>Bob Lee</td>
            <td>$60</td>
            <td>Shipped</td>
          </tr>
        </tbody>
      </table>
      <h3>User Management</h3>
      <div className="user-management">
        <button>Add User</button>
        <button>Remove User</button>
        <button>View All Users</button>
      </div>
    </div>
  );
}

export default Dashboard;
