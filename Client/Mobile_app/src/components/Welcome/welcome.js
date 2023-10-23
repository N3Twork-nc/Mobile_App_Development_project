import React, {useState} from 'react'
import {Image} from 'react-native'
import { StyledContainer, InnerContainer, Slogan,  ButtonText, OthersText, ButtonSignup,ImgPlant} from './styleWelcome'
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
    const [isChecked, setIsChecked] = useState(false);
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
                <ImgPlant resizeMode="cover" source={require('../../assets/welcome.png')} />                
                <ButtonSignup>
                    <ButtonText onPress={handleSignUp}>Đăng ký</ButtonText>
                </ButtonSignup>
                <OthersText onPress={handleSignIn}>Bạn đã có tài khoản? Đăng nhập ngay</OthersText>  
            </InnerContainer>
        </StyledContainer>
    )
    }

export default Welcome;
