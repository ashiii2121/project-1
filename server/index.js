import express from 'express'
const app = express()
import cors from 'cors'
import './configue/db.js'
// import adminRoutes from './routes/adminRoutes.js'
import Userroutes from './routes/Userroutes.js'
import { config } from 'dotenv'
import fileUpload from 'express-fileupload'
import cookieParser from 'cookie-parser';

config()

let corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use(express.static("public"))
app.use(fileUpload())


app.use('/', Userroutes)
// app.use('/admin', adminRoutes)

app.listen(process.env.PORT, () => {
    console.log(`running server on http://localhost:${process.env.PORT}`);
})