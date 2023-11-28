import React, {useState} from 'react'
import {Image} from 'react-native'
import { StyledContainer, Title,  HeaderContainer, ButtonAdd, ButtonText1,ButtonBack,ButtonText} from './styleGarden'
import { useNavigation } from '@react-navigation/native';

const Garden = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate('Home');
    
  };
    return(
        <StyledContainer>
            <HeaderContainer>
                <ButtonBack  onPress={handleBack}>
                     <ButtonText> back to home</ButtonText>
                </ButtonBack>
                <Title> Khu vườn của tôi </Title>
                <ButtonAdd>
                     <ButtonText1>+</ButtonText1>
                </ButtonAdd>
            </HeaderContainer>
        </StyledContainer>
    )
    }

export default Garden;
