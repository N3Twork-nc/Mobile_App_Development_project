import React, {useState} from 'react'
import { StyledContainer, InnerContainer, Slogan, ButtonSignupwFB,ButtonSignupwGG, ButtonText, OthersText, ButtonCreateAccount, InputText,CheckboxContainer, OthersCheckbox, CheckboxText } from './styleSignup'

const Signup = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
      setIsChecked(!isChecked);}
    return(
        <StyledContainer>
            <InnerContainer>
                <Slogan>
                    Sign up to Plantaholic!
                </Slogan>
                <ButtonSignupwFB>
                    <ButtonText>Sign up with Facebook</ButtonText>
                </ButtonSignupwFB>
                <ButtonSignupwGG>                    
                    <ButtonText>Sign up with Google</ButtonText>
                </ButtonSignupwGG>    
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
                <OthersText>Already have an account? Signup</OthersText>  
            </InnerContainer>
        </StyledContainer>
    )
    }

export default Signup;