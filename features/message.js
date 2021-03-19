module.exports = (client, instance) => {
    client.on('message', (message) => {
      if (message.author.bot) return; 
    })
  }