import styled from 'styled-components';
import Constants from 'expo-constants';
import { View, Text,Image } from 'react-native';

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
  font-size: 40px;
  font-style: normal;
  margin-top: 5%;
  margin-bottom: 8%;
  color: ${black};
  font-weight: bold;
  text-align: center;
`;


export const ButtonSignup = styled.TouchableOpacity`
  background-color: ${black};
  border-radius: 30px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px; /* hoặc sử dụng padding-top */
`;
export const ButtonText = styled.Text`
  font-size: 30px;
  color: ${white};
  font-weight: bold;
  text-align: center;
`;
export const OthersText = styled.Text`
  font-size: 30;
  margin-top: 5%;
  margin-bottom: 3%;
  color: ${black};
  font-weight: bold;
  text-align: center;
`;

export const ImgPlant=styled.Image`
  width: 280px;
  height: 291px;
  flex-shrink: 0;
`;

export const StyledBox = styled.div`
height: 93px;
width: 212px;

& .rectangle {
  background-color: #ffffff;
  border-radius: 91.5px;
  height: 93px;
  left: 0;
  position: fixed;
  top: 0;
  width: 212px;
}
`;
