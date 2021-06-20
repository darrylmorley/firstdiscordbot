const axios = require("axios");

const getDadJoke = async () => {
  const getJoke = await axios.get("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  return getJoke.data.joke;
};

module.exports = getDadJoke;
