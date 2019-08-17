const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.bulk
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findById: function(req, res) {
        db.bulk
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
        console.log(req.params.id);
        console.log(req.body)
        db.bulk
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
        db.bulk
          .find({ sbu: req.params.sbu, region:req.params.region, period:req.params.period})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    }

};