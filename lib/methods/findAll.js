/**
 * Finds all model instances.  A maximum of 1000 models are returned.
 * @param {APIBuilder.Model} Model The model class being updated.
 * @param {Function} callback Callback passed an Error object (or null if successful) and the models.
 */
exports.findAll = function (Model, callback) {
  config.query("SELECT nim, nama FROM kampus.dbo."+ Model, function(err, callback) {
    console.log(err, callback);
  });
};
