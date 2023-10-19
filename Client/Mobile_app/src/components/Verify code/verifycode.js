import React, {useState,  useEffect} from 'react'
import { StyledContainer, InnerContainer, Slogan,  ButtonText, OthersText1, ButtonConfirm, ButtonTextEllipse,Text0,Text1, Text2,Text3,ImgHead,ImgLeaf,ImgPo,BoxContainer} from './styleVerifycode'
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Verifycode = () => {
    const [isChecked, setIsChecked] = useState(false);
    const navigation = useNavigation();

    const handleResend = () => {
      navigation.navigate('SignIn');
    };
    
    const handleConfirm = () => {
      navigation.navigate('SignIn');
    };

    // create 4 boxs
    const buttons = Array(4).fill(null);
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

    return(
      <KeyboardAwareScrollView
        contentContainerStyle={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
        <StyledContainer>

            <ImgHead resizeMode="cover" source={require('C:/Mobile_App_Development_project/Client/Mobile_app/src/assets/Head.png')} />
            <Slogan>
                    NHẬP MÃ XÁC NHẬN 
            </Slogan>
            <ImgPo resizeMode="cover" source={require('C:/Mobile_App_Development_project/Client/Mobile_app/src/assets/Polygon.png')} />
            <ImgLeaf resizeMode="cover" source={require('C:/Mobile_App_Development_project/Client/Mobile_app/src/assets/leaf.png')} />

            <InnerContainer>
            <Text1 >Một mã xác nhận đã được gửi  </Text1> 
            <Text0>qua địa chỉ</Text0>
            <Text2> Nguyenvancho@gmail.com</Text2>

            <BoxContainer>
                 {buttons.map((_, index) => (
                <ButtonTextEllipse key={index}></ButtonTextEllipse>
                 ))}
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