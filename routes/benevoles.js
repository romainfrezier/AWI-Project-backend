const express = require('express');
const router = express.Router();

const benevolesCtrl = require('../controllers/benevoles');

router.post('/', benevolesCtrl.createBenevole);
router.put('/:id', benevolesCtrl.modifyBenevole);
router.delete('/:id', benevolesCtrl.deleteBenevole);
router.get('/:id', benevolesCtrl.getOneBenevole);
router.get('/', benevolesCtrl.getAllBenevoles);

module.exports = router;