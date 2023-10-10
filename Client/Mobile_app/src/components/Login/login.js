import React, {useState} from 'react'
import { StyledContainer, InnerContainer, Slogan, ButtonLoginwFB,ButtonLoginwGG, ButtonText, OthersText, ButtonCreateAccount, InputText,CheckboxContainer, OthersCheckbox, CheckboxText } from './styleLogin'

const Login = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
      setIsChecked(!isChecked);}
    return(
        <StyledContainer>
            <InnerContainer>
                <Slogan>
                    Sign up to Plantaholic!
                </Slogan>
                <ButtonLoginwFB>
                    <ButtonText>Sign up with Facebook</ButtonText>
                </ButtonLoginwFB>
                <ButtonLoginwGG>                    
                    <ButtonText>Sign up with Google</ButtonText>
                </ButtonLoginwGG>    
                <OthersText>Or continue with Email</OthersText>                
                <InputText placeholder="Enter your full name"></InputText>
                <InputText placeholder="Enter username"></InputText>
                <InputText placeholder="Enter Email"></InputText>
                <InputText placeholder="Enter password"></InputText>
                <CheckboxContainer>
                    <OthersCheckbox
                        checked={isChecked}
                        onPress={toggleCheckbox}
                        checkedColor="green"
                        uncheckedColor="gray"
                    />
                    <CheckboxText>I agree with the Terms of Service and Privacy policy</CheckboxText>
                </CheckboxContainer>                
                <ButtonCreateAccount>
                    <ButtonText>Create Account</ButtonText>
                </ButtonCreateAccount>
                <OthersText>Already have an account? Login</OthersText>  
            </InnerContainer>
        </StyledContainer>
    )
    }

export default Login;