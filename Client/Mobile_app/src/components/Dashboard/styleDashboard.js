import styled from 'styled-components';
import {  Platform } from 'react-native';
import { Dimensions,  } from 'react-native';
// default color
export const Colors = {
  maincolor: "#F2F9F2",
  white: "#FFFFFF",
  black: "#000000",
  gray: "#D9D9D9",
  green: "#61AF2B", 
  containerprofile: "#EEF7E8",
  white_gray: "#F8F8F9",
  gray: "#4E4E4E",
  sectiontitle: "#4E4E4E",
  buttoncolor: "#1A5D1A",
  maintext: "#164303",
  line: "#B3B3B3",
  livingroom: "#EEF7E8",
  kitchen: "#E6EAFA",
  bedroom: "#FCF1E3",
  backyard: "#F8E8F8",
}


const { width, height } = Dimensions.get('window');
// Chuyển đổi giá trị vh sang giá trị số
const vh = percent => (percent * height) / 100;
// Chuyển đổi giá trị vw sang giá trị số
const vw = percent => (percent * width) / 100;

const { maincolor, maintext,line, buttoncolor,gray, white, black, containerprofile, sectiontitle, green, blue, orange, purple, white_gray, livingroom, backyard, bedroom, kitchen } = Colors;

export const Line = styled.View`
  height: 1px;
  background-color: ${line};
  width: 100%;
  margin-bottom: 15px;
  align-self: center;
`
 //screen
 export const StyledContainer = styled.View`
 flex: 1;
 padding: 20px;
 z-index: -1;
 height: 100%;
 backgroundColor: ${white};
`;
//Header
export const HeaderContainer = styled.View`
  position: relative;
  align-items: center;
  justify-content: center; 
  height: ${vh(7)}px;
  backgroundColor: ${white};
  ${Platform.OS === 'android' ? 'margin-top: 7%;' : 'margin-top:0;'}
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

//Infor 
export const NowBoardContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-horizontal: auto;
`;

export const NowBoard= styled.View`
  height: 35px;
  border: 0.5px solid ${green};
  backgroundColor: ${maincolor};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const NowBoardText = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: ${maintext};
    align-self: center;
`
// Garden info
export const GardenInfo = styled.View`
  height: 150px;
  border-radius: 13px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  padding-horizontal: 5px;
  margin-bottom: 20px;
`;

// Image
export const ImageContainer = styled.TouchableOpacity`
  align-items: flex-start;
  width: 80%;

`;

export const GardenImage = styled.Image`
  width: 100%;
  height: 150px;
`;

// Buttons
export const ButtonsContainer = styled.View`
  align-items: center;
  width: 18%;
  border-radius: 13px;
  height: 150px;
  border: 0.5px solid ${green};
  flex-direction: column;
  justify-content: center;
  padding-vertical: 50px;
`;
export const EditContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;
export const EditButton = styled.Image`
  width: 20px;
  height: 20px;
`;
export const SwitchContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
export const SwitchButton = styled.Image`
  width: 26px;
  height: 26px;
`;
// id
export const IDContainer = styled.View`
  margin-bottom: 10px;
  justifyContent: flex-end;
  flex-direction: row;
  margin-right: 10px;

`
export const IDTilte = styled.Text`
 font-size: 15px;
  font-weight: bold;
  color: ${black};
`
export const IDText = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: ${black};
  marginRight: 10px;
`
export const EyeIcon = styled.Image`
  height: ${vh(3)}px;
  width: ${vh(3)}px;
`;

// dashboard
export const DashBoardContainer = styled.View`
  height: 150px;
  width: 100%;
  border-radius: 13px;
  border: 0.2px solid ${green};
  background-color: ${maincolor};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 5px;
  margin-top: 15px;
`;
export const IconContainer = styled.Image`
   width: 30px;
  height: 35px;
  align-self: center;
  margin-left: 10px;
`;
export const CircularProgressContainer = styled.View`
  width: 36%;
  height: 70%;
  border-radius: 10px;  
  align-items: center;
  z-index: -1;
  justify-content: center;
`;
export const TextContainer = styled.TouchableOpacity`
  flex: 1;
  align-self: center;
  margin-left: 5px;
  margin-right: 0px;
`;
export const ItemText = styled.Text`
  font-size: 10px;
  font-weight: bold;
  position: absolute;
  z-index: 1;
`;




export const MainText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;  
  width: 100%;
`;

export const SubText = styled.Text`
  font-size: 12px;
  font-weight: 400;
  overflow: hidden;
`;

export const MoreContainer = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

