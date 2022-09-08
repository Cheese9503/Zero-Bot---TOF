require("dotenv").config();

const Discord = require("discord.js");
client = new Discord.Client({ intents: 32767 });

client.on("ready", () => {
  console.log("Our bot is ready to go");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === "ping") {
    await interaction.reply("Pong!");
  } else if (commandName === "server") {
    await interaction.reply("Server info.");
  } else if (commandName === "user") {
    await interaction.reply("User info.");
  }
});

client.login(process.env.BOT_TOKEN);
