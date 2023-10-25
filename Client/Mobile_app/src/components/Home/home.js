import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { 
  StyledContainer, 
  MainTitle, HeaderContainer, ButtonAdd, ButtonSearch,ScanButton, ScanButtonText,ScanContainer,Scan,
  Title1, Title2,
  TitleforContainers, RecentlyPlantContainer,Plant1Container,Plant2Container,PlantName,
  Line,Icon,
  ImageFrame,
  FirstRooms, SecondRooms, RoomsContainer,RoomContainer, RightRoomContainer, LeftRoomContainer,
  KitchenContainer, LivingroomContainer, BackyardContainer, BedroomContainer,
  CategoryPlantRoom, RoomName,
  Taskbar,
  NotificationContainer,MoreNotifyContainer, NotificationImageContainer, TextNotification, SubTextNotify, MainTextNotify, TotalPlant, CategoryDetailText,
  ContainerButtonExplore,ContainerMyGarden,ContainerProfile,ContainerSaved, ExploreIcon, TaskbarButtonText,

} from './styleHome';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
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
          <ScanButton>
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
            <Plant1Container>
              <ImageFrame resizeMode="cover" source={require('../../assets/plant.jpg')}/>
              <PlantName> Cây chó đẻ </PlantName>
            </Plant1Container> 
            <Plant2Container>
              <ImageFrame resizeMode="cover" source={require('../../assets/welcome.png')}/>
              <PlantName> Cây thúi địch </PlantName>
            </Plant2Container>
          </RecentlyPlantContainer>

          <Line />
        {/* quản lý  */}
          <TitleforContainers>
            <Title1>Quản lý</Title1>
            <Title2>Xem tất cả</Title2>
          </TitleforContainers>
          
          <CategoryPlantRoom>
            <RoomsContainer>
              <FirstRooms>
                <LeftRoomContainer>
                  <RoomContainer>
                    <LivingroomContainer>
                      <Icon resizeMode="contain" source={require('../../assets/livingroom.png')}/>
                    </LivingroomContainer> 
                    <CategoryDetailText>
                      <TotalPlant>5 plants</TotalPlant>
                      <RoomName>Phòng khách</RoomName> 
                    </CategoryDetailText>                      
                  </RoomContainer>                    
                </LeftRoomContainer>
                <RightRoomContainer>
                  <RoomContainer>
                    <KitchenContainer>
                      <Icon resizeMode="contain" source={require('../../assets/kitchen.png')}/>
                    </KitchenContainer> 
                    <CategoryDetailText>
                      <TotalPlant>5 plants</TotalPlant>
                      <RoomName>Nhà bếp</RoomName> 
                    </CategoryDetailText> 
                  </RoomContainer>          
                </RightRoomContainer>
              </FirstRooms>
              <SecondRooms>
                <LeftRoomContainer>
                  <RoomContainer>                   
                    <BedroomContainer>
                      <Icon resizeMode="contain" source={require('../../assets/bedroom.png')}/>
                    </BedroomContainer>
                    <CategoryDetailText>
                      <TotalPlant>5 plants</TotalPlant>                      
                      <RoomName>Phòng ngủ</RoomName> 
                    </CategoryDetailText>
                  </RoomContainer>
                </LeftRoomContainer>
                <RightRoomContainer>
                  <RoomContainer>
                    <BackyardContainer>
                      <Icon resizeMode="contain" source={require('../../assets/backyard.png')}/>
                    </BackyardContainer>
                    <CategoryDetailText>
                      <TotalPlant>5 plants</TotalPlant>
                      <RoomName>Sân vườn</RoomName> 
                    </CategoryDetailText>
                  </RoomContainer>          
                </RightRoomContainer>
              </SecondRooms>
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
            <NotificationImageContainer resizeMode="cover" source={require('../../assets/plant.jpg')}/>
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

      {/* Taskbar */}
      <Taskbar>
         <ContainerButtonExplore>
          <ExploreIcon resizeMode="contain" source={require('../../assets/explore.png')}/>
          <TaskbarButtonText>Khám phá</TaskbarButtonText>
         </ContainerButtonExplore>
         <ContainerButtonExplore>
           <ExploreIcon resizeMode="contain" source={require('../../assets/mygarden.png')}/>
           <TaskbarButtonText>Vườn của tôi</TaskbarButtonText>
         </ContainerButtonExplore>
         <ContainerButtonExplore>
          <ExploreIcon resizeMode="contain" source={require('../../assets/scan.png')}/>
          <TaskbarButtonText>Scan</TaskbarButtonText>
         </ContainerButtonExplore>
         <ContainerButtonExplore>
          <ExploreIcon resizeMode="contain" source={require('../../assets/saved.png')}/>
          <TaskbarButtonText>Đã lưu</TaskbarButtonText>
         </ContainerButtonExplore>
         <ContainerButtonExplore>
          <ExploreIcon resizeMode="contain" source={require('../../assets/profile.png')}/>
          <TaskbarButtonText>Cá nhân</TaskbarButtonText>
         </ContainerButtonExplore>
      </Taskbar>
    </SafeAreaView>
  );
}

export default Home;