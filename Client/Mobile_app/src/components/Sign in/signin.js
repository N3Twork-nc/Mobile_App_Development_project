import React, {useState} from 'react';
import { 
  StyledContainer, InnerContainer,InputContainer, Slogan, 
  IconButton,ButtonSigninwFB,ButtonSigninwGG,ButtonText, 
  OthersText1, OthersText2, OthersText3, ButtonSignin, 
  InputText} 
from './styleSignin';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {signin } from '../../api/signin_signup'
import axios from "axios";

const Signin = () => {
  const navigation = useNavigation();
  const [textUsername, setTextUsername] = useState('');
  const [textPassword, setTextPassword] = useState('');

  const handleSignIn = () => {
    const username = textUsername;
    const password = textPassword;

    signin(username, password)
      .then(response => {
        console.log(response.data); 
        if (response.data== "Login successfull") {
          navigation.navigate('Home');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };  
  

    const handleForgotPassword = () => {
      navigation.navigate('ForgotPassword');
    };
    const handleSignUp = () => {
      navigation.navigate('SignUp');
    };
  


  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      behavior1={Platform.OS === 'ios' ? 'padding' : null}
      behavior2={Platform.OS === 'android' ? 'padding' : null}
      keyboardVerticalOffset1={Platform.OS === 'ios' ? 64 : 0}
      keyboardVerticalOffset2={Platform.OS === 'android' ? 64 : 0}>
      {        
        <StyledContainer>
            <InnerContainer>
              <Slogan>ĐĂNG NHẬP</Slogan>                
              <ButtonSigninwFB>   
                <IconButton resizeMode="contain" source={require('../../assets/facebook.png')}/>                         
                <ButtonText>Đăng nhập với Facebook</ButtonText>
              </ButtonSigninwFB>
              <ButtonSigninwGG>
                <IconButton resizeMode="contain" source={require('../../assets/google.png')}/>
                <ButtonText>Đăng nhập với Google</ButtonText>
              </ButtonSigninwGG>
            </InnerContainer>
            <InputContainer>              
              <OthersText1>Hoặc đăng nhập với Email</OthersText1>                           
              <OthersText2>Tên tài khoản hoặc Email</OthersText2>
              <InputText onChangeText={setTextUsername} />
              <OthersText2>Mật khẩu</OthersText2>
              <InputText onChangeText={setTextPassword} />    
              <OthersText3 onPress={handleForgotPassword}>Quên mật khẩu?</OthersText3>           
              <ButtonSignin>
                <ButtonText onPress={handleSignIn}>Đăng nhập</ButtonText>
              </ButtonSignin>   
              <OthersText1 onPress={handleSignUp}>Chưa có tài khoản? Đăng ký</OthersText1>
            </InputContainer>
          </StyledContainer>
      }     
      </KeyboardAwareScrollView>
  );
}

export default Signin;