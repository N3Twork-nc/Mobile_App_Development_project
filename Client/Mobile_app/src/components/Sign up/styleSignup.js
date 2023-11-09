import styled from 'styled-components';
import { CheckBox } from 'react-native-elements';
import { Dimensions } from 'react-native';
// Lấy kích thước màn hìnhr
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

const { maincolor, white, black } = Colors;

 //screen
 export const StyledContainer = styled.View`
 flex: 1;
 padding: ${vh(5)}px;
 background-color: ${maincolor};
 justify-content: center;
 align-items: center;
`;

export const InnerContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
 
//slogan
export const Slogan = styled.Text`
  fontSize: ${vh(4)}px;
  margin-top:${vh(3)}px;
  margin-bottom: ${vh(2)}px;
  color: ${black};
  font-weight: bold;
  text-align: center;
 
`;

//button Signup

export const ButtonSignupwFB = styled.TouchableOpacity`
  background-color: ${black};
  border-radius: 30px;
  width: ${vw(75)}px;
  position: relative;
  align-items: center;
  justify-content: center;
  height: ${vw(14)}px;
`;

export const ButtonTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconButtonFB = styled.Image`
 height: ${vw(8)}px;
  width: ${vw(8)}px;
  margin-right: 7px;
`;

export const ButtonTextFB = styled.Text`
  fontSize: ${vh(2.3)}px;
  color: ${white};
  font-weight: bold;
`;


export const ButtonSignupwGG = styled.TouchableOpacity`
   background-color: ${black};
   margin-top: ${vh(1)}px;
  border-radius: 30px;
  width: ${vw(75)}px;
  position: relative;
  align-items: center;
  justify-content: center;
  height: ${vw(14)}px;
`;
export const IconButtonGG = styled.Image`
 height: ${vw(7)}px;
  width: ${vw(7)}px;
  margin-right: 7px;
`;

export const ButtonTextGG = styled.Text`
  fontSize: ${vh(2.3)}px;
  color: ${white};
  font-weight: bold;
`;

export const ButtonCreateAccount = styled.TouchableOpacity`
  background-color: ${black};
  border-radius: 30px;
  width: ${vw(50)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${vh(1)}px;
  height: ${vh(8)}px; /* hoặc sử dụng padding-top */
`;

export const OthersText = styled.Text`
  fontSize: ${vh(2.1)}px;
  margin-top: ${vh(2)}px;
  margin-bottom: ${vh(1)}px;
  color: ${black};
  font-weight: bold;
  text-align: center;
`;


// input box ------------------------------------
export const InputText = styled.TextInput`
  background-color: ${white};
  border-radius: 30px;
  margin-top: ${vh(1.2)}px;
  width: ${vw(75)}px;
   height: ${vh(7)}px;
  align-content: center;
  justify-content: center;
  padding: 5px 15px;
  font-weight: 500;
  box-shadow: 2px 5px 2px rgba(0, 0, 0, 0.1);
`;
export const InputTextpwContainer = styled.View`
  position: relative;
  width: ${vw(75)}px;
  height: ${vh(7)}px;
  margin-top: ${vh(1.2)}px;
`;
export const InputTextpw = styled.TextInput`
   background-color: ${white};
   border-radius: 30px;
   margin-top: ${vh(1)}px;
   width: ${vw(75)}px;
   height: ${vh(7)}px;
   margin-top: ${vh(1.2)}px;
   align-self: center; 
   justify-content: center;
   padding: 5px 15px;
   font-weight: 500;
   z-index:-1;
   box-shadow: 2px 5px 2px rgba(0, 0, 0, 0.1);
`;
export const EyeIcon = styled.Image`
  position: relative;
  height: 20px;
  width: 20px;
  left: ${vw(30)}px;
  z-index:1;
  top: -33px;
`;

// Privacy checkbox ------------------
export const CheckboxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${vh(37)}px; 
  right: ${vh(1.2)}px;
  
`;
export const OthersCheckbox = styled(CheckBox)`
  
`;

export const CheckboxText = styled.Text`
  font-weight: 500;
  fontSize: ${vh(1.9)}px;
`;
export const ButtonText1 = styled.Text`
  fontSize: ${vh(3)}px;
  color: ${white};
  font-weight: bold;
  text-align: center;
`;