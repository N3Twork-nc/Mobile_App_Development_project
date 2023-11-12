import React, { useState } from 'react';
import { StyledContainer, InnerContainer,ButtonTextContainer, PasswordInputContainer, ButtonTextFB, IconButtonFB, EyeIcon, ButtonTextGG, IconButtonGG, InputContainer, Slogan, IconButton, ButtonSigninwFB, ButtonText1, ButtonSigninwGG, ButtonText, OthersText1, OthersText2, OthersText3, ButtonSignin, InputTextusername, InputTextpw } from './styleSignin';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateAll } from '../../reducers/infoUser';
import { Platform, TouchableOpacity, Alert, View,StyleSheet } from 'react-native';
import { KeyboardAwareScrollView,  } from 'react-native-keyboard-aware-scroll-view';
import { signin } from '../../api/signin_signup'
import { updateToken } from '../../reducers/token';
import { ScrollView } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import { height } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';


const Signin = () => {
  const dispatch=useDispatch();  
  const navigation = useNavigation();
  const [textUsername, setTextUsername] = useState('');
  const [textPassword, setTextPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const handleSignIn = async () => {
    setIsLoading(true); 
    const response= await signin(textUsername,textPassword)
    if (response['status']=="200"){
      setIsLoading(false);
      const acUpdateToken=updateToken(response['token'])
      const acUpdateInfo=updateAll(response['info'])
      dispatch(acUpdateToken)
      dispatch(acUpdateInfo)
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
    behavior={Platform.OS === 'ios' ? 'padding' : null}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
    <ScrollView contentContainerStyle={{ flex: 1 }} >
    {isLoading ? (
        <View style={[StyleSheet.absoluteFillObject, styles.container]}>
        <LottieView
                resizeMode="contain"
                source={require('../../assets/logo.png')} 
                autoPlay
              />
        </View>
           
          ) : (
        <StyledContainer>
          <InnerContainer>
            <Slogan>ĐĂNG NHẬP</Slogan>
            <ButtonSigninwFB>
              <ButtonTextContainer>
                <IconButtonFB resizeMode="contain" source={require('../../assets/facebook.png')} />
                <ButtonTextFB>Đăng nhập với Facebook</ButtonTextFB>
              </ButtonTextContainer>              
            </ButtonSigninwFB>
            <ButtonSigninwGG>
              <ButtonTextContainer>
                <IconButtonGG resizeMode="contain" source={require('../../assets/google.png')} />
                <ButtonTextGG>Đăng nhập với Google</ButtonTextGG>
              </ButtonTextContainer>              
            </ButtonSigninwGG>
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
              <ButtonText1>Đăng nhập</ButtonText1>
            </ButtonSignin>
            <OthersText1 onPress={handleSignUp}>Chưa có tài khoản? Đăng ký</OthersText1>
          
          </InnerContainer>
        </StyledContainer>)}
        </ScrollView>
      </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CEF1CF',
  }
})
export default Signin;
