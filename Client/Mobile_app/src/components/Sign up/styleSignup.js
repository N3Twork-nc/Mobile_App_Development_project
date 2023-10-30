import styled from 'styled-components';
import { View, Text, Image } from 'react-native';
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
 align-items: center;
`;

export const InnerContainer = styled.View`
 width: 100%;
 align-items: center;
 justify-content: center;
 display: flex;
`;
 
//slogan
export const Slogan = styled.Text`
  fontSize: 27px;
  margin-top: 10%;
  margin-bottom: 5%;
  color: ${black};
  font-weight: bold;
  text-align: center;
 
`;

//button Signup
export const ButtonSignupwFB = styled.TouchableOpacity`
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

export const ButtonSignupwGG = styled.TouchableOpacity`
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
  right: 42px;
`;
export const IconButtonGG = styled.Image`
  align-self: flex-start;
  left: 41px;
  height: 27px;
  width: 27px;
`;
export const ButtonCreateAccount = styled.TouchableOpacity`
  background-color: ${black};
  border-radius: 30px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px; /* hoặc sử dụng padding-top */
`;

export const OthersText = styled.Text`
  fontSize: 15px;
  margin-top: 5%;
  margin-bottom: 3%;
  color: ${black};
  font-weight: bold;
  text-align: center;
`;


// input box ------------------------------------
export const InputText = styled.TextInput`
  background-color: ${white};
  border-radius: 30px;
  width: 85%;
  margin-top: 3%;
  height: 7%; /* hoặc sử dụng padding-top */  
  align-content: center;
  justify-content: center;
  padding: 5px 15px;
  font-weight: 500;
  box-shadow: 2px 5px 2px rgba(0, 0, 0, 0.1);
`;
export const InputTextpw = styled.TextInput`
   background-color: ${white};
   border-radius: 30px;
   width: 85%;
   height: 7%;
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
  top: -170%;
`;

// Privacy checkbox ------------------
export const CheckboxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%; /* Điều chỉnh độ rộng của CheckboxContainer */
  margin-left: auto;
  margin-right: 12%;
  padding:0px;
  
`;
export const OthersCheckbox = styled(CheckBox)`
  
`;

export const CheckboxText = styled.Text`
  font-weight: 500;
  fontSize: 14px;
`;
export const ButtonText1 = styled.Text`
  fontSize: 20px;
  color: ${white};
  font-weight: bold;
  text-align: center;
`;