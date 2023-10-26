import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity,Image, Modal } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome5 } from 'react-native-vector-icons';
import { ImageCircle, TakePhotoButton, Container,ButtonReweet,Text1,Text2,Text3,
        HeaderContainer,FlashButton,ImageFlash,RetakeSaveButtons,StyleContainer
} from './styleCamera'

  const CameraScreen = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const cameraRef = useRef(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);

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
      setIsModalVisible(true); // Hiển thị cửa sổ modal với nút "Chụp lại" và "Lưu"
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
    <StyleContainer>
      <Camera
        ref={cameraRef}
        style={{ flex: 1 }}
        type={type}
        flashMode={flash}
      >
        <HeaderContainer>
        <FlashButton onPress={toggleFlash}>
        {flash === Camera.Constants.FlashMode.off ? (
              <ImageFlash resizeMode="cover" source={require('../../assets/flashoff.png')}  />
            ) : (
              <ImageFlash resizeMode="cover" source={require('../../assets/flashon.png')} />
            )}
        </FlashButton>
        <Text1> Nhận diện cây </Text1>   
        </HeaderContainer>
        <Container >
          <TakePhotoButton onPress={handleTakePhoto}>
            <ImageCircle resizeMode="cover" source={require('../../assets/takephoto.png')} />
          </TakePhotoButton>  
           <ButtonReweet onPress={toggleCameraType}>
              <FontAwesome5 name="sync-alt" size={24} color="white" />
            </ButtonReweet>   
        </Container>
      </Camera>

      {/* Cửa sổ modal để hiển thị ảnh đã chụp và nút "Chụp lại" và "Lưu" */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
            <Text3>Lưu</Text3>
          </TouchableOpacity>

          </View>
        </View>
      </Modal>
    </StyleContainer>
  );
};

export default CameraScreen;
