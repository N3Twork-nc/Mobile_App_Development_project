import axios from "axios";
import { IPServer } from ".";

export const title = async (newsIndex) => {
    try {
      const response = await axios.get(IPServer + "getNewsData");
      const news = response.data;
      
      const newsData = news[newsIndex];
      const title = newsData.title;

      console.log("Get title success");

      return title;
    } catch (error) {
      console.log(error);
      return error;
    }
};

export const introduction = async (newsIndex) => {
    try {
      const response = await axios.get(IPServer + "getNewsData");
      const news = response.data;
  
      const newsData = news[newsIndex];
      const introduction = newsData.introduction;
      
      console.log("Get introduction success");
      
      return introduction;
    } catch (error) {
      console.log(error);
      return error;
    }
};

export const caption = async (newsIndex, captionIndex) => {
    try {
      const response = await axios.get(IPServer + "getNewsData");
      const news = response.data;
  
      const newsData = news[newsIndex];
      const content = newsData.content;
      const caption = content[captionIndex].caption;

      console.log("Get caption success");
      
      return caption;
    } catch (error) {
      console.log(error);
      return error;
    }
};

export const text = async (newsIndex, textIndex) => {
    try {
      const response = await axios.get(IPServer + "getNewsData");
      const news = response.data;
  
      const newsData = news[newsIndex];
      const content = newsData.content;
      const text = content[textIndex].text;

      console.log("Get text success");
      
      return text;
    } catch (error) {
      console.log(error);
      return error;
    }
};