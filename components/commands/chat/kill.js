const issueCommand = require('../../utilities/issueCommand')

class kill {
    /**
     * 
     * @param {object} messageData 
     * @param {minecraft bot} bot 
     */
    constructor(messageData, bot) {
        issueCommand('suicide',bot)
    }
}

module.exports = kill