import { pool } from "../db.js";

export const getAllTasksFromUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      `SELECT * FROM tasks WHERE id_user = ${id}`
    );
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong",
    });
  }
};

export const createTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const { content } = req.body;
    const { completed } = req.body;
    const { inProgress } = req.body;

    const result = await pool.query(
      // `INSERT INTO users (email) VALUE("${email}");`
      `INSERT INTO tasks(id_user, title, content, completed, inProgress) VALUES(${id}, "${title}", "${content}", ${completed}, ${inProgress})`
    );
    res.send({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "something went wrong",
    });
  }
};


export const updateTask = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  const { title } = req.body;
  const { content } = req.body;
  const { completed } = req.body;
  const { inProgress } = req.body;

  try {
    const result = await pool.query(
        `UPDATE tasks SET title = "${title}",
        content = "${content}", completed = ${completed},
        inProgress = ${inProgress} WHERE id = ${id}`
    );
    if (result.affectedRows <= 0) {
      return res.status(404).json({
        message: "Task not found",
      });
    }
    res.send({ result });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong",
    });
  }
};


export const deleteTask = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await pool.query(`DELETE FROM tasks WHERE id = ${id}`);
      if (result.affectedRows <= 0)
        return res.status(404).json({
          message: "Task not found",
        });
      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({
        message: "something went wrong",
      });
    }
  };