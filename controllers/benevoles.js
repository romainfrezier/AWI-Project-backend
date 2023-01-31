const Benevole = require('../models/benevoles.js');

exports.createBenevole = (req, res, next) => {
    const benevole = new Benevole({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email
    });
    benevole.save().then(
      () => {
        res.status(201).json({
          message: 'Volunteer saved successfully!'
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

  exports.modifyBenevole = (req, res, next) => {
    const benevole = new Benevole({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email
      });
    Benevole.updateOne({_id: req.params.id}, benevole).then(
      () => {
        res.status(201).json({
          message: 'Volunteer updated successfully!'
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

  exports.deleteBenevole = (req, res, next) => {
    Benevole.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Volunteer deleted successfully!'
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

  exports.getOneBenevole = (req, res, next) => {
    Benevole.findOne({
      _id: req.params.id
    }).then(
      (benevole) => {
        res.status(200).json(benevole);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };

  exports.getAllBenevoles = (req, res, next) => {
    Benevole.find().then(
      (benevoles) => {
        res.status(200).json(benevoles);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };