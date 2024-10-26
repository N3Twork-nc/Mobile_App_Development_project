import styled from 'styled-components';
import { Platform } from 'react-native';
import { Colors, ScreenSize } from '../../store/styles';

const { maincolor, white, black} = Colors;
const { vh, vw } = ScreenSize;
 //screen
 export const StyledContainer = styled.View`
    flex: 1;
    background-color: ${white};
`;

export const HeaderContainer = styled.View`
    flex: 1;
    width: ${vw(100)}px;
    height: ${vh(10)}px;
    background-color: ${maincolor};
    ${Platform.OS === 'android' ? 'margin-top: 10%' : 'margin-top: 0px;'}
`;

export const TitleContainer = styled.View`
  position: relative;
  align-items: center;
  justify-content: center; 
  width: 100%;  
  margin-top: 10px;
`;
export const MainTitle = styled.Text`
  font-size: 25px;
  color: ${black};
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
export const Text1 = styled.Text`
  font-size: 24px;
  color: #1A5D1A;
  font-weight: bold;
  align-self: center;
  padding-top: ${vh(2)}px;
`;

export const NoteContainer = styled.View`
  width: ${vw(95)}px;
  height: ${vh(10)}px;
  align-self: center;  
  flex-direction: row;
`;

export const InputNote = styled.TextInput`
  background-color: ${white};
  border-radius: 10px;
  margin-top: ${vh(1.2)}px;
  width: ${vw(95)}px;
  height: ${vh(7)}px;
  align-self: center;  
  justify-content: center;
  padding: 5px 15px;
  font-weight: 500;
  border: #076F0C; 
`;

export const NoteImage = styled.Image`
  position: absolute;
  width: ${vw(10)}px;
  height: ${vh(11)}px;
  right: ${vw(1)}px;
 `;

export const ReviewContainer = styled.View`
  position: relative;
  align-items: center;
  justify-content: center; 
  width: ${vw(95)}px;
  align-self: center;  
  justify-content: center;
`;

export const TextReview = styled.Text`
  font-size: ${vh(1.5)}px;
  color: #5E625E;
  padding-top: ${vh(2)}px;
  align-self: center;  
  justify-content: center;
  font-style: italic;
`;

export const DetailContainer = styled.View`
  position: relative;
  width: ${vw(95)}px;
  align-self: center;  
  background-color: ${white}; 
  height: ${vh(10)}px;
  flex-direction: row;
  z-index: 0; 
`;
export const DetailText = styled.Text`
  font-size: ${vh(2)}px;
  color: #1A5D1A;
  padding-top: ${vh(2)}px;
  font-weight: bold;
  align-items: flex-start;
  left: ${vw(2)}px;
`;
export const DetailImage = styled.Image`
  top: ${vh(0.5)}px;
  left: ${vw(1.7)}px;
  width: ${vw(10)}px;
  height: ${vh(5)}px;
`;

export const StartContainer = styled.View`
  position: absolute;
  top: ${vh(5)}px;
  width: ${vw(48)}px;
  background-color: ${white}; 
  height: ${vh(7)}px;
  border-radius: 10px;
  border: ${maincolor}; 
  flex-direction: 'row';
  align-items: center;
  justify-content: center;
`;
export const TextStart = styled.Text`
  font-size: ${vh(2)}px;
  left:${vw(2)}px;
  color: #1A5D1A;
  align-self: flex-start;
`;

export const DateContainer = styled.View`
  position: absolute;
  top: ${vh(5)}px;
  width: ${vw(47)}px;
  background-color: ${white}; 
  height: ${vh(7)}px;
  flex-direction: 'row';
  border-radius: 10px;
  border: ${maincolor}; 
  left: ${vw(49)}px;
  align-items: center;
  justify-content: center;
`;
export const TextDate = styled.Text`
  font-size: ${vh(2)}px;
  left:${vw(2)}px;
  color: #1A5D1A;
  align-self: flex-start;
`;
export const InputDate = styled.TextInput`
  position: absolute; 
  background-color: ${white};
  font-size: ${vh(2)}px;
  width: ${vw(25)}px;
  align-self: center;
  left:${vw(15)}px;
`;

export const FrequencyContainer = styled.View`
  top: ${vh(2)}px;
  position: relative;
  width: ${vw(95)}px;
  align-self: center;  
  background-color: ${white}; 
  height: ${vh(10)}px;
  flex-direction: row;
`;

export const FrequencyText = styled.Text`
  font-size: ${vh(2)}px;
  color: #1A5D1A;
  padding-top: ${vh(2)}px;
  font-weight: bold;
  align-items: flex-start;
  left: ${vw(2)}px;
`;
export const FrequencyImage = styled.Image`
  top: ${vh(0.5)}px;
  width: ${vw(10)}px;
  height: ${vh(5)}px;
  left: ${vw(2)}px;
`;
export const EachContainer = styled.View`
  position: absolute;
  top: ${vh(5)}px;
  width: ${vw(48)}px;
  background-color: ${white}; 
  height: ${vh(7)}px;
  flex-direction: 'row';
  border-radius: 10px;
  border: ${maincolor}; 
  
`;
export const WorkContainer = styled.View`
  position: absolute;
  top: ${vh(5)}px;
  width: ${vw(47)}px;
  background-color: ${white}; 
  height: ${vh(7)}px;
  flex-direction: 'row';
  border-radius: 10px;
  border: ${maincolor}; 
  left: ${vw(49)}px;
`;

export const TextEach = styled.Text`
  font-size: ${vh(2)}px;
  color: #1A5D1A;
  align-items: flex-start;
  padding-top: ${vh(2)}px;
  left: ${vw(2)}px;
`;
export const InputEach = styled.TextInput`
  position: absolute; 
  background-color: ${white};
  font-size: ${vh(2)}px;
  width: ${vw(25)}px;
  padding-top: ${vh(2)}px;
  left: ${vw(20)}px;
`;

export const TextDay = styled.Text`
  font-size: ${vh(2)}px;
  color: #1A5D1A;
  align-items: flex-start;
  padding-top: ${vh(2)}px;
  left: ${vw(2)}px;
`;
export const InputDay = styled.TextInput`
  position: absolute; 
  background-color: ${white};
  font-size: ${vh(2)}px;
  width: ${vw(25)}px;
  padding-top: ${vh(2)}px;
  left: ${vw(18)}px;
`;
// signout
export const ButtonCreateReminder= styled.TouchableOpacity`
  background-color:  #1A5D1A;
  border-radius: 20px;
  width: 50%;
  height: 50px;
  align-self: center;
  justify-content: center;
  position: relative;
  margin-top: ${vh(12)}px;
`
export const ButtonCreate = styled.Text`
  font-size: 20px;
  color: ${white};
  font-weight: bold;
  text-align: center;
`
export const InputTimeCon = styled.View`
  position: absolute;
  left: ${vw(16)}px;
  width: ${vw(19)}px;
  height: ${vh(4)}px;
  flex-direction: row;
  align-self: center;
`;
export const TextSpace = styled.Text`
  margin-left: ${vw(1.5)}px;
  margin-top: ${vh(0.5)}px;
`;
export const TextInputHours = styled.TextInput`
  margin-left: ${vw(2.5)}px;
  font-size: ${vh(2)}px;
  align-self: center;
`;
export const TextInputMin = styled.TextInput`
  margin-left: ${vw(1.5)}px;
  font-size: ${vh(2)}px;
  align-self: center;
`;
export const TextTime = styled.Text`
  position: absolute;
  font-size: ${vh(2)}px;
  color: #1A5D1A;
  left: ${vw(38)}px;
  align-self: center;

`;
export const DecorContainer = styled.View`
  position: relative;
  width: 100%;
`;
export const ImgDecor = styled.Image`
  position: relative;
  width: ${vw(100)}px;
  height: ${vh(50)}px;
`;
export const AllNoteContainer = styled.View`
  margin-bottom: 20px;
`;
export const TitleNoteContainer = styled.View`
  align-items: center;
  justify-content: center; 
  margin-top: ${vh(3)}px;
  margin-bottom: 10px;
`;
export const TitleMainNote = styled.Text`
  font-size: 20px;
  color: #274227;
  font-weight: bold;
  align-self: flex-start;
  left:15px;
`;

export const NoteImg = styled.Image`
  position: absolute;
  width: 30px;
  height: 30px;
  align-self: flex-end;
  right: 15px;
 `;
 
 export const Note1Con = styled.View`
 width: ${vw(100)}px;
 margin-top: 10px;
 align-self: center;
 justify-content: center;
 margin-bottom: 5px;
`;
export const CheckboxContainer = styled.View`
  position: absolute;
  border-radius: 15px;   
  background-color: '#ffffff';
  left:${vw(2)}px; 
`;
export const CheckboxButton= styled.TouchableOpacity`
  border-radius: 20px;
  width: ${vw(8)}px;
`
export const NoteBoxCon = styled.View`
  align-self: center;
  width: ${vw(85)}px;
  height: 70px;
  left:${vw(3)}px; 
  border-top-right-radius: 10px; 
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px; 
  border-bottom-left-radius: 10px;
  background-color: #ffffff;
`;
export const Line = styled.View`
  width: ${vw(2)}px;
  height: 70px; 
  border-top-left-radius: 30px; 
  border-bottom-left-radius: 30px;
  background-color:  #076F0C;
`;
export const ContentBox= styled.View`
position: absolute;
margin-left: 20px;
width: ${vw(80)}px;
margin-top: 5px;
`;
export const TitleBoxNote = styled.Text`
  font-size: 15px;
  color: #1A5D1A;
  font-weight: bold;
`;

export const ContentText = styled.Text`
  font-size: 15px;
  color: #111111;
`;
