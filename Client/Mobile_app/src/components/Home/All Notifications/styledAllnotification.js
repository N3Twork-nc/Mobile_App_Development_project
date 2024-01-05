import styled from 'styled-components';
import { Platform } from 'react-native';
import { Colors, ScreenSize } from '../../../store/styles';

const { white, black,  gray_subtype, green, maintitle } = Colors;

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
  margin-top: 10px;
  ${Platform.OS === 'android' ? 'margin-top: 10%; margin-bottom: 10%' : 'margin-bottom: 10%;'}
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
export const MainTitle = styled.Text`
  font-size: 25px;
  color: ${black};
  font-weight: bold;
  position: absolute;  
`;
// Notify
export const NotifyContainer = styled.TouchableOpacity`
    width: 100%;
    border-radius: 13px;
    border: 1px solid ${green};
    background-color: ${white};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-horizontal: 10px;
    padding: 10px;
    margin-bottom: 15px;
`;

export const NotifyImageContainer = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 10px;  
  margin-right: 10px; 
  
`;

export const TextNotify = styled.View`
  flex: 1;
`;

export const MainText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;  
`;
export const MainText1 = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px; 
  color: ${maintitle}; 
`;
export const MainText2 = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;  
`;

export const SubText = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: ${gray_subtype};
  overflow: hidden;
`;

export const MoreContainer = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;