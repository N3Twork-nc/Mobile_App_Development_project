import styled from 'styled-components';
import { Platform } from 'react-native';
import { Dimensions,  } from 'react-native';
// default color
export const Colors = {
  maincolor: "#CEF1CF",
  white: "#FFFFFF",
  black: "#000000",
  gray: "#D9D9D9",
  green: "#61AF2B", 
  containerprofile: "#EEF7E8",
  white_gray: "#F8F8F8",
  gray: "#4E4E4E",
  sectiontitle: "#4E4E4E",
  buttoncolor: "#1A5D1A",
  maintext: "#164303",
  border: "#164303",
}


const { width, height } = Dimensions.get('window');
// Chuyển đổi giá trị vh sang giá trị số
const vh = percent => (percent * height) / 100;
// Chuyển đổi giá trị vw sang giá trị số
const vw = percent => (percent * width) / 100;

const { maincolor, maintext, border , buttoncolor, white, black, sectiontitle } = Colors;

 //screen
 export const StyledContainer = styled.View`
 flex: 1;
 padding: 20px;
 z-index: -1;
 height: 100%;
 margin-top: ${vh(7)}px;
`;
//Header
export const HeaderContainer = styled.View`
  position: relative;
  align-items: center;
  justify-content: center; 
  height: ${vh(22)}px;
  background-color: ${maincolor}; 
  ${Platform.OS === 'android' ? 'margin-top: 10%;' : 'margin-bottom: 5%;'}
`;
export const TitleContainer = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center; 
  width: 100%;  
  top: ${vw(5)}px;
`;
export const MainTitle = styled.Text`
  font-size: 25px;
  color: ${maintext};
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
export const AvatarContainer = styled.TouchableOpacity`
  align-items: center;
  top: ${vh(10.5)}px;
  z-index: 1;
`
export const AvatarImage = styled.Image`
  backgroundColor: ${white};
  width: ${vh(20)}px;
  height: ${vh(20)}px;
`



//detail
export const SectionTitle = styled.Text`
  font-size: 16px;
  color: ${sectiontitle};
  font-weight: 500;
  text-align: left;
  
  margin-top: ${vh(2)}px;
`
export const InputText = styled.TextInput`
  background-color: ${white};
  border-radius: 13px;
  margin-top: ${vh(1)}px;
  width: ${vw(80)}px;
  height: ${vw(14)}px;
  align-self: center; 
  justify-content: center;
  padding: 5px 15px;
  font-weight: 500;
  font-size: 14px;
  border: 1px solid ${border};
`;

// signout
export const ButtonSavechange = styled.TouchableOpacity`
  background-color: ${buttoncolor};
  border-radius: 20px;
  width: 50%;
  height: 50px;
  align-self: center;
  justify-content: center;
  position: relative;
  margin-top: 20px;
`
export const SavechangeButtonText = styled.Text`
  font-size: 20px;
  color: ${white};
  font-weight: bold;
  text-align: center;
`

//Taskbar
export const TaskbarView = styled.View`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 55px;
  background-color: ${white};
  box-shadow: -5px -2px 1px rgba(0, 0, 0, 0.05);
  position: relative;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5px;
  /* Các thuộc tính CSS khác cho thanh taskbar */
`;

export const ContainerButton = styled.TouchableOpacity`
  height: 100%;
  width: 18%;
  border-radius: 13px;
  align-self: flex-start;
  justify-content: center;
  align-items: center; 
  margin-bottom: 0;
`;

export const TaskbarIcon = styled.Image`
  width: 65%;
  height: 45%;
`;

export const TaskbarButtonText = styled.Text`
  font-size: 10px;
  font-weight: 600;
  color: ${black};
  margin-top: 5px;
  align-self: center;
`;