import React, {useState} from 'react';
import { TaskbarView, ContainerButton, TaskbarIcon, TaskbarButtonText, StyledContainer, HeaderContainer, 
     MainTitle, TitleContainer, NotificationContainer, AvatarContainer,  SectionTitle,  AvatarImage, BackContainer, ButtonBack, InputText, ButtonSavechange, SavechangeButtonText } from './styleEditProfile.js';
import { ScrollView, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
const EditProfile = () => {
    const navigation = useNavigation();
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    //Mở album ảnh 
  const handleChooseFromLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Please grant permission to access the photo library.');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.cancelled) {
      setCapturedPhoto(result);
    }
  };
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
      
return (
<SafeAreaView  style={{ flex: 1, }}>
<ScrollView  style={{ flex: 1, backgroundColor: 'white' }}>
      <HeaderContainer>
        <TitleContainer>
          <BackContainer onPress={handleProfile}>
            <ButtonBack resizeMode="contain" source={require('../../../assets/back.png')} tintColor={'#164303'}/>
          </BackContainer>        
          <MainTitle>Chỉnh sửa</MainTitle>
          
        </TitleContainer>
        <AvatarContainer onPress={handleChooseFromLibrary}>
            <AvatarImage
              resizeMode="contain"
              style={{  borderRadius: 85, borderWidth:3, borderColor: 'white'}}
              source={require('../../../assets/plant2.jpg')}
            />
          </AvatarContainer>   
              
      </HeaderContainer>

    <StyledContainer >    
        <SectionTitle>Họ và tên</SectionTitle>
        <InputText>Plantaholic</InputText> 
        <SectionTitle>Giới tính</SectionTitle>
        <InputText>Nữ</InputText>  
        <SectionTitle>Số điện thoại</SectionTitle>
        <InputText>012345678</InputText>  
        <SectionTitle>Vị trí</SectionTitle>
        <InputText>Thủ Đức, HCM</InputText> 


      <ButtonSavechange>
        <SavechangeButtonText>Lưu thay đổi</SavechangeButtonText>
      </ButtonSavechange>
    </StyledContainer>
</ScrollView>
{/* 
Taskbar */}
    <TaskbarView>
      <ContainerButton onPress={handleExplore}>
        <TaskbarIcon resizeMode="contain" source={require('../../../assets/explore.png')}/>
        <TaskbarButtonText>Khám phá</TaskbarButtonText>
      </ContainerButton>
      <ContainerButton onPress={handleHome}>
        <TaskbarIcon resizeMode="contain" source={require('../../../assets/mygarden.png')}  />
        <TaskbarButtonText >Vườn của tôi</TaskbarButtonText>
      </ContainerButton>
      <ContainerButton onPress={handleScan}>
        <TaskbarIcon resizeMode="contain" source={require('../../../assets/scan.png')}/>
        <TaskbarButtonText>Scan</TaskbarButtonText>
      </ContainerButton>
      <ContainerButton>
        <TaskbarIcon resizeMode="contain" source={require('../../../assets/saved.png')}/>
        <TaskbarButtonText>Đã lưu</TaskbarButtonText>
      </ContainerButton>
      <ContainerButton onPress={handleProfile}>
        <TaskbarIcon resizeMode="contain" source={require('../../../assets/profile.png')}  tintColor={'green'}/>
        <TaskbarButtonText style={{ color: 'green' }}>Cá nhân</TaskbarButtonText>
      </ContainerButton>
    </TaskbarView>
  </SafeAreaView>
)
}
export default EditProfile;