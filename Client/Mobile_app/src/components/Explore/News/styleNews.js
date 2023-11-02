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
  maintitle: "#0B4F06",
  gray_subtype: "#628093",
  livingroom: "#EEF7E8",
  kitchen: "#E6EAFA",
  bedroom: "#FCF1E3",
  backyard: "#F8E8F8",
}

const { maincolor, white, black, gray, gray_subtype, green, maintitle} = Colors;

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
  margin-top: 10px;
  margin-bottom: 10px;
  ${Platform.OS === 'android' ? 'margin-top: 10%;' : 'margin-bottom: 10px;'}
 
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
`;

export const HeaderImageContainer = styled.Image`
  width: 30%;
  height: 100px;
  align-self: flex-end;
  position: absolute;
  z-index: 1; 
  top: -10px;
`
export const MainTitleContainer = styled.View`
  position: absolute;
  width: 78%; 
  height: 50px; 
  background-color: ${maincolor};
  border-radius: 25px; 
  align-items: center;
  justify-content: center; 
  z-index: -1; 
`;

export const MainTitle = styled.Text`
  fontSize: 25px;
  color: ${black};
  font-weight: bold;
  text-align: center;
`;


// Newspaper
export const NewspaperMaintitle = styled.Text`
  fontSize: 20px;
  font-weight: bold;
  color: ${maintitle};
  align-self: center;
  position: relative;
  margin-top:30px;
`
export const SubtitleContainer = styled.View`
    height: 150px;
    width: 100%;
    border-radius: 13px;
    background-color: ${white};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-horizontal: 10px;
    margin-top: 7px;
`;

export const NewspaperThumbnailContainer = styled.Image`
  width: 40%;
  height: 80%;
  border-radius: 10px;  
  margin-right: 10px;   
`;

export const TextNewspaper = styled.View`
  flex: 1;
`;

export const SubText = styled.Text`
  fontSize: 12px;
  font-style: italic;
  font-weight: 500;
  color: ${maintitle};
  overflow: hidden;
`;


export const Line = styled.View`
  height: 1px;
  background-color: ${gray};
  margin-vertical: 10px;
  margin-top: 3%;
`
// main content
 export const MainContent = styled.Text`
  fontSize: 14px;
  font-weight: 400;
  color: ${black};
 `