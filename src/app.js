import express from "express";

import { pool } from "./db.js";

import usersRoutes from "./routes/users.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

// permite a app entender json
app.use(express.json());

// app.set('Content-Type', 'text/html')
// app.setRequestHeader('Access-Control-Allow-Origin', "*");
// app.setRequestHeader('Access-Control-Allow-Credentials', 'true');

// use routes from index.routes.js
app.use(indexRoutes);

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// use routes from user.routes.js
app.use("/api/", usersRoutes);
 
app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  })
});

export default app;