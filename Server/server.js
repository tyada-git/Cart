import express from "express";
import cors from "cors";
import db from "./db.js";

// const db = require("./db");
const app = express();

app.use(cors());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
// app.use((res, req, next)=>{
// req.send('<p>Server is up</p>')
// })

app.use(express.json());
const savedResponses = [];
const makeupData = [];
db.execute("SELECT * FROM houses")
  .then(([rows, fields]) => {
    console.log(rows);
    rows.forEach((row) => {
      makeupData.push({
        id: row.id,
        name: row.houseName,
        price: row.price,
      });
    });
  })
  .catch((err) => {
    console.error("Error fetching data from database:", err);
  });
app.post("/cart", (req, res, next) => {
  console.log(req.body);
  // savedResponses.push(req.body);
  // res.json(req.body);
  res.status(200).json({ message: "Cart updated successfully ", status: 200 });
});

app.get("/show-item", (req, res, next) => {
  res.json(savedResponses);
});

app.get("/makeup", (req, res, next) => {
  res.json(makeupData);
});
app.post("/houses", (req, res, next) => {
  console.log("houses", req.body);
  const { houseName, price } = req.body;
  db.execute("INSERT INTO houses (houseName, price) VALUES (?, ?)", [
    houseName,
    price,
  ])
    .then(() => {
      console.log("Houses Data sent successfully to db");
      res.status(201).json({ message: "Houses Data sent successfully to db" });
    })
    .catch((err) => {
      console.error("Error sending Houses Data to db", err);
      res.status(500).json({ error: "Error sending Houses Data to db" });
    });
});
app.listen("3001", () => {
  console.log("server running");
});
