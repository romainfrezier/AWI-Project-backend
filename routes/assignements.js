const express = require('express');
const router = express.Router();

const assignementsCtrl = require('../controllers/assignments');

router.post('/',assignementsCtrl.createAssignment);
router.put('/:id',assignementsCtrl.modifyAssignment);
router.delete('/:id', assignementsCtrl.deleteAssignment);
router.get('/', assignementsCtrl.getAllAssignments);
router.get('/dates',assignementsCtrl.getAllDates);
router.get('/dates/:date_deb/:date_fin',assignementsCtrl.getVolunteersWithDate);
router.get('/areas',assignementsCtrl.getAllAreas);
router.get('/areas/:zone',assignementsCtrl.getVolunteersWithArea);
router.get('/:id', assignementsCtrl.getOneAssignment);


module.exports = router;