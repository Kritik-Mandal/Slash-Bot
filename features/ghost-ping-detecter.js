const { MessageEmbed } = require('discord.js')

const ghostPingSchema = require('../schemas/ghostping-schema')
// { guildId: channelId }
const cache = {}

module.exports = client => {
    client.on('messageDelete', async (message) => {
        const { content, channel, author, guild, mentions } = message
        if (!author || author.bot || mentions.users.size === 0) {
            return
        }

        let channelId = cache[guild.id]
        if (!channelId) {
            const result = await ghostPingSchema.findById(guild.id)
            if (!result) {
                return
            }

            channelId = result.channelId
            cache[guild.id] = channelId
        }

        const embed = new MessageEmbed()
        .setTitle('Possible ghost ping detected')
        .setDescription(`Message:\n\n"${content}"`)
        .addField('Message Author', author)

        const targetChannel = guild.channels.cache.get(channelId)
        if (targetChannel) {
            targetChannel.send(embed);
        }
  })
}
module.exports.config = {
    displayName: 'test',
    dbName: 'ghost-ping-channels',
    loadDBFirst: true, 
  }