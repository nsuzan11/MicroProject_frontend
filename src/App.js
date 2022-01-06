import React from "react";
import "./App.css";
import "./Home";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import SignUpForm from "./signup";
import SignInForm from "./signin";
import Employee from "./emp";
import DashboardContent from "./dashboard/Dashboard";
import AddForm from "./addForm"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard/Dashboard" element={<DashboardContent />} />
      <Route path="/signin" element={<SignInForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/emp" element={<Employee />} />
      <Route path="/addForm" element={<AddForm/>} />
    </Routes>
  );
}
