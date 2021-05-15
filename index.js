const mineflayer = require('mineflayer');
// imports
const handleChat = require('./components/handleChat')
// / imports

const bot = mineflayer.createBot({
    host: 'downcraft.org',
    port: 25565,
    username: 'brysonbot@hotmail.com',
    password: 'iuasdfuyisadgfyugsdiyufghdsiuygfuoiygfduyogfousdgufdgyuifgkusdgyufgsukydfgukydgfuysdgfuyg6534652364243',
    version: false,
    auth: 'microsoft'
});

bot.on('message', async message =>  {
    handleChat(message.toString(), bot)
})