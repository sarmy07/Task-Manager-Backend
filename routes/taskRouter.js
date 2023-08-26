const express = require("express");

const router = express.Router();

const {
  getAllTasks,
  createTask,
  getEachTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

router.get("/", getAllTasks);

router.post("/create", createTask);

router.get("/:id", getEachTask);

router.delete("/:id", deleteTask);

router.patch("/:id", updateTask);

module.exports = router;

