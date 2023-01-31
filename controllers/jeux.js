const Jeu = require('../models/Jeux');
const fs = require('fs');

exports.createJeu = (req, res, next) => {
    const jeu = new Jeu({
      nom: req.body.nom,
      type: req.body.type,
    });
    jeu.save().then(
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

  exports.modifyJeu = (req, res, next) => {
    const jeu = new Jeu({
        nom: req.body.nom,
        type: req.body.type,
      });
    Jeu.updateOne({_id: req.params.id}, jeu).then(
      () => {
        res.status(201).json({
          message: 'Jeu updated successfully!'
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

  exports.deleteJeu = (req, res, next) => {
    Jeu.deleteOne({_id: req.params.id}).then(
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

  exports.getOneJeu = (req, res, next) => {
    Jeu.findOne({
      _id: req.params.id
    }).then(
      (jeu) => {
        res.status(200).json(jeu);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };

  exports.getAllJeux = (req, res, next) => {
    Jeu.find().then(
      (jeux) => {
        res.status(200).json(jeux);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };