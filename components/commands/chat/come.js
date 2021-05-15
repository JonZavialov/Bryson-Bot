const sendPm = require('../../utilities/sendPm')
const mineflayer = require('mineflayer')
const { pathfinder, Movements, goals: { GoalNear } } = require('mineflayer-pathfinder')

class come {
    constructor(messageData, bot){
        const RANGE_GOAL = 1 // get within this radius of the player

        bot.loadPlugin(pathfinder)
        
        const mcData = require('minecraft-data')(bot.version)
        const defaultMove = new Movements(bot, mcData)

        const target = bot.players[messageData.author]?.entity
        if(!target){
            sendPm(messageData.author,"I don't see you in my render distance!",bot)
            return
        }

        const { x: playerX, y: playerY, z: playerZ } = target.position

        bot.pathfinder.setMovements(defaultMove)
        bot.pathfinder.setGoal(new GoalNear(playerX, playerY, playerZ, RANGE_GOAL))
    }
}

module.exports = come