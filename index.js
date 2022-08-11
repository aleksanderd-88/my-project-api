const express = require('express')
const app = express()
const PORT = process.env.PORT || 1234
const cors = require('cors')
require('dotenv/config')

app.use(express.json())
app.use(cors())

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`))

module.exports = app