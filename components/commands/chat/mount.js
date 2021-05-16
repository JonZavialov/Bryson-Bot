const CommandClass = require('./../../superclasses/CommandClass')

class mount extends CommandClass {
    /**
     * 
     * @param {object} messageData 
     * @param {minecraft bot} bot 
     */
    constructor(messageData, bot) {
        super()
        console.log("youse")
        let entity = bot.nearestEntity((entity) => { return entity.type === 'object' })
        if (entity) {
            bot.mount(entity)
        } else {
            this.sendChatMessage('no nearby objects',bot)
        }
    }
}

module.exports = mount