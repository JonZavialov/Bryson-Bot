const mineflayer = require('mineflayer');
const fs = require('fs');
// imports
const handleChat = require('./components/handleChat')
const login = require('./login.json')
const sendChatMessage = require("./components/utilities/sendChatMessage");
const sendPm = require('./components/utilities/sendPm');
const logMostRecentChatMessage = require('./components/utilities/logMostRecentChat');
// / imports

// Bot declaration
const bot = mineflayer.createBot({
    host: login.server,
    port: login.port,
    username: login.username,
    password: login.password,
    version: false,
    auth: 'microsoft'
});
// / Bot declaration

// welcome message
const welcome = () => {
  sendChatMessage("Hello Nether Anarchy, I'm bryson bot! Use \"!help\" to see my commands.",bot)
};
bot.once('spawn', (welcome));
// / welcome message

// when a message is sent
bot.on('message', async message =>  {
  handleChat(message.toString(), bot)
  console.log(message.toString())
  if(message.toString().indexOf("was slain by SonyTV")!=-1){
    sendChatMessage("ez kill!",bot)
  }

  if(message.toString().indexOf('before sending another message!')!= -1){
    let rawdata = fs.readFileSync('./components/resources/mostRecentChatMessage.json');
    let log = JSON.parse(rawdata);
    const reciever = Object.keys(log)[0]
    const messageToSend = Object.values(log)[0] + " (sent as message for anti spam)"
    sendPm(reciever, messageToSend, bot)
  }

  if(message.toString().indexOf('[me ->')!=-1){
    logMostRecentChatMessage({author: "*"},"filler")
  }
})
// / when a message is sent


// every 5 minutes, send a message into the chat
setInterval(() => {
  sendChatMessage("Hello Nether Anarchy, I'm BrysonBot! Use \"!help\" to see my commands.",bot)
},300000); // Every 5 min

// / every 5 minutes. send a message into the chat
