import express, { json } from "express";
import cors from "cors";

const hostname = process.env.hostname
const port = process.env.port

const app = express()

app.use(cors({
    allowedHeaders: "*",
    methods: "*",
    origin: "*",
}))

app.use(json())

app.get('/healthcheck', (request, response) => {
    return response.json({ status: "UP" })
})

app.listen(port, hostname, () => console.log(`Server Running at ${hostname}:${port}`))