const sendChatMessage = require('../../utilities/sendChatMessage')

class ping {
    /**
     * 
     * @param {object} messageData 
     * @param {minecraft bot} bot 
     */
    constructor(messageData, bot) {
        const playerDict = bot.players
        const ping = playerDict[messageData.author]['ping']
        sendChatMessage(`Your ping is ${ping}.`, bot)
    }
}

module.exports = ping