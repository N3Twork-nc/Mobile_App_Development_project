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

    const plant = response.data;

    const results = [];

    const plantName = plant.PlantName;
    const keyword = plant.Keyword;
    const fertilize = plant.Fertilize;
    const watering = plant.Watering;
    const repotting = plant.Repotting;
    const light = plant.Light;
    const temperature = plant.Temperature;
    const humidity = plant.Humidity;
    const information = plant.Info;
    const cover=plant.cover;

    results.push({ plantName, keyword, fertilize, watering, repotting, light, temperature, humidity, information,cover});

    console.log("Predict successfull")
    return results
  }
  catch (error){
    console.log(error)
  }
}
