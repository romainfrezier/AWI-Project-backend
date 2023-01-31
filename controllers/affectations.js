const Affectation = require('../models/affectations');
const fs = require('fs');

exports.createAffectation = (req, res, next) => {
    const affectation = new Affectation({
      zone: req.body.zone,
      date_deb: req.body.date_deb,
      date_fin: req.body.date_fin,
      jeux: req.body.jeux,
      benevoles: req.body.benevoles
    });
    affectation.save().then(
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

  exports.modifyAffectation = (req, res, next) => {
    const affectation = new Affectation({
        zone: req.body.zone,
        date_deb: req.body.date_deb,
        date_fin: req.body.date_fin,
        jeux: req.body.jeux,
        benevoles: req.body.benevoles
      });
    Affectation.updateOne({_id: req.params.id}, affectation).then(
      () => {
        res.status(201).json({
          message: 'Affectation updated successfully!'
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

  exports.deleteAffectation = (req, res, next) => {
    Affectation.deleteOne({_id: req.params.id}).then(
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

  exports.getOneAffectation = (req, res, next) => {
    Affectation.findOne({
      _id: req.params.id
    }).then(
      (affectation) => {
        res.status(200).json(affectation);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };

  exports.getAllAffectations = (req, res, next) => {
    Affectation.find().then(
      (affectations) => {
        res.status(200).json(affectations);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };