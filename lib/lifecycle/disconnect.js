/**
 * Disconnects from your data store.
 * @param {function} next - callback
 */
exports.disconnect = function (next) {
  console.log(db.isConnected());
  if (db.isConnected()) {
    console.log("Sybase Connect");
    db.disconnect();
    console.log(db.isConnected());
    if (db.isConnected() === false) {
      console.log("Sybase Disconnect");
    }
  }
  next();
};
