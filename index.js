const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
require('dotenv').config()
const guildId = '748045798511607839'
const client = new DiscordJS.Client()

client.on('ready', async () => {
   const wok = new WOKCommands(client, {
    showWarns: false,
    featureDir: 'features',
    commandsDir: 'commands',
    testServers: [guildId],
  })
  .setBotOwner([process.env.OWNER])
  .setDefaultPrefix(process.env.PREFIX)
  .setColor(3553598)
  .setCategorySettings([
    {
      name: 'Miscellaneous',
      emoji: '🤖'
    },
    {
      name: 'Developer',
      emoji: '♾️'
    },
    {
      name: 'Utility',
      emoji: '🏗️'
    }])
  const SlashCommands = wok.slashCommands
  let commands = await SlashCommands.get(guildId)
console.log(commands.map(c => c.name))
wok.on('commandException', (command, message, error) => {
  message.channel.send(`An exception occured when using command "${command.names[0]}"! The error is: ${error}`)
  console.error(error)
})
// this part is used for deleting slash commands 
// for (const { id } of commands) {
//   await SlashCommands.delete(id, guildId)
//     .then(console.log)
//     .catch(console.error)
// }
})

client.login(process.env.TOKEN)
