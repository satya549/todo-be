import express from "express"
import dotenv from "dotenv"
import connectDB  from "./config/connection"
import UserRoute from './routes/user'
import TaskRoute from './routes/task'

dotenv.config();

const app = express()

const port = process.env.PORT;

connectDB();

app.use(express.json())

app.use("/api", UserRoute)
app.use("/api", TaskRoute)

app.listen(port,() =>{
console.log(`server running at http://localhost:${port}`)
})