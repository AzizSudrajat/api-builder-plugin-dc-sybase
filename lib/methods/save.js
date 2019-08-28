const APIBuilder = require('@axway/api-builder-runtime');
const _ = require('lodash');
/**
 * Updates a Model instance.
 * @param {APIBuilder.Model} Model The model class being updated.
 * @param {APIBuilder.Instance} instance Model instance to update.
 * @param {Function} callback Callback passed an Error object (or null if successful) and the updated model.
 * @returns {undefined}
 */
exports.save = function (Model, instance, callback) {
  const table = Model.name;
  var payload = instance.toPayload();
  var payloadKey = Object.keys(payload);
  var payloadvalue = Object.values(payload);


  this.getPrimaryKeyColumn(Model.name, function(pk){
    console.log(pk);
    console.log(payloadKey[0]);
    if (pk === payloadKey[0]) {
      
    } else {

    }
  });

  // query2 = `UPDATE ${table} SET ${b}`;

  console.log(payload);
  console.log(payloadKey);
  console.log(payloadvalue);
};
