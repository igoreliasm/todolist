const express = require('express')

module.exports = (server) => {
    const router = express.Router()
    router.use('/api', router)

    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}