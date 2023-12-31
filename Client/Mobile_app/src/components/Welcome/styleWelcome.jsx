import styled from 'styled-components';
import { Colors, ScreenSize } from '../../store/styles';
const { vh, vw} = ScreenSize;
const { maincolor, white, black,} = Colors;

 //screen
 export const StyledContainer = styled.View`
 flex: 1;
 background-color: ${maincolor};
 justify-content: center;
`;

// all items
export const InnerContainer = styled.View`
 width: 100%;
 align-items: center;
 justify-content: center;
 position: relative;
 
`;
 
//slogan
export const Slogan = styled.Text`
color: #0B4F06;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
fontSize: ${vh(5.3)}px;
font-style: normal;
font-weight: bold;
margin-top: ${vh(1)}px;
width: ${vw(90)}px;
padding-left: ${vh(3)}px;
`;

export const ButtonSignup = styled.TouchableOpacity`
  margin-top: ${vh(3)}px;
  border-radius: 30px;
  background-color: ${black};
  width: ${vw(60)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${vh(8)}px;
`;
export const ButtonText = styled.Text`  
  fontSize: ${vh(3)}px;
  color: ${white};
  font-weight: bold;
  text-align: center;
`;
export const OthersText = styled.Text`
  fontSize: ${vh(2.4)}px;
  margin-top: ${vh(3)}px;
  color: ${black};
  font-weight: bold;
  align-self: center;
`;

export const ImgPlant=styled.Image`
  width: ${vw(80)}px;
  height: ${vh(40)}px;
  flex-shrink: 0;
  margin-top:${vh(5)}px;
  z-index: 1;
  `;

  export const ImgCloud=styled.Image`
  width: ${vw(100)}px;
  height: ${vh(38)}px;
  z-index: 0;
  align-items: center;
  justify-content: center;
  position: absolute;
  `;

