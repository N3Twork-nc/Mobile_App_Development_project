import styled from 'styled-components';
import { Platform } from 'react-native';
import { Colors, ScreenSize } from '../../store/styles';

const {vh, vw} = ScreenSize;
const {black} = Colors;


export const StyleContainer = styled.View`
  flex:1;
`
export const HeaderContainer = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: ${vh(7)}px;
  ${Platform.OS === 'android' ? 'margin-top: 20%;' : ''}
`;

export const Text1 = styled.Text`
  margin-top: ${vh(7)}px;
  font-size: 22px;
  font-weight: 600;
  color: #ffffff;
  justify-content: center;
  position: absolute;
  align-items: center;
`;

export const FlashButton = styled.TouchableOpacity`
  position: absolute;
  align-items: flex-start;
  left: 15px;
`;

export const ImageFlash = styled.Image`
  width: 30px;
  height: 30px;
`;

export const ButtonClose = styled.TouchableOpacity`
  position: absolute;
  align-items: flex-end;
  right: 17px;
`;

export const ImageClose = styled.Image`
  width: 20px;
  height: 20px;
`;

export const ContainerWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const Container = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  z-index: 0;
`;

export const GalleryButton = styled.TouchableOpacity`
  position: absolute;
  align-items: flex-start;
  left: 18px;
`;

export const ImageGallery = styled.Image`
  width: 38px;
  height: 38px;
`;
export const TakePhotoButton = styled.TouchableOpacity`
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  height: ${vh(10)}px;
`;
export const ImageCircle = styled.Image`
  width: 70px;
  height: 150px;
  align-items:center;
  position: relative;
`;

export const ButtonReweet = styled.TouchableOpacity`
  position: absolute;
  align-items: flex-end;
  right: 23px;
`;
export const ImageReweet = styled.Image`
  width: 30px;
  height: 30px;
  top: 3px;
`;
export const RetakeButton= styled.TouchableOpacity`
  width: ${vw(30)}px;
  height: ${vh(5)}px;
  margin-left: ${vw(10)}px;
  align-self: flex-start;
  border-radius:15px;
  border-width: 1px; 
  border-color: #111111;
  align-items: center;
  justify-content: center;
`
export const Text2 = styled.Text`
  font-size: ${vh(2.3)}px;
  font-weight: 600;
  color: ${black};
`;

export const Text3 = styled.Text`
  font-size: ${vh(2.3)}px;
  font-weight: 600;
  color: ${black};
`;
export const ResultButton = styled.TouchableOpacity`
  width: ${vw(30)}px;
  height: ${vh(5)}px;
  bottom: ${vh(5)}px;
  align-self: flex-end;
  margin-right: ${vw(10)}px;
  border-radius:15px;
  border-width: 1px; 
  border-color: #111111;
  align-items: center;
  justify-content: center;
`;
export const FooterContainer = styled.View`
  position: absolute;
  top: ${vh(90)}px;
  flex-direction: 'row';
  width: ${vw(100)}px;
  height: ${vh(14)}px;
  background-color: #CEF1CF;
  align-items: center;
  justify-content: center;
`;
export const HeaderContainer2 = styled.View`
  background-color: #CEF1CF;
  width: ${vw(100)}px;
  height: ${vh(18)}px;
  top: ${vh(4)}px;
`;

export const ActionContainer = styled.View`
    background-color: #CEF1CF;
    width: ${vw(100)}px;
    height: ${vh(18)}px;
    flex-direction: row;
`;
export const Action1Container = styled.TouchableOpacity`
  width: ${vw(50)}px;
  align-items: flex-start;
  top:  ${vh(2)}px;
`;
export const Action2Container = styled.TouchableOpacity`
  width: ${vw(50)}px;
  align-items: flex-end;
  right:  ${vw(9)}px;
  top:  ${vh(2)}px;
`;
