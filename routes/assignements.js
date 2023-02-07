const express = require('express');
const router = express.Router();

const assignementsCtrl = require('../controllers/assignments');

router.post('/',assignementsCtrl.createAssignment);
router.put('/:id',assignementsCtrl.modifyAssignment);
router.delete('/:id', assignementsCtrl.deleteAssignment);
router.get('/:id', assignementsCtrl.getOneAssignment);
router.get('/', assignementsCtrl.getAllAssignments);
router.get('/dates',assignementsCtrl.getAllStartingDates);
router.get('/:date_deb',assignementsCtrl.getVolunteersWithDate);
router.get('/zones',assignementsCtrl.getAllZones);
router.get('/:zone',assignementsCtrl.getVolunteersWithZone);

module.exports = router;