const { MessageEmbed } = require('discord.js')

module.exports = {
  slash: "both",
  aliases: ['say'],
  permissions: ['MANAGE_GUILD' || 'ADMINISTRATOR'],
  minArgs: 1,
  maxArgs: -1,
  expectedArgs: '<JSON> [Channel]',
  guildOnly: true,
  testOnly: true,
  description: 'Insert JSON to send an embed',
  category: 'Utility',
  callback: ({ message, args, channel, client }) => {
    if (message) { if (!message.author.bot) {
        let targetChannel = message.mentions.channels.first()
       if (!targetChannel) { targetChannel = message.channel } else { args.shift() }
       try {
       const json = JSON.parse(args.join(' '));
       const { plaintext = '' } = json
       
       console.log(json);
targetChannel.send(plaintext, {embed: json, }) 
   }
       catch(error) { message.reply(`INVALID JSON ${error.message}`) }
    } } else {
    console.log(`${args[0]}` + `\n` + `${args[1]}`)
       try {
       const json = JSON.parse(args[0]);
       const { plaintext = '' } = json
       
       console.log(json);
       if (args[1]) {
       client.channels.fetch(args[1])
       .then(c => c.send(plaintext, {embed: json, })) 
       return `beep boop, embed sent to channel <#${args[1]}>` } 
       else { 
       channel.send(plaintext, {embed: json, })
       return 'beep boop, embed sent!'
       }
   }
       catch(error) { return (`INVALID JSON ${error.message}`) }
    }
  },
}