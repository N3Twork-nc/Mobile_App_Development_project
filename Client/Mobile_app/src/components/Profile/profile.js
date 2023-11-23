import React, {useState} from 'react';
import { TaskbarView, ContainerButton, TaskbarIcon,  TaskbarButtonText, 
  StyledContainer, HeaderContainer, ButtonNotification, MainTitle, 
  TitleContainer, NotificationContainer, AvatarContainer, Name, 
  ButtonEditProfile, EditButtonText, SectionTitle, 
  LocationContainer, ChildSectionContainer, ChildSectionText, 
  ChildSectionIcon, ChildSectionInfo, Line, SectionContainer, SectionContainer1,
  ChildSectionButton, ChildSectionButtonContainer, AvatarImage, 
  ButtonSignOut, SignoutButtonText } from './styleProfile';
import { ScrollView, SafeAreaView,Image,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
const Profile = () => { 
    const navigation = useNavigation();
    const userInfo = useSelector(state => state.infoUser);
  
    const handleExplore = () => {
        navigation.navigate('Explore', { animations: false }, {transitions: false});
      };
      const handleScan = () => {
        navigation.navigate('CameraScreen', { animations: false });
      };
      const handleSaved = () => {
        navigation.navigate('Saved', { animations: false });
      };
      const handleProfile= () => {
        navigation.navigate('Profile', { animations: false });
      };
      const handleHome = () => {
        navigation.navigate('Home', {animations: false});
      }
      const handleSignout = () => {
        navigation.navigate('SignIn', {animation: false});
      }
      const handleEditProfile = () => {
        navigation.navigate('EditProfile', {animation: false});
      }
      const handleDashboard = () => {
        navigation.navigate('Dashboard', {animation: false});
      }
      

      
    
return (

  <SafeAreaView  style={{ flex: 1, backgroundColor: '#CEF1CF' }}>
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
                resizeMode="cover"
                style={{ borderRadius: 85, borderWidth: 3, borderColor: 'white' }}
                source={require('../../assets/placeholder.png')} tintColor={'#164303'}
              />
          </AvatarContainer>
                
        </HeaderContainer>
      <StyledContainer >
      <Name>{userInfo.fullname}</Name>   
        <ButtonEditProfile onPress={handleEditProfile}>
          <EditButtonText>Chỉnh sửa</EditButtonText>
        </ButtonEditProfile>
        <SectionTitle>Thông tin</SectionTitle>
        <SectionContainer1>
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
          <Line />
          <ChildSectionContainer>
            <ChildSectionIcon source={require('../../assets/humidity.png')} tintColor={'#1A5D1A'} />
            <ChildSectionText>Các thông số</ChildSectionText>
            <ChildSectionButtonContainer onPress={handleDashboard}>
                  <ChildSectionButton source={require('../../assets/more.png')} tintColor={'#1A5D1A'} />
              </ChildSectionButtonContainer>  
          </ChildSectionContainer>
        </SectionContainer1>


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
                <ChildSectionButtonContainer>
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
        <ContainerButton>
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