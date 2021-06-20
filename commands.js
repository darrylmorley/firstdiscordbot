const getDadJoke = require("./lib/getDadJoke");
const getHackerNews = require("./lib/getHackerNewsStory");

async function gotMessage(msg) {
  const responses = {
    "!hi": "Hi!!",
    "!dadjoke": await getDadJoke(),
    "!hn": await getHackerNews(),
  };

  if (responses[msg.content]) {
    msg.channel.send(responses[msg.content]);
  }

  // if (msg.channel == "856220709520146450" && msg.content === "!hi") {
  //   msg.reply("Hi");
  // }

  // if (msg.channel == "856220709520146450" && msg.content === "!dadjoke") {
  //   const dadJoke = await getDadJoke();
  //   console.log(dadJoke);
  //   msg.reply(`${dadJoke}`);
  // }
}

module.exports = gotMessage;
