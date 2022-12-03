import { Router } from "express";

// controller imports
import { getUsers } from "../controller/users.controller.js";
import { createUsers } from "../controller/users.controller.js";
import { updateUsers } from "../controller/users.controller.js";
import { deleteUsers } from "../controller/users.controller.js";
import { getUsersById } from "../controller/users.controller.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Pagina Principal");
});
router.get("/users", getUsers);

router.get("/users/:id", getUsersById);

router.post("/users", createUsers);

router.put("/users/:id", updateUsers);

router.delete("/users/:id", deleteUsers);

export default router;
