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
                    Sign in to Plantaholic!
                </Slogan>
                <ButtonSigninwFB>
                    <ButtonText>Sign in with Facebook</ButtonText>
                </ButtonSigninwFB>
                <ButtonSigninwGG>                    
                    <ButtonText>Sign in with Google</ButtonText>
                </ButtonSigninwGG> 
            </InnerContainer>
            <InputContainer>            
                <OthersText1>Or sign in with Email</OthersText1>   
                <OthersText2>Username or Email</OthersText2>
                <InputText placeholder="Enter Email"></InputText>
                <OthersText2>Password</OthersText2>
                <InputText placeholder="Enter password"></InputText>     
                <OthersText3>Forgot password?</OthersText3>           
                <ButtonSignin>
                    <ButtonText>Sign in</ButtonText>
                </ButtonSignin>   
                <OthersText1>Don’t have an account? Signup</OthersText1>
            </InputContainer>
        </StyledContainer>
    )
    }

export default Signin;