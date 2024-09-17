import express from "express"
import cors from "cors"
import {connect} from "../config/db.js"
import cookieParser from "cookie-parser"
import userRouter from "../Route/UserRouter.js"
import taskRouter from "../Route/taskRoute.js"


const app = express()


app.use(cors());

app.use(express.json())
app.use(cookieParser())


app.use("/api/v1/user",userRouter)
app.use("/api/v1/task",taskRouter)


const PORT = 3000;
connect()



app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT,()=>{
    console.log(`Example app listening on ${PORT}`)
})