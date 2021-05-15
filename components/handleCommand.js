const help = require('./commands/chat/help')
const kill = require('./commands/chat/kill')
const come = require('./commands/chat/come')
const coords = require('./commands/chat/coords')

const commands = [help,kill,come,coords]

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