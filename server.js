const express = require('express')
const path = require('path')
const colors = require('colors')

const PORT = 8080

const app = express()

// Midlewares
app.use(express.static(path.join(__dirname, '/dist')))

// Server init
app.listen(PORT, () => {
  console.log(`[OK] Server has been starter on port: ${PORT}`.green.bold)
})