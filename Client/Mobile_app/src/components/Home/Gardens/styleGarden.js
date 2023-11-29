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

// all items
export const HeaderContainer = styled.View`
position: relative;
align-items: center;
background-color: ${white};
margin-top: ${vh(7)}px;
flex-direction: row;
${Platform.OS === 'android' ? 'margin-top: 7%;' : 'margin-bottom: 0%;'} 
`;
 
//slogan
export const Title = styled.Text`
font-size: 25px;
color: ${black};
font-weight: bold;
align-self: center;
padding: ${vw(5)}px;
`;
export const ButtonBack = styled.TouchableOpacity`
  background-color: ${maincolor};
  border-radius: 30px;
  width: ${vw(20)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${vh(5)}px; 
`;
export const ButtonText = styled.Text`
  fontSize: ${vh(1.5)}px;
  color: ${black};
  font-weight: bold;
  text-align: center;
`;
export const ButtonAdd = styled.TouchableOpacity`
  background-color: ${maincolor};
  border-radius: 30px;
  width: ${vw(20)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${vh(5)}px; 
`;
export const ButtonText1 = styled.Text`
  fontSize: ${vh(3)}px;
  color: ${black};
  font-weight: bold;
  text-align: center;
`;