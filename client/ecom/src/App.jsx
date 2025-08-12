import React from "react";
import Userroutes from "./Routes/Userroutes";
import { Routes, Route } from "react-router-dom";
import Adminroutes from "../src/Routes/Adminroutes";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Userroutes />} />
        <Route path="/admin/*" element={<Adminroutes />} />
      </Routes>
    </div>
  );
}

export default App;
