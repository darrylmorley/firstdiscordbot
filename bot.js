require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.BOT_TOKEN;
const gotMessage = require("./commands");

client.login(token);
client.on("ready", () => {
  console.log("Discord is ready!");
});

client.on("message", gotMessage);
