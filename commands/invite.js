const { MessageEmbed } = require('discord.js')

module.exports = {
  slash: "both",
  guildOnly: true,
  testOnly: true,
  description: 'Displays an invite link for the bot.',
  category: 'Miscellaneous',
  callback: ({ message, client }) => {
    if (message) { const embed = new MessageEmbed()
       .setTitle('Invitation Link to get me on your Server!')
       .setColor(3553598)
       .setThumbnail(client.user.displayAvatarURL({dynamic: true, size: 4096}))
       .addFields({ 
         name: 'Admin Invite',
         value: '[Click to Invite!](https://discord.com/api/oauth2/authorize?client_id=651397796838113284&permissions=8&scope=bot%20applications.commands)',
         inline: true
       }, {
         name: 'Regular Invite',
         value: '[Click to Invite!](https://discord.com/api/oauth2/authorize?client_id=651397796838113284&permissions=2081422583&scope=bot%20applications.commands)',
         inline: true
       })
    message.channel.send(embed); }
    else {
        const embed = new MessageEmbed()
       .setTitle('Invitation Link to get me on your Server!')
       .setColor(3553598)
       .setThumbnail(client.user.displayAvatarURL({dynamic: true, size: 4096}))
       .addFields({ 
         name: 'Admin Invite',
         value: '[Click to Invite!](https://discord.com/api/oauth2/authorize?client_id=651397796838113284&permissions=8&scope=bot%20applications.commands)',
         inline: true
       }, {
         name: 'Regular Invite',
         value: '[Click to Invite!](https://discord.com/api/oauth2/authorize?client_id=651397796838113284&permissions=2081422583&scope=bot%20applications.commands)',
         inline: true
       })
    return embed
    }
  },
}