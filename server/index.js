const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //access to requiest that body then get Json data

//routes//

//create a todo//
app.post("/todos", async (req, res) => {
  try {
    // console.log(req);
    const { description } = req.body;
    console.log(description);
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1)",
      [description]
    );

    res.json(newTodo);
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/todos", async (req, res) => {
  try {
    const { id } = req.body;
    console.log(`id: ${id}`);
    const removed = await pool.query("DELETE FROM todo WHERE todo_id = ($1)", [
      id,
    ]);

    res.json(`number of deleted row ${removed}`);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("sever had started on port 5000");
});
