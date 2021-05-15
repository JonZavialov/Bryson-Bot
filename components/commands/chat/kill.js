const issueCommand = require('../../utilities/issueCommand')

class kill {
    /**
     * 
     * @param {object} messageData 
     * @param {minecraft bot} bot 
     */
    constructor(messageData, bot) {
        issueCommand('kill',bot)
    }
}

module.exports = kill