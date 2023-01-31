const express = require('express');
const router = express.Router();

const jeuxCtrl = require('../controllers/jeux');

router.post('/',jeuxCtrl.createJeu);
router.put('/:id',jeuxCtrl.modifyJeu);
router.delete('/:id', jeuxCtrl.deleteJeu);
router.get('/:id', jeuxCtrl.getOneJeu);
router.get('/', jeuxCtrl.getAllJeux);

module.exports = router;