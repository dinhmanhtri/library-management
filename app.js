const express = require("express");
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const bookRouter = require("./routes/book.routes");
const libraryRouter = require("./routes/library.routes");
const borrowBookRouter = require("./routes/borrowBook.routes");

// Database Connection
const DB_URL = `mongodb://manhtri:123456@127.0.0.1:27017/library`;
const db = mongoose.connection;
mongoose
  .connect(DB_URL, { useNewUrlParser: true })
  .then(() => console.log("DB Connected!"));
db.on("error", (err) => {
  console.log("DB connection error:", err.message);
});

app.use(express.urlencoded({ extended: false }));

// Static Files
app.use(express.static("public"));

// Set Template Engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Load Routes
app.use("/book", bookRouter);
app.use("/library", libraryRouter);
app.use("/borrow", borrowBookRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
