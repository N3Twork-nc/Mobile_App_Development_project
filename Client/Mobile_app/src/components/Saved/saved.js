import React, {useState} from 'react'
import { StyledContainer, HeaderContainer, MainTitle, ContainerButton,
         Plant1Container, ImageFrame, PlantName, PlantContainer, TaskbarButtonText, TaskbarView,
         ButtonContainer, IconButton, Icon, ButtonText, ButtonContainerWrapper, TaskbarIcon
        } from './styleSaved.js'
import { useNavigation} from '@react-navigation/native';
import { Text, ScrollView, SafeAreaView, StyleSheet, View, Alert, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import LottieView from 'lottie-react-native';
import Modal from 'react-native-modal';
import logo from '../../assets/logo.png';
import { getPlant, deletePlant } from '../../api/Plant.js';
import { deleteMyPlant } from '../../reducers/myplants.js';


const logoApp = logo;

const Saved = () => {
    const [isLoading, setIsLoading] = useState(false);
    const token = useSelector(state=>state.token)['payload'];
    const plantsInRoom=useSelector(state=>state.plant)["Lưu trữ"]["Data"]
    const navigation = useNavigation();
    const dispatch=useDispatch()

    // Xử lý xóa cây
    const [isAlertVisible, setAlertVisible] = useState(false);
    const [deletePlantId,setDeletePlantId]=useState(null)
    
    const handleDelete = (idPlant) => {
        setAlertVisible(true);
        setDeletePlantId(idPlant)
    };

    const handleCancel = () => {
        setAlertVisible(false);
    };

    const handleConfirmDelete = async () => {
        setAlertVisible(false);
        const result = await deletePlant('Lưu trữ',deletePlantId, token);
        if (result==true) {
          let action = deleteMyPlant({"roomName":"Lưu trữ","idPlant":deletePlantId})
          dispatch(action);
          Alert.alert("Xóa cây thành công");
        } else {
          Alert.alert("Xóa cây thất bại");
        }
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

    const handleHome = () => {navigation.navigate('Home');};
    const handleExplore = () => {navigation.navigate('Explore');};
    const handleProfile = () => {navigation.navigate('Profile');};
    const handleScan = () => {navigation.navigate('CameraScreen');};

return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView style={{ flex: 1 }}>
            <StyledContainer >
                
                {/*Header*/}
                <HeaderContainer>                    
                    <MainTitle>Đã lưu</MainTitle>
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
                                <PlantName numberOfLines={2}>{plantsInRoom[keys[i]].plantName} </PlantName>
                                <ButtonContainerWrapper>
                                    <ButtonContainer>
                                    <IconButton onPress={() => handleInfo(plantsInRoom[keys[i]].plantName)}>
                                        <Icon source={require('../../assets/info.png')} />
                                        <ButtonText>Chi tiết</ButtonText>
                                    </IconButton>
                                    <IconButton onPress={()=>handleDelete(keys[i])}>
                                        <Icon source={require('../../assets/bin.png')} />
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
                                <PlantName numberOfLines={2}>{plantsInRoom[keys[i + 1]].plantName} </PlantName>
                                <ButtonContainerWrapper>
                                    <ButtonContainer>
                                    <IconButton onPress={() => handleInfo(plantsInRoom[keys[i + 1]].plantName)}>
                                        <Icon source={require('../../assets/info.png')} />
                                        <ButtonText>Chi tiết</ButtonText>
                                    </IconButton>
                                    <IconButton onPress={()=>handleDelete(keys[i + 1])}>
                                        <Icon source={require('../../assets/bin.png')} />
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
                    source={require('../../assets/Animation-loading1.json')}
                    autoPlay
                    style={{ width: 100, height: 100 }}
                />
            </View>
        )}

         {/* Taskbar */}
         <TaskbarView>
          <ContainerButton onPress={handleExplore}>
            <TaskbarIcon resizeMode="contain" source={require('../../assets/explore.png')}/>
            <TaskbarButtonText>Khám phá</TaskbarButtonText>
          </ContainerButton>
          <ContainerButton onPress={handleHome}>
            <TaskbarIcon resizeMode="contain" source={require('../../assets/mygarden.png')} />
            <TaskbarButtonText>Vườn của tôi</TaskbarButtonText>
          </ContainerButton>
          <ContainerButton onPress={handleScan}>
            <TaskbarIcon resizeMode="contain" source={require('../../assets/scan.png')} />
            <TaskbarButtonText>Scan</TaskbarButtonText>
          </ContainerButton>
          <ContainerButton>
            <TaskbarIcon resizeMode="contain" source={require('../../assets/saved.png')}  tintColor={'green'} />
            <TaskbarButtonText style={{ color: 'green' }}>Đã lưu</TaskbarButtonText>
          </ContainerButton>
          <ContainerButton onPress={handleProfile}>
            <TaskbarIcon resizeMode="contain" source={require('../../assets/profile.png')} />
            <TaskbarButtonText>Cá nhân</TaskbarButtonText>
          </ContainerButton>
        </TaskbarView>
    </SafeAreaView>
)
}
export default Saved;

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