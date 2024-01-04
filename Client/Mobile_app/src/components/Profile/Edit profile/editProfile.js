import React, {useState, useEffect} from 'react';
import {StyledContainer, HeaderContainer, 
     MainTitle, TitleContainer, AvatarContainer, 
     SectionTitle,  AvatarImage, BackContainer, ButtonBack, 
     InputText, ButtonSavechange, SavechangeButtonText } from './styleEditProfile.js';
import { ScrollView, SafeAreaView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { info } from '../../../api/editProfile.js'
import { updateAll } from '../../../reducers/infoUser';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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
  const [isEditingAvatar, setIsEditingAvatar] = useState(false);
  const placeholder = require('../../../assets/placeholder.png');

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


  const handleChooseFromLibrary = async () => {
    setIsEditingAvatar(true);
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Please grant permission to access the photo library.');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      multiple: false,
    });
  
    if (!result.canceled) {
      setCapturedPhoto(result.assets[0]);
    }
  };
  
  let avatarSource;
  if (isEditingAvatar) {
    avatarSource = capturedPhoto ? { uri: capturedPhoto.uri } : placeholder;
  } else {
    avatarSource = placeholder;
  }

  const handleBack= () => {
    navigation.goBack();
  };

      
return (
  <KeyboardAwareScrollView 
  contentContainerStyle={{ flex: 1 }}
  behavior={Platform.OS === 'ios' ? 'padding' : null}
  keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
  <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
  <ScrollView  style={{ flex: 1, backgroundColor: 'white' }}>

      <HeaderContainer>
        <TitleContainer>
          <BackContainer onPress={handleBack}>
            <ButtonBack resizeMode="contain" source={require('../../../assets/back.png')} tintColor={'#164303'}/>
          </BackContainer>        
          <MainTitle>Chỉnh sửa</MainTitle>
          
        </TitleContainer>
            <AvatarContainer onPress={handleChooseFromLibrary}>
              <AvatarImage
                resizeMode="contain"
                style={{ borderRadius: 85, borderWidth: 3, borderColor: 'white' }}
                source={avatarSource}
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
</SafeAreaView>
  </KeyboardAwareScrollView>
)
}
export default EditProfile;