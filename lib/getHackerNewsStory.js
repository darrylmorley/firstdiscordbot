const { default: axios } = require("axios");

const getHackerNews = async () => {
  const getStoriesList = await axios.get(
    "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  );

  const storiesList = await getStoriesList.data;
  const randomStoryId = storiesList[Math.floor(Math.random() * 500)];

  const getArticle = await axios.get(
    `https://hacker-news.firebaseio.com/v0/item/${randomStoryId}.json?print=pretty`
  );

  const articleObject = getArticle.data;

  const article = `${articleObject.title} - ${articleObject.url}`;

  return article;
};

module.exports = getHackerNews;
