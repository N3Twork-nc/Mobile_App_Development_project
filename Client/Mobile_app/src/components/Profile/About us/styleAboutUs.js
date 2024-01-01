import styled from 'styled-components';
import { Dimensions, Platform} from 'react-native';

// default color
export const Colors = {
  maincolor: "#CEF1CF",
  white: "#ffffff",
  black: "#000000",
  gray: "#333333",
  green: "#0B4F06", blue: "#5676DC", orange: "#E6B44C", purple: "#A559D9",
  white_gray: "#F8F8F8",
  maintitle: "#0B4F06",
  gray_subtype: "#628093",
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

const { maincolor, white, black, green, gray} = Colors;

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
  margin-top: ${vh(1.8)}px;
  margin-bottom: ${vh(1.8)}px;
  ${Platform.OS === 'android' ? 'margin-top: 10%' : 'margin-top: 10px;'}
 
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


export const MainTitleContainer = styled.View`
  position: absolute;
  width: ${vw(100)}px;
  height: ${vh(10)}px; 
  align-items: center;
  justify-content: center; 
  z-index: -1; 
`;

export const MainTitle = styled.Text`
  fontSize: ${vh(3.6)}px;
  color: ${green}; 
  font-weight: bold;
  text-align: center;
  align-items: center;
`;

// logo
export const LogoContainer = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
`
export const LogoImage = styled.Image`
  height: 150px;
  width: 150px;
`

// description
export const Des = styled.Text`
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 15px;
  width: 100%;
  align-self: center;
  justify-content: center;
`
// cover
export const CoverImage = styled.Image`
  height: 150px;
  width: 100%;
  align-self: center;
`

// member team
export const TeamTitle = styled.Text`
  fontSize: ${vh(3.3)}px;
  color: ${green}; 
  font-weight: bold;
  margin-bottom: 15px;
  margin-top: 10px;
  text-align: center;
  align-items: center;
`;

export const MembersContainer = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const EachMemContainer = styled.View`
  height: 290px;
  width: 49%;
  border-radius: 13px;
  border: 0.3px solid ${green};
  align-self: flex-start;
  justify-content: center;
  align-items: center;
`;

export const ImageFrame = styled.Image`
  width: 90%;
  height: 70%;
  border-radius: 13px;
`;

export const Name = styled.Text`
  font-size: 13px;
  font-weight: 600;
  color: ${black};
  align-self: center;
  margin-top: 3%;
  margin-bottom: 3px;
`
export const Position = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: ${gray};
  align-self: center;
`
export const Copyright = styled.Text`
  font-size: 15px;
  font-weight: 600;
  margin-top: 20px;
  color: ${black};
  align-self: center;
`