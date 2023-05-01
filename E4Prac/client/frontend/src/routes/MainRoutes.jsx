import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Student from "../components/Student";
import AddStudent from "../components/AddStudent";
import EditStudent from "../components/EditStudent";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/student" element={<Student />} />
      <Route path="/student/:id" element={<EditStudent />} />
      <Route path="/addStudent" element={<AddStudent />} />
    </Routes>
  );
}
