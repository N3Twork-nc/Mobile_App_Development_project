import React, {useState} from 'react'
import {Image} from 'react-native'
import { StyledContainer, InnerContainer, Slogan,  ButtonText, OthersText, ButtonSignup,ImgPlant} from './styleWelcome'

const Welcome = () => {
    const [isChecked, setIsChecked] = useState(false);

    return(
        <StyledContainer>
            <InnerContainer>
                <Slogan>
                    Welcome to
                    PLANTAHOLIC!
                </Slogan>  
                <ImgPlant resizeMode="cover" source={require('../../assets/welcome.png')} />                
                <ButtonSignup>
                    <ButtonText>Sign up</ButtonText>
                </ButtonSignup>
                <OthersText>Already have an account? Login</OthersText>  
            </InnerContainer>
        </StyledContainer>
    )
    }

export default Welcome;
