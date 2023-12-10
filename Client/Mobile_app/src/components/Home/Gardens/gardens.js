import React, {useState} from 'react'
import {Alert, View, Text, TouchableOpacity,Image,  TextInput } from 'react-native'
import { StyledContainer, HeaderContainer, ButtonAdd, 
  ButtonBack,ButtonText, MainTitle, BackContainer, 
  AddContainer, GardenContainer, EachGardenContainer,
 ImageFrame, GardenName,ButtonContainerWrapper, ButtonContainer, IconButton,
Icon,  } from './styleGarden'
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView, ScrollView  } from 'react-native';
import Modal, { ReactNativeModal } from 'react-native-modal';
import { useSelector } from 'react-redux';
import { myGarden } from '../../../api/getDetailGarden.js'
import logo from '../../../assets/logo.png';


const logoApp = logo;
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

 
  // Alert thêm vườn
  const AddGarden = ({ isVisible, message, onAdd, onCancel, setNewGardenName, setNewLocation, setNewCropType }) => {
    const [gardenNameInput, setGardenNameInput] = useState('');
    const [locationInput, setLocationInput] = useState('');
    const [cropTypeInput, setCropTypeInput] = useState('');

    return (
      <Modal isVisible={isVisible}>
        <View style={{ backgroundColor: 'white', padding: 12, borderRadius: 15}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' ,marginBottom: 10, height: 50, }}>
            <Image source={logoApp} style={{ width: 32, height: 32, marginBottom: 5, marginRight: 5 }} />
            <Text style={{ fontSize: 17, fontWeight: '600', }}>{message}</Text>
            <Image source={logoApp} style={{ width: 32, height: 32, marginBottom: 5,  marginLeft:5  }} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,  }}>
            <Text style={{ fontSize: 16, flex: 1, fontWeight: '500', marginLeft: 10 }}>Tên vườn:</Text>
            <TextInput onChangeText={(text) => {
              setGardenNameInput(text);
              setNewGardenName(text); // Cập nhật giá trị của Garden component
            }} style={{ marginRight: 12, flex: 2, borderWidth: 1, borderColor: 'gray', borderRadius: 5, paddingHorizontal: 10, height: 30 }} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,  }}>
            <Text style={{ fontSize: 16, flex: 1, fontWeight: '500', marginLeft: 10 }}>Vị trí:</Text>
            <TextInput onChangeText={(text) => {
              setLocationInput(text);
              setNewLocation(text); // Cập nhật giá trị của Garden component
            }} style={{ marginRight: 12, flex: 2, borderWidth: 1, borderColor: 'gray', borderRadius: 5, paddingHorizontal: 10, height: 30 }} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,  }}>
            <Text style={{ fontSize: 16, flex: 1, fontWeight: '500', marginLeft: 10 }}>Loại cây trồng:</Text>
            <TextInput onChangeText={(text) => {
              setCropTypeInput(text);
              setNewCropType(text); // Cập nhật giá trị của Garden component
            }} style={{ marginRight: 12, flex: 2, borderWidth: 1, borderColor: 'gray', borderRadius: 5, paddingHorizontal: 10, height: 30 }} />
          </View>
          <View style={{ padding: 10, zIndex: 1}}>              
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', }}>
            <TouchableOpacity onPress={onCancel} style={{ marginRight: 25 }}>
              <Text style={{ color: 'green', fontSize: 17 }}>Hủy</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              onAdd(gardenNameInput, cropTypeInput, locationInput); // Truyền các giá trị được cập nhật
              setGardenNameInput(''); // Đặt lại giá trị của TextInput về rỗng sau khi nhấn Thêm
              setLocationInput('');
              setCropTypeInput('');
            }}>
              <Text style={{ color: 'green', fontSize: 17 }}>Thêm</Text>
            </TouchableOpacity>
          </View>
        </View>        
      </View>
      </Modal>
    )
  }
  

const Garden = () => {

  //Các navigate chuyển màn hình
  const navigation = useNavigation();
  const token = useSelector(state=>state.token)['payload'];
  const [gardenName, setNewGardenName] = useState('');
  const [location, setNewLocation] = useState('');
  const [cropType, setNewCropType] = useState('');
  const route = useRoute();
  const { gardensDetail } = route.params;
  const handleBack = () => {
    navigation.navigate('Home');    
  };
  
  const handleDashboard = (gardensDetail) => {
    navigation.navigate('Dashboard', { gardensDetail });
  };

  // Xử lý thêm vườn
  const [isAddGardenVisible, setAddGardenVisible] = useState(false);
  const handleAddGarden = () => 
  {
    setAddGardenVisible(true);
  }

  const handleSaveNewGarden = async () =>
  {
    try {
      const response = await myGarden(gardenName, location, cropType, token);

      if (response == "Successful") Alert.alert("Thêm vườn thành công!");
      else Alert.alert ("Thêm vườn thất bại!");

      setAddGardenVisible(false);

    } catch (error) {
      Alert.alert ("Thêm vườn thất bại!");
    }
  }
  
  const handleCancelAdd = () =>
  {
    setAddGardenVisible(false);
  }

  // Xử lý xóa vườn
  const [isAlertVisible, setAlertVisible] = useState(false);
 
  const handleDelete = () => {
    setAlertVisible(true);
  };

  const handleCancel = () => {
    setAlertVisible(false);
  };

 const handleConfirmDelete = () => {
    // Xử lý logic xóa 
    setAlertVisible(false);
  };
 

  return(
      <SafeAreaView  style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView style={{ flex: 1, backgroundColor: 'white'}}>
          <StyledContainer>
              <HeaderContainer>
                  <BackContainer onPress={handleBack}>
                    <ButtonBack source = {require('../../../assets/back.png')}/>
                  </BackContainer>
                  <MainTitle>Vườn trồng</MainTitle>
                  <AddContainer onPress={handleAddGarden}>
                    <ButtonAdd source = {require('../../../assets/add.png')}/>
                    <AddGarden 
                      isVisible={isAddGardenVisible}
                      message="Thêm một vườn trồng mới"
                      onCancel={handleCancelAdd}
                      onAdd={handleSaveNewGarden}
                      setNewGardenName={setNewGardenName}
                      setNewLocation={setNewLocation}
                      setNewCropType={setNewCropType}
                    />

                  </AddContainer>
              </HeaderContainer>

         {/* Hàng 1 */}
         {gardensDetail.length >= 1 && (
          <React.Fragment>
            {(() => {
              const pairs = [];
              for (let i = 0; i < gardensDetail.length; i += 2) {
              pairs.push(
              <GardenContainer key={i}>
                <EachGardenContainer>
                    <ImageFrame  resizeMode="cover" source={require('../../../assets/plant3.jpg')}/>
                    <GardenName>Vườn {gardensDetail[i].gardenname}</GardenName>
                    <ButtonContainerWrapper>
                        <ButtonContainer>
                        <IconButton onPress={() => handleDashboard(gardensDetail[i])}>
                            <Icon source={require('../../../assets/activity.png')} />
                            <ButtonText>Dashboard</ButtonText>
                        </IconButton>
                        <IconButton onPress={handleDelete}>
                            <Icon source={require('../../../assets/trash-can.png')} />
                            <ButtonText>Xóa</ButtonText>
                            <CustomAlert
                              isVisible={isAlertVisible}
                              message="Bạn có chắc chắn muốn xóa khu vườn này không?"
                              onCancel={handleCancel}
                              onDelete={handleConfirmDelete}
                            />
                        </IconButton>
                        
                        </ButtonContainer>
                    </ButtonContainerWrapper>                        
                </EachGardenContainer> 

                {gardensDetail[i + 1] && (
                <EachGardenContainer>
                    <ImageFrame resizeMode="cover" source={require('../../../assets/plant4.jpg')}/>
                    <GardenName>Vườn {gardensDetail[i + 1].gardenname}</GardenName>
                    <ButtonContainerWrapper>
                        <ButtonContainer>
                        <IconButton onPress={() => handleDashboard(gardensDetail[i + 1])}>
                            <Icon source={require('../../../assets/activity.png')} />
                            <ButtonText>Dashboard</ButtonText>
                        </IconButton>
                        <IconButton>
                            <Icon source={require('../../../assets/trash-can.png')} />
                            <ButtonText>Xóa</ButtonText>
                        </IconButton>
                        </ButtonContainer>
                    </ButtonContainerWrapper>
                </EachGardenContainer> 
                )}      
              </GardenContainer>
              );} return pairs;
            })()}
            </React.Fragment>
          )}
                
          </StyledContainer>
          </ScrollView>
          </SafeAreaView>
        
          
    )
    }

export default Garden;

