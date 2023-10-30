import styled from 'styled-components';
import { Dimensions } from 'react-native';

// Lấy kích thước màn hình
const { width, height } = Dimensions.get('window');

// Chuyển đổi giá trị vh sang giá trị số
const vh = percent => (percent * height) / 100;

// Chuyển đổi giá trị vw sang giá trị số
const vw = percent => (percent * width) / 100;

// default color
export const Colors = {
  maincolor: "#CEF1CF",
  white: "#ffffff",
  black: "#000000",
  gray: "#D9D9D9",
  green: "#61AF2B",
}

const { maincolor, white, black, gray, green } = Colors;

 //screen
 export const StyledContainer = styled.View`
 flex: 1;
 padding: 20px;
 background-color: ${maincolor};
 justify-content: center;
 
`;

// all items
export const InnerContainer = styled.View`
 width: 100%;
 align-items: center;
 justify-content: center;

`;

//slogan
export const Slogan = styled.Text`
  fontSize: ${vh(4)}px;
  margin-top: 10%;
  margin-bottom: 8%;
  color: ${black};
  font-weight: bold;
  text-align: center;
`;

//button Signin
export const ButtonSigninwFB = styled.TouchableOpacity`
  background-color: ${black};
  border-radius: 30px;
  width: 85%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 60px; /* hoặc sử dụng padding-top */
`;
export const ButtonTextFB = styled.Text`
  fontSize: 16px;
  color: ${white};
  font-weight: bold;
  align-self: flex-end;
  position: absolute;
  right: 29px;
`;
export const IconButtonFB = styled.Image`
  align-self: flex-start;
  left: 30px;
  height: 30px;
  width:30px;
`;

export const OthersText1 = styled.Text`
  fontSize: 15px;
  margin-top:2%;
  margin-bottom: 2%;
  color: ${black};
  font-weight: bold;
  textAlign: center; 
`;


export const titleInputText = styled.Text`
  fontSize: 15px;
  margin-top: 5%;
  margin-bottom: 3%;
  color: ${black};
  font-weight: bold;
`;
export const ButtonSigninwGG = styled.TouchableOpacity`
  background-color: ${black};
  border-radius: 30px;
  width: 85%;
  margin-top: 3%;
  height: 60px; /* hoặc sử dụng padding-top */  
  align-content: center;
  justify-content: center;
`;

export const ButtonTextGG = styled.Text`
  fontSize: 16px;
  color: ${white};
  font-weight: bold;
  align-self: flex-end;
  position: absolute;
  right: 41px;
`;
export const IconButtonGG = styled.Image`
  align-self: flex-start;
  left: 41px;
  height: 27px;
  width:27px;
`;





// input box ------------------------------------
export const InputContainer = styled.View`
  margin: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10%;
  position: relative;
`;

export const OthersText2 = styled.Text`
  font-size: 15px;
  margin-top: 5%;
  color: ${black};
  font-weight: bold;
  text-align: left;
  align-self: flex-start; /* Căn lề trái */
`;
export const OthersText3 = styled.Text`
  font-size: 15px;
  margin-bottom: 4%;
  color: ${black};
  font-weight: bold;
  text-align: right;  
  font-style:italic;
  align-self: flex-end; /* Căn lề trái */
`;

export const InputTextusername = styled.TextInput`
  background-color: ${white};
  border-radius: 30px;
  width: 100%;
  margin-top: 4%;
  height: 13%;
  align-self: center; 
  justify-content: center;
  padding: 5px 15px;
  font-weight: 500;
  box-shadow: 2px 5px 2px rgba(0, 0, 0, 0.2);
`;
export const InputTextpw = styled.TextInput`
   background-color: ${white};
   border-radius: 30px;
   width: 100%;
   height:13%;
   margin-top: 4%;
   align-self: center; 
   justify-content: center;
   padding: 5px 15px;
   font-weight: 500;
   box-shadow: 2px 5px 2px rgba(0, 0, 0, 0.2);
   z-index:-1;
`;
export const EyeIcon = styled.Image`
  position: relative;
  height: 20px;
  width: 20px;
  left: 105px;
  z-index:1;
  top: -180%;
`;
export const ButtonSignin = styled.TouchableOpacity`
  background-color: ${black};
  border-radius: 30px;
  margin-top: 5%;
  margin-bottom:5%;
  width: ${vw(60)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px; 
`;
export const ButtonText1 = styled.Text`
  fontSize: ${vh(3.5)}px;
  color: ${white};
  font-weight: bold;
  text-align: center;
`;