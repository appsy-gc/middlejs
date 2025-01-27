// Import the ExpressJS Package
const express = require('express')
const mongoose = require('mongoose')
const testieRouter = require('./routes/testieRoutes')

// Create an instance of Express
const app = express()

// Enable ability to send data to the server
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Declare routes
app.use('/testies', testieRouter)

// Declare the port number
const port = 3000

// Start listening for traffic
app.listen(port, async () => {
    console.log(`Server started on port ${port}`)
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/testie_db')
        console.log('Connected to database')
    } catch (error) {
        console.log(`Database failed to connect. ${JSON.stringify(error)}`)
    }
    
})

// HTML test route with middleware
app.get('/', messageWithVerb, (req, res) => {
    res.send('This is the home page')
})

// Function for DRY routes
function messageWithVerb(req, res, next) {
    console.log(`Received a request with the ${req.method} HTTP verb...`)
    next()
}