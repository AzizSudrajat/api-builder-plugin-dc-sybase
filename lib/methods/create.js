exports.create = function create(Model, values, next) {
  const table = Model.name;
  const fields = Object.keys(Model.fields).toString();
  const payload = Model.instance(values, false).toPayload();
  var value = Object.values(payload);
  var valueLength = value.length;
  var columns = [];
  for (var i = 0; i < value.length; i++) {
    if (typeof(value[i]) === 'number') {
      columns[i] = value[i];
    } else {
      value[i] = this.validateField(value[i]);
      columns[i] = this.escapeKeys([value[i]])[0];
    }
  };

  query = "INSERT INTO " + table + " (" + fields + ") VALUES (" + columns + ")";
  db.query(query, function(err, callback) {
    //
    next(err, callback);
  });
};
