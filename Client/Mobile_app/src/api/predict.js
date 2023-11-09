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

export const predictPlant= async(photo,token)=>{
  try {
    const data = createFormData(photo)
    const response = await axios.post(IPServer+'APIPredictPlants', data,{
      headers: {
      'Content-Type': 'multipart/form-data',
      Authorization:`Bearer ${token}`,}
    },)
    console.log(response.data)
  }
  catch (error){
    console.log(error)
  }
}
