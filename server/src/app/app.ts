import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app: Express = express()
app.use(cors())
app.use(helmet())
app.use(morgan("dev"))
app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

app.get("/health", (req, res) => {
    res.status(200).json({ 
        success: "true", 
        message: "Server is healthy",})
})

app.get("/", (req, res) => {
    res.status(200).json({ 
        success: "true", 
        message: "Server is running very fast!!!!!!!",})
})

export default app