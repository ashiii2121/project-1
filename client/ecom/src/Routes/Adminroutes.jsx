import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Adminlayout from "../Layout/Adminlayout";
import Reports from "../pages/Admin/Reports";
import Dashboard from "../pages/Admin/Dashboard";
import AdminLogin from "../pages/Admin/AdminLogin";

const Products = React.lazy(() => import("../pages/Admin/Products"));
const Orders = React.lazy(() => import("../pages/Admin/Orders"));
const Customers = React.lazy(() => import("../pages/Admin/Customers"));
const Inventory = React.lazy(() => import("../pages/Admin/Inventory"));
const Settings = React.lazy(() => import("../pages/Admin/Settings"));

function Adminroutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="login" element={<AdminLogin />} />
        <Route path="*" element={<Adminlayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default Adminroutes;
