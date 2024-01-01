import styled from 'styled-components';
import { View, Text, Image, Platform } from 'react-native';
import Constants from 'expo-constants';

// default color
export const Colors = {
  maincolor: "#CEF1CF",
  white: "#ffffff",
  black: "#000000",
  gray: "#D9D9D9",
  green: "#61AF2B", blue: "#5676DC", orange: "#E6B44C", purple: "#A559D9",
  white_gray: "#F8F8F8",
  gray_subtype: "#628093",
  explore: "#E7FFE8"
}

const { maincolor, white, black, explore, gray_subtype, green, blue, orange, purple, white_gray, livingroom, backyard, bedroom, kitchen } = Colors;

//screen
export const StyledContainer = styled.View`
    flex: 1;
    padding: 20px;
    background-color: ${white};
    height: 100%;

`;


//header
export const HeaderContainer = styled.View` 
  position: relative;
  align-items: center;
  justify-content: center;
  ${Platform.OS === 'android' ? 'margin-top: 5%;' : 'margin-bottom: 10px;'}
`;

export const MainTitle = styled.Text`
  font-size: 25px;
  color: ${black};
  font-weight: bold;
  align-self: flex-start;
`;
export const SearchContainer = styled.TouchableOpacity`
  position: absolute;
  align-self: flex-end;  
`;

export const ButtonSearch = styled.Image`
  width: 22px;
  height: 22px;
  align-self: flex-end;
`;
// Newspaper
export const NewspaperContainer = styled.TouchableOpacity`
    height: 150px;
    width: 100%;
    border-radius: 13px;
    border: 1px solid ${green};
    background-color: ${white};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-horizontal: 10px;
    margin-top: 7px;
`;

export const NewspaperImageContainer = styled.Image`
  width: 40%;
  height: 80%;
  border-radius: 10px;  
  margin-right: 10px; 
  
`;

export const TextNewspaper = styled.View`
  flex: 1;
`;

export const MainText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;  
`;

export const SubText = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: ${gray_subtype};
  overflow: hidden;
`;

export const MoreContainer = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

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