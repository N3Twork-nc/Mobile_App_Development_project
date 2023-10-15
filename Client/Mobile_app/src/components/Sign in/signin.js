import React, {useState} from 'react'
import { StyledContainer, InnerContainer,InputContainer, Slogan, ButtonSigninwFB,ButtonSigninwGG, ButtonText, OthersText1, OthersText2, OthersText3, ButtonSignin, InputText} from './styleSignin'

const Signin = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
      setIsChecked(!isChecked);}
    return(
        <StyledContainer>
            <InnerContainer>
                <Slogan>
                    ĐĂNG NHẬP
                </Slogan>
                <ButtonSigninwFB>
                    <ButtonText>Đăng nhập với Facebook</ButtonText>
                </ButtonSigninwFB>
                <ButtonSigninwGG>                    
                    <ButtonText>Đăng nhập với Google</ButtonText>
                    
                </ButtonSigninwGG> 
            </InnerContainer>
            <InputContainer>            
                <OthersText1>Hoặc đăng nhập với Email</OthersText1>   
                <OthersText2>Tên tài khoản hoặc Email</OthersText2>
                <InputText></InputText>
                <OthersText2>Mật khẩu</OthersText2>
                <InputText></InputText>     
                <OthersText3>Quên mật khẩu?</OthersText3>           
                <ButtonSignin>
                    <ButtonText>Đăng nhập</ButtonText>
                </ButtonSignin>   
                <OthersText1>Chưa có tài khoản? Đăng ký</OthersText1>
            </InputContainer>
        </StyledContainer>
    )
    }

export default Signin;