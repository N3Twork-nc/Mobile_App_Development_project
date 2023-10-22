import axios from "axios";

export const signin = (username, password) => {
  const data = {
    "username": `${username}`,
    "password": `${password}`
  };

  axios.post('http://10.0.133.77:8080/APIsignin', data)
    .then(response => {
      console.log(response.data); // Xử lý phản hồi từ API
    })
    .catch(error => {
      console.error(error);
    });
};

export const signup = (fullname, username, password, email) => {
  const data = {
    "fullname": `${fullname}`,
    "username": `${username}`,
    "password": `${password}`,
    "email": `${email}`
  };
  axios.put('http://10.0.133.77:8080/APIsignup', data)
    .then(response => {
      console.log(response.data); // Xử lý phản hồi từ API
    })
    .catch(error => {
      console.error(error);
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
  axios.post('http://10.0.133.77:8080/APIsignup', data)
    .then(response => {
      console.log(response.data); // Xử lý phản hồi từ API
    })
    .catch(error => {
      console.error(error);
    });
};

// Gọi API xác minh
// const verify = async () => {
//   try {
//     const response = await axios.post('https://26.242.101.156/APIsignup', {
//       // Gửi dữ liệu tài khoản
//       email,
//     });

//     // Xử lý kết quả xác minh
//     console.log(response.data);
//   } catch (error) {
//     // Xử lý lỗi xác minh
//     console.error(error);
//   }
// };

// Gọi các hàm tương ứng với các API
// signin('caothi','1234');

