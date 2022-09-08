require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["GuildMessages", "MessageContent"],
});

client.on("ready", () => {
  console.log("Our bot is ready to go");
});

client.on("messageCreate", async (message) => {
  if (message.content === "ping") {
    message.reply("pong");
  }
});

client.login(process.env.BOT_TOKEN);
