const { MessageEmbed } = require('discord.js')

module.exports = {
  slash: "both",
  aliases: ['av'],
  minArgs: 0,
  maxArgs: 1,
  expectedArgs: '<User>',
  guildOnly: true,
  testOnly: true,
  description: 'Displays avatar of a discord user.',
  category: 'Miscellaneous',
  callback: ({ message, args, interaction, client }) => {
      if (message && !message.author.bot) { if (!args.length) {
        const user = message.author;
        const avatarEmbed = new MessageEmbed()
            .setColor(0x333333)
            .setTitle(user.tag)
            .setDescription('[[.PNG]('+`${user.displayAvatarURL({format: 'png', size: 2048})}`+') | [.JPEG]('+`${user.displayAvatarURL({format: 'jpeg', size: 2048})}`+') | [.WEBP]('+`${user.displayAvatarURL({format: 'webp', size: 2048})}`+')]')
            .setImage(user.displayAvatarURL({dynamic: true, size: 4096}));
        return message.channel.send(avatarEmbed); }
        else { const id = (args[0]).match(/<@!?([0-9]*?)>/) || args[0] 
        let User = client.users.cache.get(id)
        if (!User) { User = client.users.cache.get(id[1]) || message.author } 
        const avatarEmbed = new MessageEmbed()
            .setColor(0x333333)
            .setTitle(User.tag)
            .setDescription('[[.PNG]('+`${User.displayAvatarURL({format: 'png', size: 2048})}`+') | [.JPEG]('+`${User.displayAvatarURL({format: 'jpeg', size: 2048})}`+') | [.WEBP]('+`${User.displayAvatarURL({format: 'webp', size: 2048})}`+')]')
            .setImage(User.displayAvatarURL({dynamic: true, size: 4096}));
        return message.channel.send(avatarEmbed);
       }  }
        if (args.length) {
        const id = (args[0]).match(/<@!?([0-9]*?)>/) || args[0]
        let User = client.users.cache.get(id)
        if (!User) { User = client.users.cache.get(id[1]) } 
        const user = User || interaction.member.user;
        const avatarEmbed = new MessageEmbed()
            .setColor(0x333333)
            .setTitle(user.tag)
            .setDescription('[[.PNG]('+`${user.displayAvatarURL({format: 'png', size: 2048})}`+') | [.JPEG]('+`${user.displayAvatarURL({format: 'jpeg', size: 2048})}`+') | [.WEBP]('+`${user.displayAvatarURL({format: 'webp', size: 2048})}`+')]')
            .setImage(user.displayAvatarURL({dynamic: true, size: 4096}));
        return avatarEmbed }
        else {
            const user = client.users.cache.get(interaction.member.user.id);
        const avatarEmbed = new MessageEmbed()
            .setColor(0x333333)
            .setTitle(user.tag)
            .setDescription('[[.PNG]('+`${user.displayAvatarURL({format: 'png', size: 2048})}`+') | [.JPEG]('+`${user.displayAvatarURL({format: 'jpeg', size: 2048})}`+') | [.WEBP]('+`${user.displayAvatarURL({format: 'webp', size: 2048})}`+')]')
            .setImage(user.displayAvatarURL({dynamic: true, size: 4096}));
        return avatarEmbed
        }
  },
}