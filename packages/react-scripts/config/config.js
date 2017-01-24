var fs = require('fs')
var paths = require('./paths')

let config
if (paths.config && fs.existsSync(paths.config)) {
  config = require(paths.config)
}
else {
  config = {}
}

if (!config.babelIncludes) {
  config.babelIncludes = []
}

module.exports = config
