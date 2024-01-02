import styled from 'styled-components';
import { Colors } from '../../../store/styles';
const { white, black, green,  gray_subtype, containerprofile} = Colors;

 //screen
 export const StyledContainer = styled.View`
 flex: 1;
 padding: 20px;
 background-color: ${white};

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

// show plant

export const PlantContainer = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Plant1Container = styled.TouchableOpacity`
  height: 250px;
  width: 48%;
  border-radius: 13px;
  background-color: ${containerprofile};
  border: 0.2px solid ${green};
  align-self: flex-start;
  justify-content: center;
  align-items: center;
`;


export const ImageFrame = styled.Image`
  width: 90%;
  height: 55%;
  border-radius: 13px;
`;

export const PlantName = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${black};
  align-self: center;
  margin-top: 5%;
  text-align: center;
  overflow: hidden;
  padding:10px;
`

export const Info1 = styled.View`
  width: 90%;
  align-item: center;
  justify-content: center;
  flex-direction: row;
`
export const HistoryTitle = styled.Text`
  font-size: 13px;
 color: ${gray_subtype};
  font-style: italic;
`
export const History = styled.Text`
  font-size: 13px;
  color: ${gray_subtype};
  font-style: italic;
  margin-left: 3px;
`
