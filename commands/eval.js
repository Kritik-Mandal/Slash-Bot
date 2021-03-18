module.exports = {
  ownerOnly: true,
  slash: false,
  minArgs: 1,
  maxArgs: -1,
  guildOnly: true,
  testOnly: true,
  description: 'An eval command!',
  category: 'Developer',
  expectedArgs: '<string>',
  callback: ({ message, args, prefix, client }) => {
    if (message) {
        const result = eval(message.content.slice(prefix.length + 4))
      message.channel.send(result)
    }
    const result = eval(args.join(' '))
    return result
  },
}