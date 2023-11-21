import React, {useState, useEffect} from 'react';
import { TaskbarView, ContainerButton, TaskbarIcon, TaskbarButtonText, StyledContainer, HeaderContainer, 
     MainTitle, TitleContainer, NotificationContainer, AvatarContainer,  SectionTitle,  AvatarImage, BackContainer, ButtonBack, InputText, ButtonSavechange, SavechangeButtonText } from './styleEditProfile.js';
import { ScrollView, SafeAreaView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { info } from '../../../api/editProfile.js'
import { updateAll } from '../../../reducers/infoUser';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

const EditProfile = () => {
  const navigation = useNavigation();
  const dispatch=useDispatch();  
  const userInfo = useSelector(state => state.infoUser);

  const [textFullname, setTextFullname] = useState(userInfo.fullname);
  const [textGender, setTextGender] = useState(userInfo.gender);
  const [textPhoneNumber, setTextPhoneNumber] = useState(userInfo.phoneNumber);
  const [textAddress, setTextAddress] = useState(userInfo.address);

  const [isLoading, setIsLoading] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState(null);

  useEffect(() => {
    setTextFullname(userInfo.fullname);
    setTextGender(userInfo.gender);
    setTextPhoneNumber(userInfo.phoneNumber);
    setTextAddress(userInfo.address);
  }, [userInfo]);

  const handleEditProfile = async () => {
    const data={
      "fullname":textFullname,
      "gender":textGender,
      "phoneNumber":textPhoneNumber,
      "address":textAddress
  }
    const response = await info(userInfo.username, textFullname, textGender, textPhoneNumber, textAddress)
    if (response === 'Update info successfully'){
      const action=updateAll(data) 
      dispatch(action)
      navigation.navigate('Profile')
    }
  };


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
          <InputText
            value={textFullname}
            onChangeText={(text) => setTextFullname(text)}
          />
          <SectionTitle>Giới tính</SectionTitle>
          <InputText
            value={textGender}
            onChangeText={(text) => setTextGender(text)}
          />
          <SectionTitle>Số điện thoại</SectionTitle>
          <InputText
            value={textPhoneNumber}
            onChangeText={(text) => setTextPhoneNumber(text)}
          />
          <SectionTitle>Vị trí</SectionTitle>
          <InputText
            value={textAddress}
            onChangeText={(text) => setTextAddress(text)}
          /> 

      <ButtonSavechange onPress={handleEditProfile}>
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