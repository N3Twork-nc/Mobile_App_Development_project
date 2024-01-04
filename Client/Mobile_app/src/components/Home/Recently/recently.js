import React, {useState} from 'react'
import { StyledContainer, HeaderContainer, MainTitle, ButtonBack, BackContainer,
         Plant1Container, ImageFrame, PlantName, PlantContainer, History,Info1,
         Info2, InfoPlant, Position, HistoryTitle,
        } from './styleRecently.js'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Text, ScrollView, SafeAreaView, StyleSheet, View, Alert, Image, TouchableOpacity } from 'react-native';
import { myPlant } from '../../../api/Plant.js';


const Recently = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const token = useSelector(state=>state.token)['payload'];
    const { plantData } = route.params;
    const [selectedRoom, setSelectedRoom] = useState(null);
    
    const handleBack = () => {
    navigation.goBack();
    };

    const handlePress = async (roomName) => {
        setSelectedRoom(roomName);
        let plantsInRoom = [];
        let destinationRoute = 'Room';
    
        try {
            if (roomName === 'Lưu trữ') {
                destinationRoute = 'Saved';
            }
    
            if (roomName) {
                plantsInRoom = await myPlant(token, roomName);
            }
        } catch (error) {
            console.log(error);
        }
        
        navigation.navigate(destinationRoute, { plantsInRoom, roomName });
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
                                <Plant1Container onPress={() => handlePress(allPlants[i].roomName)}>
                                    <ImageFrame resizeMode="cover" source={{uri:allPlants[i].plant.img}} />
                                    <PlantName numberOfLines={1}>{allPlants[i].plant.plantName}</PlantName>
                                    <Info1>
                                        <HistoryTitle>Ngày:</HistoryTitle>
                                        <History>{formatDate(allPlants[i].plant.timeUpload)}</History>
                                    </Info1>
                                    <Info1>
                                        <HistoryTitle>Thời gian:</HistoryTitle>
                                        <History>{formatTime(allPlants[i].plant.timeUpload)}</History>
                                    </Info1>
                                    <Info1>
                                        <HistoryTitle>Vị trí:</HistoryTitle>
                                        <History>{allPlants[i].roomName}</History>
                                    </Info1>
                                </Plant1Container>

                                {allPlants[i + 1] && (
                                    <Plant1Container onPress={() => handlePress(allPlants[i + 1].roomName)}>
                                        <ImageFrame resizeMode="cover" source={{uri:allPlants[i+1].plant.img}} />
                                        <PlantName numberOfLines={1}>{allPlants[i + 1].plant.plantName}</PlantName>
                                        <Info1>
                                            <HistoryTitle>Ngày:</HistoryTitle>
                                            <History>{formatDate(allPlants[i].plant.timeUpload)}</History>
                                        </Info1>
                                        <Info1>
                                            <HistoryTitle>Thời gian:</HistoryTitle>
                                            <History>{formatTime(allPlants[i].plant.timeUpload)}</History>
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

const formatDate= (dateTimeString) => {
    const dateTimeObj = new Date(dateTimeString);
    const year = dateTimeObj.getFullYear();
    const month = dateTimeObj.getMonth() + 1;
    const day = dateTimeObj.getDate();
    return `${day}/${month}/${year}`;
  };
const formatTime = (dateTimeString) => {
    const dateTimeObj = new Date(dateTimeString);
    const hour = dateTimeObj.getHours();
    const minute = dateTimeObj.getMinutes();
    const second = dateTimeObj.getSeconds();
    return `${hour}:${minute}:${second}`;
}