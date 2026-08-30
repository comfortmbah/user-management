import express from "express";

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({
  extended: true
}));


app.listen(3000, () => {
  console.log("Server running on port 3000");
})