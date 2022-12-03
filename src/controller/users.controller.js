import { pool } from "../db.js";

export const getUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong",
    });
  }
};

export const getUsersById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(`SELECT * FROM users WHERE id = ${id}`);
    if (result.length <= 0)
      return res.status(404).json({
        message: "User not found",
      });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong",
    });
  }
};

export const createUsers = async (req, res) => {
  try {
    const { email } = req.body;
    const result = await pool.query(
      `INSERT INTO users (email) VALUE("${email}");`
    );
    res.send({ result });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong",
    });
  }
};

export const deleteUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(`DELETE FROM users WHERE id = ${id}`);
    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "User not found",
      });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong",
    });
  }
};

export const updateUsers = async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;
  try {
    const result = await pool.query(`UPDATE users SET email = '${email}' WHERE id = ${id}`);
    if (result.affectedRows <= 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.send({ result });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong",
    });
  }
};
