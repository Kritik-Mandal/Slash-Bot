const welcomeSchema = require('../schemas/welcome-schema')

module.exports = (client) => {
  const cache = {} // guildId: [channelId, text]
  const onJoin = async (member) => {
    const { guild } = member

    let data = cache[guild.id]
    if (!data) {
      console.log('FETCHING FROM DATABASE')

      const result = await welcomeSchema.findOne({ _id: guild.id })
          if (!result) {
            return
          }

          cache[guild.id] = data = [result.channelId, result.text]
      
    }

    const channelId = data[0]
    const text = data[1]

    const channel = guild.channels.cache.get(channelId)
    channel.send(text.replace(/<@>/g, `<@${member.id}>`))
  }

  client.on('guildMemberAdd', (member) => {
    onJoin(member)
  })
}
module.exports.config = {
  displayName: 'test', // Can be changed any time
  dbName: 'welcome-channels',
  loadDBFirst: true, 
}