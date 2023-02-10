const Volunteers = require('../models/volunteers.js');
const Assignments = require('../models/assignments.js');

exports.createVolunteer = (req, res, next) => {
    const volunteer = new Volunteers({
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
    Volunteers.findByIdAndUpdate(req.params.id, {
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email
    }).then(
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

  exports.deleteVolunteer = async (req, res, next) => {
      Volunteers.deleteOne({_id: req.params.id}).then(
          await Assignments.deleteMany({"benevole._id": req.params.id}).then(
              () => {
                  res.status(200).json({
                      message: 'Assignment deleted successfully!'
                  });
              }
          )).then(
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
    Volunteers.findOne({
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
    Volunteers.find().then(
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