const { MessageEmbed } = require('discord.js')

module.exports = {
  slash: "both",
  aliases: ['murder'],
  minArgs: 1,
  maxArgs: 2,
  expectedArgs: '<User> [Comment]',
  guildOnly: true,
  testOnly: true,
  description: 'A command to end your foes!',
  category: 'Roleplay',
  callback: ({ message, args, client, interaction }) => {
    if (message) { if (!message.author.bot) { const id = (args[0]).match(/<@!?([0-9]*?)>/) || args[0]
    let User = client.users.cache.get(id)
    if (!User) { User = client.users.cache.get(id[1]) }
    if (User) {
    const gif = ["https://media1.tenor.com/images/29cef0ac69c787ed0243cfeebbd030f1/tenor.gif?itemid=19477491", "https://media1.tenor.com/images/eb7fc71c616347e556ab2b4c813700d1/tenor.gif?itemid=5840101", "https://media.discordapp.net/attachments/713914988602982422/713935665104158810/YIy0BmMjANn.gif"]  
    args.shift()
    let cmt = `\"${args.join(" ")}\"`
    if (!args) { cmt = "" }
    const embed = new MessageEmbed()
    .setTitle(`${User.username} is getting killed by ${message.author.username}`)
    .setDescription(cmt)
    .setColor(3553598)
    .setImage(gif[Math.floor(Math.random() * 3)])
     message.channel.send(embed) } 
    else { message.channel.send('User not found, please try again with a proper user mention!') }
    } }
    else { const id = (args[0]).match(/<@!?([0-9]*?)>/) || args[0]
        let User = client.users.cache.get(id)
        if (!User) { User = client.users.cache.get(id[1]) }
        if (User) {
        const gif = ["https://media1.tenor.com/images/29cef0ac69c787ed0243cfeebbd030f1/tenor.gif?itemid=19477491", "https://media1.tenor.com/images/eb7fc71c616347e556ab2b4c813700d1/tenor.gif?itemid=5840101", "https://media.discordapp.net/attachments/713914988602982422/713935665104158810/YIy0BmMjANn.gif"]  
        let cmt = `\"${args[1]}\"`
        if (!args[1]) { cmt = "" }
        const embed = new MessageEmbed().setTitle(`${User.username} is getting killed by ${interaction.member.user.username}`).setDescription(cmt).setColor(3553598).setImage(gif[Math.floor(Math.random() * 3)])
    return embed } 
        else { return 'User not found, please try again with a proper user mention!' } }
  },
}