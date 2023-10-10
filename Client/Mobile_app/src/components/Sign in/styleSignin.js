import styled from 'styled-components';
import { View, Text } from 'react-native';
import Constants from 'expo-constants';
import { CheckBox } from 'react-native-elements';

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
  fontSize: 27px;
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
  align-items: center;
  justify-content: center;
  height: 60px; /* hoặc sử dụng padding-top */
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

export const ButtonText = styled.Text`
  fontSize: 16px;
  color: ${white};
  font-weight: bold;
  text-align: center;
`;
export const OthersText1 = styled.Text`
  fontSize: 15px;
  margin-bottom: 2%;
  color: ${black};
  font-weight: bold;
  textAlign: center; 
`;


// input box ------------------------------------
export const InputContainer = styled.View`
  margin:auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10%;
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
  margin-top: 4%;
  margin-bottom: 4%;
  color: ${black};
  font-weight: bold;
  text-align: right;  
  font-style:italic;
  align-self: flex-end; /* Căn lề trái */
`;

export const InputText = styled.TextInput`
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
export const ButtonSignin = styled.TouchableOpacity`
  background-color: ${black};
  border-radius: 30px;
  margin-top: 5%;
  margin-bottom:5%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px; /* hoặc sử dụng padding-top */
`;