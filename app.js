
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db");

// Middlewares
connectDB();
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

//2 step
const PORT = process.env.PORT || 5000;

//3 step
if(process.env.NODE_ENV=="production"){
  app.use(express.static("Frontend/build"));
}

// mongoose
//   .connect(
//     "mongodb+srv://shiwani:shiwani@cluster0.qz7mxhv.mongodb.net/?retryWrites=true&w=majority"
//   )

  // .then(() => console.log("Connected To Database"))
  //.then(() => {
    app.listen(PORT);
  //})
  //.catch((err) => console.log(err));
