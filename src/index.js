import express, { json } from "express";

const hostname = process.env.hostname
const port = process.env.port

const app = express()
app.use(json())

app.get('/healthcheck', (request, response) => {
    return response.json({ status: "UP" })
})

app.list(port, hostname, () => console.log(`Server Running at ${hostname}:${port}`))