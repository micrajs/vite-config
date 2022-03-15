const { join } = require('path');

module.exports.cwd = (...path) => join(process.cwd(), ...path);
