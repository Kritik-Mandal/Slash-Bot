const welcomeSchema = require('../schemas/welcome-schema')

module.exports = {
    slash: false,
    aliases: ['wc'],
    minArgs: 1,
    maxArgs: -1,
    requiredArgs: '<welcome message>',
    guildOnly: true,
    testOnly: true,
    description: 'Set a welcome channel and message using this command.',
    category: 'Automation',
    callback: async ({ message }) => {
    const { member, channel, content, guild } = message

    let text = content

    const split = text.split(' ')

    if (split.length < 2) {
      channel.send('Please provide a welcome message')
      return
    }

    split.shift()
    text = split.join(' ')

        await welcomeSchema.findOneAndUpdate(
          {
            _id: guild.id,
          },
          {
            _id: guild.id,
            channelId: channel.id,
            text,
          },
          {
            upsert: true,
          })
          
          message.reply(`Your welcome message \`${text}\` was successfully set for ${channel}`)
    },
}
