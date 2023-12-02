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
  ${Platform.OS === 'android' ? 'margin-top: 1%;' : 'margin-bottom: 0%;'}
`;

//header
export const HeaderContainer = styled.View`
  align-items: center;
  justify-content: center; 
  background-color: ${white};
  margin-top: ${vh(2)}px;
  ${Platform.OS === 'android' ? 'margin-top: 7%;' : 'margin-bottom: 0%;'}
`;
export const TitleContainer = styled.View`
  position: relative;
  align-items: center;
  justify-content: center; 
  width: 100%;  

`;
export const MainTitle = styled.Text`
  font-size: 25px;
  color: ${black};
  font-weight: bold;
  align-self: center;
`;
export const BackContainer = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  align-items: flex-start;
`;

export const ButtonBack = styled.Image`
  width: 22px;
  height: 22px;
  align-self: flex-start;
  left: 20px;
`;

export const ImageContainer = styled.View`
  flex-direction: row;
`;
export const ImagePlant = styled.Image`
width: ${vw(100)}px;
height: ${vh(35)}px;
margin-bottom:20px;
z-index: -1;
`;
export const TopContainer = styled.View`
  background-color: ${white};
  width: ${vw(100)}px;
  height: ${vh(3)}px;
  top: ${vh(37)}px;
  border-radius: 35px;  
  z-index: 1;
`;
export const BodyContainer = styled.View`
`;
export const ImgLogo = styled.Image`
  width: ${vw(5)}px;
  height: ${vh(4)}px;
  left: ${vw(4)}px;
`;
export const Text1 = styled.Text`
  fontSize: ${vh(2)}px;
  color: #61AF2B;
  font-weight: bold;
  margin-left: ${vw(10)}px;
  bottom: 17px;
`;
export const Text2 = styled.Text`
  fontSize: ${vh(3)}px;
  color: ${black};
  font-weight: bold; 
  align-items: center;
  left: ${vw(3)}px;
`;

export const TagContainer = styled.View`
  right: ${vw(15)}px;
  margin-top: ${vh(1)}px;
  flex-direction: row;
  justify-content: space-between;
  height: ${vh(4)}px;
  align-items: left;
  overflow: visible;
  padding-horizontal: 80px;
`;
export const Tag1 = styled.Text`
  fontSize: ${vh(1.5)}px;
  color: ${black};
  background-color: #F0F3F6;
  padding: 5px;

`;

export const Text3 = styled.Text`
  margin-top: ${vh(3)}px;
  fontSize: ${vh(2.5)}px;
  color: ${black};
  font-weight: bold;
  align-items: center;
  left: ${vw(3)}px;
`;
export const InfoContainer = styled.View`
  flex-direction: row;
  width: ${vw(100)}px;
  height: ${vh(100)}px;
  z-index: 2;
  overflow: visible;
  bottom: 13px;
`;
export const Box1Container = styled.View`
  position: absolute;
  height: auto;
  margin-top: ${vh(1)}px;
  width: ${vw(50)}px;
  flex-direction: row;
`;
export const Box1 = styled.Image`
  width: ${vw(13)}px;
  height: ${vh(13)}px;
  justify-content: flex-start;
  left: ${vw(4)}px;
`;
export const TextContainer1 = styled.View`
  position: absolute;
  height: auto;
  width: ${vw(33)}px;
  margin-left: ${vw(19)}px;
  flex-direction: column;
`;
export const Title1 = styled.Text`
  margin-top: ${vh(3.5)}px;
  fontSize: ${vh(1.8)}px;
  color: #4B8364;
  font-weight: bold;
`;
export const Info1 = styled.Text`
  fontSize: ${vh(1.8)}px;
  margin-top: ${vh(0.5)}px;
  color: #000000;
`;
export const Box2Container = styled.View`
  position: absolute;
  margin-top: ${vh(1)}px;
  height: ${vh(13)}px;
  width: ${vw(50)}px;
  flex-direction: row;
`;
export const Box2 = styled.Image`
  width: ${vw(13)}px;
  height: ${vh(13)}px;
  justify-content: flex-end;
  margin-left: ${vw(55)}px;
`;
export const TextContainer2 = styled.View`
  position: absolute;
  height: ${vh(10)}px;
  width: ${vw(33)}px;
  flex-direction: column;
  margin-left: ${vw(70)}px;
`;
export const Title2 = styled.Text`
  margin-top: ${vh(3.5)}px;
  fontSize: ${vh(1.8)}px;
  color: #7C95E4;
  font-weight: bold;
`;
export const Info2 = styled.Text`
  margin-top: ${vh(0.5)}px;
  fontSize: ${vh(1.8)}px;
  color: #000000;
`;

export const Box3Container = styled.View`
  position: absolute;
  margin-top: ${vh(10)}px;
  height: ${vh(13)}px;
  width: ${vw(50)}px;
  flex-direction: row;
`;
export const Box3 = styled.Image`
  width: ${vw(13)}px;
  height: ${vh(13)}px;
  justify-content: flex-start;
  left: ${vw(4)}px;
`;
export const TextContainer3 = styled.View`
  position: absolute;
  height: ${vh(10)}px;
  width: ${vw(33)}px;
  margin-left: ${vw(19)}px;
  flex-direction: column;
`;
export const Title3 = styled.Text`
  margin-top: ${vh(3.5)}px;
  fontSize: ${vh(1.8)}px;
  color: #7C95E4;
  font-weight: bold;
`;
export const Info3 = styled.Text`
  margin-top: ${vh(0.5)}px;
  fontSize: ${vh(1.8)}px;
  color: #000000;
`;

export const Box4Container = styled.View`
  position: absolute;
  margin-top: ${vh(10)}px;
  height: ${vh(13)}px;
  width: ${vw(50)}px;
  flex-direction: row;
`;
export const Box4 = styled.Image`
  width: ${vw(13)}px;
  height: ${vh(13)}px;
  justify-content: flex-end;
  margin-left: ${vw(55)}px;
`;
export const TextContainer4 = styled.View`
  position: absolute;
  height: ${vh(10)}px;
  width: ${vw(33)}px;
  flex-direction: column;
  margin-left: ${vw(70)}px;
`;
export const Title4 = styled.Text`
  margin-top: ${vh(3.5)}px;
  fontSize: ${vh(1.8)}px;
  color: #7C95E4;
  font-weight: bold;
`;
export const Info4 = styled.Text`
  margin-top: ${vh(0.5)}px;
  fontSize: ${vh(1.8)}px;
  color: #000000;
`;
export const Box5Container = styled.View`
  position: absolute;
  margin-top: ${vh(19)}px;
  height: ${vh(13)}px;
  width: ${vw(50)}px;
  flex-direction: row;
`;
export const Box5 = styled.Image`
  width: ${vw(13)}px;
  height: ${vh(13)}px;
  justify-content: flex-start;
  left: ${vw(4)}px;
`;
export const TextContainer5 = styled.View`
  position: absolute;
  height: ${vh(10)}px;
  width: ${vw(33)}px;
  margin-left: ${vw(19)}px;
  flex-direction: column;
`;
export const Title5 = styled.Text`
  margin-top: ${vh(3.5)}px;
  fontSize: ${vh(1.8)}px;
  color: #7C95E4;
  font-weight: bold;
`;
export const Info5 = styled.Text`
  margin-top: ${vh(1)}px;
  fontSize: ${vh(1.8)}px;
  color: #000000;
`;
export const Box6Container = styled.View`
  position: absolute;
  margin-top: ${vh(19)}px;
  height: ${vh(13)}px;
  width: ${vw(50)}px;
  flex-direction: row;
`;
export const Box6 = styled.Image`
  width: ${vw(13)}px;
  height: ${vh(13)}px;
  justify-content: flex-end;
  margin-left: ${vw(55)}px;
`;
export const TextContainer6 = styled.View`
  position: absolute;
  height: ${vh(10)}px;
  width: ${vw(33)}px;
  flex-direction: column;
  margin-left: ${vw(70)}px;
`;
export const Title6 = styled.Text`
  margin-top: ${vh(3.5)}px;
  fontSize: ${vh(1.8)}px;
  color: #7C95E4;
  font-weight: bold;
`;
export const Info6 = styled.Text`
  margin-top: ${vh(0.5)}px;
  fontSize: ${vh(1.8)}px;
  color: #000000;
`;
export const Line = styled.View`
  position: absolute;
  height: ${vh(0.1)}px;
  width: ${vw(90)}px;
  margin-top: ${vh(50)}px;
  align-self: center;
  background-color: #D9D9D9;
`;
export const ParagraphContainer = styled.View`
  position: absolute;
  height: ${vh(100)}px;
  width: ${vw(90)}px;
  margin-top: ${vh(51)}px;
  align-self: center;
`;
export const CreText = styled.Text`
  margin-top: ${vh(1)}px;
  fontSize: ${vh(2)}px;
  color: #8C8C8C;
  font-weight: bold;
`;
export const MainText = styled.Text`
  margin-top: ${vh(1)}px;
  fontSize: ${vh(1.8)}px;
  color: #515151;
  justify-content: center;
  margin-left: ${vw(1)}px;

`;
export const TaskbarView = styled.View`
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: ${white};
  position: relative;
  justify-content: center; 
  box-shadow: -5px -2px 1px rgba(0, 0, 0, 0.05);
  /* Các thuộc tính CSS khác cho thanh taskbar */
`;

export const SaveContainer = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: row;
`;

export const SaveButtonText = styled.Text`
  font-size: 16px;
  color: ${black};
  align-self: flex-end;
  font-weight: bold;
  text-align: center;
  margin-left: 5px;
`;

export const Save = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  align-self: flex-start;
`;

export const SaveButton = styled.TouchableOpacity`
  background-color: ${maincolor};
  border-radius: 13px;
  width: 40%;
  height: 50px;
  align-self: center;
  justify-content: center;
`;