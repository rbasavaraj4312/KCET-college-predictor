const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to database");
    app.listen(port, "0.0.0.0", () => {
      console.log(`Server running on ${port} port at localhost`);
    });
  })
  .catch(() => {
    console.log("Database connection failed");
  });

const collage = require("./Models/collages.js");
const agri = require("./Models/agri.js");
const phr = require("./Models/phr.js");
const vet = require("./Models/vet.js");

app.get("/clg/:rank/:branch", async (req, res) => {
  const rank = parseInt(req.params.rank, 10);
  const branch = req.params.branch;

  if (isNaN(rank) || !branch) {
    return res.status(400).json({ message: "Invalid rank or branch" });
  }

  try {
    const colleges = await collage.find({
      branch: branch,
    });

    res.status(200).json({ colleges });
  } catch (error) {
    res.status(500).json({ message: "Error fetching colleges", error });
  }
});

app.get("/agri/:rank", async (req, res) => {
  const rank = parseInt(req.params.rank, 10);

  if (isNaN(rank)) {
    return res.status(400).json({ message: "Invalid rank" });
  }

  try {
    const colleges = await agri.find({});

    res.status(200).json({ colleges });
  } catch (error) {
    res.status(500).json({ message: "Error fetching colleges", error });
  }
});

app.get("/vet/:rank", async (req, res) => {
  const rank = parseInt(req.params.rank, 10);

  if (isNaN(rank)) {
    return res.status(400).json({ message: "Invalid rank" });
  }

  try {
    const colleges = await vet.find({});

    res.status(200).json({ colleges });
  } catch (error) {
    res.status(500).json({ message: "Error fetching colleges", error });
  }
});

app.get("/phr/:rank", async (req, res) => {
  const rank = parseInt(req.params.rank, 10);

  if (isNaN(rank)) {
    return res.status(400).json({ message: "Invalid rank" });
  }

  try {
    const colleges = await phr.find({});

    res.status(200).json({ colleges });
  } catch (error) {
    res.status(500).json({ message: "Error fetching colleges", error });
  }
});
