const express = require('express');
const router = express.Router();

const assignementsCtrl = require('../controllers/assignements');

router.post('/',assignementsCtrl.createAssignement);
router.put('/:id',assignementsCtrl.modifyAssignement);
router.delete('/:id', assignementsCtrl.deleteAssignement);
router.get('/:id', assignementsCtrl.getOneAssignement);
router.get('/', assignementsCtrl.getAllAssignements);

module.exports = router;