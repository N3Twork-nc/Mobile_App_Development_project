import React,  {useState}from 'react';
import {Alert, StyleSheet, ScrollView, SafeAreaView, FlatList, View, Image, Text, TouchableOpacity } from 'react-native';
import { 
  StyledContainer, HeaderContainer,MainTitle, ButtonBack,ImageContainer,ImagePlant,
  BodyContainer,Text1,Text2,ImgLogo, TagContainer,Tag, Text3,
  ParagraphContainer,CreText,Line,MainText,TopContainer,TaskbarView,
   SaveButton, SaveContainer, Save, SaveButtonText, BackContainer, 
   TitleContainer, SectionsContainer, BoxContainer, FirstSection, 
   Icon, LeftContainer, EachSectionContainer, SectionDetailText, 
   SectionName, SubSectionText, RightContainer, SecondSection, BoxesContainer,
} from './styleAfterscan.js';
import { useNavigation, useRoute } from '@react-navigation/native';
import Modal from 'react-native-modal';
import logo from '../../assets/logo.png';
import { plant } from '../../api/uploadPlant.js';
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
const logoApp = logo;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  }
})

const Afterscan = () => {
  const token = useSelector(state=>state.token)['payload'];
  const route = useRoute();
  const { info, photoURI } = route.params;
  const keywords = info[0].keyword.split(', ');

  const [isLoading, setIsLoading] = useState(false);
   
  const [isAlertVisible, setAlertVisible] = useState(false);

    // Các navigate chuyển màn hình
  const navigation = useNavigation();

  const handleSaved = () => {
    setAlertVisible(true);
  };
  const handleCloseAlert = () => {
    setAlertVisible(false);
  };
    
  const [selectedRoom, setSelectedRoom] = useState('');

  const handleSavedtoRooms = async (roomName) => {
    try {
      setAlertVisible(false);
      setIsLoading(true);
      const response = await plant(photoURI, roomName, info[0].plantName, token);
      if (response=="Successfull") 
        {
          Alert.alert("Thêm cây thành công");
          setIsLoading(false);
        }
      else {
        Alert.alert("Thêm cây thất bại");
        setIsLoading(false);
      }
    } catch (error) 
    {
      Alert.alert("Thêm cây thất bại");
      setIsLoading(false);
    }
  };

  const handleSavedtoStorage = () => {
    // Lưu vào mục Đã lưu
    setAlertVisible(false);
  };
  
  const handleBack = () => {
    navigation.navigate('CameraScreen', {animations: false});
  }

    // Danh sách các nguồn ảnh
  const images = [
    {uri:info[0].cover[0]},
    {uri:info[0].cover[1]},
    {uri:info[0].cover[2]},
  ];
  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: 'white' }}>
    <ScrollView style={{ flex: 1, backgroundColor: 'white'}}>
        <StyledContainer style={{ flex: 1}}>
        {/* TIÊU ĐỀ */}
        <HeaderContainer>
          <TitleContainer>
            <BackContainer onPress={handleBack}>
              <ButtonBack resizeMode="cover" source={require('../../assets/back.png')}/>
            </BackContainer>          
            <MainTitle>
                  Kết quả
            </MainTitle>
          </TitleContainer>          
        </HeaderContainer>
        {/* ẢNH CỦA CÂY */}
        <TopContainer></TopContainer>
        <ImageContainer>
        <FlatList
              data={images}
              horizontal
              pagingEnabled
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <ImagePlant source={item} resizeMode="cover"/>
              )}
        />
        </ImageContainer>
        </StyledContainer> 
        {/* PHẦN THÔNG TIN */}
        <BodyContainer>
                <ImgLogo resizeMode="cover" source={require('../../assets/logo.png')}/>
                <Text1> Cây của bạn đã được nhận diện!</Text1>
                <Text2> {info[0].plantName} </Text2>
                <TagContainer>
                  {keywords.map((keyword, index) => (
                  <Tag key={index}>{keyword}</Tag> ))}
                </TagContainer>
                <Text3> Thông tin</Text3> 
                <SectionsContainer>
                  <BoxesContainer>                  
                    <FirstSection>

                      <LeftContainer>
                        <BoxContainer>  
                          <EachSectionContainer>                                                                          
                            <Icon resizeMode="cover" source={require('../../assets/bonphan.png')}/>
                          </EachSectionContainer> 
                          <SectionDetailText>
                                <SectionName>Bón phân </SectionName>
                                <SubSectionText>{info[0].fertilize}</SubSectionText>
                          </SectionDetailText>                            
                        </BoxContainer>
                      </LeftContainer>
                      
                      <RightContainer>
                        <BoxContainer>  
                          <EachSectionContainer>                                                                          
                            <Icon resizeMode="cover" source={require('../../assets/tuoinuoc.png')}/>
                          </EachSectionContainer> 
                          <SectionDetailText>
                                <SectionName>Tưới nước </SectionName>
                                <SubSectionText>{info[0].watering} </SubSectionText>
                          </SectionDetailText>                            
                        </BoxContainer>
                      </RightContainer>  

                    </FirstSection>
                    <SecondSection>

                      <LeftContainer>
                          <BoxContainer>  
                            <EachSectionContainer>                                                                          
                              <Icon resizeMode="cover" source={require('../../assets/thaydat.png')}/>
                            </EachSectionContainer> 
                            <SectionDetailText>
                                  <SectionName>Thay đất </SectionName>
                                  <SubSectionText>{info[0].fertilize} </SubSectionText>
                            </SectionDetailText>                            
                          </BoxContainer>
                        </LeftContainer>
                        
                        <RightContainer>
                          <BoxContainer>  
                            <EachSectionContainer>                                                                          
                              <Icon resizeMode="cover" source={require('../../assets/nhietdo.png')}/>
                            </EachSectionContainer> 
                            <SectionDetailText>
                                  <SectionName>Nhiệt độ </SectionName>
                                  <SubSectionText>{info[0].temperature} </SubSectionText>
                            </SectionDetailText>                            
                          </BoxContainer>
                        </RightContainer> 

                    </SecondSection>
                    <SecondSection>

                      <LeftContainer>
                          <BoxContainer>  
                            <EachSectionContainer>                                                                          
                              <Icon resizeMode="cover" source={require('../../assets/anhsang.png')}/>
                            </EachSectionContainer> 
                            <SectionDetailText>
                                  <SectionName>Ánh sáng </SectionName>
                                  <SubSectionText>{info[0].light} </SubSectionText>
                            </SectionDetailText>                            
                          </BoxContainer>
                        </LeftContainer>
                        
                        <RightContainer>
                          <BoxContainer>  
                            <EachSectionContainer>                                                                          
                              <Icon resizeMode="cover" source={require('../../assets/doam.png')}/>
                            </EachSectionContainer> 
                            <SectionDetailText>
                                  <SectionName>Độ ẩm </SectionName>
                                  <SubSectionText>{info[0].humidity} </SubSectionText>
                            </SectionDetailText>                            
                          </BoxContainer>
                        </RightContainer> 

                    </SecondSection>                    
                  </BoxesContainer>
                </SectionsContainer>
                <Line/>
              
                {/* ĐOẠN VĂN */}
                <ParagraphContainer>
                  <CreText>Nguồn Wikipedia</CreText>
                  <MainText>{info[0].information}</MainText>
                </ParagraphContainer>
                </BodyContainer>
      </ScrollView>
      {isLoading ? (
            <View style={[StyleSheet.absoluteFillObject, styles.container]}>
              <LottieView
                resizeMode="contain"
                source={require('../../assets/Animation-loading1.json')}
                autoPlay
                style={{ width: 100, height: 100 }}
              />
            </View>
          ) : (
      <TaskbarView>
      <SaveButton onPress={handleSaved}>
          <SaveContainer>
            <Save resizeMode="cover" source={require('../../assets/saved.png')}/>
                <SaveButtonText>Lưu</SaveButtonText>
                <CustomAlert
                      isVisible={isAlertVisible}
                      message="Chọn nơi để lưu cây"
                      onSaved={handleSavedtoStorage}
                      onRoom={handleSavedtoRooms}
                      onClose={handleCloseAlert}
                      setSelectedRoom={setSelectedRoom}
                />                         
          </SaveContainer>
        </SaveButton>
     </TaskbarView>)}
    </SafeAreaView>
  );
}

export default Afterscan; 

// Alert options khi nhấn LƯU
const CustomAlert = ({ isVisible, message, onSaved, onRoom, onClose, setSelectedRoom}) => {
  const [isRoomAlertVisible, setRoomAlertVisible] = useState(false);

  const handleRoomAlert = () => {
    setRoomAlertVisible(true);
  };

  const handleRoomSelection = (room) => {
    setRoomAlertVisible(false);
    setSelectedRoom(room); // Lưu selectedRoom khi chọn phòng
    onRoom(room);
  };

  const showRoomSelectionAlert = () => {
    setRoomAlertVisible(true);
    
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>          
      <View style={{ backgroundColor: 'white', borderRadius: 15}}>
        <View style={{ 
          flexDirection: 'row', alignItems: 'center',
          backgroundColor: '#CEF1CF', marginBottom: 20, height: 50, 
          borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>

          <Image source={logoApp} style={{ width: 30, height: 30, marginLeft: 10,marginRight: 5, marginBottom: 5 }} />
          <Text style={{ fontSize: 18, flex: 1, fontWeight: '500' }}>{message}</Text>
          <TouchableOpacity onPress={onClose}></TouchableOpacity>

        </View>
        <View style={{ padding: 10, zIndex: 1, bottom: 7}}>              
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
          <TouchableOpacity onPress={onSaved} style={{ marginRight: 25 }}>
            <Text style={{ color: 'green', fontSize: 17 }}>Lưu trữ</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showRoomSelectionAlert}>
            <Text style={{ color: 'green', fontSize: 17 }}>Đặt vào phòng</Text>
          </TouchableOpacity>
        </View>
        </View>        
      </View>
      {isRoomAlertVisible && (
        <Modal isVisible={true} onBackdropPress={() => setRoomAlertVisible(false)}>
          <View style={{ backgroundColor: 'white', borderRadius: 15}}>
            <View style={{ 
              flexDirection: 'row', alignItems: 'center',
              backgroundColor: '#CEF1CF', marginBottom: 13, height: 50,
              borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
              <Image source={logoApp} style={{ width: 30, height: 30, marginLeft: 10,marginRight: 5, marginBottom: 5 }} />
              <Text style={{ fontSize: 18, flex: 1, fontWeight: '500', }}>Chọn phòng</Text>
              <TouchableOpacity onPress={onClose}></TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => handleRoomSelection('Phòng khách')}>
              <Text style={{ color: 'green', fontSize: 17, textAlign: 'center' }}>Phòng khách</Text>
            </TouchableOpacity>

            <View style={{height: 1, backgroundColor: '#D9D9D9', marginBottom: 13, marginTop: 13 }}/>

            <TouchableOpacity onPress={() => handleRoomSelection('Nhà bếp')}>
              <Text style={{ color: 'green', fontSize: 17, textAlign: 'center' }}>Nhà bếp</Text>
            </TouchableOpacity>

            <View style={{height: 1, backgroundColor: '#D9D9D9', marginBottom: 13, marginTop: 13 }}/>

            <TouchableOpacity onPress={() => handleRoomSelection('Phòng ngủ')}>
              <Text style={{ color: 'green', fontSize: 17, textAlign: 'center' }}>Phòng ngủ</Text>
            </TouchableOpacity>

            <View style={{height: 1, backgroundColor: '#D9D9D9', marginBottom: 13, marginTop: 13 }}/>

            <TouchableOpacity onPress={() => handleRoomSelection('Vườn')}>
              <Text style={{ color: 'green', fontSize: 17, marginBottom: 15, textAlign: 'center' }}>Sân vườn</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </Modal>
  );
};