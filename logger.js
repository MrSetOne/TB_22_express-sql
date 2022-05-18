const Logger = require('logplease');
const logger = {
    informer: Logger.create('Server', { showTimestamp: false, showLevel: false, color: Logger.Colors.Blue }),
    danger: Logger.create('Caution', { showTimestamp: false, showLevel: false, color: Logger.Colors.Yellow }),
    succes: Logger.create('Succes', { showTimestamp: false, showLevel: false, color: Logger.Colors.Green })
}

module.exports = logger;