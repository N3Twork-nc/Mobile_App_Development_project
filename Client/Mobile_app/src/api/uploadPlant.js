import axios from "axios";
import { IPServer } from ".";

const createFormData = (photo) => {
  const uriPhoto=photo.uri;
  const formData = new FormData();
  formData.append('file', {
    uri: uriPhoto,
    name: 'test.jpg',
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
    console.log(photo, roomName, plantName, token);

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
