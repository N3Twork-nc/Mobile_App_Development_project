import React, {useRef} from 'react'
import {ScrollView, Animated} from 'react-native'
import { StyledContainer, HeaderContainer, ImgHeader,Text1, Text2, TitleContainer,InputText1,InputText2,ButtonSend, ButtonText,
    InputText3,InputContainer,BackContainer,ButtonBack} from './styleResetpass'
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ResetPass = () => {
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
  const handleBack = () => {
    navigation.goBack();
  };
    return(
        <KeyboardAwareScrollView backgroundColor="#ffffff"
        contentContainerStyle={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
        <ScrollView style={{ flex: 1 }} backgroundColor="#ffffff">
        <StyledContainer>
            <HeaderContainer>
                <BackContainer onPress={handleBack}>
                     <ButtonBack resizeMode="cover" source={require('../../../assets/back.png')} />
                </BackContainer>
                <ImgHeader resizeMode="cover" source={require('../../../assets/resetpass.png')}/> 
            </HeaderContainer> 
            <InputContainer>  
            <TitleContainer>
                <Text1>Đặt lại mật khẩu</Text1>
            </TitleContainer>
            <InputText1  placeholder="Nhập vào mật khẩu hiện tại"></InputText1>
            <InputText2 placeholder="Nhập vào mật khẩu mới"></InputText2>
            <InputText3 placeholder="Xác nhận mật khẩu mới"></InputText3>
            <ButtonSend onPress={handleSignIn}>
                <ButtonText>Xác nhận thay đổi</ButtonText>
            </ButtonSend>
            </InputContainer>
        </StyledContainer>
        </ScrollView>
        </KeyboardAwareScrollView>
    );
    };

export default ResetPass;
