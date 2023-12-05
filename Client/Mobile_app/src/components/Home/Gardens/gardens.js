import React, {useState} from 'react'
import {View, Text, TouchableOpacity,Image,  TextInput } from 'react-native'
import { StyledContainer, HeaderContainer, ButtonAdd, 
  ButtonBack,ButtonText, MainTitle, BackContainer, 
  AddContainer, GardenContainer, EachGardenContainer,
 ImageFrame, GardenName,ButtonContainerWrapper, ButtonContainer, IconButton,
Icon,  } from './styleGarden'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, ScrollView  } from 'react-native';
import Modal from 'react-native-modal';
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
  const AddGarden = ({ isVisible, message, onAdd, onCancel }) => {
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
            <TextInput style={{ marginRight: 12, flex: 2, borderWidth: 1, borderColor: 'gray', borderRadius: 5, paddingHorizontal: 10, height: 30 }} />
          </View>
          <View style={{ padding: 10, zIndex: 1}}>              
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', }}>
            <TouchableOpacity onPress={onCancel} style={{ marginRight: 25 }}>
              <Text style={{ color: 'green', fontSize: 17 }}>Hủy</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onAdd}>
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
  const handleBack = () => {
    navigation.navigate('Home');    
  };
  const handleDashboard = () => {
    navigation.navigate('Dashboard');
  };

  // Xử lý thêm vườn
  const [isAddGardenVisible, setAddGardenVisible] = useState(false);
  const handleAddGarden = () => 
  {
    setAddGardenVisible(true);
  }
  const handleSaveNewGarden = () =>
  {
    setAddGardenVisible(false);
    // Xử lý logic thêm vườn mới
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
                    />
                  </AddContainer>
              </HeaderContainer>

         {/* Hàng 1 */}
              <GardenContainer>

                    <EachGardenContainer>
                        <ImageFrame  resizeMode="cover" source={require('../../../assets/plant3.jpg')}/>
                        <GardenName>Vườn 1</GardenName>
                        <ButtonContainerWrapper>
                            <ButtonContainer>
                            <IconButton onPress={handleDashboard}>
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

                    <EachGardenContainer>
                        <ImageFrame resizeMode="cover" source={require('../../../assets/plant4.jpg')}/>
                        <GardenName>Vườn 2</GardenName>
                        <ButtonContainerWrapper>
                            <ButtonContainer>
                            <IconButton onPress={handleDashboard}>
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
                                 
                </GardenContainer>

                {/* Hàng 2 */}
                <GardenContainer>

                    <EachGardenContainer>
                        <ImageFrame resizeMode="cover" source={require('../../../assets/plant4.jpg')}/>
                        <GardenName>Vườn 3</GardenName>
                        <ButtonContainerWrapper>
                            <ButtonContainer>
                            <IconButton>
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

                    <EachGardenContainer>
                        <ImageFrame resizeMode="cover" source={require('../../../assets/plant4.jpg')}/>
                        <GardenName>Vườn 4</GardenName>
                        <ButtonContainerWrapper>
                            <ButtonContainer>
                            <IconButton>
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

                </GardenContainer>


                
          </StyledContainer>
          </ScrollView>
          </SafeAreaView>
        
          
    )
    }

export default Garden;

