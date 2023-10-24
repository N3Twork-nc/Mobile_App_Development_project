import axios from "axios";

const apiUrl = 'http://10.0.133.77:8080';

export const signin = (username, password) => {
  const data = {
    username: `${username}`,
    password: `${password}`
  };

  return new Promise((resolve, reject) => {
    axios.post(`${apiUrl}/APIsignin`, data)
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
  axios.put(`${apiUrl}/APIsignup`, data)
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
  return new Promise((resolve, reject) => {
  axios.post(`${apiUrl}/APIsignup`, data)
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