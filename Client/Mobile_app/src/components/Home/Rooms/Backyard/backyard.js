import React, {useState} from 'react'
import { StyledContainer, HeaderContainer, MainTitle, ButtonBack, BackContainer,
         Plant1Container, Plant2Container, ImageFrame, PlantName, PlantContainer,
         ButtonContainer, IconButton, Icon, ButtonText, ButtonContainerWrapper,
        } from './styleBackyard.js'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, SafeAreaView } from 'react-native';

const Backyard = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { plantsInRoom } = route.params;
    const handleBack = () => {
        navigation.navigate('Home');
    };

return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView style={{ flex: 1 }}>
            <StyledContainer >
                
                {/*Header*/}
                <HeaderContainer>
                    <BackContainer onPress={handleBack}>
                        <ButtonBack  resizeMode="cover" source={require('../../../../assets/back.png')} />
                    </BackContainer>                    
                    <MainTitle>Sân vườn</MainTitle>
                </HeaderContainer>

                {/* Plants */}
                {plantsInRoom.map((plant, index) => (
                    <PlantContainer key={index}>
                    {(index % 2 == 0) ? (
                        <React.Fragment>
                            
                            <Plant1Container>
                                <ImageFrame  resizeMode="cover" source={require('../../../../assets/plant1.jpg')}/>
                                <PlantName> {plant.plantname} </PlantName>
                                <ButtonContainerWrapper>
                                    <ButtonContainer>
                                    <IconButton>
                                        <Icon source={require('../../../../assets/info.png')} />
                                        <ButtonText>Chi tiết</ButtonText>
                                    </IconButton>
                                    <IconButton>
                                        <Icon source={require('../../../../assets/water.png')} />
                                        <ButtonText>Đặt lịch</ButtonText>
                                    </IconButton>
                                    <IconButton>
                                        <Icon source={require('../../../../assets/move.png')} />
                                        <ButtonText>Di chuyển</ButtonText>
                                    </IconButton>
                                    </ButtonContainer>
                                </ButtonContainerWrapper>                        
                            </Plant1Container>

                    {plantsInRoom[index + 1] && (
                            
                            <Plant2Container>
                                <ImageFrame  resizeMode="cover" source={require('../../../../assets/plant2.jpg')}/>
                                <PlantName> {plant.plantname} </PlantName>
                                <ButtonContainerWrapper>
                                    <ButtonContainer>
                                    <IconButton>
                                        <Icon source={require('../../../../assets/info.png')} />
                                        <ButtonText>Chi tiết</ButtonText>
                                    </IconButton>
                                    <IconButton>
                                        <Icon source={require('../../../../assets/water.png')} />
                                        <ButtonText>Đặt lịch</ButtonText>
                                    </IconButton>
                                    <IconButton>
                                        <Icon source={require('../../../../assets/move.png')} />
                                        <ButtonText>Di chuyển</ButtonText>
                                    </IconButton>
                                    </ButtonContainer>
                                </ButtonContainerWrapper>                        
                            </Plant2Container>

                    )}
                        </React.Fragment>
                    ) : null}
                    </PlantContainer>
                ))}
                
            </StyledContainer>
        </ScrollView>
    </SafeAreaView>


)
}
export default Backyard;