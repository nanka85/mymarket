import express , {json, Request, Response} from "express";
import cors from "cors";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import {dirname, join} from "path"
import { fileURLToPath } from "url";
import { User } from "./src/user.entity";
import { myDataSource } from "./src/app-data-source";

myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })


dotenv.config()

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
const PORT = process.env.PORT || 5000
const corsOptions = {credential:true, origin: process.env || "*"}

app.use(cors(corsOptions))
app.use(json())
app.use(cookieParser())

app.use("/", express.static(join(__dirname, "public")))

app.get("/users", async function (req, res) {
    const users = await myDataSource.getRepository(User).find({where: id})
    res.json(users)
})


app.listen(PORT, () => console.log(`Listening on ${PORT}`))