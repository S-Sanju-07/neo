import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/TasksPage.css";

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:5000/api/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📋 All Added Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks found!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>
              <b>{task.subject}</b> — {task.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
