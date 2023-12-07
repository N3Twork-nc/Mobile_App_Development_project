import styled from 'styled-components';
import { View, Text, Image } from 'react-native';
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
  livingroom: "#EEF7E8",
  kitchen: "#E6EAFA",
  bedroom: "#FCF1E3",
  backyard: "#F8E8F8",
}

const { maincolor, white, black, gray, gray_subtype, green, blue, orange, purple, white_gray, livingroom, backyard, bedroom, kitchen } = Colors;

 //screen
 export const StyledContainer = styled.View`
 flex: 1;
 padding: 20px;
 background-color: ${white};

`;

//header
export const HeaderContainer = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  ${Platform.OS === 'android' ? 'margin-top: 10%;' : 'margin-bottom: 40px;'}
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
export const MainTitle = styled.Text`
  font-size: 25px;
  color: ${black};
  font-weight: bold;
  position: absolute;  
`;

// show plant

export const PlantContainer = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Plant1Container = styled.View`
  height: 250px;
  width: 48%;
  border-radius: 13px;
  background-color: ${white_gray};
  border: 0.3px solid ${green};
  align-self: flex-start;
  justify-content: center;
  align-items: center;
`;

export const Plant2Container = styled.View`
  height: 250px;
  width: 48%;
  border-radius: 13px;
  background-color: ${white_gray};
  border: 0.3px solid ${green};
  align-self: flex-start;
  justify-content: center; 
  align-items: center;
`;

export const ImageFrame = styled.Image`
  width: 70%;
  height: 45%;
  border-radius: 13px;
`;

export const PlantName = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: ${black};
  align-self: center;
  margin-top: 5%;
`

export const ButtonContainerWrapper = styled.View`
  align-self: center;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 13%;
  margin-bottom: -10%;
`;
export const IconButton = styled.TouchableOpacity`
  width: 55px;
  height: 50px;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
  tintColor: ${green};
`;

export const ButtonText = styled.Text`
  font-size: 9px;
  font-weight: 500;
  color: ${black};
  margin-top: 5px;
`;