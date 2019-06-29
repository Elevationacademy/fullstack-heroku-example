const express = require('express')
const router = express.Router()
const ToDo = require('../models/TodoModel')

router.get('/todos', function (req, res) {
    ToDo.find({}, function (err, todos) {
        console.log(todos)
        res.send(todos)
    })
})

// FullStack Developer.

router.post('/todo', function (req, res) {
    const text = req.body.text
    const newTodo = new ToDo({ text: text, complete: false })

    newTodo.save(function (err, result) {
        ToDo.find({}, function (err, todos) {
            console.log(todos)
            res.send(todos)
        })
    })

})

router.put('/todo/:id', function (req, res) {
    const id = req.params.id
    ToDo.findByIdAndUpdate(id, {complete: true}, function(err, response){

        ToDo.find({}, function (err, todos) {
            console.log(todos)
            res.send(todos)
        })
    })
})

router.delete('/todo/:id', function (req, res) {
    const id = req.params.id
    todos.splice(todos.findIndex(t => t.id == id), 1)
    res.send(todos)
})

module.exports = router