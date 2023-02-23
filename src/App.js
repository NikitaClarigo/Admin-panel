import React from 'react';
import "./App.css";
import Login from "./components/login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Signup from './components/Signup/Signup';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
