/**
 * Creates a model instance based on the provided row data.
 * @param {object} Model - model to use
 * @param {*} row - row
 * @returns {object} model instance
 */
exports.getInstanceFromRow = function (Model, row) {
	const instance = Model.instance(row, true);
	return instance;
};
