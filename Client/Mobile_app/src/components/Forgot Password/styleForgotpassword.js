import styled from 'styled-components';
import { Colors, ScreenSize } from '../../store/styles';

const {white, maintitle, border, black} = Colors;
const { vh, vw} = ScreenSize;


 //screen
 export const StyledContainer = styled.View`
 flex: 1;
 justify-content: center;
 align-items: center;
 backgroundColor: ${white};

`;
export const HeaderContainer = styled.View`
    margin-top: ${vh(0)}px;
`;
export const ImgHeader = styled.Image`
    height: ${vh(45)}px;
    width: ${vw(100)}px;
`;
export const TitleContainer = styled.View`
    flex-direction: column;
    width: ${vw(100)}px;
    width: ${vw(85)}px;
    align-self: center; 
    justify-content: center;
    margin-top: ${vh(2)}px;
`;
export const Text1 = styled.Text`
    font-size: ${vh(3)}px;
    font-weight: bold;
    align-self: flex-start;
`;
export const Text2 = styled.Text`
    margin-top:${vh(1)}px;
    font-size: ${vh(2)}px;
    color: ${black};
    align-self: flex-start;
    align-self: center; 
    justify-content: center;
`;

export const InputText1= styled.TextInput`
  background-color: ${white};
  border-radius: 25px;
  margin-top: ${vh(2)}px;
  width: ${vw(85)}px;
  border: 0.4px solid ${border};
  height: ${vw(14)}px;
  align-self: center; 
  justify-content: center;
  padding: 5px 15px;
  font-weight: 500;
  box-shadow: 2px 5px 2px rgba(0, 0, 0, 0.2);
`;

export const InputText2= styled.TextInput`
  top: ${vh(3)}px;
  background-color: ${white};
  border-radius: 25px;
  width: ${vw(85)}px;
  height: ${vw(14)}px;
  border: 0.4px solid ${border};
  align-self: center; 
  justify-content: center;
  padding: 5px 15px;
  font-weight: 500;
  box-shadow: 2px 5px 2px rgba(0, 0, 0, 0.2);
`;

export const ButtonSend = styled.TouchableOpacity`
  background-color: ${maintitle};
  border-radius: 30px;
  width: ${vw(55)}px;
  align-self: center;
  justify-content: center;
  height: ${vh(8)}px; 
  margin-top: ${vh(10)}px; 
`;
export const ButtonText = styled.Text`
  color: ${white};
  align-self: center;
  justify-content: center;
  font-size: ${vw(5)}px;
  font-weight: bold;
  
`;
