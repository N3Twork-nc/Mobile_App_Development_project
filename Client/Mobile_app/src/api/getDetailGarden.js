import {SERVER} from '@env'
import axios from "axios";

export const myGarden = async (gardenName, location, cropType, token) => {
  try {
    const data = {
        "name_garden": `${gardenName}`,
        "location": `${location}`,
        "cropType": `${cropType}`
    };

    const response = await axios.put(SERVER + 'APIUploadMyGarden', data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log("Add garden successful!");

    if (response.status == 200) {
      return "Successful";
    } else {
      return "Failure";
    }

  } catch (error) {
    console.log(error);
    return error;
  }
};

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

