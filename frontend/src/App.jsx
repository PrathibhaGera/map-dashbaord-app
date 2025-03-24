import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MapPage from "./pages/MapPage";
import Dashboard from "./pages/Dashboard";

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/map/:id" element={<MapPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mapview" element={<MapPage />} />
        </Routes>
      </>
    );
  }
}

export default App;
