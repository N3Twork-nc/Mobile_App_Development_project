import React, { useState, useEffect } from 'react';
import { ScrollView, SafeAreaView,} from 'react-native';
import { 
  StyledContainer, 
  MainTitle, HeaderContainer, ButtonAdd, ButtonSearch,ScanButton, ScanButtonText,ScanContainer,Scan,
  Title1, Title2,   TitleforContainers, RecentlyPlantContainer,Plant1Container,Plant2Container,PlantName,
  Line,Icon, ImageFrame,  FirstRooms, RoomsContainer,RoomContainer, RightRoomContainer, LeftRoomContainer,
  KitchenContainer, LivingroomContainer, BackyardContainer, BedroomContainer, CategoryPlantRoom, RoomName,
  NotificationContainer,MoreNotifyContainer, NotificationImageContainer, TextNotification, SubTextNotify, 
  MainTextNotify, TotalPlant, CategoryDetailText, TaskbarButtonText, TaskbarView, TaskbarIcon, ContainerButton,

} from './styleHome';
import { useNavigation } from '@react-navigation/native';
import { myPlant } from '../../api/uploadPlant.js';
import { useSelector } from 'react-redux';

const Home = () => {
  const navigation = useNavigation();
  const token = useSelector(state=>state.token)['payload'];
  const [plantsData, setplantsData] = useState([]);

  useEffect(() => { savedPlants(); }, []);

  const savedPlants = async () => {
    try {
      const plantsData = await myPlant(token);
      setplantsData(plantsData);
    } catch (error) {
      console.log(error);
    }
  };

  const livingRoomPlants = plantsData.filter((plant) => plant.roomname == 'Phòng khách');
  const bedRoomPlants = plantsData.filter((plant) => plant.roomname == 'Phòng ngủ');
  const kitchenPlants = plantsData.filter((plant) => plant.roomname == 'Nhà bếp');
  const backYardPlants = plantsData.filter((plant) => plant.roomname == 'Vườn');

  const handleLivingroom = () => {
    navigation.navigate('Livingroom', { plantsInRoom: livingRoomPlants });
  };

  const handleBedroom = () => {
    navigation.navigate('Bedroom', { plantsInRoom: bedRoomPlants });
  };

  const handleKitchen = () => {
    navigation.navigate('Kitchen', { plantsInRoom: kitchenPlants });
  };

  const handleBackyard = () => {
    navigation.navigate('Backyard', { plantsInRoom: backYardPlants });
  };

  const handleExplore = () => {navigation.navigate('Explore', { animations: false }, {transitions: false});};
  const handleScan = () => {navigation.navigate('CameraScreen', { animations: false });};
  const handleSaved = () => {navigation.navigate('Saved', { animations: false });};
  const handleProfile= () => {navigation.navigate('Profile', { animations: false });};
  const handlePlantDetail = () => {navigation.navigate('PlantDetail')};
  const handleDashboard = () => {navigation.navigate('Dashboard')};
  const handleGardens = () => {navigation.navigate('Gardens')};
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        <StyledContainer>

        {/* TIÊU ĐỀ */}
          <HeaderContainer>
            <MainTitle>
              Vườn của tôi
            </MainTitle>
            <ButtonSearch resizeMode="cover" source={require('../../assets/search.png')}/>
            <ButtonAdd resizeMode="cover" source={require('../../assets/add.png')}/>
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
            <Title2>Xem tất cả</Title2>
          </TitleforContainers>

          <RecentlyPlantContainer>
            <Plant1Container onPress={handlePlantDetail}>
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

                <LeftRoomContainer onPress = {handleLivingroom} >

                  <RoomContainer >
                    <LivingroomContainer >
                      <Icon resizeMode="contain" source={require('../../assets/livingroom.png')}/>
                    </LivingroomContainer> 
                    <CategoryDetailText >
                      <TotalPlant>{livingRoomPlants.length} plants</TotalPlant>
                      <RoomName>Phòng khách</RoomName> 
                    </CategoryDetailText>                      
                  </RoomContainer>                    
                </LeftRoomContainer>
                <RightRoomContainer onPress = {handleKitchen}>
                  <RoomContainer>
                    <KitchenContainer>
                      <Icon resizeMode="contain" source={require('../../assets/kitchen.png')}/>
                    </KitchenContainer> 
                    <CategoryDetailText>
                      <TotalPlant>{kitchenPlants.length} plants</TotalPlant>
                      <RoomName>Nhà bếp</RoomName> 
                    </CategoryDetailText> 
                  </RoomContainer>          
                </RightRoomContainer>
              </FirstRooms>
              <FirstRooms>
                <LeftRoomContainer onPress = {handleBedroom}>
                  <RoomContainer>                   
                    <BedroomContainer>
                      <Icon resizeMode="contain" source={require('../../assets/bedroom.png')}/>
                    </BedroomContainer>
                    <CategoryDetailText>
                      <TotalPlant>{bedRoomPlants.length} plants</TotalPlant>                      
                      <RoomName>Phòng ngủ</RoomName> 
                    </CategoryDetailText>
                  </RoomContainer>
                </LeftRoomContainer>
                <RightRoomContainer onPress = {handleBackyard}>
                  <RoomContainer>
                    <BackyardContainer>
                      <Icon resizeMode="contain" source={require('../../assets/backyard.png')}/>
                    </BackyardContainer>
                    <CategoryDetailText>
                      <TotalPlant>{backYardPlants.length} plants</TotalPlant>
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
              <FirstRooms>
                <LeftRoomContainer  onPress = {handleDashboard}>
                  <RoomContainer>
                    <LivingroomContainer>
                      <Icon resizeMode="contain" source={require('../../assets/chard.png')} tintColor={'green'}/>
                    </LivingroomContainer> 
                    <CategoryDetailText>
                      <RoomName>Vườn 1</RoomName> 
                    </CategoryDetailText>                      
                  </RoomContainer>                    
                </LeftRoomContainer>
                <RightRoomContainer>
                  <RoomContainer>
                    <LivingroomContainer onPress = {handleDashboard}>
                      <Icon resizeMode="contain" source={require('../../assets/chard.png')} tintColor={'green'}/>
                    </LivingroomContainer> 
                    <CategoryDetailText>
                      <RoomName>Vườn 2</RoomName> 
                    </CategoryDetailText>   
                  </RoomContainer>          
                </RightRoomContainer>
              </FirstRooms>
              <FirstRooms>
                <LeftRoomContainer>
                  <RoomContainer>
                    <LivingroomContainer onPress = {handleLivingroom} >
                      <Icon resizeMode="contain" source={require('../../assets/chard.png')} tintColor={'green'}/>
                    </LivingroomContainer> 
                    <CategoryDetailText onPress = {handleLivingroom}>
                      <RoomName>Vườn 3</RoomName> 
                    </CategoryDetailText>                      
                  </RoomContainer>                    
                </LeftRoomContainer>
                <RightRoomContainer>
                  <RoomContainer>
                    <LivingroomContainer onPress = {handleLivingroom}>
                      <Icon resizeMode="contain" source={require('../../assets/chard.png')} tintColor={'green'}/>
                    </LivingroomContainer> 
                    <CategoryDetailText onPress = {handleLivingroom}>
                      <RoomName>Vườn 4</RoomName> 
                    </CategoryDetailText>   
                  </RoomContainer>          
                </RightRoomContainer>
              </FirstRooms>
              
            </RoomsContainer>
          </CategoryPlantRoom>

          <Line/>
         {/* Thông báo */}         

         <TitleforContainers>
            <Title1>Thông báo</Title1>
            <Title2>Xem tất cả</Title2>
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
      <ContainerButton>
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