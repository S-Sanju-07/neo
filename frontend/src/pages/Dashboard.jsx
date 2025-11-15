import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // Dummy user info from localStorage
  const user = JSON.parse(localStorage.getItem("userInfo"));

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📘 Welcome to Smart Study Planner</h1>

      {user ? (
        <p style={styles.text}>Hi {user.name}! Ready to plan your studies?</p>
      ) : (
        <p style={styles.text}>Welcome, Guest!</p>
      )}

      <div style={styles.buttons}>
        <button style={styles.btnPrimary} onClick={() => navigate("/planner")}>
          Go to Planner
        </button>
        <button style={styles.btnSecondary} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "18px",
    color: "#333",
  },
  buttons: {
    marginTop: "30px",
  },
  btnPrimary: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    marginRight: "10px",
    cursor: "pointer",
  },
  btnSecondary: {
    backgroundColor: "#dc3545",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Dashboard;
