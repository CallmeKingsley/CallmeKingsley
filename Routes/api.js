const express = require('express')
const router = express.Router()

const todoRoutes = require('./todoRoutes')

router.use('/allTodos', todoRoutes)

module.exports = router
