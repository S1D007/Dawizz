import dotenv from "dotenv";
dotenv.config();
import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import upload from "./routes/upload";
const app: Express = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: "*",
}))


app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Hello GoKapture Hub!"
    })
})

app.use("/upload", upload)

export default app;