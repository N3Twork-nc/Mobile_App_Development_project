import React, {useState,  useEffect, useRef} from 'react'
import { StyledContainer, InnerContainer, Slogan,  ButtonText, OthersText1, ButtonConfirm, ButtonTextEllipse,TextInput,Text0,Text1, Text2,Text3,ImgHead,ImgLeaf,ImgPo,BoxContainer} from './styleVerifycode'
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { verify } from '../../api/signin_signup' 
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';


const Verifycode = () => {
    const navigation = useNavigation();
    const infoUser=useSelector(state=>state.infoUser)

   // const [otp, setOtp] = useState('');
    const [otp1, setOtp1] = useState('');
    const [otp2, setOtp2] = useState('');
    const [otp3, setOtp3] = useState('');
    const [otp4, setOtp4] = useState('');

    // Count time 
    const [countdown, setCountdown] = useState(30);
    useEffect(() => {
        const timer = setInterval(() => {
          if (countdown > 0) {
            setCountdown(countdown - 1);
          }
        }, 1000);
      
        return () => clearInterval(timer);
      }, [countdown]);

    const handleResend = () => {
      navigation.navigate('SignIn');
    };

    const handleConfirm = async () => {
      const otp =`${otp1}${otp2}${otp3}${otp4}`;
      const fullname=infoUser.fullname
      const username=infoUser.username
      const password=infoUser.password
      const email=infoUser.email
      // Gọi hàm verify với mã OTP
      const response = await verify(fullname, username, password, email, otp)
      if (response=== 'Signup successfull') navigation.navigate('SignIn'); // Chuyển đến trang SignIn khi xác nhận thành công
      else Alert.alert('Xác nhận thất bại', 'Mã OTP không chính xác. Vui lòng nhập lại.');
    };
    
    return(
      <KeyboardAwareScrollView
        contentContainerStyle={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
        <StyledContainer>

            <ImgHead resizeMode="cover" source={require('../../assets/Head.png')} />
            <Slogan>
                    NHẬP MÃ XÁC NHẬN 
            </Slogan>
            <ImgPo resizeMode="cover" source={require('../../assets/Polygon.png')} />
            <ImgLeaf resizeMode="cover" source={require('../../assets/logo.png')} />

            <InnerContainer>
            <Text1 >Một mã xác nhận đã được gửi  </Text1> 
            <Text0>qua địa chỉ</Text0>
            <Text2> Nguyenvancho@gmail.com</Text2>
          
            <BoxContainer> 
              <TextInput
              value={otp1}
              onChangeText={(text) => setOtp1(text)}
              keyboardType="numeric"
              maxLength={1}
            />
            <TextInput
              value={otp2}
              onChangeText={(text) => setOtp2(text)}
              keyboardType="numeric"
              maxLength={1}
            />
            <TextInput
              value={otp3}
              onChangeText={(text) => setOtp3(text)}
              keyboardType="numeric"
              maxLength={1}
            />
            <TextInput
              value={otp4}
              onChangeText={(text) => setOtp4(text)}
              keyboardType="numeric"
              maxLength={1}
            />
            </BoxContainer>
            <Text3>
            {countdown >= 0 ? `00:${countdown.toLocaleString('en-US', { minimumIntegerDigits: 2 })}` : '00:00'}
            </Text3>
            <OthersText1 onPress={handleResend} >Bạn chưa nhận được mã? Gửi lại</OthersText1>  
            <ButtonConfirm >
            <ButtonText onPress={handleConfirm}>Xác nhận</ButtonText>
            </ButtonConfirm>
            </InnerContainer>
        </StyledContainer>
        </KeyboardAwareScrollView>
    )
    }

export default Verifycode;