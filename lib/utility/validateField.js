/**
 * Escapes the provided keys for usage in a SQL query.
 * @param {*} keys - keys
 * @returns {*|Array|{}} escaped keys
 */
exports.validateField = function(value) {
  var field = value.replace(/(\')/g, "''");
  return field;
}
