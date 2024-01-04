import React, { useState, useEffect } from 'react';
import { ScrollView, SafeAreaView,} from 'react-native';
import { 
  StyledContainer, 
  MainTitle, HeaderContainer, ButtonAdd,ScanButton, ScanButtonText,ScanContainer,Scan,
  Title1, Title2,   TitleforContainers, RecentlyPlantContainer,Plant1Container,Plant2Container,PlantName,
  Line,Icon, ImageFrame,  FirstRooms, RoomsContainer, RightRoomContainer, LeftRoomContainer,
  KitchenContainer, RoomContainer, LivingroomContainer, BackyardContainer, BedroomContainer, CategoryPlantRoom, RoomName,
  NotificationContainer,MoreNotifyContainer, NotificationImageContainer, TextNotification, SubTextNotify, 
  MainTextNotify, TotalPlant, CategoryDetailText, TaskbarButtonText, TaskbarView, TaskbarIcon, ContainerButton,

} from './styleHome';
import { useNavigation } from '@react-navigation/native';
import { allPlant, allSchedule, myPlant,countPlants} from '../../api/Plant.js';
import {getDetailGardens} from '../../api/Garden.js'
import { useSelector,useDispatch } from 'react-redux';
import { updateMyGarden } from '../../reducers/mygarden';
import { updateQuantity,updateDataMyPlant } from '../../reducers/myplants.js';

const Home = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const gardenData=useSelector(state=>state.garden)['payload'].slice(0,4);
  const plantData=useSelector(state=>state.plant);
  const dispatch=useDispatch()
  const token = useSelector(state=>state.token)['payload'];
  const navigation = useNavigation();

  useEffect(() => {  
    savedPlants();
   }, []);

  const savedPlants = async () => {
    try {
      const gardenDetails = await getDetailGardens(token);
      const action1=updateMyGarden(gardenDetails)
      dispatch(action1)
      const countP=await countPlants(token)
      const action2=updateQuantity(countP)
      dispatch(action2)
    } catch (error) {
      console.log(error);
    }
  };

  const handleRoomPress = async (roomName) => {
    setSelectedRoom(roomName);
    let plantsInRoom = [];
    try {
      if (roomName) {
        plantsInRoom = await myPlant(token, roomName);
        const action=updateDataMyPlant({[roomName]:plantsInRoom})
        dispatch(action)
      }
    } catch (error) {
      console.log(error);
    }
    navigation.navigate('Room', {roomName});
  };
  
  const handleSaved = async (roomName) => {
    setSelectedRoom(roomName);
    let plantsInRoom = [];
    try {
      if (roomName) {
        plantsInRoom = await myPlant(token, roomName);
        const action=updateDataMyPlant({[roomName]:plantsInRoom})
        dispatch(action)
      }
    } catch (error) {
      console.log(error);
    }
    navigation.navigate('Saved', { roomName });
  };

  const handleExplore = () => {navigation.navigate('Explore',);};
  const handleScan = () => {navigation.navigate('CameraScreen',);};
  const handleProfile= () => {navigation.navigate('Profile',);};
  
  const handleAllNotify = async() => {
    try {
      const allPlants = await allSchedule(token);
      navigation.navigate('AllNotifications', { plantData: allPlants });
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleRecently = async () => {
    try {
      const allPlants = await allPlant(token);
      navigation.navigate('Recently', { plantData: allPlants });
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleDashboard = (gardensDetail) => {
    navigation.navigate('Dashboard', { gardensDetail });
  };
    
  const handleGardens = () => {
    navigation.navigate('Gardens');
  };  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        <StyledContainer>

        {/* TIÊU ĐỀ */}
          <HeaderContainer>
            <MainTitle>Vườn của tôi</MainTitle>
            <ButtonAdd resizeMode="cover" source={require('../../assets/logo2.png')}/>
          </HeaderContainer>   
        {/* Scan */}
        <ScanButton onPress={handleScan}>
          <ScanContainer>
            <Scan resizeMode="cover" source={require('../../assets/scan.png')}/>
                <ScanButtonText>Quét và nhận diện cây</ScanButtonText>
          </ScanContainer>
        </ScanButton>
           {/* Gần đây */}
          <TitleforContainers>
            <Title1>Gần đây</Title1>
            <Title2 onPress={handleRecently}>Xem tất cả</Title2>
          </TitleforContainers>

          <RecentlyPlantContainer>
            <Plant1Container>
              <ImageFrame resizeMode="cover" source={require('../../assets/plant0.jpg')}/>
              <PlantName>Hoa Hướng Dương</PlantName>
            </Plant1Container> 
            <Plant2Container>
              <ImageFrame resizeMode="cover" source={require('../../assets/plant2.jpg')}/>
              <PlantName> Lan Ý </PlantName>
            </Plant2Container>
          </RecentlyPlantContainer>

          <Line />
        {/* quản lý cây cảnh */}
          <TitleforContainers>
            <Title1>Quản lý cây cảnh</Title1>
          </TitleforContainers>
          
          <CategoryPlantRoom>
            <RoomsContainer>
              <FirstRooms>

                <LeftRoomContainer onPress={() => handleRoomPress('Phòng khách')} >
                  <RoomContainer >
                    <LivingroomContainer >
                      <Icon resizeMode="contain" source={require('../../assets/livingroom.png')}/>
                    </LivingroomContainer> 
                    <CategoryDetailText >
                      <TotalPlant>{plantData['Phòng khách']['Count']} cây</TotalPlant>
                      <RoomName>Phòng khách</RoomName> 
                    </CategoryDetailText>                      
                  </RoomContainer>                    
                </LeftRoomContainer>

                <RightRoomContainer onPress={() => handleRoomPress('Nhà bếp')}>
                  <RoomContainer>
                    <KitchenContainer>
                      <Icon resizeMode="contain" source={require('../../assets/kitchen.png')}/>
                    </KitchenContainer> 
                    <CategoryDetailText>
                      <TotalPlant>{plantData['Nhà bếp']['Count']} cây</TotalPlant>
                      <RoomName>Nhà bếp</RoomName> 
                    </CategoryDetailText> 
                  </RoomContainer>          
                </RightRoomContainer>
              </FirstRooms>
              <FirstRooms>
                <LeftRoomContainer onPress={() => handleRoomPress('Phòng ngủ')}>
                  <RoomContainer>                   
                    <BedroomContainer>
                      <Icon resizeMode="contain" source={require('../../assets/bedroom.png')}/>
                    </BedroomContainer>
                    <CategoryDetailText>
                      <TotalPlant>{plantData['Phòng ngủ']['Count']} cây</TotalPlant>                      
                      <RoomName>Phòng ngủ</RoomName> 
                    </CategoryDetailText>
                  </RoomContainer>
                </LeftRoomContainer>
                <RightRoomContainer onPress={() => handleRoomPress('Sân vườn')}>
                  <RoomContainer>
                    <BackyardContainer>
                      <Icon resizeMode="contain" source={require('../../assets/backyard.png')}/>
                    </BackyardContainer>
                    <CategoryDetailText>
                      <TotalPlant>{plantData['Sân vườn']['Count']} cây</TotalPlant>
                      <RoomName>Sân vườn</RoomName> 
                    </CategoryDetailText>
                  </RoomContainer>          
                </RightRoomContainer>
              </FirstRooms>
            </RoomsContainer>
          </CategoryPlantRoom>

          <Line/>

          {/* quản lý cây trồng */}
          <TitleforContainers>
            <Title1>Quản lý vườn trồng</Title1>
            <Title2 onPress={handleGardens}>Xem tất cả</Title2>
          </TitleforContainers>
          
          <CategoryPlantRoom>
            <RoomsContainer>
              {gardenData.length >= 1 && (
                <React.Fragment>
                  {(() => {
                    const pairs = [];
                    for (let i = 0; i < gardenData.length; i += 2) {
                      pairs.push(
                        <FirstRooms key={i}>
                          <LeftRoomContainer onPress={() => handleDashboard(gardenData[i])}>
                            <RoomContainer>
                              <LivingroomContainer>
                                <Icon resizeMode="contain" source={require('../../assets/chard.png')} tintColor={'green'} />
                              </LivingroomContainer>
                              <CategoryDetailText>
                                <RoomName> Vườn {gardenData[i].gardenname}</RoomName>
                              </CategoryDetailText>
                            </RoomContainer>
                          </LeftRoomContainer>
                          {gardenData[i + 1] && (
                            <LeftRoomContainer onPress={() => handleDashboard(gardenData[i + 1])}>
                              <RoomContainer>
                                <LivingroomContainer>
                                  <Icon resizeMode="contain" source={require('../../assets/chard.png')} tintColor={'green'} />
                                </LivingroomContainer>
                                <CategoryDetailText>
                                  <RoomName> Vườn {gardenData[i + 1].gardenname}</RoomName>
                                </CategoryDetailText>
                              </RoomContainer>
                            </LeftRoomContainer>
                          )}
                        </FirstRooms>
                      );
                    }
                    return pairs;
                  })()}
                </React.Fragment>
              )}
            </RoomsContainer>
          </CategoryPlantRoom>


          <Line/>
         {/* Thông báo */}         

         <TitleforContainers>
            <Title1>Thông báo</Title1>
            <Title2 onPress={handleAllNotify}>Xem tất cả</Title2>
          </TitleforContainers>

          {/* Thông báo 1 */}
          <NotificationContainer>
            <NotificationImageContainer resizeMode="cover" source={require('../../assets/welcome.png')}/>
            <TextNotification>
              <MainTextNotify numberOfLines={1} ellipsizeMode="tail">Khát nước quá Ngân ơi cho xin mín nước</MainTextNotify>
              <SubTextNotify numberOfLines={1} ellipsizeMode="tail">Ngồi hút trà sữa rột rột mà không thấy áy náy hả</SubTextNotify>
            </TextNotification>
            <MoreNotifyContainer resizeMode="contain" source={require('../../assets/more.png')}/>
          </NotificationContainer>

          {/* Thông báo 2 */}
          <NotificationContainer>
            <NotificationImageContainer resizeMode="cover" source={require('../../assets/plant1.jpg')}/>
            <TextNotification>
              <MainTextNotify numberOfLines={1} ellipsizeMode="tail">Khát nước quá Ngân ơi cho xin mín nước</MainTextNotify>
              <SubTextNotify numberOfLines={1} ellipsizeMode="tail">Đã 2 tuần rồi bạn không tưới nước</SubTextNotify>
            </TextNotification>
            <MoreNotifyContainer resizeMode="contain" source={require('../../assets/more.png')}/>
          </NotificationContainer>

          {/* Thông báo 3 */}
          <NotificationContainer>
            <NotificationImageContainer resizeMode="cover" source={require('../../assets/plant2.jpg')}/>
            <TextNotification>
              <MainTextNotify numberOfLines={1} ellipsizeMode="tail">Khát nước quá Ngân ơi cho xin mín nước</MainTextNotify>
              <SubTextNotify numberOfLines={1} ellipsizeMode="tail">Đã 2 tuần rồi bạn không tưới nước</SubTextNotify>
            </TextNotification>
            <MoreNotifyContainer resizeMode="contain" source={require('../../assets/more.png')}/>
          </NotificationContainer>
        </StyledContainer>        
      </ScrollView>

      <TaskbarView>
      <ContainerButton onPress={handleExplore}>
        <TaskbarIcon resizeMode="contain" source={require('../../assets/explore.png')}/>
        <TaskbarButtonText>Khám phá</TaskbarButtonText>
      </ContainerButton>
      <ContainerButton>
        <TaskbarIcon resizeMode="contain" source={require('../../assets/mygarden.png')}  tintColor={'green'} />
        <TaskbarButtonText style={{ color: 'green' }}>Vườn của tôi</TaskbarButtonText>
      </ContainerButton>
      <ContainerButton onPress={handleScan}>
        <TaskbarIcon resizeMode="contain" source={require('../../assets/scan.png')}/>
        <TaskbarButtonText>Scan</TaskbarButtonText>
      </ContainerButton>
      <ContainerButton onPress={() => handleSaved('Lưu trữ')}>
        <TaskbarIcon resizeMode="contain" source={require('../../assets/saved.png')}/>
        <TaskbarButtonText>Đã lưu</TaskbarButtonText>
      </ContainerButton>
      <ContainerButton onPress={handleProfile}>
        <TaskbarIcon resizeMode="contain" source={require('../../assets/profile.png')}/>
        <TaskbarButtonText>Cá nhân</TaskbarButtonText>
      </ContainerButton>
    </TaskbarView>
      
    </SafeAreaView>
  );
}

export default Home;