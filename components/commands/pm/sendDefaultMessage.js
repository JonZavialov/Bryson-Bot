const sendPm = require('../../utilities/sendPm')

class sendDefaultMessage {
    /**
     * 
     * @param {object} messageData 
     * @param {minecraft bot} bot 
     */
    constructor(messageData, bot) {
        sendPm('SHUT UP LEAVE ME ALONE',bot)
    }
}

module.exports = sendDefaultMessage