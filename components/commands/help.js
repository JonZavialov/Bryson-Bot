const sendChatMessage = require('./../utilities/sendChatMessage')

class help {
    /**
     * 
     * @param {object} messageData 
     * @param {minecraft bot} bot 
     */
    constructor(messageData, bot) {
        sendChatMessage('Bryson bot is currently under construction. Come back later to see what i can do!',bot)
    }
}

module.exports = help