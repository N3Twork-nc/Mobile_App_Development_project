import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { StyledContainer, HeaderContainer, MainTitle, BackContainer,
ButtonBack, NotifyContainer, NotifyImageContainer, MainText1, MainText,
SubText, MoreContainer, TextNotify, } from './styledAllnotification.js';
import { useNavigation } from '@react-navigation/native';

const AllNotifications = () => {
    const navigation = useNavigation(); 
    const handleBack = () => { navigation.goBack() }

    const data = 'Hoa hướng dương (sunflower)';
    const plantName= data.replace(/\(.*?\)/g, '');
    
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView style={{ flex: 1 }}>
          <StyledContainer>
            {/* Header */}
            <HeaderContainer>
              <BackContainer onPress={handleBack}>
                <ButtonBack  resizeMode="cover" source={require('../../../assets/back.png')} />
              </BackContainer> 
              <MainTitle>Thông báo</MainTitle>
            </HeaderContainer>
            
            {/* NotifyContainers */}
              <NotifyContainer>
                <NotifyImageContainer resizeMode="cover" source={require('../../../assets/logo2.png')} />
                <TextNotify>
                  <MainText1>{plantName}- Phòng khách</MainText1>
                  <MainText>Tưới cây đeeee</MainText>
                  <SubText>Tới giờ tưới cây gòiiiii eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</SubText>
                </TextNotify>
              </NotifyContainer>

              {/* NotifyContainers */}
              <NotifyContainer>
                <NotifyImageContainer resizeMode="cover" source={require('../../../assets/logo2.png')} />
                <TextNotify>
                  <MainText1>Tên cây ở phòng nào đó</MainText1>
                  <MainText numberOfLines={2} ellipsizeMode="tail">Tưới cây đeeee</MainText>
                  <SubText numberOfLines={5} ellipsizeMode="tail">Tới giờ tưới cây gòiiiii</SubText>
                </TextNotify>
              </NotifyContainer>
          </StyledContainer>
        </ScrollView>
        
        
      </SafeAreaView>
    );
  };
  
  export default AllNotifications;

