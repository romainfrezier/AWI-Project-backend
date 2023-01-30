const express = require('express');
const router = express.Router();

const affectationsCtrl = require('../controllers/affectations');
// const auth = require('../middleware/auth');
// const multer = require('../middleware/multer-config');

router.post('/',affectationsCtrl.createAffectation);
router.put('/:id',affectationsCtrl.modifyAffectation);
router.delete('/:id', affectationsCtrl.deleteAffectation);
router.get('/:id', affectationsCtrl.getOneAffectation);
router.get('/', affectationsCtrl.getAllAffectations);

module.exports = router;