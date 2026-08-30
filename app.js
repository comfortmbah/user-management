import express from "express";
import useRouter from "./routes/userRouter.js"

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({
  extended: true
}));

app.use("/", useRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
})