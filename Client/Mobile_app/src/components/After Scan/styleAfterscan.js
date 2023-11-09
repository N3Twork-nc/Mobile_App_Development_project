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
 background-color: ${white};
 justify-content: center;
 position: relative; 
 ${Platform.OS === 'android' ? 'margin-top: 1%;' : 'margin-bottom: 0%;'}

`;

//header
export const HeaderContainer = styled.View`
  position: relative;
  padding: ${vh(1)}px;
  align-items: center;
  justify-content: center; 
  background-color: ${white};
  ${Platform.OS === 'android' ? 'margin-top: 7%;' : 'margin-bottom: 0%;'}
`;
export const MainTitle = styled.Text`
  font-size: 25px;
  color: ${black};
  font-weight: bold;
  align-self: center;
`;
export const ButtonBack = styled.Image`
width: 22px;
height: 22px;
align-self: flex-start;
left: 15px;
position: absolute;  
`;

export const ImageContainer = styled.View`

z-index: -1;
`;
export const ImagePlant = styled.Image`
width: ${vw(100)}px;
height: ${vh(35)}px;
z-index: -1;
`;

export const BodyContainer = styled.View`
background-color: ${white};
width: ${vw(100)}px;
height: ${vh(150)}px;
top: ${vh(35)}px; 
border-radius: 25px;  
z-index: 1;
position: absolute;

`;
export const ImgLogo = styled.Image`
  width: ${vw(4)}px;
  height: ${vh(3)}px;
  margin-top: ${vh(0.5)}px;
  justify-content: flex-start;
  left:${vw(4)}px;
  top: ${vh(2)}px;
`;
export const Text1 = styled.Text`
  fontSize: ${vh(1.5)}px;
  color: #61AF2B;
  font-weight: bold;
  justify-content: flex-start;
  margin-left: ${vw(10)}px;
`;
export const Text2 = styled.Text`
  fontSize: ${vh(3)}px;
  color: ${black};
  font-weight: bold;
  margin-top: ${vh(1.5)}px;  
  align-items: center;
  left: ${vw(3)}px;
`;

export const TagContainer = styled.View`
  left: ${vw(4)}px;
  margin-top: ${vh(1)}px;
  flex-direction: row;
  height: ${vh(3)}px;
  align-items: center;
  z-index: 1;
`;
export const Tag1 = styled.Text`
  fontSize: ${vh(1.5)}px;
  color: ${black};
  background-color: #F0F3F6;
  margin-right: ${vw(4)}px;
  align-items: center;
  padding: 5px;
`;
export const Tag2 = styled.Text`
  fontSize: ${vh(1.5)}px;
  color: ${black};
  background-color: #F0F3F6;
  margin-right: ${vw(4)}px;
  align-items: center;
  padding: 5px;
`;
export const Tag3 = styled.Text`
  fontSize: ${vh(1.5)}px;
  color: ${black};
  background-color: #F0F3F6;
  margin-right: ${vw(4)}px;
  align-items: center;
  padding: 5px;
`;
export const Text3 = styled.Text`
  margin-top: ${vh(1)}px;
  fontSize: ${vh(2.5)}px;
  color: ${black};
  font-weight: bold;
  align-items: center;
  left: ${vw(3)}px;
`;
export const InfoContainer = styled.View`
  position: absolute;
  top: ${vh(15)}px;
  margin-top: ${vh(1)}px;
  flex-direction: row;
  width: ${vw(100)}px;
  height: ${vh(100)}px;

`;
export const Box1Container = styled.View`
  position: absolute;
  margin-top: ${vh(1)}px;
  height: ${vh(13)}px;
  width: ${vw(50)}px;
  flex-direction: row;
`;
export const Box1 = styled.Image`
  width: ${vw(13)}px;
  height: ${vh(13)}px;
  justify-content: flex-start;
  left: ${vw(4)}px;
`;
export const Title1 = styled.Text`
  margin-top: ${vh(3.5)}px;
  fontSize: ${vh(1.8)}px;
  color: #4B8364;
  font-weight: bold;
  margin-left: ${vw(6)}px;
`;
export const Info1 = styled.Text`
  margin-top: ${vh(7)}px;
  fontSize: ${vh(1.8)}px;
  color: #000000;
  right: ${vw(19)}px;
`;

export const Box2 = styled.Image`
  width: ${vw(13)}px;
  height: ${vh(13)}px;
  justify-content: flex-end;
  margin-left: ${vw(50)}px;
`;
export const Title2 = styled.Text`
  margin-top: ${vh(3.5)}px;
  fontSize: ${vh(1.8)}px;
  color: #7C95E4;
  font-weight: bold;
  margin-left: ${vw(3)}px;
`;
export const Info2 = styled.Text`
  margin-top: ${vh(7)}px;
  fontSize: ${vh(1.8)}px;
  color: #000000;
  right: ${vw(19)}px;
`;