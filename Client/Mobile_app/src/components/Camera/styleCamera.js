import styled from 'styled-components';
import { View, Text, Image, Platform } from 'react-native';
import Constants from 'expo-constants';

// default color
export const Colors = {
    maincolor: "#CEF1CF",
    white: "#ffffff",
    black: "#000000",
    gray: "#D9D9D9",
    green: "#61AF2B",
  }
export const StyleContainer=styled.View`
  flex:1;
`
export const HeaderContainer=styled.View`
    justify-content: flex-top; 
    ${Platform.OS === 'android' ? 'margin-top: 10%;' : 'margin-bottom: 5%;'}
`
export const Text1=styled.Text`
    font-size: 22px;
    font-weight: 600;
    color: #ffffff;
    align-self: center;
    
`
export const FlashButton=styled.TouchableOpacity`
    width: 10px;
    height: 5px;
    margin-top: 65px;
    left: 20px;
`;
export const ImageFlash=styled.Image`
    margin-left:10px;
    width: 60px;
    height: 40px;
`
export const Container=styled.View`
    flex: 1;
    background-color: transparent;
    justify-content: flex-end; 
    align-items: center; 
`
export const TakePhotoButton= styled.TouchableOpacity`
    width: 100px;
    height: 100px;
    border-radius: 50px; 
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;

export const ImageCircle=styled.Image`
    width: 70px;
    height: 150px;
`
export const ButtonReweet= styled.TouchableOpacity`
    left: 130px;
    bottom: 90px;
`;
export const RetakeSaveButtons= styled.TouchableOpacity`

`
export const Text2=styled.Text`
    font-size: 22px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 10px;
`
export const Text3=styled.Text`
    font-size: 22px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 10px;
`
export const ButtonClose=styled.TouchableOpacity`
    left: 350px;
    bottom: 20px;
`
