const express = require("express");
const verifyJWT = require("../middlewares/verifyJWT");
const { handleCreateTask, handleGetTasks, handleUpdateCompleted, handleUpdateImportant, handleDeleteTask } = require("../controllers/task.controller");

const router = express.Router();

//create task
router.post("/", verifyJWT,handleCreateTask );
router.get("/", verifyJWT,handleGetTasks);
router.delete("/", verifyJWT,handleDeleteTask);
router.put("/completed", verifyJWT,handleUpdateCompleted);
router.put("/important", verifyJWT,handleUpdateImportant);

module.exports = router;
