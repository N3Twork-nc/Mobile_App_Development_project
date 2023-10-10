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
  font-size: 27%;
  margin-top: 10%;
  margin-bottom: 8%;
  color: ${black};
  font-weight: bold;
  text-align: center;
`;

//button login
export const ButtonLoginwFB = styled.TouchableOpacity`
  background-color: ${black};
  border-radius: 30px;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px; /* hoặc sử dụng padding-top */
`;

export const ButtonLoginwGG = styled.TouchableOpacity`
  background-color: ${black};
  border-radius: 30px;
  width: 85%;
  margin-top: 3%;
  height: 60px; /* hoặc sử dụng padding-top */  
  align-content: center;
  justify-content: center;
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
export const ButtonText = styled.Text`
  font-size: 15%;
  color: ${white};
  font-weight: bold;
  text-align: center;
`;
export const OthersText = styled.Text`
  font-size: 15%;
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

// Privacy checkbox ------------------
export const CheckboxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5%;
  justify-content: center;
  width: 90%; /* Điều chỉnh độ rộng của CheckboxContainer */
  margin-left: auto;
  margin-right: 7%;;
`;
export const OthersCheckbox = styled(CheckBox)`
   margin-right:10px;
`;

export const CheckboxText = styled.Text`
  font-weight: 500;
`;