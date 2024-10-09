import express from "express"

import UserRoute from './routes/user'


const app = express()
const PORT = 3900;

app.use(express.json())

app.use("/api", UserRoute)

app.listen(PORT,() =>{
console.log(`server running at http://localhost:${PORT}`)
})