import axios from "axios";
import { IPServer } from ".";

export const plant = async (username, roomName, plantName) => {
  try {
    const timeUpload = new Date().toISOString();
    const data = {
        "username": `${username}`,
        "roomName": `${roomName}`,
        "plantName": `${plantName}`,
        "timeUpload": `${timeUpload}`
    };
    console.log(username, roomName, plantName, timeUpload)
    const response = await axios.put(IPServer + 'APIuploadMyPlant', data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};