import React, {useState} from 'react'
import { StyledContainer, HeaderContainer, MainTitle, ButtonBack, BackContainer,
         Plant1Container, ImageFrame, PlantName, PlantContainer, History,Info1,
         Info2, InfoPlant, Position, HistoryTitle,
        } from './styleRecently.js'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, ScrollView, SafeAreaView, StyleSheet, View, Alert, Image, TouchableOpacity } from 'react-native';

const Recently = () => {
    const navigation = useNavigation();
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
                        <PlantContainer>
                            <Plant1Container>
                                <ImageFrame  resizeMode="cover" source={require('../../../assets/plant0.jpg')}/>
                                <PlantName numberOfLines={1}>Hướng dương</PlantName>    
                                    <Info1>
                                        <HistoryTitle>Thời gian:</HistoryTitle>
                                        <History>2/1/2024</History>
                                    </Info1>
                                    <Info1>
                                        <HistoryTitle>Vị trí:</HistoryTitle>
                                        <History>Phòng khách</History>
                                    </Info1>             
                            </Plant1Container>
                            <Plant1Container>
                                <ImageFrame  resizeMode="cover" source={require('../../../assets/plant1.jpg')}/>
                                <PlantName numberOfLines={1}>Cây chi ko biết</PlantName>   
                                <Info1>
                                        <HistoryTitle>Thời gian:</HistoryTitle>
                                        <History>2/1/2024</History>
                                    </Info1>
                                    <Info1>
                                        <HistoryTitle>Vị trí:</HistoryTitle>
                                        <History>Phòng khách</History>
                                    </Info1>                       
                            </Plant1Container>
                        </PlantContainer>                
            </StyledContainer>
        </ScrollView>
    </SafeAreaView>
)
}
export default Recently;

