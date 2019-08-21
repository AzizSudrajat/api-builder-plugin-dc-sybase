const Sybase = require("../node_modules/sybase/src/SybaseDB.js");
/**
 * Connects to your data store; this connection can later be used by your connector's methods.
 * @param {function} next - callback
 */

exports.connect = function(next) {

  config = new Sybase(next.host, next.port, next.db, next.user, next.pw, true);
  config.connect(function(err) {
    if (err === null) {
      console.log('Connection Sybase Success');
    } else {
      console.log('Connection Sybase Failed');
    }
  });
};
