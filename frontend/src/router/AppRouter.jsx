import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Planner from "../pages/Planner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tasks from "./pages/Tasks";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/planner" element={<Planner />} />
          <Route path="/tasks" element={<Tasks />} /> 
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default AppRouter;
