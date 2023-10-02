const Router = require('express');
const contoller = require('./controller');
const router = Router();

router.get('/', contoller.getStudent);
router.get('/:id', contoller.getStudentById);
router.post('/', contoller.addStudent);
router.delete('/:id', contoller.removeStudentById);

module.exports = router;