module.exports = (client, instance) => {
    client.on('message', (message) => {
        console.log(message.content)
      if (message.author.bot) return; 
    })
  }