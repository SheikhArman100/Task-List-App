const Task = require("../models/task.model");
const logger = require("../utils/logger");

const handleCreateTask = async (req, res) => {
  try {
    const userId = req.id;
    const { title, description, dueDate, status } = req.body;

    if (!title || !dueDate || !description || !status) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    //create task in db
    const newTask = new Task({
      userId: userId,
      title,
      description,
      dueDate,
      status,
    });
    await newTask.save();
    return res.status(200).json({
      message: "New Task is created ",
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      error: error.message,
      message: "Something went wrong",
    });
  }
};

const handleGetTasks = async (req, res) => {
  try {
    const userId = req.id;
    const { search } = req.query;
    let tasks;
    if (!search) {
      tasks = await Task.find({
        userId: userId,
      }).sort({ createdAt: -1 });
    } else {
      tasks = await Task.find({
        userId: userId,
        $or: [
          {
            title: { $regex: new RegExp(search, "i") },
          },
          {
            description: { $regex: new RegExp(search, "i") },
          },
        ],
      }).sort({ createdAt: -1 });
    }

    return res.status(200).json({
      tasks: tasks,
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      error: error.message,
      message: "Something went wrong",
    });
  }
};

const handleUpdateCompleted = async (req, res) => {
  try {
    const userId = req.id;
    const { isCompleted, id } = req.body;

    if (!id) {
      return res.status(400).json({
        message: "Task id is required",
      });
    }
    await Task.findOneAndUpdate(
      {
        _id: id,
        userId: userId,
      },
      {
        isCompleted: isCompleted,
      }
    );
    return res.status(200).json({
      message: "Task is updated",
    });
  } catch (error) {
    logger.error(error);
    res.status(500).json({
      error: error.message,
      message: "Something went wrong",
    });
  }
};

const handleUpdateImportant = async (req, res) => {
  try {
    const userId = req.id;
    const { isImportant, id } = req.body;

    if (!id) {
      return res.status(400).json({
        message: "Task id is required",
      });
    }
    await Task.findOneAndUpdate(
      {
        _id: id,
        userId: userId,
      },
      {
        isImportant: isImportant,
      }
    );
    return res.status(200).json({
      message: "Task is updated",
    });
  } catch (error) {
    logger.error(error);
    res.status(500).json({
      error: error.message,
      message: "Something went wrong",
    });
  }
};
const handleDeleteTask = async (req, res) => {
  try {
    const userId = req.id;
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({
        message: "Task id is required",
      });
    }

    console.log(id);

    await Task.findOneAndDelete({
      _id: id,
      userId: userId,
    });
    return res.status(200).json({
      message: "Task is deleted",
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      error: error.message,
      message: "Something went wrong",
    });
  }
};
module.exports = {
  handleCreateTask,
  handleGetTasks,
  handleDeleteTask,
  handleUpdateCompleted,
  handleUpdateImportant,
};
