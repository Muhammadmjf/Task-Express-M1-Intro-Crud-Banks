///imports
const express = require("express");
const connectDb = require("./database");
const app = express();
const morgan = require("morgan");
const studentRouter = require("./api/students/routes");
const petsRouter = require("./api/pets/routes");
const accountsRouter = require("./api/accounts/routes");
///middlewares
app.use(express.json());
app.use(morgan("dev"));

/// my routes

app.use("/api/students", studentRouter);
app.use("/api/pets", petsRouter);
app.use("/api/accounts", accountsRouter);

//not found handler
app.use((req, res, next) => {
  return res.status(404).json({ message: "path not found!" });
});

// error handler
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.message || "server error!");
});

/// my routes
// const studentRouter = require("./api/students/routes");
// const petsRouter = require("./api/pets/routes");
// const accountsRouter = require("./api/accounts/routes");

/// connect to DB
connectDb();

//  ADD ONE PORT
/// run server
const PORT = 8001;
app.listen(PORT, () => {
  console.log(`i am runing on port ${PORT}`);
});
