/**
 * Finds all model instances.  A maximum of 1000 models are returned.
 * @param {APIBuilder.Model} Model The model class being updated.
 * @param {Function} callback Callback passed an Error object (or null if successful) and the models.
 */

exports.findByID = function(Model, id, callback) {
  this.getPrimaryKeyColumn(Model.name, function(pk){
    db.query("SELECT " + Object.keys(Model.fields).toString() + " FROM kampus.dbo." + Model.name + " WHERE "+ pk + "=" + id, function(err, result) {
      // console.log(this.getInstanceFromRow(Model, result[0]));
      var result = Model.instance(result[0], true);
      callback(err, result);
      // console.log(result);
    });
  });
};
