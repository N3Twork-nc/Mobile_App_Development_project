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
              <EditButton  resizeMode="cover" source={require("../../assets/edit.png")}/>
            </EditContainer>
            <SwitchContainer>
              <SwitchButton  resizeMode="cover" source={require("../../assets/lighton.png")}/>
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