import React, {useState} from 'react'
import { StyledContainer, HeaderContainer, MainTitle, ButtonBack, BackContainer,
         Plant1Container, Plant2Container, ImageFrame, PlantName, PlantContainer,
         ButtonContainer, IconButton, Icon, ButtonText, ButtonContainerWrapper,
        } from './styleLivingroom.js'
import { useNavigation } from '@react-navigation/native';
import { ScrollView, SafeAreaView } from 'react-native';
import { color } from 'react-native-elements/dist/helpers/index.js';
const Livingroom = () => {
const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate('Home');
    
  };
return (
    <SafeAreaView style={{ flex: 1 }}>
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
                <PlantContainer>
                    <Plant1Container>
                        <ImageFrame  resizeMode="cover" source={require('../../../../assets/plant1.jpg')}/>
                        <PlantName>  Vạn Niên Thanh </PlantName>
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
                    <Plant2Container>
                        <ImageFrame resizeMode="cover" source={require('../../../../assets/plant2.jpg')}/>
                        <PlantName> Lan Ý </PlantName>
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
                </PlantContainer>

                {/* Plants */}
                <PlantContainer>
                    <Plant1Container>
                        <ImageFrame  resizeMode="cover" source={require('../../../../assets/plant1.jpg')}/>
                        <PlantName>  Vạn Niên Thanh </PlantName>
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
                    <Plant2Container>
                        <ImageFrame resizeMode="cover" source={require('../../../../assets/plant2.jpg')}/>
                        <PlantName> Lan Ý </PlantName>
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
                </PlantContainer>
            </StyledContainer>
        </ScrollView>
    </SafeAreaView>


)
}
export default Livingroom;