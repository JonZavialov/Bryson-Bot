const help = require('./commands/chat/help')

const commands = [help]

/**
 * 
 * @param {object} messageData 
 * @param {minecraft bot} bot 
 */
function handleCommand(messageData, bot) {
    let evalString = "new " + messageData.content + `(messageData, bot)`
    console.log(evalString)
    eval(evalString)
}

module.exports = handleCommand