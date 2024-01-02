import styled from 'styled-components';
import { Colors, ScreenSize } from '../../store/styles';
const { vh, vw} = ScreenSize;
const {  white, black, } = Colors;

 //screen
 export const StyledContainer = styled.View`
 flex: 1;
 padding: 20px;
 background-color: ${white};
 justify-content: center;
 position: fixed;
 
`;
//header
export const HeaderContainer = styled.View` 
  flexDirection: 'row';
  align-items: center;
  justify-content: center;
  flex: 1;
`;

// all items
export const InnerContainer = styled.View`
 z-index: 1;
 justify-content: center;
 top: ${vh(5)}px;
`;
 
//slogan
export const Slogan = styled.Text`
  flex: 0.5;
  fontSize: ${vh(3.5)}px;
  margin-top: ${vh(1)}px;
  color: ${black};
  font-weight: bold;
  color: #0B4F06;text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-items: flex-end;
`;

export const ButtonConfirm = styled.TouchableOpacity`
  margin-top:  ${vh(0.5)}px;
  background-color: ${black};
  width: ${vw(70)}px;
  height: ${vh(8)}px;
  margin-top:  ${vh(2)}px;
  border-radius: 30px;
  align-self: center;
  justify-content: center;
`;
export const ButtonText = styled.Text`
  fontSize: 25px;
  color: ${white};
  font-weight: bold;
  text-align: center;
`;

export const Text1 = styled.Text`
  color: #000000;
  fontSize: ${vh(2)}px;
  text-align: center;
  margin-top:  ${vh(0.5)}px;
  top: ${vh(3)}px;
`;
export const Text0 = styled.Text`
  color: #000000;
  fontSize: ${vh(2)}px;
  text-align: center;
  top:  ${vh(4)}px;
`;
export const Text2 = styled.Text`
  color: #000000;
  font-size: ${vh(2)}px;
  font-weight: 600;
  position: relative;
  text-align: center;
  top:  ${vh(5)}px;

`;
export const OthersText1 = styled.Text`
  color: #000000;
  font-size: ${vh(2)}px;
  font-weight: 400;
  opacity: 0.5; 
  position: relative;
  text-align: center;
  margin-top: 30px;
`;

export const Text3 = styled.Text`
  color: #000000;
  font-size: ${vh(2)}px;
  font-weight: 400;
  opacity: 0.5; 
  position: relative;
  text-align: center;
`;
export const ButtonTextEllipse= styled.TextInput`
  margin-bottom: 10px;
  width: 50px; 
  height: 50px; 
  background-color: #f6f6f6;
  border: 2px solid #0b4f06; 
  margin: 5px;
  text-align: center;
  border-radius: 50px; 
`;
export const ImgHead=styled.Image`
  width: ${vw(100)}px;
  height: ${vh(50)}px;
  position: absolute;
  top: 0;

`;

export const ImgLeaf=styled.Image`
  width: ${vw(22)}px;
  height: ${vh(14)}px;
  top: ${vh(35)}px;
  position: absolute;
  align-items: flex-end;
`;
export const BoxContainer = styled.View`
  margin-top: ${vh(12)}px;
  flexDirection: row;
  align-items: center;
  margin-right: 10px;
  justify-content: center;

`;

export const TextInput= styled.TextInput`
  margin-bottom: 10px;
  width: 50px; 
  height: 50px; 
  background-color: #f6f6f6;
  border: 2px solid #0b4f06; 
  margin: 5px;
  text-align: center;
  border-radius: 50px; 
`;
