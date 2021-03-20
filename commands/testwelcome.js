const welcomeSchema = require('../schemas/welcome-schema')
module.exports = {
    slash: false,
    aliases: ['testjoin'],
    guildOnly: true,
    testOnly: true,
    description: 'Test your welcome message.',
    category: 'Automation',
    callback: async ({ message, guild }) => {
        const result = await welcomeSchema.findOne({ _id: message.guild.id })
        if (!result) {
            message.channel.send('You need to set a welcome message first using \`as!setwelcome <Welcome Message>\`')
            return
          }
        let data = [result.channelId, result.text]
    const channelId = data[0]
    const text = data[1]
    const channel = message.guild.channels.cache.get(channelId)
    channel.send(text.replace(/<@>/g, `<@${message.author.id}>`))
    message.channel.send(`Welcome Channel: ${channel}\nWelcome Message: ${text}`)
    },
}
