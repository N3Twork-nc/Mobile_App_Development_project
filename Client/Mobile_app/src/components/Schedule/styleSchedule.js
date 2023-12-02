import styled from 'styled-components';
import { Dimensions } from 'react-native';

// Lấy kích thước màn hình
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

const { maincolor, white, black, gray, green } = Colors;

 //screen
 export const StyledContainer = styled.View`
    flex: 1;
    height: 100%;
    background-color: ${white};
`;

export const HeaderContainer = styled.View`
    flex: 1;
    width: ${vw(100)}px;
    height: ${vh(15)}px;
    background-color: ${maincolor};
`;

export const TitleContainer = styled.View`
  position: relative;
  align-items: center;
  justify-content: center; 
  width: 100%;  
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
  flex-direction: 'row';
  border-radius: 10px;
  border: ${maincolor}; 
`;
export const TextStart = styled.Text`
  font-size: ${vh(2)}px;
  color: #1A5D1A;
  padding-top: ${vh(2)}px;
  left: ${vw(2)}px;
`;
export const InputTime = styled.TextInput`
  position: absolute; 
  background-color: ${white};
  font-size: ${vh(2)}px;
  width: ${vw(25)}px;
  padding-top: ${vh(2)}px;
  left: ${vw(20)}px;
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
`;
export const TextDate = styled.Text`
  font-size: ${vh(2)}px;
  color: #1A5D1A;
  align-items: flex-start;
  padding-top: ${vh(2)}px;
  margin-left: ${vw(2)}px;
`;
export const InputDate = styled.TextInput`
  position: absolute; 
  background-color: ${white};
  font-size: ${vh(2)}px;
  width: ${vw(25)}px;
  padding-top: ${vh(2)}px;
  left: ${vw(18)}px;
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
export const DayContainer = styled.View`
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