// import axios from 'axios';

// Gọi API đăng nhập

const sigin = () => { 
  console.log("test")
    fetch(' http://localhost:8000/APIsignin', {  
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'username': 'caothi',
        'password': '1234'})
      })
}
// Gọi API đăng ký
const signup = async () => {
  try {
    const response = await axios.put('https://26.242.101.156/APIsignup', {
      // Gửi dữ liệu tài khoản
      fullname,
      username,
      email,
      password,
    });

    // Xử lý kết quả đăng ký
    console.log(response.data);
  } catch (error) {
    // Xử lý lỗi đăng ký
    console.error(error);
  }
};

// Gọi API xác minh
const verify = async () => {
  try {
    const response = await axios.post('https://26.242.101.156/APIsignup', {
      // Gửi dữ liệu tài khoản
      email,
    });

    // Xử lý kết quả xác minh
    console.log(response.data);
  } catch (error) {
    // Xử lý lỗi xác minh
    console.error(error);
  }
};

// Gọi các hàm tương ứng với các API
// signin('caothi','1234');
export default sigin
