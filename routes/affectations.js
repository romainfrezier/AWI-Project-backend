const express = require('express');
const router = express.Router();

const affectationsCtrl = require('../controllers/affectations');

router.post('/',affectationsCtrl.createAffectation);
router.put('/:id',affectationsCtrl.modifyAffectation);
router.delete('/:id', affectationsCtrl.deleteAffectation);
router.get('/:id', affectationsCtrl.getOneAffectation);
router.get('/', affectationsCtrl.getAllAffectations);

module.exports = router;