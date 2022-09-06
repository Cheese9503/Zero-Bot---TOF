require("dotenv").config();

const Discord = require("discord.js");
client = new Discord.Client({ intents: 32767 });

client.on("ready", () => {
  console.log("Our bot is ready to go");
});

client.login(process.env.BOT_TOKEN);
