/**
 * Disconnects from your data store.
 * @param {function} next - callback
 */
exports.disconnect = function (next) {
  db.disconnect();
  next();
};
