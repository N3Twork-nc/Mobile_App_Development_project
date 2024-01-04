import axios from "axios";
import { IPServer } from ".";

export const info = async (username, fullName, gender, phoneNumber, address) => {
  try {
    const data = {
        "username": `${username}`,
        "fullName": `${fullName}`,
        "gender": `${gender}`,
        "phoneNumber": `${phoneNumber}`,
        "address": `${address}`
    };
    const response = await axios.put(IPServer + 'editProfile', data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};