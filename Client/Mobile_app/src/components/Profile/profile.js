import React, {useState} from 'react';
import { TaskbarView, ContainerButton, TaskbarIcon,  TaskbarButtonText, 
  StyledContainer, HeaderContainer, ButtonNotification, MainTitle, 
  TitleContainer, NotificationContainer, AvatarContainer, Name, 
  ButtonEditProfile, EditButtonText, SectionTitle,  ChildSectionContainer, ChildSectionText, 
  ChildSectionIcon, ChildSectionInfo, Line, SectionContainer, 
  ChildSectionButton, ChildSectionButtonContainer, AvatarImage, 
  ButtonSignOut, SignoutButtonText } from './styleProfile';
import { ScrollView, SafeAreaView,Image,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAll } from '../../reducers/infoUser';
import { myPlant } from '../../api/Plant.js';


import * as ImagePicker from 'expo-image-picker';

const Profile = () => { 
    const navigation = useNavigation();
    const dispatch=useDispatch();
    const token = useSelector(state=>state.token)['payload'];
    const userInfo = useSelector(state => state.infoUser);
    const [selectedRoom, setSelectedRoom] = useState(null);
  
// các navigate chuyển màn hình
    const handleExplore = () => {
        navigation.navigate('Explore', { animations: false }, {transitions: false});
      };
      const handleScan = () => {
        navigation.navigate('CameraScreen', { animations: false });
      };
      const handleSaved = async (roomName) => {
        setSelectedRoom(roomName);
        let plantsInRoom = [];
        try {
          if (roomName) {
            plantsInRoom = await myPlant(token, roomName);
          }
        } catch (error) {
          console.log(error);
        }
        navigation.navigate('Saved', { plantsInRoom, roomName });
      };
      const handleProfile= () => {
        navigation.navigate('Profile', { animations: false });
      };
      const handleHome = () => {
        navigation.navigate('Home', {animations: false});
      }
      const handleSignout = () => {
        dispatch(deleteAll());
        navigation.navigate('SignIn', {animation: false});
      }
      const handleEditProfile = () => {
        navigation.navigate('EditProfile', {animation: false});
      }
      const handleAboutUs = () => {
        navigation.navigate('AboutUs', {animation: false});
      }
                
return (

  <SafeAreaView  style={{ flex: 1, backgroundColor:  'white' }}>
    <ScrollView  style={{ flex: 1, backgroundColor: 'white' }}>
        <HeaderContainer>
          <TitleContainer>
            <NotificationContainer>
              <ButtonNotification resizeMode="contain" source={require('../../assets/notification.png')} tintColor={'#164303'}/>
            </NotificationContainer>        
            <MainTitle>Hồ sơ</MainTitle>
            
          </TitleContainer>
          <AvatarContainer>
              <AvatarImage
                resizeMode="contain"
                style={{ borderRadius: 85, borderWidth: 3, borderColor: 'white' }}
                source={require('../../assets/placeholder.png')} tintColor={'#164303'}
              />
          </AvatarContainer>
                
        </HeaderContainer>
        <Name>{userInfo.fullname}</Name>   
      <StyledContainer >
        <ButtonEditProfile onPress={handleEditProfile}>
          <EditButtonText>Chỉnh sửa</EditButtonText>
        </ButtonEditProfile>
        <SectionTitle>Thông tin</SectionTitle>
        <SectionContainer>
          <ChildSectionContainer>
            <ChildSectionIcon source={require('../../assets/location.png')} tintColor={'#1A5D1A'} />
            <ChildSectionText>Vị trí</ChildSectionText>
            <ChildSectionInfo>
            {userInfo.address}
            </ChildSectionInfo>
          </ChildSectionContainer>
          <Line />
          <ChildSectionContainer>
              <ChildSectionIcon source={require('../../assets/weather.png')} tintColor={'#1A5D1A'} />
                <ChildSectionText>Thời tiết</ChildSectionText>
                <ChildSectionInfo>  </ChildSectionInfo>
          </ChildSectionContainer>
        </SectionContainer>


        <SectionTitle>Thông báo</SectionTitle>
        <SectionContainer>
          <ChildSectionContainer>           
            <ChildSectionIcon source={require('../../assets/calendar.png')} tintColor={'#1A5D1A'} />
            <ChildSectionText>Nhắc nhở chăm sóc</ChildSectionText>
            <ChildSectionButtonContainer>
              <ChildSectionButton source={require('../../assets/btnoff.png')} tintColor={'#1A5D1A'} />
            </ChildSectionButtonContainer>           
          </ChildSectionContainer>
          <Line />
          <ChildSectionContainer>
              <ChildSectionIcon source={require('../../assets/weather.png')} tintColor={'#1A5D1A'} />
                <ChildSectionText></ChildSectionText>
                <ChildSectionButtonContainer>
                  <ChildSectionButton source={require('../../assets/btnoff.png')} tintColor={'#1A5D1A'} />
                </ChildSectionButtonContainer>    
          </ChildSectionContainer>
        </SectionContainer>

        <SectionTitle>Hỗ trợ</SectionTitle>
        <SectionContainer>
          <ChildSectionContainer>
            <ChildSectionIcon source={require('../../assets/love.png')} tintColor={'#1A5D1A'} />
            <ChildSectionText>Gửi phản hồi</ChildSectionText>
            <ChildSectionButtonContainer>
                  <ChildSectionButton source={require('../../assets/more.png')} tintColor={'#1A5D1A'} />
              </ChildSectionButtonContainer>  
          </ChildSectionContainer>
          <Line />
          <ChildSectionContainer>
              <ChildSectionIcon source={require('../../assets/info1.png')} tintColor={'#1A5D1A'} />
                <ChildSectionText>Về Plantaholic</ChildSectionText> 
                <ChildSectionButtonContainer onPress={handleAboutUs}>
                  <ChildSectionButton source={require('../../assets/more.png')} tintColor={'#1A5D1A'} />
              </ChildSectionButtonContainer>               
          </ChildSectionContainer>
          
        </SectionContainer>
        <ButtonSignOut onPress={handleSignout}>
          <SignoutButtonText>Đăng xuất</SignoutButtonText>
        </ButtonSignOut>
      </StyledContainer>
  </ScrollView>

  {/* 
  Taskbar */}
      <TaskbarView>
        <ContainerButton onPress={handleExplore}>
          <TaskbarIcon resizeMode="contain" source={require('../../assets/explore.png')}/>
          <TaskbarButtonText>Khám phá</TaskbarButtonText>
        </ContainerButton>
        <ContainerButton onPress={handleHome}>
          <TaskbarIcon resizeMode="contain" source={require('../../assets/mygarden.png')}  />
          <TaskbarButtonText >Vườn của tôi</TaskbarButtonText>
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
          <TaskbarIcon resizeMode="contain" source={require('../../assets/profile.png')}  tintColor={'green'}/>
          <TaskbarButtonText style={{ color: 'green' }}>Cá nhân</TaskbarButtonText>
        </ContainerButton>
      </TaskbarView>
    </SafeAreaView>

);
};
export default Profile;