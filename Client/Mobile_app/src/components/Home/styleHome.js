import styled from 'styled-components';
import { View, Text, Image, Platform } from 'react-native';

// default color
export const Colors = {
  maincolor: "#CEF1CF",
  white: "#FFFFFF",
  black: "#000000",
  gray: "#D9D9D9",
  green: "#61AF2B", blue: "#5676DC", orange: "#E6B44C", purple: "#A559D9",
  white_gray: "#F8F8F8",
  gray_subtype: "#628093",
  livingroom: "#EEF7E8",
  kitchen: "#E6EAFA",
  bedroom: "#FCF1E3",
  backyard: "#F8E8F8",
}

const { maincolor, white, black, gray, gray_subtype, green, blue, orange, purple, white_gray, livingroom, backyard, bedroom, kitchen } = Colors;

 //screen
 export const StyledContainer = styled.View`
 flex: 1;
 padding: 20px;
 background-color: ${white};

`;

export const Line = styled.View`
  height: 1px;
  background-color: ${gray};
  margin-vertical: 10px;
  margin-top: 3%;
`

//header
export const HeaderContainer = styled.View`
  position: relative;
  align-items: center;
  justify-content: center; 
  margin-bottom: 5%;
  ${Platform.OS === 'android' ? 'margin-top: 7%;' : 'margin-bottom: 5%;'}
`;
export const MainTitle = styled.Text`
  font-size: 25px;
  color: ${black};
  font-weight: bold;
  align-self: flex-start;
`;

export const ButtonSearch = styled.Image`
  width: 22px;
  height: 22px;
  align-self: flex-end;
  position: absolute;  
  right: 40px;
`;

export const ButtonAdd = styled.Image`
  width: 22px;
  height: 22px;
  align-self: flex-end;
  position: absolute;
`;

//button Scan
export const ScanContainer = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: row;
`;

export const ScanButtonText = styled.Text`
  font-size: 16px;
  color: ${black};
  align-self: flex-end;
  font-weight: bold;
  text-align: center;
`;

export const Scan = styled.Image`
  width: 22px;
  height: 22px;
  margin-right: 5px;
  align-self: flex-start;
  flex-shrink: 0;
  aspect-ratio: 1;
`;

export const ScanButton = styled.TouchableOpacity`
  background-color: ${maincolor};
  border-radius: 13px;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

// Recently header
export const TitleforContainers= styled.View`
  position: relative;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Title1 = styled.Text`
  font-size: 16px;
  margin-top: 3%;
  font-weight: 500;
  color: ${black};
  text-align: left;
  align-self: flex-start;
`;

export const Title2 = styled.Text`
  font-size: 13px;
  margin-top: 3%;
  font-weight: 500;
  color: ${green};
  align-self: flex-end;
`;

export const RecentlyPlantContainer = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Plant1Container = styled.TouchableOpacity`
  height: 170px;
  width: 48%;
  border-radius: 13px;
  background-color: ${white_gray};
  align-self: flex-start;
  justify-content: center;
  align-items: center;
`;

export const Plant2Container = styled.TouchableOpacity`
  height: 170px;
  width: 48%;
  border-radius: 13px;
  background-color: ${white_gray};
  align-self: flex-start;
  justify-content: center; 
  align-items: center;
`;

export const ImageFrame = styled.Image`
  width: 70%;
  height: 65%;
  border-radius: 13px;
`;

export const PlantName = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: ${black};
  align-self: center;
  margin-top:5%;
`

// Category
export const CategoryPlantRoom = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const RoomContainer = styled.View`
  flex-direction: row; 
  align-items: center;
`;
export const LeftRoomContainer = styled.TouchableOpacity`
  height: 65px;
  width: 48%;
  align-self: flex-start;
  justify-content: center;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  align-items: center;
`;
export const RightRoomContainer = styled.TouchableOpacity`
  height: 65px;
  width: 48%;
  align-self: flex-start;
  justify-content: center;
  position: relative;
`; 
export const RoomsContainer = styled.View`
  flex-direction: column;
`;

export const FirstRooms = styled.View`
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  align-items: center;
`;

export const SecondRooms = styled.View`
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  align-items: center;
`;

export const LivingroomContainer = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: ${livingroom};
  border-radius: 13px;
  border: 0.3px solid ${green};
  align-self: flex-start;  
`;

export const KitchenContainer = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: ${kitchen};
  border-radius: 13px;
  border: 0.3px solid ${blue};
  align-self: flex-start;
`;


export const BedroomContainer = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: ${bedroom};
  border-radius: 13px;
  border: 0.3px solid ${orange};
  align-self: flex-start;
`;

export const BackyardContainer = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: ${backyard};
  border-radius: 13px;
  border: 0.3px solid ${purple};
  align-self: flex-start;
`;

export const CategoryDetailText = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  left: 17%;
`;

export const RoomName = styled.Text`
  font-size: 14px;
  color: ${black};
  font-weight: 500;
  align-self: flex-start;
  margin-bottom: 4px; /* Add margin-bottom to create space between RoomName and TotalPlant */
`;

export const TotalPlant = styled.Text`
  font-size: 11px;
  font-weight: 400;
  margin-bottom:1px;
  color: ${gray_subtype};
  align-self: flex-start;
`;

export const Icon = styled.Image`
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  aspect-ratio: 1;
  align-self: center;
`;
 
// Notification
export const NotificationContainer = styled.TouchableOpacity`
    height: 70px;
    width: 100%;
    border-radius: 13px;
    background-color: ${white_gray};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-horizontal: 10px;
    margin-top: 7px;
`;

export const NotificationImageContainer = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-right: 10px; 
`;

export const TextNotification = styled.View`
  flex: 1;
`;

export const MainTextNotify = styled.Text`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 3px;  
`;

export const SubTextNotify = styled.Text`
  font-size: 12px;
  font-weight:400;
  color: ${gray_subtype};
`;
export const MoreNotifyContainer = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;


export const TaskbarView = styled.View`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 55px;
  background-color: ${white};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5px;
  /* Các thuộc tính CSS khác cho thanh taskbar */
`;

export const ContainerButton = styled.TouchableOpacity`
  height: 100%;
  width: 18%;
  border-radius: 13px;
  align-self: flex-start;
  justify-content: center;
  align-items: center; 
  margin-bottom: 0;
`;

export const TaskbarIcon = styled.Image`
  width: 65%;
  height: 45%;
`;

export const TaskbarButtonText = styled.Text`
  font-size: 10px;
  font-weight: 600;
  color: ${black};
  margin-top: 5px;
  align-self: center;
`;