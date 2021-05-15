const sendChatMessage = require('../../utilities/sendChatMessage')

class coords {
    /**
     * 
     * @param {object} messageData 
     * @param {minecraft bot} bot 
     */
    constructor(messageData, bot) {
        var pos = bot.player.entity['position']

        pos = Math.round(pos['x']) + " " + Math.round(pos['z'])
        
        sendChatMessage(`I am at ${pos}`,bot)
    }
}

module.exports = coords