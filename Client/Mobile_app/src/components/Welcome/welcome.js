import React, {useState} from 'react'
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
                    <ButtonText>Đăng ký</ButtonText>
                </ButtonSignup>
                <OthersText>Bạn đã có tài khoản? Đăng nhập ngay</OthersText>  
            </InnerContainer>
        </StyledContainer>
    )
    }

export default Welcome;