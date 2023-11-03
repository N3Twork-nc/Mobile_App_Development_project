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

      const captionIndex = 0; 
      const textIndex = 0;

      const caption = content[captionIndex].caption;
      const text = content[textIndex].text;

      results.push({ title, introduction, caption, text });
    });

    console.log("Get data success");

    return results;
  } catch (error) {
    console.log(error);
    return error;
  }
};