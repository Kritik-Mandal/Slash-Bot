module.exports = {
  ownerOnly: true,
  slash: false,
  minArgs: 0,
  maxArgs: 2,
  guildOnly: true,
  testOnly: true,
  description: 'An admin only command for deletion of slash commands!',
  category: 'Developer',
  expectedArgs: '<string>',
  callback: async ({ message, args, prefix, client, instance }) => {
    if (message && !message.author.bot) {
      let space = '                '
      let number = 0
      let commands = await instance.slashCommands.get()
      if (args) { commands = await instance.slashCommands.get(args[0])
      const commandNames = commands.map(c => `${number += 1}   |  ${c.name}${space.slice(c.name.length)}|   ${c.id}`).join('\n')
      message.channel.send(`\`\`\`cs\nSR  |  Name            |   ID\n${commandNames}\`\`\`\n\nWill process to get deleted from \`${args}\` now`)
      for (const { id } of commands) {
  await instance.slashCommands.delete(id, args[0])    
    .catch(console.error)
} message.channel.send(`Slash commands from \`Guild: ${args[0]}\` have been deleted successfully!`)
    } else { for (const { id } of commands) {
  await instance.slashCommands.delete(id)    
    .then(console.log)
    .catch(console.error)
} message.channel.send(`Slash commands from \`Global\` have been deleted successfully!`) } }
  },
}