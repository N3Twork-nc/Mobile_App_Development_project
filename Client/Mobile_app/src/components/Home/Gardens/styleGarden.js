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
 padding:20px;
 background-color: ${white};
`;

 
//header
export const HeaderContainer = styled.View`
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  ${Platform.OS === 'android' ? 'margin-top: 15px;' : 'margin-top: 12px;'}
`;
export const BackContainer = styled.TouchableOpacity`
  align-items: flex-start;
`;
export const AddContainer = styled.TouchableOpacity`
 align-items: flex-end;
`

export const MainTitle = styled.Text`
  font-size: 25px;
  color: ${black};
  font-weight: bold;  
`;

export const ButtonBack = styled.Image`
  width: 22px;
  height: 22px;
  align-self: flex-start;
`;



export const ButtonAdd = styled.Image`
  width: 22px;
  height: 22px;
  align-self: flex-end;
`