import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity,Image, Modal } from 'react-native';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import { ImageCircle, TakePhotoButton, Container,ButtonReweet,Text1,Text2,Text3,GalleryButton,ResultButton,FooterContainer,
        HeaderContainer,FlashButton,ImageFlash, ImageReweet, RetakeButton,StyleContainer,ButtonClose, ImageGallery, ImageClose,HeaderContainer2,
} from './styleCamera'
import { predictPlant } from '../../api/predict';
import { useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';

const CameraScreen = () => {
  const token = useSelector(state=>state.token)['payload']
  const navigation = useNavigation();
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const cameraRef = useRef(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const handleHome = () => {
    navigation.navigate('Home', { animations: false });
  };
  const handleAfterscan = () => {
    navigation.navigate('Afterscan', { animations: false });
  };
  //Yêu cầu quyền truy cập camera
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  //Đổi chiều camera
  const toggleCameraType = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  //Bật tắt flash
  const toggleFlash = () => {
    if (cameraRef.current) {
      if (flash === Camera.Constants.FlashMode.off) {
        setFlash(Camera.Constants.FlashMode.on);
      } else {
        setFlash(Camera.Constants.FlashMode.off); 
      }
    }
  };  
  // Hàm xử lý việc chụp ảnh
  const handleTakePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();



      setCapturedPhoto(photo);
      setIsModalVisible(true); // Hiển thị cửa sổ modal với nút "Chụp lại" và "Nhận diện"
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
      quality: 1,
      multiple: false,
    });
  
    if (!result.canceled) {
      setCapturedPhoto(result.assets[0]);
      setIsModalVisible(true);
    }
  };


const [info, setInfoData] = useState([]);

useEffect(() => {}, []);

const Predicted = async () => {
  try {
    const predictedInfo = await predictPlant(capturedPhoto, token);
    setInfoData(predictedInfo);
    navigation.replace('Afterscan', { info: predictedInfo });
  } catch (error) {
    console.log(error);
  }
};


  // Hàm để đóng cửa sổ modal
  const closePhotoPreview = () => {
    setIsModalVisible(false);
    setCapturedPhoto(null); // Xóa ảnh đã chụp
  };

  // Kiểm tra xem quyền máy ảnh có được cấp không
  if (hasCameraPermission === null) {
    return <View><Text>Loading...</Text></View>;
  }
  if (hasCameraPermission === false) {
    return <View><Text>No access to camera</Text></View>;
  }

  return (
    <StyleContainer >
      <Camera
        ref={cameraRef}
        style={{ flex: 1}}
        type={type}
        flashMode={flash}
      >
        <HeaderContainer>
            <FlashButton onPress={toggleFlash}>
            {flash === Camera.Constants.FlashMode.off ? (
                  <ImageFlash resizeMode="contain" source={require('../../assets/flashoff.png')}  />
                ) : (
                  <ImageFlash resizeMode="contain" source={require('../../assets/flashon.png')} />
                )}
            </FlashButton>
            <Text1> Nhận diện cây </Text1>   
            <ButtonClose onPress={handleHome}>
              <ImageClose resizeMode="contain" source={require('../../assets/close.png')} tintColor={'white'} />
            </ButtonClose>
        </HeaderContainer>
        <Container >
          <GalleryButton onPress={handleChooseFromLibrary}>
            <ImageGallery resizeMode="cover" source={require('../../assets/gallery.png')} />          
          </GalleryButton>
          <TakePhotoButton onPress={handleTakePhoto}>
            <ImageCircle resizeMode="cover" source={require('../../assets/takephoto.png')} />
          </TakePhotoButton>  
           <ButtonReweet onPress={toggleCameraType}>
              <ImageReweet resizeMode="cover" source={require('../../assets/rotation.png')} tintColor={'white'} />
            </ButtonReweet>   
        </Container>
      </Camera>
      {/* Cửa sổ modal để hiển thị ảnh đã chụp và nút "Chụp lại" và "Lưu" */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: '#CEF1CF' }}>
          <Image
            style={{ width: '100%', height: '100%' }}
            source={{ uri: capturedPhoto ? capturedPhoto.uri : null }}
          />

          <View style={{ position: 'absolute', bottom: 20, left: 20, right: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
         
          {/* Xử lý Chụp lại */}
          <TouchableOpacity onPress={closePhotoPreview}>
             <Text2>Chụp lại</Text2>         
          </TouchableOpacity>

          {/* Xử lý Lưu */}
          <TouchableOpacity onPress={() => {
            // Xử lý việc lưu ảnh ở đây
            closePhotoPreview();
          }}>
           <Text3 onPress={Predicted}>Nhận diện</Text3>           
          </TouchableOpacity>
        </View>
        </View>
      </Modal>
    </StyleContainer>
  );
};

export default CameraScreen;