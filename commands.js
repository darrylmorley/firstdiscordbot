const axios = require("axios");

const getDadJoke = async () => {
  const getJoke = await axios.get("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  return getJoke.data.joke;
};

async function gotMessage(msg) {
  if (msg.channel == "856220709520146450" && msg.content === "!hi") {
    msg.reply("Hi");
  }

  if (msg.channel == "856220709520146450" && msg.content === "!dadjoke") {
    const dadJoke = await getDadJoke();
    console.log(dadJoke);
    msg.reply(`${dadJoke}`);
  }
}

module.exports = gotMessage;
