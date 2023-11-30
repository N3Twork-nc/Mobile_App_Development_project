import React, {useState} from 'react'
import {Image, View, Text, TouchableOpacity } from 'react-native'
import { StyledContainer, Title,  HeaderContainer, ButtonAdd, 
  ButtonText1,ButtonBack,ButtonText, MainTitle, BackContainer, 
  AddContainer, GardenContainer, EachGardenContainer,
 ImageFrame, GardenName,ButtonContainerWrapper, ButtonContainer,IconButton,
Icon,  } from './styleGarden'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, ScrollView  } from 'react-native';
import Modal from 'react-native-modal';


const Garden = () => {

  //Các navigate chuyển màn hình
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate('Home');    
  };
  const handleDashboard = () => {
    navigation.navigate('Dashboard');
  }

  // Alert cảnh báo khi nhấn XÓA
  const CustomAlert = ({ isVisible, message, onCancel, onDelete }) => {
    return (
      <Modal isVisible={isVisible}>
      <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
        <Text style={{ fontSize: 18, marginBottom: 20 }}>{message}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
          <TouchableOpacity onPress={onCancel} style={{ marginRight: 20 }}>
            <Text style={{ color: 'green', fontSize: 15 }}>Hủy</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete}>
            <Text style={{ color: 'red', fontSize: 15 }}>Xóa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    );
  };

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
                  <AddContainer>
                    <ButtonAdd source = {require('../../../assets/add.png')}/>
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
