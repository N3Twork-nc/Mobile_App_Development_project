import React, {useState} from 'react'
import { StyledContainer,ButtonTextGG, InnerContainer, Slogan, ButtonSignupwFB,ButtonSignupwGG, ButtonText, OthersText, ButtonCreateAccount, InputText,CheckboxContainer, OthersCheckbox, CheckboxText,ButtonText1, IconButtonFB, ButtonTextFB, IconButtonGG, InputTextpw, EyeIcon } from './styleSignup'
import { useNavigation } from '@react-navigation/native';
import { Platform, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { signup } from '../../api/signin_signup'
import { useDispatch } from 'react-redux';
import { updateAll } from '../../reducers/infoUser';


const Signup = () => {
    const [isChecked, setIsChecked] = useState(false);
    const dispatch=useDispatch()
    const toggleCheckbox = () => {
      setIsChecked(!isChecked);}
    const [showPassword, setShowPassword] = useState(false);
    
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      }
    const navigation = useNavigation();
    const [textFullname, setTextFullname] = useState('');
    const [textPassword, setTextPassword] = useState('');
    const [textUsername, setTextUsername] = useState('');
    const [textEmail, setEmail] = useState('');   
      

    const handleSignUp = async () => {
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
            return navigation.navigate('VerifyCode')
        }
      };

      const handleSignIn = () => {
        navigation.navigate('SignIn');

      };
    return(
        <KeyboardAwareScrollView
        contentContainerStyle={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
        <StyledContainer>
            <InnerContainer>
                <Slogan>
                    ĐĂNG KÝ 
                </Slogan>
                <ButtonSignupwFB>
                    <IconButtonFB resizeMode="contain" source={require('../../assets/facebook.png')}/>
                    <ButtonTextFB>Đăng ký bằng Facebook</ButtonTextFB>
                </ButtonSignupwFB>
                <ButtonSignupwGG>   
                    <IconButtonGG resizeMode="contain" source={require('../../assets/google.png')}/>                 
                    <ButtonTextGG>Đăng ký bằng Google</ButtonTextGG>
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
                <TouchableOpacity onPress={togglePasswordVisibility}>
                    <EyeIcon
                    source={
                        showPassword
                        ? require('../../assets/open-eye.png')
                        : require('../../assets/close-eye.png')
                    }
                    />
                </TouchableOpacity>  
                <CheckboxContainer>
                    <OthersCheckbox
                        checked={isChecked}
                        onPress={toggleCheckbox}
                        checkedColor="green"
                        uncheckedColor="gray"
                    />
                    <CheckboxText>Tôi đã đọc và đồng ý với các điều khoản của ứng dụng.</CheckboxText>
                </CheckboxContainer>                
                <ButtonCreateAccount>
                    <ButtonText1 onPress={handleSignUp}> Đăng ký</ButtonText1>
                </ButtonCreateAccount>
                <OthersText onPress={handleSignIn} >Đã có tài khoản? Đăng nhập</OthersText>  
            </InnerContainer>
        </StyledContainer>
        </KeyboardAwareScrollView>
    )
    }

export default Signup;