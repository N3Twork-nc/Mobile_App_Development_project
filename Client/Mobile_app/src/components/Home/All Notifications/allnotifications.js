import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { StyledContainer, HeaderContainer, MainTitle, BackContainer,
ButtonBack, NotifyContainer, NotifyImageContainer, MainText1, MainText,
SubText, MoreContainer, TextNotify, } from './styledAllnotification.js';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { myPlant } from '../../../api/Plant.js';

const AllNotifications = () => {
    const navigation = useNavigation(); 
    const route = useRoute();
    const token = useSelector(state=>state.token)['payload'];
    const { plantData } = route.params;
    //console.log(plantData)
    const handleBack = () => { navigation.goBack() }

    const extractedSchedules = {};
    Object.keys(plantData).forEach((room) => {
      if (room !== "Lưu trữ") {
        extractedSchedules[room] = {};
        Object.keys(plantData[room]).forEach((key) => {
          if ("Schedule" in plantData[room][key]) {
            const plantName = plantData[room][key]["plantName"]; // Lấy tên cây
            extractedSchedules[room][key] = {
              plantName: plantName,
              Schedule: plantData[room][key]["Schedule"],
            };
          }
        });
      }
    });
    
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView style={{ flex: 1 }}>
          <StyledContainer>
            {/* Header */}
            <HeaderContainer>
              <BackContainer onPress={handleBack}>
                <ButtonBack  resizeMode="cover" source={require('../../../assets/back.png')} />
              </BackContainer> 
              <MainTitle>Thông báo</MainTitle>
            </HeaderContainer>
            
            {/* NotifyContainers */}
            {Object.keys(extractedSchedules).map((room) => (
              Object.keys(extractedSchedules[room]).map((key) => {
                const schedule = extractedSchedules[room][key];
                return (
                  <React.Fragment key={key}>
                    <MainText1>{schedule.plantName.replace(/\(.*?\)/g, '')} - {room}</MainText1>
                    {Object.keys(schedule.Schedule).map((eventKey) => (
                      <NotifyContainer key={eventKey}>
                        <NotifyImageContainer resizeMode="cover" source={require('../../../assets/logo2.png')} />
                        <TextNotify>
                          <MainText>{schedule.Schedule[eventKey].note}</MainText>
                          <SubText>Cách {schedule.Schedule[eventKey].frequency} {schedule.Schedule[eventKey].frequencyType} bạn có lịch {schedule.Schedule[eventKey].action} lúc {schedule.Schedule[eventKey].timeStart} kể từ {schedule.Schedule[eventKey].dateStart}</SubText>
                        </TextNotify>
                      </NotifyContainer>
                    ))}
                  </React.Fragment>
                );
              })
            ))}



          </StyledContainer>
        </ScrollView>
        
        
      </SafeAreaView>
    );
  };
  
  export default AllNotifications;

