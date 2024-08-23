const express = require("express");
const cors = require("cors");
const app = express();
const { v4: uuidv4 } = require("uuid");

const NOTES = [];

app.use(cors());
app.use(express.json());

app.get("/notes", function (req, res) {
  res.json(NOTES);
});

app.post("/note", function (req, res) {
  let note = req.body;
  let newNote = { ...note, id: uuidv4() };
  NOTES.push(newNote);
  res.json(NOTES);
});

app.get("/", function (req, res) {
  res.json({ status: "SUCCESS" });
});

app.listen(3000, () => {
  console.log("App started on 3000");
});
