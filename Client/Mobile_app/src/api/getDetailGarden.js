// import {SERVER} from '@env'
import { IPServer } from ".";
import axios from "axios";

export const myGarden = async (gardenName, location, cropType, token) => {
  try {
    const data = {
        "name_garden": `${gardenName}`,
        "location": `${location}`,
        "cropType": `${cropType}`
    };

    const response = await axios.put(IPServer + 'APIUploadMyGarden', data, {
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
      const response = await axios.get(IPServer + "APIGetDetailGarden",
      {headers: {
        Authorization:`Bearer ${token}`}
      });
      
      const detail = response.data;
      
      const saving = [];
      
      Object.entries(detail).forEach(([gardenId, gardenInfo]) => {
        const croptype = gardenInfo.CropType;
        const gardenname = gardenInfo.NameGarden;
        const location = gardenInfo.location;
        const time = gardenInfo.timeUpload;
      
        saving.push({ gardenId, croptype, gardenname, location, time });
      });

      console.log("Get detail gardens success");
      return saving;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

