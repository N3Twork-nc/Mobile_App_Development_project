import {SERVER} from '@env'
import axios from "axios";

export const getDetailGardens = async (token) => {
    try {
      const response = await axios.get(SERVER + "APIGetDetailGarden",
      {headers: {
        Authorization:`Bearer ${token}`}
        });
      const detail = response.data;
      console.log("Get detail gardens success");
      return detail;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

