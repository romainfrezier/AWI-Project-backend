const Assignement = require('../models/assignements');

exports.createAssignement = (req, res, next) => {
    const assignement = new Assignement({
      zone: req.body.zone,
      date_deb: req.body.date_deb,
      date_fin: req.body.date_fin,
      jeux: req.body.jeux,
      benevoles: req.body.benevoles
    });
    assignement.save().then(
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

  exports.modifyAssignement = (req, res, next) => {
    const assignement = new Assignement({
        zone: req.body.zone,
        date_deb: req.body.date_deb,
        date_fin: req.body.date_fin,
        jeux: req.body.jeux,
        benevoles: req.body.benevoles
      });
    Assignement.updateOne({_id: req.params.id}, assignement).then(
      () => {
        res.status(201).json({
          message: 'Assignement updated successfully!'
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

  exports.deleteAssignement = (req, res, next) => {
    Assignement.deleteOne({_id: req.params.id}).then(
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

  exports.getOneAssignement = (req, res, next) => {
    Assignement.findOne({
      _id: req.params.id
    }).then(
      (assignement) => {
        res.status(200).json(assignement);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };

  exports.getAllAssignements = (req, res, next) => {
    Assignement.find().then(
      (assignements) => {
        res.status(200).json(assignements);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };