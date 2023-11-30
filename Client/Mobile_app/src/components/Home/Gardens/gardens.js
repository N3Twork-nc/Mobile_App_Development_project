import React, {useState} from 'react'
import {Image} from 'react-native'
import { StyledContainer, Title,  HeaderContainer, ButtonAdd, ButtonText1,ButtonBack,ButtonText, MainTitle, BackContainer, AddContainer} from './styleGarden'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';

const Garden = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate('Home');
    
  };
    return(
      
        <ScrollView contentContainerStyle={{ flex: 1 }} backgroundColor="white">
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
          </StyledContainer>
          </ScrollView>
    )
    }

export default Garden;
