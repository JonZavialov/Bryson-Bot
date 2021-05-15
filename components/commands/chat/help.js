const sendChatMessage = require('../../utilities/sendChatMessage')

class help {
    /**
     * 
     * @param {object} messageData 
     * @param {minecraft bot} bot 
     */
    constructor(messageData, bot) {
        sendChatMessage('Bryson bot is currently under construction. For now my commands include: !come, !coords, !discord, !help, !kill, !ping',bot)
    }
}

module.exports = help