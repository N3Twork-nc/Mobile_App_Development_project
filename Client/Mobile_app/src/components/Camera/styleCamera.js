import styled from 'styled-components';
import { Dimensions,Platform } from 'react-native';
import Constants from 'expo-constants';

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
  const { maincolor, white, black, gray, gray_subtype, green, maintitle} = Colors;
export const StyleContainer=styled.View`
  flex:1;
`
export const HeaderContainer = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: ${vh(7)}px;
  ${Platform.OS === 'android' ? 'margin-top: 13%;' : 'margin-bottom: 5%;'}
`;

export const Text1 = styled.Text`
  font-size: 22px;
  font-weight: 600;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  position: absolute;
  align-items: center;
`;

export const FlashButton = styled.TouchableOpacity`
  position: absolute;
  align-items: flex-start;
  left: 15px;
`;

export const ImageFlash = styled.Image`
  width: 30px;
  height: 30px;
`;

export const ButtonClose = styled.TouchableOpacity`
  position: absolute;
  align-items: flex-end;
  right: 17px;
`;

export const ImageClose = styled.Image`
  width: 20px;
  height: 20px;
`;

//
export const Container = styled.View`
   position: relative;
  align-items: center;
  justify-content: center;
  top: ${vh(70)}px;
  ${Platform.OS === 'android' ? 'margin-top: 7%;' : 'margin-bottom: 0%;'}
`;

export const GalleryButton = styled.TouchableOpacity`
  position: absolute;
  align-items: flex-start;
  left: 18px;
`;

export const ImageGallery = styled.Image`
  width: 38px;
  height: 38px;
`;
export const TakePhotoButton = styled.TouchableOpacity`
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;
export const ImageCircle = styled.Image`
  width: 70px;
  height: 150px;
  align-items:center;
  position: relative;
`;

export const ButtonReweet = styled.TouchableOpacity`
  position: absolute;
  align-items: flex-end;
  right: 23px;
`;
export const ImageReweet = styled.Image`
  width: 30px;
  height: 30px;
  top: 3px;
`;
export const RetakeSaveButtons= styled.TouchableOpacity`

`
<<<<<<< HEAD
export const Text2=styled.Text`
    font-size: 22px;
    font-weight: 600;
    color: #61AF2B;
    margin-bottom: 10px;
`
export const Text3=styled.Text`
    font-size: 22px;
    font-weight: 600;
    color: #61AF2B;
    margin-bottom: 10px;
`
export const ButtonClose=styled.TouchableOpacity`
    left: 350px;
    bottom: 20px;
`
=======

export const Text2 = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${white};
`;

export const Text3 = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${white};
`;
>>>>>>> 48c20d544c6923589a619761016dc46f756e7ee9
