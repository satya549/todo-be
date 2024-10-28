import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import connectDB  from "./config/connection"
import UserRoute from './routes/user'
import TaskRoute from './routes/task'

dotenv.config();

const app = express()

const port = process.env.PORT;

connectDB();

app.use(cookieParser());

const corsOptions = {
    origin: " http://localhost:3000",
    credentials: true,
  };
  
app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/user", UserRoute)
app.use("/tasks", TaskRoute)

app.listen(port,() =>{
console.log(`server running at http://localhost:${port}`)
})