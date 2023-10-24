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
 background-color: ${white};
 justify-content: center;
 position: fixed;
 
`;

// all items
export const InnerContainer = styled.View`
z-index: 1;
 width: 100%;
 align-items: center;
 justify-content: center;
`;
 
//slogan
export const Slogan = styled.Text`
  fontSize: 30px;
  margin-bottom: 25%;
  color: ${black};
  font-weight: bold;
  text-align: center;
  color: #0B4F06;text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: bold;
`;

export const ButtonConfirm = styled.TouchableOpacity`
  margin-top: 40px;
  background-color: ${black};
  border-radius: 30px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px; 
`;
export const ButtonText = styled.Text`
  
  fontSize: 25px;
  color: ${white};
  font-weight: bold;
  text-align: center;
`;

export const Text1 = styled.Text`
  color: #000000;
  font-size: 16px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  opacity: 1; 
  position: fixed;
  text-align: center;
  top: 0;
`;
export const Text0 = styled.Text`
  color: #000000;
  font-size: 16px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  opacity: 1; 
  position: fixed;
  text-align: center;
  top: 0;
`;
export const Text2 = styled.Text`
  color: #000000;
  font-size: 16px;
  font-weight: 600;
  left: 0;
  letter-spacing: 0;
  opacity: 1; 
  position: fixed;
  text-align: center;
  top: 0;
  margin-bottom: 50px;
`;
export const OthersText1 = styled.Text`
  color: #000000;
  font-size: 16px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  opacity: 0.5; 
  position: fixed;
  text-align: center;
  top: 0;
  margin-top: 30px;
`;

export const Text3 = styled.Text`
  color: #000000;
  font-size: 16px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  opacity: 0.5; 
  position: fixed;
  text-align: center;
  top: 0;
  margin-top: 20px;
`;
export const ButtonTextEllipse= styled.TextInput`
  margin-bottom: 10px;
  width: 50px; 
  height: 50px; 
  background-color: #f6f6f6;
  border: 2px solid #0b4f06; 
  margin: 5px;
  text-align: center;
  border-radius: 50px; 
`;
export const ImgHead=styled.Image`
  border-radius: 0px;
  height: 350px;
  left: 0;
  position: absolute;
  top: 0;
  width: 430px;
`;
export const ImgPo=styled.Image`
  height: 195px;
  left: 0;
  position: fixed;
  top: 0;
  margin-bottom: 25px;
  width: 168px;
  align-self: center;
`;
export const ImgLeaf=styled.Image`
  height: 127px;
  left: 150;
  top: 245;
  object-fit: cover;
  position: absolute;
  align-self: center;
  width: 111px;

`;
export const BoxContainer = styled.View`

  flexDirection: row;
  align-items: center;
  margin-right: 10px;
  justify-content: center;

`;

export const TextInput= styled.TextInput`
  margin-bottom: 10px;
  width: 50px; 
  height: 50px; 
  background-color: #f6f6f6;
  border: 2px solid #0b4f06; 
  margin: 5px;
  text-align: center;
  border-radius: 50px; 
`;
