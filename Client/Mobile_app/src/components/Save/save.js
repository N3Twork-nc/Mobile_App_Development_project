import React, {useState} from 'react'
import { StyledContainer, HeaderContainer, MainTitle, ButtonBack, BackContainer,
         Plant1Container, Plant2Container, ImageFrame, PlantName, PlantContainer,
         ButtonContainer, IconButton, Icon, ButtonText, ButtonContainerWrapper,
        } from './styleSave'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, SafeAreaView } from 'react-native';

const Save = () => {
const navigation = useNavigation();
const route = useRoute();
const { plantsInRoom, roomName } = route.params;
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
                        <ButtonBack  resizeMode="cover" source={require('../../../assets/back.png')} />
                    </BackContainer>                    
                    <MainTitle>{roomName}</MainTitle>
                </HeaderContainer>

                {/* Plants */}
                {plantsInRoom && Object.keys(plantsInRoom).length >= 1 && (
                    <React.Fragment>
                        {(() => {
                            const pairs = [];
                            const keys = Object.keys(plantsInRoom);
                            for (let i = 0; i < keys.length; i += 2) {
                            pairs.push(
                        <PlantContainer key={i}>
                            <Plant1Container>
                                <ImageFrame  resizeMode="cover" source={{uri:plantsInRoom[keys[i]].Img}}/>
                                <PlantName> {plantsInRoom[keys[i]].plantName} </PlantName>
                                <ButtonContainerWrapper>
                                    <ButtonContainer>
                                    <IconButton>
                                        <Icon source={require('../../../assets/info.png')} />
                                        <ButtonText>Chi tiết</ButtonText>
                                    </IconButton>
                                    <IconButton onPress={handleSchedule}>
                                        <Icon source={require('../../../assets/water.png')} />
                                        <ButtonText>Đặt lịch</ButtonText>
                                    </IconButton>
                                    <IconButton>
                                        <Icon source={require('../../../assets/move.png')} />
                                        <ButtonText>Di chuyển</ButtonText>
                                    </IconButton>
                                    </ButtonContainer>
                                </ButtonContainerWrapper>                        
                            </Plant1Container>
                    {keys[i + 1] && (
                            
                            <Plant1Container>
                                <ImageFrame  resizeMode="cover" source={{uri:plantsInRoom[keys[i + 1]].Img}}/>
                                <PlantName> {plantsInRoom[keys[i + 1]].plantName} </PlantName>
                                <ButtonContainerWrapper>
                                    <ButtonContainer>
                                    <IconButton>
                                        <Icon source={require('../../../assets/info.png')} />
                                        <ButtonText>Chi tiết</ButtonText>
                                    </IconButton>
                                    <IconButton>
                                        <Icon source={require('../../../assets/water.png')} />
                                        <ButtonText>Đặt lịch</ButtonText>
                                    </IconButton>
                                    <IconButton>
                                        <Icon source={require('../../../assets/move.png')} />
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
export default Save;