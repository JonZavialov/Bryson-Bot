const mineflayer = require('mineflayer');
// imports
const handleChat = require('./components/handleChat')
const login = require('./login.json')
const sendChatMessage = require("./components/utilities/sendChatMessage")
// / imports

const bot = mineflayer.createBot({
    host: login.server,
    port: login.port,
    username: login.username,
    password: login.password,
    version: false,
    auth: 'microsoft'
});

bot.on('message', async message =>  {
    handleChat(message.toString(), bot)
})

setInterval(() => {
  sendChatMessage("Hello Nether Anarchy, I'm bryson bot! Use \"!help\" to see my commands.",bot)
},600000);