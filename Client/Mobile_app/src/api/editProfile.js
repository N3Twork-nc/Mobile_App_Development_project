import axios from "axios";
import { IPServer } from ".";

export const info = async (token, fullName, gender, phoneNumber, address) => {
  try {
    const data = {
        "fullName": `${fullName}`,
        "gender": `${gender}`,
        "phoneNumber": `${phoneNumber}`,
        "address": `${address}`
    };
    const response = await axios.post(IPServer + 'editProfile', data,{headers: {
      Authorization:`Bearer ${token}`,}
    },);
    if (response.status==200) return true;
    return false
  } catch (error) {
    console.log("Lỗi: ", error);
    return false;
  }
};


const createFormData = (uriPhoto) => {
  const formData = new FormData();
  formData.append('avata', {
    uri: uriPhoto,
    name: 'avata.jpg',
    type: 'image/jpeg'
  }); 
  return formData;
}


export const uploadAvata= async (token,img)=>{
  try {
    const data = createFormData(img);
    const response = await axios.post(IPServer + "uploadAvata", data, {
      headers: {
      'Content-Type': 'multipart/form-data',
      Authorization:`Bearer ${token}`,}
    },)
    if (response.status==200) return true
    else return false
  }
  catch (e){
    console.log("Lỗi: ",e)
    return false
  }

}