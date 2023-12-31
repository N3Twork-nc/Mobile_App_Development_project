import styled from 'styled-components';
import { Platform } from 'react-native';
import { Colors, ScreenSize } from '../../../store/styles';
const { maincolor, white, black, gray, maintitle} = Colors;
const {vh, vw} = ScreenSize;

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
  ${Platform.OS === 'android' ? 'margin-top: 10%' : 'margin-top: 0px;'}
 
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

export const HeaderImageContainer = styled.Image`
  width: ${vw(30)}px;
  height: ${vh(15)}px;
  align-self: flex-end;
  position: absolute;
  z-index: 1; 
  top: ${vh(-1)}px;
  ${Platform.OS === 'android' ? 'margin-top: 5%' : 'margin-bottom: 10px;'}
`
export const MainTitleContainer = styled.View`
  position: absolute;
  width: ${vw(100)}px;
  height: ${vh(10)}px; 
  background-color: ${maincolor};
  align-items: center;
  justify-content: center; 
  z-index: -1; 
`;

export const MainTitle = styled.Text`
  fontSize: ${vh(3.6)}px;
  color: ${black};
  font-weight: bold;
  text-align: center;
  align-items: center;
`;


// Newspaper
export const NewspaperMaintitle = styled.Text`
  fontSize: ${vh(3.7)}px;
  width: ${vw(90)}px;
  font-weight: bold;
  color: ${maintitle};
  align-items: center;
  position: relative;
  margin-top:${vh(5)}px;
`
export const SubtitleContainer = styled.View`
    height: auto;
    width: ${vw(90)}px;
    border-radius: 13px;
    background-color: ${white};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-horizontal: ${vw(1)}px;
    margin-top: ${vh(2)}px;
`;

export const NewspaperThumbnailContainer = styled.Image`
  width: ${vw(32)}px;
  height: ${vh(20)}px;
  border-radius: 10px;  
  margin-right: ${vw(3)}px;   
`;

export const TextNewspaper = styled.View`
  flex: 1;
`;

export const SubText = styled.Text`
  fontSize: ${vh(1.8)}px;
  font-style: italic;
  font-weight: 500;
  color: ${maintitle};
  flex: 1;  
  height: auto; 
`;



export const Line = styled.View`
  height: 1px;
  background-color: ${gray};
  margin-vertical: ${vh(1.5)}px;
  margin-top: ${vh(1)}px;
`
// main content
 export const Header1 = styled.Text`
  fontSize:  ${vh(2)}px;
  font-weight: bold;
  color: ${black};
  margin-bottom: ${vh(1)}px;
  margin-top: ${vh(1)}px;
 `
 export const MainContent = styled.Text`
  fontSize: ${vh(2)}px;
  color: ${black};
 `