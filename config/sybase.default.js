/*
 * Use this file to configure you mysql data connector
 *
 * By default, MYSQL username and password are environment variables.
 * username MYSQL_USER, password MYSQL_PASSWORD
 * Example setting of environment variables:
 * linux/mac: export MYSQL_PASSWORD=password
 * windows: setx MYSQL_PASSWORD 'password'
 */
module.exports = {
	connectors: {
		sybase: {
			connector: 'api-builder-plugin-dc-sybase',
			host: 'Emerio-AzisSudrajat',
			port: 5000,
			database: 'kampus',
			user: 'sa',
			password: 'P@ssw0rd'
			

			// Create models based on your schema that can be used in your API.
			// generateModelsFromSchema: true,

			// Whether or not to generate APIs based on the methods in generated models.
			// modelAutogen: false
		}
	}
};
