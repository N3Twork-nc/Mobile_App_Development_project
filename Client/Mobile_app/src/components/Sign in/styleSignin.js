import styled from 'styled-components';
import { Colors, ScreenSize } from '../../store/styles';

const { maincolor, white, black, } = Colors;
const { vh, vw} = ScreenSize;

 //screen
 export const StyledContainer = styled.View`
 flex: 1;
 padding: ${vh(8)}px;
 background-color: ${maincolor};
 justify-content: center;
 align-items: center;
`;

// all items
export const InnerContainer = styled.View`
 width: 100%;
 align-items: center;
 justify-content: center;
 display: flex;
`;

//slogan
export const Slogan = styled.Text`
  fontSize: ${vh(4)}px;
  margin-bottom: 8%;
  color: ${black};
  font-weight: bold;
  text-align: center;
`;

export const ButtonSigninwFB = styled.TouchableOpacity`
  background-color: ${black};
  border-radius: 30px;
  width: ${vw(75)}px;
  position: relative;
  align-items: center;
  justify-content: center;
  height: ${vw(15)}px;
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


export const OthersText1 = styled.Text`
  fontSize: 15px;
  margin-top: ${vh(2.3)}px;
  margin-bottom:  ${vh(2)}px;
  color: ${black};
  font-weight: bold;
  textAlign: center; 
`;


export const titleInputText = styled.Text`
  fontSize: 15px;
  margin-top: 5%;
  margin-bottom: 3%;
  color: ${black};
  font-weight: bold;
`;
export const ButtonSigninwGG = styled.TouchableOpacity`
  background-color: ${black};
  border-radius: 30px;
  margin-top: ${vh(1)}px;
  width: ${vw(75)}px;
  position: relative;
  align-items: center;
  justify-content: center;
  height: ${vw(15)}px;
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




// input box ------------------------------------

export const OthersText2 = styled.Text`
  fontSize:  ${vh(2.1)}px;
  margin-top: ${vh(1.5)}px;
  color: ${black};
  font-weight: bold;
  text-align: left;
  align-self: flex-start; /* Căn lề trái */
`;
export const OthersText3 = styled.Text`
  fontSize: ${vh(2.1)}px;
  margin-bottom: ${vh(2)}px;
  color: ${black};
  font-weight: bold;
  text-align: right;  
  font-style:italic;
  align-self: flex-end; /* Căn lề trái */
`;

export const InputTextusername = styled.TextInput`
  background-color: ${white};
  border-radius: 30px;
  margin-top: ${vh(1)}px;
  width: ${vw(75)}px;
  height: ${vw(14)}px;
  align-self: center; 
  justify-content: center;
  padding: 5px 15px;
  font-weight: 500;
  box-shadow: 2px 5px 2px rgba(0, 0, 0, 0.2);
`;
export const InputTextpw = styled.TextInput`
   background-color: ${white};
   border-radius: 30px;
   width: ${vw(75)}px;
   height: ${vw(14)}px;
   margin-top: ${vh(1)}px;
   align-self: center; 
   justify-content: center;
   padding: 5px 15px;
   font-weight: 500;
   box-shadow: 2px 5px 2px rgba(0, 0, 0, 0.2);
   z-index:-1;
`;
export const EyeIcon = styled.Image`
  position: relative;
  height: ${vh(3)}px;
  width: ${vh(3)}px;
  left: ${vw(30)}px;
  z-index:1;
  top: -36px;
`;
export const ButtonSignin = styled.TouchableOpacity`
  background-color: ${black};
  border-radius: 30px;
  width: ${vw(50)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${vh(8)}px; 
`;
export const ButtonText1 = styled.Text`
  fontSize: ${vh(3)}px;
  color: ${white};
  font-weight: bold;
  text-align: center;
`;