import React, { useEffect, useState } from "react";
import {
  StyledContainer,  HeaderContainer,  TitleContainer,  MainTitle,  BackContainer,  ButtonBack,  DashBoardContainer,  CircularProgressContainer,
  TextContainer,  MainText,  SubText,  ItemText,  MoreContainer,  NowBoardContainer,
  NowBoard,  NowBoardText, IconContainer, NowBoardTime, NowBoardLocate, ImageContainer, GardenImage, GardenInfo, ButtonsContainer, EditContainer, EditButton, SwitchContainer, SwitchButton, Line,
} from "./styleDashboard";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView, Image } from "react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as ImagePicker from 'expo-image-picker';
import { Modal, View,Text, TextInput, TouchableOpacity } from "react-native";
import logo from '../../assets/logo.png';


const logoApp = logo;

const DashBoard = () => {
 
// các navigation
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate("Gardens", { animation: false });
  };

// hàm lấy thời gian, vị trí
  const [currentTime, setCurrentTime] = useState("");
  const [currentLocation, setCurrentLocation] = useState(null); 
  useEffect(() => {
    const interval = setInterval(() => {
    const currentTime = new Date().toLocaleTimeString();
    setCurrentTime(currentTime);
    }, 1000);
    return () => clearInterval(interval);
    }, []);

// thông số hiển thị
  const itemDashboard = {
    value: 100,
    temperature: 30,
    humidity: 75,
    light: 40,
    percent: 1,
  };
  const placeholder = require('../../assets/placeholder.png');

  // Hình ảnh của vườn
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [isEditingAvatar, setIsEditingAvatar] = useState(false);
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
  
  let imgSource;
  if (isEditingAvatar) {
    imgSource = capturedPhoto ? { uri: capturedPhoto.uri } : null;
  } else {
    imgSource = placeholder;
  }

  //edit thông tin vườn
  const [isEditVisible, setEditVisible] = useState(false);
  const EditGarden = ({ isVisible, message, onSave, onCancel }) => {
    return (
      <Modal isVisible={isVisible}>
        <View style={{ backgroundColor: 'white', padding: 12, borderRadius: 15}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' ,marginBottom: 10, height: 50, }}>
            <Image source={logoApp} style={{ width: 32, height: 32, marginBottom: 5, marginRight: 5 }} />
            <Text style={{ fontSize: 17, fontWeight: '600', }}>{message}</Text>
            <Image source={logoApp} style={{ width: 32, height: 32, marginBottom: 5,  marginLeft:5  }} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,  }}>
            <Text style={{ fontSize: 16, flex: 1, fontWeight: '500', marginLeft: 10 }}>Tên vườn:</Text>
            <TextInput style={{ marginRight: 12, flex: 2, borderWidth: 1, borderColor: 'gray', borderRadius: 5, paddingHorizontal: 10, height: 30 }} />
          </View>
          <Image source={logoApp} style={{ width: 100, height: 50, marginBottom: 5,  marginLeft:5  }}/>
          <View style={{ padding: 10, zIndex: 1}}>              
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', }}>
            <TouchableOpacity onPress={onCancel} style={{ marginRight: 25 }}>
              <Text style={{ color: 'green', fontSize: 17 }}>Hủy</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSave}>
              <Text style={{ color: 'green', fontSize: 17 }}>Lưu</Text>
            </TouchableOpacity>
          </View>
        </View>        
      </View>
      </Modal>
    )
  };
  const handleEdit = () =>
  {
    setEditVisible(true);
  };
  const handleSaveEdit = () =>
  {
    // xử lý việc lưu thông tin mới của vườn

    setEditVisible(false);
  };
  const handleCancelEdit = () =>
  {
    setEditVisible(false);
  }
 
  

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <HeaderContainer>
        <TitleContainer>
          <BackContainer onPress={handleBack}>
            <ButtonBack source={require("../../assets/back.png")} />
          </BackContainer>
          <MainTitle>Vườn 1</MainTitle>
        </TitleContainer>
      </HeaderContainer>
      <StyledContainer>
        <NowBoardContainer>
          <NowBoardTime>
            <NowBoardText>{currentTime}</NowBoardText>
          </NowBoardTime>
          <NowBoardLocate>
            <NowBoardText>Dĩ An, Bình Dương</NowBoardText>
          </NowBoardLocate>
        </NowBoardContainer>
        <GardenInfo>
          <ImageContainer>
            <GardenImage  
              style={{borderRadius: 8, borderWidth: 0.5, borderColor: 'green'}}
              resizeMode="contain" 
              source={imgSource}/>
          </ImageContainer>
          <ButtonsContainer>
            <EditContainer>              
              <EditButton source={require("../../assets/edit.png")} tintColor='#164303'/>
              <EditGarden
                isVisible={isEditVisible}
                message="Chỉnh sửa"
                onCancel={handleCancelEdit}
                onSave={handleSaveEdit}
              />
            </EditContainer>
           
            <SwitchContainer>
              <SwitchButton source={require("../../assets/lighton.png")} tintColor='#164303'/>
            </SwitchContainer>
          </ButtonsContainer>
        </GardenInfo>
        <Line/>
        <MainTitle>Dashboard</MainTitle>
        <DashBoardContainer>
          <IconContainer resizeMode="cover" source={require("../../assets/temper.png")}/>
          <TextContainer>
            <MainText>Nhiệt độ</MainText>
            <SubText>Nhiệt độ bên ngoài hôm nay</SubText>
          </TextContainer>
          <CircularProgressContainer>
            <AnimatedCircularProgress
                size={90} width={8}
                fill={itemDashboard.temperature}
                backgroundColor="#FFE3BB"             
                tintColor="#F05941"
                rotation={360}
                lineCap="round" >
                    {() => (
                      <CircularProgressContainer>
                        <ItemText>
                        {itemDashboard.temperature}°C</ItemText>
                      </CircularProgressContainer>
                    )}
            </AnimatedCircularProgress>                
          </CircularProgressContainer>
        </DashBoardContainer>
        <DashBoardContainer>
          <IconContainer source={require("../../assets/humidity1.png")}/>

          <TextContainer>
            <MainText>Độ ẩm không khí</MainText>
            <SubText>Độ ẩm không khí hôm nay</SubText>
          </TextContainer>
          <CircularProgressContainer>
            <AnimatedCircularProgress
                size={90} width={8}
                fill={itemDashboard.humidity}
                backgroundColor="#E0F4FF"             
                tintColor="#39A7FF"
                rotation={360}
                lineCap="round" >
                    {() => (
                      <CircularProgressContainer>
                        <ItemText>
                        {itemDashboard.humidity}%</ItemText>
                      </CircularProgressContainer>
                    )}
            </AnimatedCircularProgress>                
          </CircularProgressContainer>
        </DashBoardContainer>
        <DashBoardContainer>
          <IconContainer source={require("../../assets/sun.png")}/>
          <TextContainer>
            <MainText>Ánh sáng</MainText>
            <SubText>Cường độ ánh sáng lúc này</SubText>
          </TextContainer>
          <CircularProgressContainer>
            <AnimatedCircularProgress
                size={90} width={8}
                fill={itemDashboard.light}
                backgroundColor="#F5EEC8"             
                tintColor="#F4CE14"
                rotation={360}
                lineCap="round" >
                    {() => (
                      <CircularProgressContainer>
                        <ItemText>
                        {itemDashboard.light}%</ItemText>
                      </CircularProgressContainer>
                    )}
            </AnimatedCircularProgress>                
          </CircularProgressContainer>
        </DashBoardContainer>
        <DashBoardContainer>
          <IconContainer resizeMode={"contain"} source={require("../../assets/soil.png")}/>

          <TextContainer>
            <MainText>Độ ẩm đất</MainText>
            <SubText>Độ ẩm đất hôm nay có đủ?</SubText>
          </TextContainer>
          <CircularProgressContainer>
            <AnimatedCircularProgress
                size={90} width={8}
                fill={itemDashboard.humidity}
                backgroundColor="#F8DFD4"             
                tintColor="#C69774"
                rotation={360}
                lineCap="round" >
                    {() => (
                      <CircularProgressContainer>
                        <ItemText>
                        {itemDashboard.humidity}%</ItemText>
                      </CircularProgressContainer>
                    )}
            </AnimatedCircularProgress>                
          </CircularProgressContainer>
        </DashBoardContainer>
      </StyledContainer>
    </ScrollView>
    </SafeAreaView>
  );
};

export default DashBoard;