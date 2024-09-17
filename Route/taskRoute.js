import express from "express"
import { addTask, deleteTask, getTask } from "../Controller/taskController.js";



const taskRouter = express.Router();

taskRouter.post("/add-task",addTask)
taskRouter.get("/get-task",getTask)
taskRouter.delete("/delete-task/:id",deleteTask)

export default taskRouter;