const sendChatMessage = require('../../utilities/sendChatMessage')
const denyCommand = require('../../utilities/denyCommand')

class ping {
    /**
     * 
     * @param {object} messageData 
     * @param {minecraft bot} bot 
     */
    constructor(messageData, bot) {
        const isNicked = denyCommand(messageData,bot)
        if(isNicked) return
        
        const playerDict = bot.players
        const ping = playerDict[messageData.author]['ping']
        sendChatMessage(`Your ping is ${ping}.`, bot,messageData)
    }
}

module.exports = ping