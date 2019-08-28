/**
 * Gets the primary key column for the provided model.
 * @param {object} Model - model to get primary key for
 * @returns {string} the primary key
 */
exports.getPrimaryKeyColumn = function getPrimaryKeyColumn(Table, callback) {
  db.query("sp_helpconstraint " + Table, function(err, result) {
    for (var i = 0; i < result.length; i++) {
      var splitted = result[i].definition.split("(");
      var keyType = splitted[0].trim();
      var keyName = splitted[1].split(")")[0].trim();

      if (keyType == 'PRIMARY KEY INDEX') {
        // console.log("PRIMARY K EY adalah: " + keyName);
      }
    }
    callback(keyName);
  });
  return;
};
