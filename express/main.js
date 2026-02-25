import express from "express"
import cors from "cors"
import 'dotenv/config'
import cookieParser from "cookie-parser"
import authRouter from './routes/authRoutes.js'

import connectDB from './config/mongodb.js'
import userRouter from "./routes/userRouter.js"

const app = express()
const port = process.env.PORT || 4000 // define port in port 4000
connectDB()

app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials: true}))

// API endpoint
app.get('/', (req, res) => {
  res.send('API Working')
})
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

app.listen(port, () => {
  console.log(`Server start in port : ${port}`)
})