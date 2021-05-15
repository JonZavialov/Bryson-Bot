const help = require('./commands/chat/help')
const kill = require('./commands/chat/kill')
const come = require('./commands/chat/come')
const coords = require('./commands/chat/coords')
const discord = require('./commands/chat/discord')
const sendChatMessage = require('./utilities/sendChatMessage')

const commands = [help,kill,come,discord,coords]

/**
 * 
 * @param {object} messageData
 * @param {minecraft bot} bot 
 */
function handleCommand(messageData, bot) {
    let isCommand = false
    for(var i = 0;i<commands.length;i++){
        if(messageData.content==commands[i].name) isCommand = true
    }
    if(!isCommand){
        sendChatMessage("Not a command!",bot)
        return
    }
    let evalString = "new " + messageData.content + `(messageData, bot)`
    eval(evalString)
}

module.exports = handleCommand