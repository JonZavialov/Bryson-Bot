const fs = require('fs');

function logMostRecentChatMessage(messageData, message){    
    const logPath = require('path').resolve(__dirname, '../resources/mostRecentChatMessage.json')
    let log = { 
 
    }

    log[messageData.author] = message
     
    let data = JSON.stringify(log);
    fs.writeFileSync(logPath, data);
}

module.exports = logMostRecentChatMessage