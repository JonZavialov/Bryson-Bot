const fs = require('fs')

const help = require('./commands/chat/help')
const kill = require('./commands/chat/kill')
const come = require('./commands/chat/come')
const coords = require('./commands/chat/coords')
const discord = require('./commands/chat/discord')
const ping = require('./commands/chat/ping')
const ez = require('./commands/chat/ez')
const spawn = require('./commands/chat/spawn')
const fuck = require('./commands/chat/fuck')
const mount = require('./commands/chat/mount')
const sendChatMessage = require('./utilities/sendChatMessage')

const commands = [help,kill,come,discord,coords,ping,ez,spawn,fuck,mount]

/**
 * 
 * @param {object} messageData
 * @param {minecraft bot} bot 
 */
function handleCommand(messageData, bot) {
    var containsArgs = false
    var args
    if(messageData.content.indexOf(' ')==-1){
        command = messageData.content
    }
    else{
        containsArgs = true
        command = messageData.content.substring(0,messageData.content.indexOf(' '))
        args = messageData.content.substring(messageData.content.indexOf(' ') + 1)
    }

    if(command == "fuck"){
        new fuck(messageData,bot,args)
        return
    }

    console.log(command,containsArgs)
    let isCommand = false
    for(var i = 0;i<commands.length;i++){
        if(command==commands[i].name) isCommand = true
    }
    if(!isCommand){
        sendChatMessage("Not a command!",bot,messageData)
        return
    }
    
    const logPath = require('path').resolve(__dirname, './resources/stats.json')

    let rawdata = fs.readFileSync(logPath);
    let usesDict = JSON.parse(rawdata);
    usesDict.uses += 1
    
    let data = JSON.stringify(usesDict);
    fs.writeFileSync(logPath, data);
    
    let evalString = "new " + command + `(messageData, bot)`
    eval(evalString)
}

module.exports = handleCommand