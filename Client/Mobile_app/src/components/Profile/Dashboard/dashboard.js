import React, { useEffect, useState } from "react";
import {
  StyledContainer,  HeaderContainer,  TitleContainer,  MainTitle,  BackContainer,  ButtonBack,  DashBoardContainer,  CircularProgressContainer,
  TextContainer,  MainText,  SubText,  ItemText,  MoreContainer,  NowBoardContainer,
  NowBoard,  NowBoardText, IconContainer,
} from "./styleDashboard";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView } from "react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import MQTT from '../../../mqtt'


const DashBoard = () => {
 
// các navigation
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate("Gardens", { animation: false });
  };

// hàm lấy thời gian, vị trí
  const [currentTime, setCurrentTime] = useState("");
  const [currentLocation, setCurrentLocation] = useState(null); 
  const [data, setData]=useState({
    title: "Example Title",
    subtitle: "Example Subtitle",
    value: 100,
    temperature:0,
    humidity:0,
    light:0,
    moisture:0,
    percent: 1
  });
  useEffect(() => {
    setData(data)
    const mqtt=new MQTT(setData,data,"plantaholic","Plantaholic123")
    const interval = setInterval(() => {
    const currentTime = new Date().toLocaleTimeString();
    setCurrentTime(currentTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

// thông số hiển thi

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <HeaderContainer>
        <TitleContainer>
          <BackContainer onPress={handleBack}>
            <ButtonBack source={require("../../../assets/back.png")} />
          </BackContainer>
          <MainTitle>Dashboard</MainTitle>
        </TitleContainer>
      </HeaderContainer>
      <StyledContainer>
        <NowBoardContainer>
          <NowBoard>
            <NowBoardText>{currentTime}</NowBoardText>
          </NowBoard>
          <NowBoard>
            <NowBoardText>Dĩ An, Bình Dương</NowBoardText>
          </NowBoard>
        </NowBoardContainer>
        
        <DashBoardContainer>
          <IconContainer resizeMode="cover" source={require("../../../assets/temper.png")}/>
          <TextContainer>
            <MainText>Nhiệt độ</MainText>
            <SubText>Nhiệt độ bên ngoài hôm nay</SubText>
          </TextContainer>
          <CircularProgressContainer>
            <AnimatedCircularProgress
                size={90} width={8}
                fill={data.temperature}
                backgroundColor="#FFE3BB"             
                tintColor="#F05941"
                rotation={360}
                lineCap="round" >
                    {() => (
                      <CircularProgressContainer>
                        <ItemText>{data.temperature}°C</ItemText>
                      </CircularProgressContainer>
                    )}
            </AnimatedCircularProgress>                
          </CircularProgressContainer>
        </DashBoardContainer>
        <DashBoardContainer>
          <IconContainer source={require("../../../assets/humidity1.png")}/>

          <TextContainer>
            <MainText>Độ ẩm không khí</MainText>
            <SubText>Độ ẩm không khí hôm nay</SubText>
          </TextContainer>
          <CircularProgressContainer>
            <AnimatedCircularProgress
                size={90} width={8}
                fill={data.humidity}
                backgroundColor="#E0F4FF"             
                tintColor="#39A7FF"
                rotation={360}
                lineCap="round" >
                    {() => (
                      <CircularProgressContainer>
                        <ItemText>
                        {data.humidity}%</ItemText>
                      </CircularProgressContainer>
                    )}
            </AnimatedCircularProgress>                
          </CircularProgressContainer>
        </DashBoardContainer>
        <DashBoardContainer>
          <IconContainer source={require("../../../assets/sun.png")}/>
          <TextContainer>
            <MainText>Ánh sáng</MainText>
            <SubText>Cường độ ánh sáng lúc này</SubText>
          </TextContainer>
          <CircularProgressContainer>
            <AnimatedCircularProgress
                size={90} width={8}
                fill={data.light}
                backgroundColor="#F5EEC8"             
                tintColor="#F4CE14"
                rotation={360}
                lineCap="round" >
                    {() => (
                      <CircularProgressContainer>
                        <ItemText>
                        {data.light}%</ItemText>
                      </CircularProgressContainer>
                    )}
            </AnimatedCircularProgress>                
          </CircularProgressContainer>
        </DashBoardContainer>
        <DashBoardContainer>
          <IconContainer resizeMode={"contain"} source={require("../../../assets/soil.png")}/>

          <TextContainer>
            <MainText>Độ ẩm đất</MainText>
            <SubText>Độ ẩm đất hôm nay có đủ?</SubText>
          </TextContainer>
          <CircularProgressContainer>
            <AnimatedCircularProgress
                size={90} width={8}
                fill={data.moisture}
                backgroundColor="#F8DFD4"             
                tintColor="#C69774"
                rotation={360}
                lineCap="round" >
                    {() => (
                      <CircularProgressContainer>
                        <ItemText>
                        {data.moisture}%</ItemText>
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