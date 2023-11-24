import React, {useState} from 'react'
import {Image} from 'react-native'
import { StyledContainer, InnerContainer, Slogan,  ButtonText, OthersText, ButtonSignup,ImgPlant,ImgCloud} from './styleWelcome'
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();
  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };
  
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };
    return(
        <StyledContainer>
            <InnerContainer>
                <Slogan>
                    Welcome to
                    PLANTAHOLIC!
                </Slogan>  
                <ImgPlant resizeMode="contain" source={require('../../assets/welcome.png')} />   
                <ImgCloud resizeMode="contain" source={require('../../assets/cloud.png')} />              
                <ButtonSignup onPress={handleSignUp}>
                    <ButtonText>Đăng ký</ButtonText>
                </ButtonSignup>
                <OthersText onPress={handleSignIn}>Bạn đã có tài khoản? Đăng nhập ngay</OthersText>  
            </InnerContainer>
        </StyledContainer>
    )
    }

export default Welcome;
