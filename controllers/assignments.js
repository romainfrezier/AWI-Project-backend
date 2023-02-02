const Assignments = require('../models/assignments');

exports.createAssignment = (req, res, next) => {
    const assignment = new Assignments({
      zone: req.body.zone,
      date_deb: req.body.date_deb,
      date_fin: req.body.date_fin,
      jeux: req.body.jeux,
      benevoles: req.body.benevoles
    });
    assignment.save().then(
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

  exports.modifyAssignment = (req, res, next) => {
    Assignments.findByIdAndUpdate(req.params.id, {
        zone: req.body.zone,
        date_deb: req.body.date_deb,
        date_fin: req.body.date_fin,
        jeux: req.body.jeux,
        benevoles: req.body.benevoles
    }).then(
      () => {
        res.status(201).json({
          message: 'Assignment updated successfully!'
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

  exports.deleteAssignment = (req, res, next) => {
    Assignments.deleteOne({_id: req.params.id}).then(
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

  exports.getOneAssignment = (req, res, next) => {
    Assignments.findOne({
      _id: req.params.id
    }).then(
      (assignment) => {
        res.status(200).json(assignment);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };

  exports.getAllAssignments = (req, res, next) => {
    Assignments.find().then(
      (assignments) => {
        res.status(200).json(assignments);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };