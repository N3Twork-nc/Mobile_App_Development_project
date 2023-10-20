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
  CategoryPlantRoom, CategoryButtonText,
  Taskbar,
  NotificationContainer,MoreNotifyContainer, NotificationImageContainer, TextNotification, SubTextNotify, MainTextNotify
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
                    <CategoryButtonText>Phòng khách</CategoryButtonText>  
                  </RoomContainer>                    
                </LeftRoomContainer>
                <RightRoomContainer>
                  <RoomContainer>
                    <KitchenContainer>
                      <Icon resizeMode="contain" source={require('../../assets/kitchen.png')}/>
                    </KitchenContainer> 
                    <CategoryButtonText>Nhà bếp</CategoryButtonText>  
                  </RoomContainer>          
                </RightRoomContainer>
              </FirstRooms>
              <SecondRooms>
                <LeftRoomContainer>
                  <RoomContainer>                   
                    <BedroomContainer>
                      <Icon resizeMode="contain" source={require('../../assets/bedroom.png')}/>
                    </BedroomContainer>
                    <CategoryButtonText>Phòng ngủ</CategoryButtonText> 
                  </RoomContainer>
                </LeftRoomContainer>
                <RightRoomContainer>
                  <RoomContainer>
                    <BackyardContainer>
                      <Icon resizeMode="contain" source={require('../../assets/backyard.png')}/>
                    </BackyardContainer>
                    <CategoryButtonText>Sân vườn</CategoryButtonText> 
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
            <NotificationImageContainer resizeMode="conver" source={require('../../assets/welcome.png')}/>
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
              <SubTextNotify numberOfLines={1} ellipsizeMode="tail">Tưới nước cho tao đi cddddđ</SubTextNotify>
            </TextNotification>
            <MoreNotifyContainer resizeMode="contain" source={require('../../assets/more.png')}/>
          </NotificationContainer>

          {/* Thông báo 3 */}
          <NotificationContainer>
            <NotificationImageContainer resizeMode="cover" source={require('../../assets/plant2.jpg')}/>
            <TextNotification>
              <MainTextNotify numberOfLines={1} ellipsizeMode="tail">Khát nước quá Ngân ơi cho xin mín nước</MainTextNotify>
              <SubTextNotify numberOfLines={1} ellipsizeMode="tail">Tưới nước cho tao đi cddddđ</SubTextNotify>
            </TextNotification>
            <MoreNotifyContainer resizeMode="contain" source={require('../../assets/more.png')}/>
          </NotificationContainer>
        </StyledContainer>        
      </ScrollView>
      <Taskbar>
          {/* Các thành phần trong thanh taskbar */}
      </Taskbar>
    </SafeAreaView>
  );
}

export default Home;