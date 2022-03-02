require("dotenv").config({ path: "../.env" });
const express = require("express");
const colors = require("colors");
const morgan = require('morgan')
const connectDB = require("./database/connectDB");
const {
  errorHandler,
  notFound,
} = require("./middlewares/errorHandlerMiddlware");

const app = express();
connectDB();
morgan('tiny')
app.use(express.json()); // accept json data

if (process.env.NODE_ENV === "dev") {
  app.get("/", (req, res) => {
    res.json("API is Runnig successfully");
  });
}

//* ------- Routes -------
app.use("/api/user", require("./routes/userRoutes"))
// app.use("/api/chat", require("./routes/notesRoutes"))
// app.use("/api/message", require("./routes/booksRoute"))

//* ------- Error handling -------
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 8080;
app.listen(port, () =>
  console.log(`Server started on PORT ${port}`.yellow.bold)
);
