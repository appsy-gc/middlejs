// Import the ExpressJS Package
const express = require('express')

// Create an instance of Express
const app = express()

// Declare the port number
const port = 3000

// Simple get request to get started
app.get('/', (req, res) => {
    response.send('Hello there')
})

// Start listening for traffic
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})