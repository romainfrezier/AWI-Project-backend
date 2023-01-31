const Volunteer = require('../models/volunteers.js');

exports.createVolunteer = (req, res, next) => {
    const volunteer = new Volunteer({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email
    });
    volunteer.save().then(
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

  exports.modifyVolunteer = (req, res, next) => {
    const volunteer = new Volunteer({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email
      });
    Volunteer.updateOne({_id: req.params.id}, volunteer).then(
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

  exports.deleteVolunteer = (req, res, next) => {
    Volunteer.deleteOne({_id: req.params.id}).then(
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

  exports.getOneVolunteer = (req, res, next) => {
    Volunteer.findOne({
      _id: req.params.id
    }).then(
      (volunteer) => {
        res.status(200).json(volunteer);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };

  exports.getAllVolunteers = (req, res, next) => {
    Volunteer.find().then(
      (volunteers) => {
        res.status(200).json(volunteers);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };