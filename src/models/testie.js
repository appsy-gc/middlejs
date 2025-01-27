// Import mongoose
const mongoose = require('mongoose')

// Define the schema 
const TestieSchema = mongoose.Schema({
    name: String,
    age: Number,
    dob: Date
})

// Create mongoose model (i.e., collection/table)
const Testie = mongoose.model('Testie', TestieSchema)

// Export the model
module.exports = Testie