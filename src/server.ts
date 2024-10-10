import express from "express"
import UserRoute from './routes/user'
import connectDB  from "./config/connection"
import dotenv from "dotenv"

dotenv.config();

const port = process.env.PORT;

const app = express()

connectDB();

app.use(express.json())

app.use("/api", UserRoute)

app.listen(port,() =>{
console.log(`server running at http://localhost:${port}`)
})