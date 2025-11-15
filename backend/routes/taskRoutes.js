import express from "express";
import {
  addTask,
  getTasks,
  deleteTask,
  updateTask,
  markCompleted,
} from "../controllers/taskController.js";

const router = express.Router();

router.post("/", addTask);
router.get("/", getTasks);
router.put("/:id", updateTask);
router.put("/complete/:id", markCompleted);
router.delete("/:id", deleteTask);

export default router;
