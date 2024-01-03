import React, {useState} from 'react'
import { StyledContainer, HeaderContainer, MainTitle, ButtonBack, BackContainer,
         Plant1Container, ImageFrame, PlantName, PlantContainer, History,Info1,
         Info2, InfoPlant, Position, HistoryTitle,
        } from './styleRecently.js'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Text, ScrollView, SafeAreaView, StyleSheet, View, Alert, Image, TouchableOpacity } from 'react-native';

const Recently = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { plantData } = route.params;
    const handleBack = () => {
    navigation.goBack();
    };
    
return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView style={{ flex: 1 }}>
            <StyledContainer >
                
                {/*Header*/}
                <HeaderContainer>
                    <BackContainer onPress={handleBack}>
                        <ButtonBack  resizeMode="cover" source={require('../../../assets/back.png')} />
                    </BackContainer>                    
                    <MainTitle>Gần đây</MainTitle>
                </HeaderContainer>

                {/* Plants */}
                <React.Fragment>
                {(() => {
                    const allPlants = [];
                    for (let roomName in plantData) {
                        const plantsInRoom = plantData[roomName];
                        const plantKeys = Object.keys(plantsInRoom);            
                        plantKeys.forEach((plantKey) => {
                            const plant = plantsInRoom[plantKey];
                            allPlants.push({ plant, roomName, plantKey });
                        });
                    }

                    // Sắp xếp mảng allPlants theo timeUpload giảm dần
                    allPlants.sort((a, b) => {
                        const timeA = new Date(a.plant.timeUpload).getTime();
                        const timeB = new Date(b.plant.timeUpload).getTime();
                        return timeB - timeA;
                    });

                    // Hiển thị các cây đã được sắp xếp theo timeUpload
                    const pairs = [];
                    for (let i = 0; i < allPlants.length; i += 2) {
                        pairs.push(
                            <PlantContainer key={i}>
                                <Plant1Container>
                                    <ImageFrame resizeMode="cover" source={require('../../../assets/plant0.jpg')} />
                                    <PlantName numberOfLines={1}>{allPlants[i].plant.plantName}</PlantName>
                                    <Info1>
                                        <HistoryTitle>Thời gian:</HistoryTitle>
                                        <History>{formatDate(allPlants[i].plant.timeUpload)}</History>
                                    </Info1>
                                    <Info1>
                                        <HistoryTitle>Vị trí:</HistoryTitle>
                                        <History>{allPlants[i].roomName}</History>
                                    </Info1>
                                </Plant1Container>

                                {allPlants[i + 1] && (
                                    <Plant1Container>
                                        <ImageFrame resizeMode="cover" source={require('../../../assets/plant1.jpg')} />
                                        <PlantName numberOfLines={1}>{allPlants[i + 1].plant.plantName}</PlantName>
                                        <Info1>
                                            <HistoryTitle>Thời gian:</HistoryTitle>
                                            <History>{formatDate(allPlants[i].plant.timeUpload)}</History>
                                        </Info1>
                                        <Info1>
                                            <HistoryTitle>Vị trí:</HistoryTitle>
                                            <History>{allPlants[i + 1].roomName}</History>
                                        </Info1>
                                    </Plant1Container>
                                )}
                            </PlantContainer>
                        );
                    }
                    return pairs;
                })()}
                </React.Fragment>
            </StyledContainer>
        </ScrollView>
    </SafeAreaView>
)
}
export default Recently;

const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    return `${day}/${month}/${year}`;
  };