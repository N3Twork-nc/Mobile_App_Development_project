import styled from 'styled-components';
import { Colors, ScreenSize } from '../../store/styles';
const { vh, vw } = ScreenSize;
const { maincolor, white, black,} = Colors;

 //screen
 export const StyledContainer = styled.View`
  flex: 1;
  background-color: ${white};
  ${Platform.OS === 'android' ? 'margin-top: 1%;' : 'margin-bottom: 0%;'}
`;

//header
export const HeaderContainer = styled.View`
  align-items: center;
  justify-content: center; 
  background-color: ${white};
  margin-top: ${vh(2)}px;
  ${Platform.OS === 'android' ? 'margin-top: 7%;' : 'margin-bottom: 0%;'}
`;
export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
`;
export const MainTitle = styled.Text`
  font-size: 22px;
  color: ${black};
  font-weight: bold;
  flex: 1;
  align-self: center;
  justify-content: center;
  text-align: center;
`;
export const BackContainer = styled.TouchableOpacity`
  align-items: flex-start;
  z-index: 1;
`;

export const ButtonBack = styled.Image`
  width: 22px;
  height: 22px;
  align-self: flex-start;
  left: 20px;
`;

export const ImageContainer = styled.View`
  flex-direction: row;
`;
export const ImagePlant = styled.Image`
width: ${vw(100)}px;
height: ${vh(35)}px;
margin-bottom:20px;
z-index: -1;
`;
export const TopContainer = styled.View`
  background-color: ${white};
  width: ${vw(100)}px;
  height: ${vh(3)}px;
  top: ${vh(37)}px;
  border-radius: 35px;  
  z-index: 1;
`;
export const BodyContainer = styled.View`
 height: auto;
`;
export const ImgLogo = styled.Image`
  width: ${vw(5)}px;
  height: ${vh(4)}px;
  left: ${vw(4)}px;
  ${Platform.OS === 'android' ? 'margin-top: 5px' : 'margin-top: 0%;'}

`;
export const Text1 = styled.Text`
  fontSize: ${vh(2)}px;
  color: #61AF2B;
  font-weight: bold;
  margin-left: ${vw(10)}px;
  bottom: 17px;
`;
export const Text2 = styled.Text`
  fontSize: ${vh(3)}px;
  color: ${black};
  font-weight: bold; 
  align-items: center;
  left: ${vw(3)}px;
`;


export const TagContainer = styled.View`
  margin-top: ${vh(1)}px;
  flex-direction: row;
  height: ${vh(4)}px;
  align-items: left;
  overflow: visible;
`;
export const Tag = styled.Text`
  align-items: flex-start;
  margin-left: ${vw(4)}px;
  fontSize: ${vh(1.5)}px;
  color: ${black};
  background-color: #F0F3F6;
  padding: 5px;
`;

export const Text3 = styled.Text`
  margin-top: ${vh(2)}px;
  fontSize: ${vh(2.5)}px;
  color: ${black};
  font-weight: bold;
  align-items: center;
  left: ${vw(3)}px;
`;

// Category
export const SectionsContainer = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  margin-bottom: 10px
`;
export const BoxContainer = styled.View`
  flex-direction: row; 
  align-items: center;
`;
export const LeftContainer = styled.View`
  height: 65px;
  width: 48%;
  align-self: flex-start;
  justify-content: center;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  align-items: center;
`;
export const RightContainer = styled.View`
  height: 65px;
  width: 48%;
  align-self: flex-start;
  justify-content: center;
  position: relative;
`; 

export const BoxesContainer = styled.View`
  flex-direction: column;
`;

export const FirstSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  align-items: center;
`;

export const SecondSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  align-items: center;
`;

export const EachSectionContainer = styled.View`
  height: 50px;
  width: 50px;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  align-self: flex-start;  
`;


export const SectionDetailText = styled.View`
  flex-direction: column;
  justify-content: center;
  left: 17%;
  height: auto;
  width: 100px;
`;

export const SectionName = styled.Text`
  font-size: 14px;
  color: ${black};
  font-weight: 500;
  align-self: flex-start;
  margin-bottom: 4px; /* Add margin-bottom to create space between RoomName and TotalPlant */
`;

export const SubSectionText = styled.Text`
  font-size: 11px;
  font-weight: 400;
  margin-bottom:1px;
  color: ${black};
  align-self: flex-start;
  height: auto; 
`;

export const Icon = styled.Image`
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  aspect-ratio: 1;
  align-self: center;
`;

export const Line = styled.View`
  height: ${vh(0.1)}px;
  width: ${vw(90)}px;
  align-self: center;
  background-color: #D9D9D9;
`;
export const ParagraphContainer = styled.View`
  width: ${vw(90)}px;
  align-self: center;
  margin-bottom: 10px;
`;
export const CreText = styled.Text`
  margin-top: ${vh(1)}px;
  fontSize: ${vh(2)}px;
  color: #8C8C8C;
  font-weight: bold;
`;
export const MainText = styled.Text`
  margin-top: ${vh(1)}px;
  fontSize: ${vh(1.8)}px;
  color: #515151;
  justify-content: center;
  margin-left: ${vw(1)}px;

`;
export const TaskbarView = styled.View`
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: ${white};
  position: relative;
  justify-content: center; 
  box-shadow: -5px -2px 1px rgba(0, 0, 0, 0.05);
  /* Các thuộc tính CSS khác cho thanh taskbar */
`;

export const SaveContainer = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: row;
`;

export const SaveButtonText = styled.Text`
  font-size: 16px;
  color: ${black};
  align-self: flex-end;
  font-weight: bold;
  text-align: center;
  margin-left: 5px;
`;

export const Save = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  align-self: flex-start;
`;

export const SaveButton = styled.TouchableOpacity`
  background-color: ${maincolor};
  border-radius: 13px;
  width: 40%;
  height: 50px;
  align-self: center;
  justify-content: center;
`;