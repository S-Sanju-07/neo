import "../styles/Planner.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Planner = () => {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [subject, setSubject] = useState("");
  const [time, setTime] = useState("");

  // For editing tasks
  const [editId, setEditId] = useState(null);
  const [editSubject, setEditSubject] = useState("");
  const [editTime, setEditTime] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = async () => {
    if (!subject || !time) return alert("Please fill all fields");

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:5000/api/tasks",
        { subject, time },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTasks([...tasks, res.data]);
      setSubject("");
      setTime("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  // Enable Edit Mode
  const startEdit = (task) => {
    setEditId(task._id);
    setEditSubject(task.subject);
    setEditTime(task.time);
  };

  // Save Updated Task
  const updateTask = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `http://localhost:5000/api/tasks/${editId}`,
        { subject: editSubject, time: editTime },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setTasks(tasks.map((t) => (t._id === editId ? res.data : t)));

      setEditId(null);
      setEditSubject("");
      setEditTime("");
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  const markCompleted = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const updated = await axios.put(
        `http://localhost:5000/api/tasks/${id}`,
        { completed: true },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setTasks(
        tasks.map((task) =>
          task._id === id ? updated.data : task
        )
      );
    } catch (err) {
      console.error("Error marking completed:", err);
    }
  };

  return (
    <div className="planner">
      <h2>📚 Smart Study Planner</h2>

          <button className="go-btn" onClick={() => navigate("/tasks")}>
      📋 Go to Tasks Page
    </button>


      {/* Add Task Section */}
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Time (e.g., 2:00 PM - 3:00 PM)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button onClick={addTask}>➕ Add Task</button>
      </div>

      {/* Edit Section */}
      {editId && (
        <div className="edit-section">
          <h3>✏️ Edit Task</h3>
          <input
            type="text"
            value={editSubject}
            onChange={(e) => setEditSubject(e.target.value)}
          />
          <input
            type="text"
            value={editTime}
            onChange={(e) => setEditTime(e.target.value)}
          />
          <button onClick={updateTask}>💾 Save</button>
          <button className="cancel" onClick={() => setEditId(null)}>
            ❌ Cancel
          </button>
        </div>
      )}

      {/* Display Tasks */}
      <ul>
        {tasks.length === 0 ? (
          <p>No tasks added yet!</p>
        ) : (
          tasks.map((task) => (
            <li key={task._id} className={task.completed ? "completed" : ""}>
              <div>
                <strong>{task.subject}</strong> - {task.time}
              </div>

              <div className="actions">
                {!task.completed && (
                  <button onClick={() => markCompleted(task._id)}>
                    ✅ Done
                  </button>
                )}

                <button onClick={() => startEdit(task)}>✏️ Edit</button>
                <button onClick={() => deleteTask(task._id)}>❌ Delete</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Planner;
