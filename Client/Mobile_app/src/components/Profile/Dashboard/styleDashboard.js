import styled from 'styled-components';
import {  Platform } from 'react-native';
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

export const Line = styled.View`
  height: 1px;
  background-color: ${line};
  margin-vertical: 6px;
  width: 93%;
  align-self: center;
`
 //screen
 export const StyledContainer = styled.View`
 flex: 1;
 padding: 20px;
 z-index: -1;
 height: 100%;
`;
//Header
export const HeaderContainer = styled.View`
  position: relative;
  align-items: center;
  justify-content: center; 
  height: ${vh(7)}px;
  ${Platform.OS === 'android' ? 'margin-top: 5%;' : 'margin-top: 5%;'}
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

//Infor 
export const NowBoardContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7px;
`;

export const NowBoard = styled.View`
  height: 50px;
  border-radius: 13px;
  background-color: ${white_gray};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-horizontal: 20px;
`;

export const NowBoardText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${maintext};
    align-self: center;
`
// dashboard
export const DashBoardContainer = styled.View`
  height: 150px;
  width: 100%;
  border-radius: 13px;
  border: 2px solid ${green};
  background-color: ${white};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 10px;
  margin-bottom: 7px;

`;

export const CircularProgressContainer = styled.View`
  width: 40%;
  height: 80%;
  border-radius: 10px;  
  align-items: center;
  z-index: -1;
  justify-content: center;
`;

export const ItemText = styled.Text`
  font-size: 11px;
  font-weight: bold;
  position: relative; /* Thêm thuộc tính position: absolute */
  z-index: 1;
`;


export const TextContainer = styled.TouchableOpacity`
  flex: 1;
  left: 10px;
`;

export const MainText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;  
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

