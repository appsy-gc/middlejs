// Import model
const Testie = require('../models/testie')

// GET all 
async function getTesties() {
    const testies = await Testie.find()
    return testies
}

// GET one
async function getTestie(testieId) {
    const testie = await Testie.findById(testieId)
    return testie
}

// CREATE 
async function createTestie(testie) {
    const newTestie = await Testie.create(testie)
    return newTestie
}

// UPDATE
async function updateTestie(testieId, testie) {
    const updatedTestie = await Testie.findByIdAndUpdate(testieId, testie, { new: true })
    return updatedTestie
}

// DELETE
async function deleteTestie(testieId) {
    const deletedTestie = await Testie.findByIdAndDelete(testieId)
    return deletedTestie
}

// Export functions
module.exports = {
    getTesties,
    getTestie,
    createTestie,
    updateTestie,
    deleteTestie
}