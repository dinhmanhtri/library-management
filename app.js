const express = require("express");
const connectDB = require("./db/connectdb");
const app = express();
const port = process.env.PORT || 3000;
const DATABASE_URL = "mongodb://manhtri:123456@127.0.0.1:27017/library";
const bookRouter = require("./routes/book.routes");
const libraryRouter = require("./routes/library.routes");
const borrowBookRouter = require("./routes/borrowBook.routes");

// Database Connection
connectDB(DATABASE_URL);

app.use(express.urlencoded({extended:false}));

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
