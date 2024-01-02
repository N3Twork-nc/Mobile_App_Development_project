import React, {useState} from 'react'
import { StyledContainer, HeaderContainer, MainTitle, ButtonBack, BackContainer,
         Plant1Container, Plant2Container, ImageFrame, PlantName, PlantContainer,
         ButtonContainer, IconButton, Icon, ButtonText, ButtonContainerWrapper,
        } from './styleRoom'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, ScrollView, SafeAreaView, StyleSheet, View, Alert, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { getPlant } from '../../../api/Plant.js';
import LottieView from 'lottie-react-native';
import Modal from 'react-native-modal';
import logo from '../../../assets/logo.png';
const logoApp = logo;

const Room = () => {
    const [isLoading, setIsLoading] = useState(false);
    const token = useSelector(state=>state.token)['payload'];
    const navigation = useNavigation();
    const route = useRoute();
    const { plantsInRoom, roomName } = route.params;

    // Xử lý xóa cây
    const [isAlertVisible, setAlertVisible] = useState(false);
    const [deleteGardenId,setDeleteGardenId]=useState(null)
    
    const handleDelete = (garden) => {
        setAlertVisible(true);
        setDeleteGardenId(garden.gardenId)
    };

    const handleCancel = () => {
        setAlertVisible(false);
    };

    const handleConfirmDelete = async () => {
        setAlertVisible(false);
        const result = await deleteGarden(deleteGardenId,token);
        const gardenDetails = await getDetailGardens(token);
        const action=updateMyGarden(gardenDetails)
        dispatch(action)
        if (result==true) Alert.alert ("Xóa vườn thành công");
        else Alert.alert ("Xóa vườn thất bại");
    };
    

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
    const handleSchedule = (idPlant) => {
        navigation.navigate('Schedule',{idPlant,roomName});
        
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
                                    <IconButton onPress={()=>handleSchedule(keys[i])}>
                                        <Icon source={require('../../../assets/water.png')} />
                                        <ButtonText>Đặt lịch</ButtonText>
                                    </IconButton>
                                    <IconButton onPress={handleDelete}>
                                        <Icon source={require('../../../assets/bin.png')} />
                                        <ButtonText>Xóa</ButtonText>
                                        <CustomAlert
                                            isVisible={isAlertVisible}
                                            message="Bạn có chắc chắn muốn xóa cây này không?"
                                            onCancel={handleCancel}
                                            onDelete={handleConfirmDelete}
                                            />
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
                                    <IconButton onPress={()=>handleSchedule(keys[i + 1])}>
                                        <Icon source={require('../../../assets/water.png')} />
                                        <ButtonText>Đặt lịch</ButtonText>
                                    </IconButton>
                                    <IconButton>
                                        <Icon source={require('../../../assets/bin.png')} />
                                        <ButtonText>Xóa</ButtonText>
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
// Alert cảnh báo khi nhấn XÓA
const CustomAlert = ({ isVisible, message, onCancel, onDelete }) => {

  
    return (
      <Modal isVisible={isVisible}>
        <View style={{ backgroundColor: 'white', padding: 15, borderRadius: 15}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, height: 50, }}>
            <Image source={logoApp} style={{ width: 32, height: 32, marginRight: 5, marginBottom: 5 }} />
            <Text style={{ fontSize: 17, flex: 1, fontWeight: '500' }}>{message}</Text>
          </View>
          <View style={{ padding: 10, zIndex: 1,}}>              
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
              <TouchableOpacity onPress={onCancel} style={{ marginRight: 25 }}>
                <Text style={{ color: 'green', fontSize: 17 }}>Hủy</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onDelete}>
                <Text style={{ color: 'red', fontSize: 17 }}>Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>        
      </View>
      </Modal>
    );
  };