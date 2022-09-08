require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["Guilds", "GuildMessages", "MessageContent"],
});

client.on("ready", () => {
  console.log("Our bot is ready to go");
});

client.on("message", async (message) => {
  if (message.content === "ping") {
    message.reply("pong");
  } else if (message.content === "Bruva") {
    message.reply("Pink Boi");
  }
});

client.login(process.env.BOT_TOKEN);
