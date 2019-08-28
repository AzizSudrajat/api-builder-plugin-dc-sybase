exports.deleteAll = function (Model, next) {
	let table = Model.name;
	const query = `DELETE FROM ${table}`;

	db.query(query, function(err, callback) {
    next(err, callback);
  })
};
