import express from "express"
import dotenv from "dotenv"
import connectDB  from "./config/connection"
import UserRoute from './routes/user'

dotenv.config();

const app = express()

const port = process.env.PORT;

connectDB();

app.use(express.json())

app.use("/api", UserRoute)

app.listen(port,() =>{
console.log(`server running at http://localhost:${port}`)
})