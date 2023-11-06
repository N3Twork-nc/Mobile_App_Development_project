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

export const uploadimg= async(photo)=>{
  try {
    const data = createFormData(photo)
    const response = await axios.post(IPServer+'APIPredictPlants', data,{
      headers: {
      'Content-Type': 'multipart/form-data',}
    },)
    console.log(response.data)
  }
  catch (error){
    console.log(error)
  }
}
