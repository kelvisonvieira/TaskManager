const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')

router.get('/add',TaskController.createTask)
router.post('/add',TaskController.createTaskSave)
router.get('/all',TaskController.showTask)
router.get('/delete/:id',TaskController.deleteTask)
router.get('/edit/:id',TaskController.updateTask)
router.post('/edit',TaskController.editTask)
router.post('/updatestatus',TaskController.toggleTaskStatus)


module.exports = router