import axios from "axios";
import { IPServer } from ".";

const createFormData = (uriPhoto) => {
  const formData = new FormData();
  formData.append('file', {
    uri: uriPhoto,
    name: 'myroom.jpg',
    type: 'image/jpeg'
  }); 
  return formData;
}

export const plant = async (photo, roomName, plantName, token) => {
  try {
    const data = createFormData(photo);

    const encodedRoomName = encodeURIComponent(roomName);
    const encodedPlantName = encodeURIComponent(plantName);

    const response = await axios.put(IPServer + `APIuploadMyPlant?roomName=${encodedRoomName}&plantName=${encodedPlantName}`, data, {
      headers: {
      'Content-Type': 'multipart/form-data',
      Authorization:`Bearer ${token}`,}
    },)

    console.log("Add successful!");

    if (response.data.id!=null) return "Successfull"
    return "Failure"
    
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const myPlant = async (token, roomName) => {
  try {
    const response = await axios.get(IPServer + `APIMyPlant/${roomName}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    const getPlants = response.data;

    console.log("Get plants success");

    return getPlants;
  } catch (error) {
    console.log(error);
    return error;
  }
};
