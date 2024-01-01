import styled from 'styled-components';
import { View, Text, Image, Platform } from 'react-native';
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
  line: "#B3B3B3",
}


const { width, height } = Dimensions.get('window');
// Chuyển đổi giá trị vh sang giá trị số
const vh = percent => (percent * height) / 100;
// Chuyển đổi giá trị vw sang giá trị số
const vw = percent => (percent * width) / 100;

const { maincolor, maintext,line, buttoncolor,gray, white, black, containerprofile, sectiontitle, green, blue, orange, purple, white_gray, livingroom, backyard, bedroom, kitchen } = Colors;

 //screen
 export const StyledContainer = styled.View`
 flex: 1;
 padding: 20px;
 z-index: -1;
 height: 100%;
`;
//Header
export const HeaderContainer = styled.View`
  align-items: center;
  justify-content: center; 
  flexDirection: column;  
  height: ${vh(22)}px;
  background-color: ${maincolor}; 
  ${Platform.OS === 'android' ? 'margin-top: 7%;' : 'margin-bottom: 5%;'}
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
export const NotificationContainer = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  align-items: flex-start;
`;

export const ButtonNotification = styled.Image`
  width: 22px;
  height: 22px;
  align-self: flex-start;
  left: 20px;
`;
export const AvatarContainer = styled.View`
  align-items: center;
  top: ${vh(10.5)}px;
  z-index: 1;
`
export const AvatarImage = styled.Image`
  backgroundColor: ${white};
  width: 130px;
  height: 130px;
`


//style container
export const Name = styled.Text`
  align-self: center;
  color: ${black};
  fontSize: ${vw(4.5)}px;
  font-weight: bold;
  ${Platform.OS === 'android' ? 'margin-top: 17%' : 'margin-top: 15%;'}
`
export const ButtonEditProfile = styled.TouchableOpacity`
  background-color: ${buttoncolor};
  border-radius: 10px;
  width: 38%;
  height: 37px;
  align-self: center;
  justify-content: center;
  position: relative;
`
export const EditButtonText = styled.Text`
  font-size: 15px;
  color: ${white};
  font-weight: 500;
  text-align: center;
`

//detail
export const SectionTitle = styled.Text`
  font-size: 16px;
  color: ${sectiontitle};
  font-weight: 500;
  text-align: left;
  margin-top: ${vh(3)}px;
`
export const SectionContainer = styled.View`
  width: 100%;
  height: auto;
  margin-top: ${vh(1)}px;
  border: 0.3px solid ${green};
  borderRadius: 12px;
  backgroundColor: ${containerprofile};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`
export const SectionContainer1 = styled.View`
  width: 100%;
  height: auto;
  margin-top: ${vh(1)}px;
  border: 0.3px solid ${green};
  borderRadius: 12px;
  backgroundColor: ${containerprofile};
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

export const ChildSectionContainer = styled.View`
  padding: 10px;
  width: 100%;
  flexDirection: row;
  align-self: center;

`
export const ChildSectionText = styled.Text`
  font-size: 17px;
  color: ${maintext};
  font-weight: 500;
  flex: 1;
  justify-content: center;
  align-self:center;
  margin-left: ${vw(2)}px;
  `
export const ChildSectionIcon = styled.Image`
  width: 24px;
  height: 24px;
  align-self: center;
  align-items: flex-start;
`
export const ChildSectionInfo = styled.Text`
  font-size: 16px;
  color: ${sectiontitle};
  align-items: flex-end;
`
export const Line = styled.View`
  height: 1px;
  background-color: ${line};
  width: 93%;
  align-self: center;
  margin-vertical: 1px;
`
export const ChildSectionButtonContainer = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  align-items: flex-end;

`;
export const ChildSectionButton = styled.Image`
  width: 40px;
  height: 30px;
`;
// signout
export const ButtonSignOut = styled.TouchableOpacity`
  background-color: ${buttoncolor};
  border-radius: 20px;
  width: 50%;
  height: 50px;
  align-self: center;
  justify-content: center;
  position: relative;
  margin-top: 20px;
`
export const SignoutButtonText = styled.Text`
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