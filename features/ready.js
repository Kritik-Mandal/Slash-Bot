module.exports = (client) => {
        const status = ["as!help", "over " + client.users.cache.size + " users and " + client.guilds.cache.size + " servers!"]
          const type = ["LISTENING", "WATCHING"]
          setInterval(() => {
            const index = Math.floor(Math.random() * 2)
            client.user.setActivity(status[index], { type: type[index] })
          }, 30000)
    }