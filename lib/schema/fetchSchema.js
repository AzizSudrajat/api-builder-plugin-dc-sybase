/**
 * Fetches the schema for your connector.
 *
 * For example, your schema could look something like this:
 * {
 *     objects: {
 *         person: {
 *             first_name: {
 *                 type: 'string',
 *                 required: true
 *             },
 *             last_name: {
 *                 type: 'string',
 *                 required: false
 *             },
 *             age: {
 *                 type: 'number',
 *                 required: false
 *             }
 *         }
 *     }
 * }
 *
 * @param {function} next - callback
 * @returns {*}
 */
exports.fetchSchema = function (next) {
	// If we already have the schema, just return it.
	if (this.schema) {
		return next(null, this.schema);
	}
  next();
};
