import axios from "axios";
import { IPServer } from ".";

export const data = async () => {
  try {
    const response = await axios.get(IPServer + "getNewsData");
    const news = response.data;

    const results = [];

    news.forEach(newsData => {
      const title = newsData.title;
      const introduction = newsData.introduction;
      const content = newsData.content;
      const thumbnaillink = newsData.thumbnaillink;

      results.push({ title, introduction, content, thumbnaillink });
    });

    console.log("Get data success");

    return results;
  } catch (error) {
    console.log(error);
    return error;
  }
};