const Discord = require("discord.js")

const config = require('./config.json')
// const TOKEN = t.token;

const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
})

client.on("ready", () =>{
  console.log(`Logged in as ${client.user.tag}`)
})

client.login("config.token")