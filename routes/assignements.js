const express = require('express');
const router = express.Router();

const assignementsCtrl = require('../controllers/assignments');

router.post('/',assignementsCtrl.createAssignment);
router.put('/:id',assignementsCtrl.modifyAssignment);
router.delete('/:id', assignementsCtrl.deleteAssignment);
router.get('/:id', assignementsCtrl.getOneAssignment);
router.get('/', assignementsCtrl.getAllAssignments);
router.get('/dates',assignementsCtrl.getAllStartingDates);
router.get('dates/:date_deb',assignementsCtrl.getVolunteersWithDate);
router.get('/areas',assignementsCtrl.getAllAreas);
router.get('areas/:zone',assignementsCtrl.getVolunteersWithArea);

module.exports = router;