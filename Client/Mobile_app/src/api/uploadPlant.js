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

export const plant = async (uriPhotophoto, roomName, plantName, token) => {
  try {
    const data = createFormData(uriPhotophoto);

    const encodedRoomName = encodeURIComponent(roomName);
    const encodedPlantName = encodeURIComponent(plantName);

    const response = await axios.put(IPServer + `APIuploadMyPlant?roomName=${encodedRoomName}&plantName=${encodedPlantName}`, data, {
      headers: {
      'Content-Type': 'multipart/form-data',
      Authorization:`Bearer ${token}`,}
    },)
    if (response.data.id!=null) return "Successfull"
    return "Failure"
  } catch (error) {
    console.log(error);
    return error;
  }
};
