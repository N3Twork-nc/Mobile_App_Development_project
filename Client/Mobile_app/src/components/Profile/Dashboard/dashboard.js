import React, { useEffect, useState } from "react";
import {
  StyledContainer,  HeaderContainer,  TitleContainer,  MainTitle,  BackContainer,  ButtonBack,  DashBoardContainer,  CircularProgressContainer,
  TextContainer,  MainText,  SubText,  ItemText,  MoreContainer,  NowBoardContainer,
  NowBoard,  NowBoardText, IconContainer,
} from "./styleDashboard";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView } from "react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Image } from "react-native";

const DashBoard = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate("Profile", { animation: false });
  };
  const [currentTime, setCurrentTime] = useState("");
  const [currentLocation, setCurrentLocation] = useState(null);
 
  useEffect(() => {
    // Lấy thời gian thực
    const interval = setInterval(() => {
    const currentTime = new Date().toLocaleTimeString();
    setCurrentTime(currentTime);
    }, 1000);
    return () => clearInterval(interval);
    }, []);

  const itemDashboard = {
    title: "Example Title",
    subtitle: "Example Subtitle",
    value: 100,
    temperature: 30,
    humidity: 75,
    light: 40,
    percent: 1,
  };

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
          <IconContainer source={require("../../../assets/humidity1.png")}/>

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
          <IconContainer source={require("../../../assets/sun.png")}/>
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
          <IconContainer source={require("../../../assets/humidity1.png")}/>

          <TextContainer>
            <MainText>Độ ẩm đất</MainText>
            <SubText>Độ ẩm đất hôm nay có đủ?</SubText>
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
      </StyledContainer>
    </ScrollView>
    </SafeAreaView>
  );
};

export default DashBoard;