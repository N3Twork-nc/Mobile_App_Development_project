import axios from "axios";
import { IPServer } from ".";

export const signin = (username, password) => {
  const data = {
    username: username,
    password: password
  };

  return new Promise((resolve, reject) => {
    axios
      .post(IPServer+'APIsignin', data)
      .then(response => {
        console.log(response.data); 
        resolve(response);
      })
      .catch(error => {
        console.error(error);
        reject(error);
      });
  });
};

export const signup = (fullname, username, password, email) => {
  const data = {
    "fullname": `${fullname}`,
    "username": `${username}`,
    "password": `${password}`,
    "email": `${email}`
  };

  return new Promise((resolve, reject) => {
  axios.put(IPServer+'APIsignup', data)
    .then(response => {
      console.log(response.data);
      resolve(response); // Xử lý phản hồi từ API
    })
    .catch(error => {
      console.error(error);
      reject(error);
    });
  });
};

export const verify = (fullname, username, password, email, otp) => {
  const data = {
    "fullname": `${fullname}`,
    "username": `${username}`,
    "password": `${password}`,
    "email": `${email}`,
    "OTP": `${otp}`
  };
 // console.log(fullname, username, password, email, otp );
  
  return new Promise((resolve, reject) => {
  axios.post(IPServer+'APIsignup', data)
    .then(response => {
      console.log(response.data); // Xử lý phản hồi từ API
      resolve(response); 
    })
    .catch(error => {
      console.error(error);
      reject(error);
    });
  });
};


