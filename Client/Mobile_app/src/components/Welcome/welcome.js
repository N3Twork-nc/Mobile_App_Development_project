import React, {useState} from 'react'
import { StyledContainer, InnerContainer, Slogan,  ButtonText, OthersText, ButtonSignup,ImgPlant} from './styleWelcome'

const Welcome = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
      setIsChecked(!isChecked);}
    return(
        <StyledContainer>
            <InnerContainer>
                <Slogan>
                    Welcome to
                    PLANTAHOLIC!
                </Slogan>  
                <ImgPlant resizeMode="cover" source={require('C:/Mobile_App_Development_project/Client/Mobile_app/src/assets/welcome.png')} />                
                <ButtonSignup>
                    <ButtonText>Sign up</ButtonText>
                </ButtonSignup>
                <OthersText>Already have an account? Login</OthersText>  
            </InnerContainer>
        </StyledContainer>
    )
    }

export default Welcome;