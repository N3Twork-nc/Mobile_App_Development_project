import axios from "axios";
import { IPServer } from ".";
import { token } from "stylis";

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

    if (response.status==200) return true
    else return false
    
  } catch (error) {
    console.log(error);
    return false
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

export const allPlant = async (token) => {
  try {
    const response = await axios.get(IPServer + 'APIAllPlant', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    const getPlants = response.data;

    console.log("Get all plants success");

    return getPlants;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const countPlants=async (token) => {
  try {
    const response = await axios.get(IPServer + 'API_get_count_plants', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
  catch {
    return null
  }
}

export const getPlant = async (token, plantname) => {
  try {
    const response = await axios.get(IPServer + `APIGetInfoPlant/${plantname}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
      
    const plants = response.data;

    console.log("Get info plants success");

    return plants;
  } catch (error) {
    console.log(error);
    return error;
  }
};
      
export const schedule= async (token,idPlant,roomName,timeStart,dateStart,frequency,frequencyType,action,note)=>{
  try {
    const data={
      "id_plant": idPlant,
      "roomName": roomName,
      "timeStart":timeStart,
      "dateStart": dateStart,
      "frequency": frequency,
      "frequencyType": frequencyType,
      "action": action,
      "note": note
    }
    const response = await axios.put(IPServer + 'API_schedule',data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.status;
  }
  catch {
    return null
  }
}

export const getSchedule= async (token,roomName,idPlant)=>{
  try {
    const response = await axios.get(IPServer + `API_get_schedule?roomName=${roomName}&idPlant=${idPlant}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
      
    const schedule = response.data;
    return schedule;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const deletePlant = async (roomName,id,token) =>{
  try {
    const response = await axios.delete(IPServer+`APIDeletePlant?roomName=${roomName}&id=${id}`,
    {headers: {
      Authorization:`Bearer ${token}`}
    });
    
    const result = response.data;
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}