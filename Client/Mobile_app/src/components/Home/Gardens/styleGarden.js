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
  ${Platform.OS === 'android' ? 'margin-top: 15px;' : 'margin-top: 0px;'}
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

// show plant

export const GardenContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

export const EachGardenContainer = styled.View`
  height: 200px;
  width: 48%;
  border-radius: 5px;
  background-color: ${white};
  border: 0.3px solid ${green};
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImageFrame = styled.Image`
  width: 80%;
  height: 45%;
  border-radius: 5px;
`;

export const GardenName = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: ${black};
  margin-top: 7%;
`

export const ButtonContainerWrapper = styled.View`
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  top: 5%;
`;
export const IconButton = styled.TouchableOpacity`
  width: 55px;
  height: 50px;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 22px;
  height: 22px;
  tintColor: ${green};
`;

export const ButtonText = styled.Text`
  font-size: 10px;
  font-weight: 500;
  color: ${black};
  margin-top: 5px;
`;