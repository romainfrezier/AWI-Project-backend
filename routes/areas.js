const express = require('express');
const router = express.Router();

const areasCtrl = require('../controllers/areas');

router.get('/:id', areasCtrl.getOneArea);
router.get('/', areasCtrl.getAllAreas);

module.exports = router;