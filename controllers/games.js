const Game = require('../models/Games');

exports.createGame = (req, res, next) => {
    const game = new Game({
      nom: req.body.nom,
      type: req.body.type,
    });
    game.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.modifyGame = (req, res, next) => {
    const game = new Game({
        nom: req.body.nom,
        type: req.body.type,
      });
    Game.updateOne({_id: req.params.id}, game).then(
      () => {
        res.status(201).json({
          message: 'Game updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.deleteGame = (req, res, next) => {
    Game.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.getOneGame = (req, res, next) => {
    Game.findOne({
      _id: req.params.id
    }).then(
      (game) => {
        res.status(200).json(game);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };

  exports.getAllGames = (req, res, next) => {
    Game.find().then(
      (games) => {
        res.status(200).json(games);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };