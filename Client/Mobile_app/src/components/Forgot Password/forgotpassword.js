import React, {useRef} from 'react'
import {Image,Text,ScrollView, Animated} from 'react-native'
import { StyledContainer, HeaderContainer, ImgHeader,Text1, Text2, TitleContainer,InputText1,InputText2,ButtonSend, ButtonText} from './styleForgotpassword'
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const handleSignIn = () => {
    navigation.navigate('SignIn');
      //Sự kiện lùi màn hình
    const animatedValue = useRef(new Animated.Value(0)).current;

    const handleAnimatedValueUpdate = () => {
        navigation.navigate('SignIn')
    };

    animatedValue.addListener(handleAnimatedValueUpdate);

  };
  
    return(
        <KeyboardAwareScrollView backgroundColor="#ffffff"
        contentContainerStyle={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
        <ScrollView style={{ flex: 1 }} backgroundColor="#ffffff">
        <StyledContainer>
            <HeaderContainer>
                <ImgHeader resizeMode="cover" source={require('../../assets/coverpw.png')}/> 
            </HeaderContainer>   
            <TitleContainer>
                <Text1>Quên mật khẩu?</Text1>
                <Text2>Đừng lo lắng! Mật khẩu mới sẽ được gửi qua email của bạn</Text2>
            </TitleContainer>
            <InputText1  placeholder="Nhập vào username"></InputText1>
            <InputText2 placeholder="Nhập vào email"></InputText2>
            <ButtonSend onPress={handleSignIn}>
                <ButtonText>Gửi lại mật khẩu</ButtonText>
            </ButtonSend>
        </StyledContainer>
        </ScrollView>
        </KeyboardAwareScrollView>
    );
    };

export default ForgotPassword;
