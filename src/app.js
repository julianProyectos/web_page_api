import express from "express";

import { pool } from "./db.js";

import usersRoutes from "./routes/users.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

// permite a app entender json
app.use(express.json());

// use routes from index.routes.js
app.use(indexRoutes);

// use routes from user.routes.js
app.use("/api/", usersRoutes);
 
app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  })
});

export default app;