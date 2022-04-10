const express = require('express')
const router = express.Router()
const crudTodo = require('../crud/todos')

router.get('/todos/',crudTodo.getAll)
router.get('/todos/:id',crudTodo.getOne)
router.post('/todos/',crudTodo.post)
router.patch('/todos/:id',crudTodo.patch)
router.delete('/todos/:id',crudTodo.delete)

module.exports = router;