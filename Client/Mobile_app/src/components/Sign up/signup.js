import React, {useState, useRef} from 'react'
import { StyledContainer,ButtonTextGG, InnerContainer, Slogan, ButtonSignupwFB,ButtonSignupwGG, ButtonText, OthersText, ButtonCreateAccount, InputText,CheckboxContainer, OthersCheckbox, CheckboxText,ButtonText1, IconButtonFB, ButtonTextFB, IconButtonGG, InputTextpw, EyeIcon, ButtonTextContainer } from './styleSignup'
import { useNavigation } from '@react-navigation/native';
import { Platform, TouchableOpacity, ScrollView, Alert, Animated, View, StyleSheet  } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { signup } from '../../api/signin_signup'
import { useDispatch } from 'react-redux';
import { updateAll } from '../../reducers/infoUser';
import LottieView from 'lottie-react-native';

const Signup = () => {
    const dispatch=useDispatch()
    const [showPassword, setShowPassword] = useState(false);    
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      }
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [, setIsPasswordMatch] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    const [textFullname, setTextFullname] = useState('');
    const [textPassword, setTextPassword] = useState('');
    const [textUsername, setTextUsername] = useState('');
    const [textEmail, setEmail] = useState('');   
      

    const handleSignUp = async () => {
        setIsLoading(true)
        if (textPassword != passwordConfirm) {
            setIsPasswordMatch(false); 
            setIsLoading(false);
            return Alert.alert('Mật khẩu không khớp!');     
        }
        else {
            const data={
                "username":textUsername,
                "password":textPassword,
                "email":textEmail,
                "fullname":textFullname
            }
            const response= await signup(textFullname, textUsername, textPassword, textEmail)
            if (response=="Enter OTP"){
                const action=updateAll(data) 
                dispatch(action)
                setIsLoading(false)
                return navigation.navigate('VerifyCode')
            }
        }
     };

      const handleSignIn = () => {
        navigation.navigate('SignIn');
      };
            //Sự kiện lùi màn hình
    const animatedValue = useRef(new Animated.Value(0)).current;
    const handleAnimatedValueUpdate = () => {
        navigation.goBack();
    };
    animatedValue.addListener(handleAnimatedValueUpdate);

    return(
        <KeyboardAwareScrollView
         backgroundColor="#CEF1CF"
        contentContainerStyle={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
        <ScrollView contentContainerStyle={{ flex: 1 }} backgroundColor="#CEF1CF">
        <StyledContainer>
            <InnerContainer>
                <Slogan>
                    ĐĂNG KÝ 
                </Slogan>
                <ButtonSignupwFB>
                    <ButtonTextContainer>
                        <IconButtonFB resizeMode="contain" source={require('../../assets/facebook.png')}/>
                        <ButtonTextFB>Đăng ký bằng Facebook</ButtonTextFB>
                    </ButtonTextContainer>                    
                </ButtonSignupwFB>
                <ButtonSignupwGG>   
                    <ButtonTextContainer>
                        <IconButtonGG resizeMode="contain" source={require('../../assets/google.png')}/>                 
                        <ButtonTextGG>Đăng ký bằng Google</ButtonTextGG>
                    </ButtonTextContainer>                    
                </ButtonSignupwGG>    
                <OthersText>Hoặc đăng ký bằng Email</OthersText>                
                <InputText onChangeText={setTextFullname} placeholder="Nhập họ và tên đầy đủ"></InputText>
                <InputText onChangeText={setTextUsername} placeholder="Nhập tên tài khoản"></InputText>
                <InputText onChangeText={setEmail} placeholder="Nhập email"></InputText>
                <InputTextpw
                    onChangeText={setTextPassword}
                    secureTextEntry={!showPassword}
                    placeholder="Nhập mật khẩu"
                />
                <InputTextpw
                    onChangeText={setPasswordConfirm}
                    secureTextEntry={!showPassword}
                    placeholder="Nhập lại mật khẩu"
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
                {/* <CheckboxContainer>
                    <OthersCheckbox
                        checked={isChecked}
                        onPress={toggleCheckbox}
                        checkedColor="green"
                        uncheckedColor="gray"
                    />
                    <CheckboxText>Tôi đã đọc và đồng ý với các điều khoản của ứng dụng.</CheckboxText>
                </CheckboxContainer>                 */}
                <ButtonCreateAccount onPress={handleSignUp}>
                    <ButtonText1> Đăng ký</ButtonText1>
                </ButtonCreateAccount>
                <OthersText onPress={handleSignIn} >Đã có tài khoản? Đăng nhập</OthersText>  
            </InnerContainer>
        </StyledContainer>
        </ScrollView>
        {isLoading && (
            <View style={[StyleSheet.absoluteFillObject, styles.container]}>
                <LottieView
                    resizeMode="contain"
                    source={require('../../assets/Animation-loading1.json')}
                    autoPlay
                    style={{ width: 100, height: 100 }}
                />
            </View>
        )}
    </KeyboardAwareScrollView>
    );
    };

export default Signup;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
  });