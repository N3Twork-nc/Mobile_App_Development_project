import React, {useState} from 'react'
import { StyledContainer, HeaderContainer, MainTitle, ButtonBack, BackContainer,
         Plant1Container, Plant2Container, ImageFrame, PlantName, PlantContainer,
         ButtonContainer, IconButton, Icon, ButtonText, ButtonContainerWrapper,
        } from './styleRoom'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, SafeAreaView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { getPlant } from '../../../api/Plant.js';
import LottieView from 'lottie-react-native';

const Room = () => {
    const [isLoading, setIsLoading] = useState(false);
    const token = useSelector(state=>state.token)['payload'];
    const navigation = useNavigation();
    const route = useRoute();
    const { plantsInRoom, roomName } = route.params;

    const handleInfo = async (plantname) => {
        setIsLoading(true);
        let info = [];
        try {
            info = await getPlant(token, plantname);
        } catch (error) {
        console.log(error);
        }
        navigation.navigate('PlantDetail', { info, plantname });
        setIsLoading(false);
    };

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
                                <PlantName>{plantsInRoom[keys[i]].plantName} </PlantName>
                                <ButtonContainerWrapper>
                                    <ButtonContainer>
                                    <IconButton onPress={() => handleInfo(plantsInRoom[keys[i]].plantName)}>
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
                                <PlantName>{plantsInRoom[keys[i + 1]].plantName} </PlantName>
                                <ButtonContainerWrapper>
                                    <ButtonContainer>
                                    <IconButton onPress={() => handleInfo(plantsInRoom[keys[i + 1]].plantName)}>
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
                            )}
                        </PlantContainer>
                        );} return pairs;
                    })()}
                    </React.Fragment>
                )}
                
            </StyledContainer>
        </ScrollView>
        {isLoading && (
            <View style={[StyleSheet.absoluteFillObject, styles.container]}>
                <LottieView
                    resizeMode="contain"
                    source={require('../../../assets/Animation-loading1.json')}
                    autoPlay
                    style={{ width: 100, height: 100 }}
                />
            </View>
        )}
    </SafeAreaView>
)
}
export default Room;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
  });
