import React, {useState} from 'react'
import { StyledContainer, HeaderContainer, MainTitle, ButtonBack, BackContainer,
         Plant1Container, Plant2Container, ImageFrame, PlantName, PlantContainer,
         ButtonContainer, IconButton, Icon, ButtonText, ButtonContainerWrapper,
        } from './styleLivingroom'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, SafeAreaView } from 'react-native';

const Livingroom = () => {
const navigation = useNavigation();
const route = useRoute();
const { plantsInRoom } = route.params;
  const handleBack = () => {
    navigation.navigate('Home');
  };
  const handleSchedule = () => {
    navigation.navigate('Schedule');
    
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
                    <MainTitle>Phòng khách</MainTitle>
                </HeaderContainer>

                {/* Plants */}
                {plantsInRoom.length >= 1 && (
                    <React.Fragment>
                        {(() => {
                            const pairs = [];
                            for (let i = 0; i < plantsInRoom.length; i += 2) {
                            pairs.push(
                        <PlantContainer key={i}>
                            <Plant1Container>
                                <ImageFrame  resizeMode="cover" source={require('../../../../assets/plant1.jpg')}/>
                                <PlantName> {plantsInRoom[i].plantname} </PlantName>
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
                    {plantsInRoom[i + 1] && (
                            
                            <Plant1Container>
                                <ImageFrame  resizeMode="cover" source={require('../../../../assets/plant2.jpg')}/>
                                <PlantName> {plantsInRoom[i + 1].plantname} </PlantName>
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
                            )}
                        </PlantContainer>
                        );} return pairs;
                    })()}
                    </React.Fragment>
                )}
                
            </StyledContainer>
        </ScrollView>
    </SafeAreaView>


)
}
export default Livingroom;