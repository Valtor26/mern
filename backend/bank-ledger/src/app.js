const express = require("express")
const cookieParser = require("cookie-parser")
const authRoutes = require("./routes/auth.routes")
const app = express()

app.use(express.json()) // for parsing application/json
app.use(cookieParser()) // for parsing cookies

app.use("/api/auth", authRoutes)

module.exports = app