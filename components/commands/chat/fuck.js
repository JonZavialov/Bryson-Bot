const CommandClass = require('./../../superclasses/CommandClass')


class fuck extends CommandClass{
    /**
     * 
     * @param {object} messageData 
     * @param {minecraft bot} bot 
     */
    constructor(messageData, bot, player) {
        super()
        this.sendChatMessage(`FUCK YOU ${player}`,bot,messageData)
    }
}

module.exports = fuck