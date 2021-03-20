const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const welcomeSchema = mongoose.Schema({
  _id: reqString,
  channelId: reqString,
  text: reqString,
})
const name = 'welcome-channels'
module.exports = mongoose.model[name] || mongoose.model(name, welcomeSchema)