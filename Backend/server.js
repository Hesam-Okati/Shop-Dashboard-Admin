// Therty Party Modules
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
require("dotenv").config()

// Local Modules
const userRoutes = require('./Router/userRoutes')
const productRoutes = require('./Router/productRoutes')
const msgRoutes = require('./Router/msgRoutes')
const SettingsRoutes = require('./Router/SettingRoutes')
const index = require('./Router')
const feedback = require('./Router/feedback')
const sales = require('./Router/sales')
const Mail = require('./Router/mail')


const app = express()
const { NODE_ENV , PORT } = process.env

app.use(cors())
app.use(bodyParser.json())
app.use(morgan("dev"))



app.use(index)
app.use("/api/user/" , userRoutes)
app.use("/api/products/" , productRoutes)
app.use("/api/massages/" , msgRoutes)
app.use("/api/settings/" , SettingsRoutes)
app.use("/api/feedbacks/" , feedback)
app.use("/api/sales/" , sales)
app.use("/api/mails/" , Mail)




app.listen(PORT , () => {
    console.log(`Server is run with ${NODE_ENV} mode on Port ${PORT}`)
})