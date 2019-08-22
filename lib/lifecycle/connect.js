// const Sybase = require("sybase");
/**
 * Connects to your data store; this connection can later be used by your connector's methods.
 * @param {function} next - callback
 */

// exports.connect = function(next) {
//
//   config = new Sybase(next.host, next.port, next.db, next.user, next.pw, true);
//   config.connect(function(err) {
//     if (err === null) {
//       console.log('Connection Sybase Success');
//     } else {
//       console.log('Connection Sybase Failed');
//     }
//   });
// };

const Sybase = require('sybase');

exports.connect = function(next) {
  // db = new Sybase('Emerio-AzisSudrajat', 5000, 'kampus', 'sa', 'P@ssw0rd');
  db = new Sybase(this.config.host, this.config.port, this.config.database, this.config.user, this.config.password);
  // db = new Sybase('Emerio-AzisSudrajat', 5000, 'kampus', 'sa', 'P@ssw0rd');

  db.connect(function(err) {
    if (err === null) {
          console.log('Connection Sybase Success');
          next();
        } else {
          console.log('Connection Sybase Failed');
          next(err);
        }

    // db.query('SELECT nim, nama FROM kampus.dbo.mahasiswa', function(err, data) {
    //     if (err) console.log(err);
    //
    //   console.log(data);
    //
    //   db.disconnect();
    //
    // });
    
  });
};
