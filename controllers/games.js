const Games = require('../models/games');
const Assignment = require('../models/assignments');

exports.createGame = (req, res, next) => {
    const game = new Games({
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
    Games.findByIdAndUpdate(req.params.id, {
        nom: req.body.nom,
        type: req.body.type,
    }).then(
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

  exports.deleteGame = async (req, res, next) => {
      Games.deleteOne({_id: req.params.id}).then(
          await Assignment.deleteMany({"jeu._id": req.params.id}).then(
              () => {
                  res.status(200).json({
                      message: 'Assignment deleted successfully!'
                  });
              }
          )).then(
          () => {
              res.status(200).json({
                  message: 'Game deleted successfully!'
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
    Games.findOne({
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
    Games.find().then(
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