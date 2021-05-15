const help = require('./commands/chat/help')
const kill = require('./commands/chat/kill')

const commands = [help,kill]

/**
 * 
 * @param {object} messageData 
 * @param {minecraft bot} bot 
 */
function handleCommand(messageData, bot) {
    let evalString = "new " + messageData.content + `(messageData, bot)`
    eval(evalString)
}

module.exports = handleCommand