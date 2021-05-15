const sendChatMessage = require('../../utilities/sendChatMessage')

class discord {
    /**
     * 
     * @param {object} messageData 
     * @param {minecraft bot} bot 
     */
    constructor(messageData, bot) {
        sendChatMessage('join our discord!- zWKwub73z3',bot,messageData)
    }
}

module.exports = discord