import React, { useState } from 'react';
import { StyledContainer, InnerContainer, PasswordInputContainer, ButtonTextFB, IconButtonFB, EyeIcon, ButtonTextGG, IconButtonGG, InputContainer, Slogan, IconButton, ButtonSigninwFB, ButtonText1, ButtonSigninwGG, ButtonText, OthersText1, OthersText2, OthersText3, ButtonSignin, InputTextusername, InputTextpw } from './styleSignin';
import { useNavigation } from '@react-navigation/native';
import { Platform, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {signin } from '../../api/signin_signup'
import { useDispatch } from 'react-redux';
import { updateToken } from '../../reducers/token';

const Signin = () => {
  const dispatch=useDispatch()
  const navigation = useNavigation();
  const [textUsername, setTextUsername] = useState('');
  const [textPassword, setTextPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const handleSignIn = async () => {
    const response= await signin(textUsername,textPassword)
    if (response['status']=="200"){
      const action=updateToken(response['token'])
      dispatch(action)
      return navigation.navigate('Home')
    }
    else Alert.alert('Tài khoản hoặc mật khẩu không chính xác');
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
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
        <StyledContainer>
          <InnerContainer>
            <Slogan>ĐĂNG NHẬP</Slogan>
            <ButtonSigninwFB>
              <IconButtonFB resizeMode="contain" source={require('../../assets/facebook.png')} />
              <ButtonTextFB>Đăng nhập với Facebook</ButtonTextFB>
            </ButtonSigninwFB>
            <ButtonSigninwGG>
              <IconButtonGG resizeMode="contain" source={require('../../assets/google.png')} />
              <ButtonTextGG>Đăng nhập với Google</ButtonTextGG>
            </ButtonSigninwGG>
          </InnerContainer>
          <InputContainer>
            <OthersText1>Hoặc đăng nhập với Email</OthersText1>
            <OthersText2>Tên tài khoản hoặc Email</OthersText2>
            <InputTextusername onChangeText={setTextUsername} />
            <OthersText2>Mật khẩu</OthersText2>            
              <InputTextpw
                onChangeText={setTextPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <EyeIcon
                  source={
                    showPassword
                      ? require('../../assets/open-eye.png')
                      : require('../../assets/close-eye.png')
                  }
                />
              </TouchableOpacity>           
            <OthersText3 onPress={handleForgotPassword}>Quên mật khẩu?</OthersText3>
            <ButtonSignin onPress={handleSignIn}>
              <ButtonText1 onPress={handleSignIn}>Đăng nhập</ButtonText1>
            </ButtonSignin>
            <OthersText1 onPress={handleSignUp}>Chưa có tài khoản? Đăng ký</OthersText1>
          </InputContainer>
        </StyledContainer>
      </KeyboardAwareScrollView>
    
  );
};

export default Signin;