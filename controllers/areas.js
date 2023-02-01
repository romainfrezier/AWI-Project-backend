const Areas = require('../models/areas.js');

exports.getOneArea = (req, res, next) => {
    Areas.findOne({
        _id: req.params.id
    }).then(
        (area) => {
            res.status(200).json(area);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.getAllAreas = (req, res, next) => {
    Areas.find().then(
        (areas) => {
            res.status(200).json(areas);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};