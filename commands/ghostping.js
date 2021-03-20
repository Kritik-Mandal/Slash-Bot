const ghostPingSchema = require('../schemas/ghostping-schema.js')

module.exports = {
    slash: false,
    requirePermissions: [
        'ADMINISTRATOR'
    ],
    expectedArgs: '<Channel tag>',
    minArgs: 1,
    maxArgs: 1,
    callback: async ({ message }) => {
        const { mentions, guild } = message
        const targetChannel = mentions.channels.first()
        if (!targetChannel) {
            message.reply('Please tag a channel.')
            return
        }

        await ghostPingSchema.findOneAndUpdate({
            _id: guild.id
        }, {
            _id: guild.id,
            channelId: targetChannel.id
        }, {
            upsert: true
        })

        message.reply(`Ghost ping detection channel has been set to ${targetChannel}`)
    }
}