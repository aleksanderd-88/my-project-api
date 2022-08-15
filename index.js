const express = require('express')
const app = express()
const PORT = process.env.PORT || 1234
const cors = require('cors')
require('dotenv/config')
const routes = require('./app/routes')

app.use(express.json())
app.use(cors())

app.use('/', routes)

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`))

module.exports = app