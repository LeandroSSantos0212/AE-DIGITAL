const express = require('express');

const router = express.Router();


const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');
const { route } = require('express/lib/router');


router.post('/',TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);
router.delete('/:id', TaskController.delete);
router.put('/:id/:done', TaskController.done);

router.get('/:id', TaskController.ShowUniqueTask);
router.get('/filter/all/:macaddress',  TaskController.allTasks);
router.get('/filter/late/:macaddress', TaskController.lateTask);
router.get('/filter/today/:macaddress', TaskController.todayTask);
router.get('/filter/week/:macaddress',  TaskController.weekTask);
router.get('/filter/month/:macaddress', TaskController.monthTask);
router.get('/filter/year/:macaddress',  TaskController.yearTask);


module.exports = router;

