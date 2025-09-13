import express from "express";
import { sum } from "./sum.js";

const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

app.get("/home", (req, res) => {
  res.json({
    msg: "I am root",
  });
});

app.get("/getSum/:a/:b", (req, res) => {
  const { a, b } = req.params;
  const result = sum(parseInt(a), parseInt(b));
  res.json({ ans: result });
});
