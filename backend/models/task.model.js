const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required:true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  status:{
    type:String,
    required:true
  },
  isCompleted:{
    type:Boolean,
    default:false,
  },
  isImportant:{
    type:Boolean,
    default:false
  }
},
{
    timestamps:true,
}
);

const Task=mongoose.models.task || mongoose.model("task",taskSchema)
module.exports=Task
