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
  }
});

client.on("message", async (message) => {
  if (message.content === "Bruva") {
    message.reply("Pink Papi");
  }
});

client.login(process.env.BOT_TOKEN);
