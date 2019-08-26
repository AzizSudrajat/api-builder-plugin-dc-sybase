/**
 * Finds all model instances.  A maximum of 1000 models are returned.
 * @param {APIBuilder.Model} Model The model class being updated.
 * @param {Function} callback Callback passed an Error object (or null if successful) and the models.
 */

exports.findAll = function(Model, next) {
  db.query("SELECT " + Object.keys(Model.fields).toString() + " FROM kampus.dbo." + Model.name, function(err, callback) {
    next(err, callback);
  });
};
