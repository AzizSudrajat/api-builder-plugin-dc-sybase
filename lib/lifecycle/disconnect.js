/**
 * Disconnects from your data store.
 * @param {function} next - callback
 */
exports.disconnect = function (next) {
  if (db.isConnected()) {
    db.disconnect();
    if (db.isConnected() === false) {
      console.log("Sybase Disconnect");
    }
  }
  next();
};
