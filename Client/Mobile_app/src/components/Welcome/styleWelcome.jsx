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
color: #0B4F06;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
fontSize: ${vh(5.5)}px;
font-style: normal;
font-weight: bold;
margin-top: ${vh(1)}px;
width: ${vw(80)}px;
`;


export const ButtonSignup = styled.TouchableOpacity`
  margin-top: 40px;
  background-color: ${black};
  border-radius: 30px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${vh(8)}px;
`;
export const ButtonText = styled.Text`  
  fontSize: 25px;
  color: ${white};
  font-weight: bold;
  text-align: center;
`;
export const OthersText = styled.Text`
  fontSize: ${vh(2.5)}px;
  margin-top: 5%;
  margin-bottom: 3%;
  color: ${black};
  font-weight: bold;
  align-self: center;
`;

export const ImgPlant=styled.Image`
  width: 280px;
  height: ${vh(40)}px;
  flex-shrink: 0;
  margin-top:${vh(5)}px;
  margin-bottom: ${vh(5)}px;
  `;

