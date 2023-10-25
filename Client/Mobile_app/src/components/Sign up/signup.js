import React, {useState} from 'react'
import { StyledContainer, InnerContainer, IconButton, Slogan, ButtonSignupwFB,ButtonSignupwGG, ButtonText, OthersText, ButtonCreateAccount, InputText,CheckboxContainer, OthersCheckbox, CheckboxText,ButtonText1 } from './styleSignup'
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { signup } from '../../api/signin_signup'
import { useDispatch } from 'react-redux';
import { updateAll } from '../../reducers/infoUser';
import data from 'octicons';


const Signup = () => {
    const [isChecked, setIsChecked] = useState(false);
    const dispatch=useDispatch()
    const toggleCheckbox = () => {
      setIsChecked(!isChecked);}

    const navigation = useNavigation();
    const [textFullname, setTextFullname] = useState('');
    const [textPassword, setTextPassword] = useState('');
    const [textUsername, setTextUsername] = useState('');
    const [textEmail, setEmail] = useState('');   
      

    const handleSignUp = async () => {
        const data={
            "username":textFullname,
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
                    <IconButton resizeMode="contain" source={require('../../assets/facebook.png')}/>
                    <ButtonText>Đăng ký bằng Facebook</ButtonText>
                </ButtonSignupwFB>
                <ButtonSignupwGG>   
                    <IconButton resizeMode="contain" source={require('../../assets/google.png')}/>                 
                    <ButtonText>Đăng ký bằng Google</ButtonText>
                </ButtonSignupwGG>    
                <OthersText>Hoặc đăng ký bằng Email</OthersText>                
                <InputText onChangeText={setTextFullname} placeholder="Nhập họ và tên đầy đủ"></InputText>
                <InputText onChangeText={setTextUsername} placeholder="Nhập tên tài khoản"></InputText>
                <InputText onChangeText={setEmail} placeholder="Nhập email"></InputText>
                <InputText onChangeText={setTextPassword} placeholder="Nhập mật khẩu"></InputText>
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