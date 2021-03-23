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
    if (message && !message.author.bot) {
      console.log(args.join(' '))
        const result = eval(args.join(' '))
      message.channel.send(result)
    }
    const result = eval(args.join(' '))
    return result
  },
}