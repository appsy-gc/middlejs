// Import Express
const express = require('express')

// Import Controller
const { 
    getTesties,
    getTestie,
    createTestie,
    updateTestie,
    deleteTestie
} = require('../controllers/testieController')

// Create mini router for grouping testie routes
const testieRouter = express.Router()

// GET all testie
testieRouter.get('/', async (req, res) => {
    const testies = await getTesties()
    res.json(testies)
})

// GET one testie
testieRouter.get('/:testieId', async (req, res) => {
    const testie = await getTestie(req.params.testieId)
    res.json(testie)
})

// CREATE a testie
testieRouter.post('/', async (req, res) => {
    const bodyData = {
        name: req.body.name,
        age: req.body.age,
        dob: req.body.dob
    }
    const newTestie = await createTestie(bodyData)
    res.json(newTestie)
})

// UPDATE a testie
testieRouter.patch('/:testieId', async (req, res) => {
    const bodyData = {
        name: req.body.name,
        age: req.body.age,
        dob: req.body.dob
    }
    const updatedTestie = await updateTestie(req.params.testieId, bodyData)
    res.json(updatedTestie)
})

// DELETE a testie
testieRouter.delete('/:testieId', async (req, res) => {
    const deletedTestie = deleteTestie(req.params.testieId)
    res.json(deletedTestie)
})

// Export the router
module.exports = testieRouter

