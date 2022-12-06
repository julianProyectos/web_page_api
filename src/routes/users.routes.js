import { Router } from "express";

// controller imports


//User
import { getUsers } from "../controller/users.controller.js";
import { createUsers } from "../controller/users.controller.js";
import { updateUsers } from "../controller/users.controller.js";
import { deleteUsers } from "../controller/users.controller.js";
import { getUsersById } from "../controller/users.controller.js";

// Task
import { getAllTasksFromUsers } from "../controller/task.controller.js";
import { createTask } from "../controller/task.controller.js";
import { updateTask } from "../controller/task.controller.js";
import { deleteTask } from "../controller/task.controller.js";



const router = Router();

// Default page
router.get("/", (req, res) => {
  res.send("Pagina Principal");
});


// User calls
router.get("/users", getUsers);

router.get("/users/:id", getUsersById);

router.post("/users", createUsers);

router.put("/users/:id", updateUsers);

router.delete("/users/:id", deleteUsers);


// task calls
router.get("/users/:id/tasks", getAllTasksFromUsers);

router.post("/users/:id/tasks/create", createTask);

router.put("/users/:id/tasks/:id", updateTask);

router.delete("/users/:id/tasks/:id", deleteTask);


export default router;
