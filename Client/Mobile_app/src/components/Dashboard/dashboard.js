import React, { useEffect, useState } from "react";
import {
  StyledContainer,  HeaderContainer,  TitleContainer,  MainTitle,  BackContainer,  ButtonBack,  DashBoardContainer,  CircularProgressContainer,
  TextContainer,  MainText,  SubText,  ItemText,  MoreContainer,  NowBoardContainer,
  NowBoard,  NowBoardText, IconContainer, ImageContainer, GardenImage, GardenInfo, ButtonsContainer, EditContainer, EditButton, SwitchContainer, SwitchButton, Line, IDContainer, IDText, IDTilte, EyeIcon,
} from "./styleDashboard";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView, ScrollView } from "react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as ImagePicker from 'expo-image-picker';
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import logo from '../../assets/logo.png';
import Modal from 'react-native-modal';
import { dashboard } from "octicons";
import MQTT from "../../mqtt"
import { useSelector } from 'react-redux';
const logoApp = logo;

const EditGardenAlert = ({ isVisible, gardenName, onSave, onCancel}) => {
const [editedName, setEditedName] = useState(gardenName);


const handleSaveGarden = () => {
    onSave(editedName);
  };

  return (
    <Modal isVisible={isVisible}>
      <View style={{ backgroundColor: "white", padding: 12, borderRadius: 15,  }}>
       {/* title */}
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 10, height: 50 }}>
          <Image source={logoApp} style={{ width: 32, height: 32, marginBottom: 5, marginRight: 5 }} />
          <Text style={{ fontSize: 17, fontWeight: "600" }}>Chỉnh sửa vườn</Text>
          <Image source={logoApp} style={{ width: 32, height: 32, marginBottom: 5, marginLeft: 5 }} />
        </View>
        
        {/* thông tin cần chỉnh sửa */}
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
          <Text style={{ fontSize: 16, flex: 1, fontWeight: "500", marginLeft: 10 }}>Tên vườn:</Text>
          <TextInput style={{ marginRight: 12, flex: 2, borderWidth: 1, borderColor: "gray", borderRadius: 5, paddingHorizontal: 10, height: 30 }} value={editedName} onChangeText={setEditedName} />
        </View>

        {/* Nút bấm */}
        <View style={{ padding: 10, zIndex: 1 }}>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <TouchableOpacity onPress={onCancel} style={{ marginRight: 25 }}>
              <Text style={{ color: "green", fontSize: 17 }}>Hủy</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSaveGarden}>
              <Text style={{ color: "green", fontSize: 17 }}>Lưu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}
var mqttclient=null;
const DashBoard = () => {
  const infoUser=useSelector(state=>state.infoUser)
  const route = useRoute();
  const { gardensDetail } = route.params;

 
// các navigation
  const navigation = useNavigation();
  const handleBack = () => {
    mqttclient.disconect()
    navigation.navigate("Home", { animation: false });
  };

// hàm lấy thời gian, vị trí
  const [currentTime, setCurrentTime] = useState("");
  const [dataDashBoard,setDataDataBoard]=useState({
    title: "Example Title",
    subtitle: "Example Subtitle",
    value: 100,
    temperature: 0,
    humidity: 0,
    light: 0,
    moisture:0,
    percent: 1,
    led:false
  })
  useEffect(() => {
    const username=infoUser.username;
    const id_garden=gardensDetail.gardenId
    mqttclient=new MQTT(setDataDataBoard,dataDashBoard,username,id_garden)
    const interval = setInterval(() => {
    const currentTime = new Date().toLocaleTimeString();
    setCurrentTime(currentTime);
    }, 1000);
    return () => clearInterval(interval);
    }, []);

// thông số hiển thị
  
  const placeholder = require('../../assets/plant1.jpg');

  // Hình ảnh của vườn
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [isEditingAvatar, setIsEditingAvatar] = useState(false);
  let imgSource;
  if (isEditingAvatar) {
    imgSource = capturedPhoto ? { uri: capturedPhoto.uri } : null;
  } else {
    imgSource = placeholder;
  }
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
  


  // Chỉnh sửa vườn
  const [gardenName, setGardenName] = useState(""); 
  const [isEditGardenVisible, setIsEditGardenVisible] = useState(false);

    const handleEditGarden = () => {
    setIsEditGardenVisible(true);
  };
  const handleSaveGarden = (editedName) => {
    // xử lý đổi tên vườn tại đây
    setGardenName(editedName);
    setIsEditGardenVisible(false);
  };

  const handleCancelEdit = () => {
    setIsEditGardenVisible(false);
  };

  const toggleLightOn = () => {
    mqttclient.controlLED()
  }

  // hiển thị ID vườn
  const [showID, setShowID] = useState(false);
  const id = gardensDetail.gardenId;
  const hiddenID = "*".repeat(id.length);
  const toggleShowID = () => {
    setShowID(!showID);
  }


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <HeaderContainer>
        <TitleContainer>
          <BackContainer onPress={handleBack}>
            <ButtonBack source={require("../../assets/back.png")} />
          </BackContainer>
          <MainTitle>{gardensDetail.gardenname}</MainTitle>
        </TitleContainer>
      </HeaderContainer>
      <StyledContainer>
        <NowBoardContainer>
          <NowBoard>
            <NowBoardText>{currentTime}</NowBoardText>
          </NowBoard>
          <NowBoard>
            <NowBoardText>{gardensDetail.location}</NowBoardText>
          </NowBoard>
        </NowBoardContainer>
        <GardenInfo>
          <ImageContainer onPress={handleChooseFromLibrary}>
            <GardenImage  
              style={{borderRadius: 8, borderWidth: 0.5, borderColor: 'green'}}
              resizeMode="contain" 
              source={imgSource}/>
          </ImageContainer>
          <ButtonsContainer>
            <EditContainer onPress={handleEditGarden}>
              <EditButton  resizeMode="cover" source={require("../../assets/edit.png")}/>
              <EditGardenAlert
                isVisible={isEditGardenVisible}
                gardenName={gardenName}
                onSave={handleSaveGarden}
                onCancel={handleCancelEdit}
              />   
            </EditContainer>
            <SwitchContainer onPress={toggleLightOn}>
              <SwitchButton 
                source={
                    dataDashBoard.led
                      ? require('../../assets/lighton.png')
                      : require('../../assets/lightoff.png')
                  }
              />
            </SwitchContainer>             
          </ButtonsContainer>                   
        </GardenInfo>

        <IDContainer>
          <IDTilte>ID vườn:  </IDTilte>
          <IDText>{showID ? id : hiddenID}</IDText>
          <TouchableOpacity onPress={toggleShowID}>
            <EyeIcon 
              source={
                      showID
                        ? require('../../assets/open-eye.png')
                        : require('../../assets/close-eye.png')
                    }
            />
          </TouchableOpacity>
          
        </IDContainer> 

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
                fill={dataDashBoard.temperature}
                backgroundColor="#FFE3BB"             
                tintColor="#F05941"
                rotation={360}
                lineCap="round" >
                    {() => (
                      <CircularProgressContainer>
                        <ItemText>
                        {dataDashBoard.temperature}°C</ItemText>
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
                fill={dataDashBoard.humidity}
                backgroundColor="#E0F4FF"             
                tintColor="#39A7FF"
                rotation={360}
                lineCap="round" >
                    {() => (
                      <CircularProgressContainer>
                        <ItemText>
                        {dataDashBoard.humidity}%</ItemText>
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
                fill={dataDashBoard.light}
                backgroundColor="#F5EEC8"             
                tintColor="#F4CE14"
                rotation={360}
                lineCap="round" >
                    {() => (
                      <CircularProgressContainer>
                        <ItemText>
                        {dataDashBoard.light}%</ItemText>
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
                fill={dataDashBoard.moisture}
                backgroundColor="#F8DFD4"             
                tintColor="#C69774"
                rotation={360}
                lineCap="round" >
                    {() => (
                      <CircularProgressContainer>
                        <ItemText>
                        {dataDashBoard.moisture}%</ItemText>
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