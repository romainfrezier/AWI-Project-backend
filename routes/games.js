const express = require('express');
const router = express.Router();

const gamesCtrl = require('../controllers/games');

router.post('/',gamesCtrl.createGame);
router.put('/:id',gamesCtrl.modifyGame);
router.delete('/:id', gamesCtrl.deleteGame);
router.get('/:id', gamesCtrl.getOneGame);
router.get('/', gamesCtrl.getAllGames);

module.exports = router;