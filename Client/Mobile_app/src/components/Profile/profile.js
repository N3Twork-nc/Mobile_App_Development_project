import React, {useState, useEffect} from 'react';
import { TaskbarView, ContainerButton, TaskbarIcon, TaskbarButtonText, StyledContainer, HeaderContainer, MainTitle, TitleContainer, 
  AvatarContainer, Name, ButtonEditProfile, EditButtonText, SectionTitle, ChildSectionContainer, ChildSectionText, ChildSectionIcon, 
  ChildSectionInfo, Line, SectionContainer, ChildSectionButton, ChildSectionButtonContainer, AvatarImage, ButtonSignOut, SignoutButtonText 
} from './styleProfile';
import { ScrollView, SafeAreaView,Image,Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAll } from '../../reducers/infoUser';
import { myPlant } from '../../api/Plant.js';
import Modal from 'react-native-modal';
import logo from '../../assets/logo.png';
import * as Location from 'expo-location';
const API_KEY = '1611ec05c074eaf17e2075ba2af4a200';

const logoApp = logo;
const Profile = () => { 
    const navigation = useNavigation();
    const dispatch=useDispatch();
    const token = useSelector(state=>state.token)['payload'];
    const userInfo = useSelector(state => state.infoUser);
    const [isAlertVisible, setAlertVisible] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const [, setSelectedRoom] = useState(null);
    useEffect(() => {
      requestLocationPermission();
    }, []);

    //Khi người dùng nhấn gửi phản hồi
    const SendFeedback = () => {setAlertVisible(true);}
    const PressOK = () => {setAlertVisible(false)};
  
    const requestLocationPermission = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();  
        if (status === 'granted') {
          getLocation();
        } else {
          console.log('Permission denied');
        }
      } catch (error) {
        console.log('Error requesting location permission:', error);
      }
    };
  
    const getLocation = async () => {
      try {
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        getWeatherData(latitude, longitude);
      } catch (error) {
        console.log('Error getting location:', error);
      }
    };
  
    const getWeatherData = async (latitude, longitude) => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
        const data = await response.json();
        
        setWeatherData(data);
      } catch (error) {
        console.log('Error getting weather data:', error);
      }
    };
  
// các navigate chuyển màn hình
    const handleExplore = () => {navigation.navigate('Explore', { animations: false })};
    const handleScan = () => {navigation.navigate('CameraScreen', { animations: false });};
      
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
            <MainTitle>Hồ sơ</MainTitle>
            
          </TitleContainer>
          <AvatarContainer>
              <AvatarImage
                resizeMode="contain"
                style={{ borderRadius: 85, borderWidth: 3, borderColor: 'white' }}
                source={{uri:userInfo["avata"]}}
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
            <ChildSectionInfo>{userInfo.address}</ChildSectionInfo>
          </ChildSectionContainer>
          <Line />
          {weatherData ? (
              <ChildSectionContainer>
                <ChildSectionIcon source={require('../../assets/weather.png')} tintColor={'#1A5D1A'} />
                <ChildSectionText>Thời tiết</ChildSectionText>
                <ChildSectionInfo>{weatherDescriptionTranslations[weatherData.weather[0].description]}, {(weatherData.main.temp - 273.15).toFixed(1)}°C</ChildSectionInfo>
              </ChildSectionContainer>
            ) : (
              <ChildSectionContainer>
                <ChildSectionIcon source={require('../../assets/weather.png')} tintColor={'#1A5D1A'} />
                <ChildSectionText>Thời tiết</ChildSectionText>
                <ChildSectionInfo>Đang tải...</ChildSectionInfo>
              </ChildSectionContainer>
            )}
        </SectionContainer>


        <SectionTitle>Cá nhân</SectionTitle>
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
              <ChildSectionIcon source={require('../../assets/changepw.png')} tintColor={'#1A5D1A'} />
                <ChildSectionText>Đổi mật khẩu</ChildSectionText>
                <ChildSectionButtonContainer>
                  <ChildSectionButton source={require('../../assets/more.png')} tintColor={'#1A5D1A'} />
                </ChildSectionButtonContainer>    
          </ChildSectionContainer>
        </SectionContainer>

        <SectionTitle>Hỗ trợ</SectionTitle>
        <SectionContainer>
          <ChildSectionContainer>
            <ChildSectionIcon source={require('../../assets/love.png')} tintColor={'#1A5D1A'} />
            <ChildSectionText>Gửi phản hồi</ChildSectionText>            
            <ChildSectionButtonContainer  onPress = {SendFeedback}>
                  <ChildSectionButton source={require('../../assets/more.png')} tintColor={'#1A5D1A'} />
                  <CustomAlert
                      isVisible={isAlertVisible}
                      onOK={PressOK}
                      />
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

// Alert thông báo
const CustomAlert = ({ isVisible, onOK }) => {

  
  return (
    <Modal isVisible={isVisible}>
      <View style={{ backgroundColor: 'white', padding: 15, borderRadius: 15}}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, height: 50, }}>
          <Image source={logoApp} style={{ width: 32, height: 32, marginRight: 5, marginBottom: 5 }} />
          <Text style={{ fontSize: 17, flex: 1, fontWeight: '500' }}>Chức năng này hiện đang được cập nhật...</Text>
        </View>
        <View style={{ padding: 10, zIndex: 1,}}>              
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
            <TouchableOpacity onPress={onOK} style={{ marginRight: 25 }}>
              <Text style={{ color: 'green', fontSize: 17 }}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>        
    </View>
    </Modal>
  );
};

// Bộ từ điển dịch mô tả thời tiết
const weatherDescriptionTranslations = {
  "clear sky": "Trời quang",
  "few clouds": "Ít mây",
  "scattered clouds": "Mây rải rác",
  "broken clouds": "Nhiều mây",
  "shower rain": "Mưa rào",
  "rain": "Mưa",
  "light rain": "Mưa nhỏ",
  "thunderstorm": "Mưa giông",
  "snow": "Tuyết",
  "mist": "Sương mù",
};