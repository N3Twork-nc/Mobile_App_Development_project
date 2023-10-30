import React from 'react';
import { ScrollView,  SafeAreaView } from 'react-native';
import {  StyledContainer, HeaderContainer, MainTitle, BackContainer, ButtonBack, HeaderImageContainer, MainTitleContainer, NewspaperMaintitle, SubtitleContainer, NewspaperThumbnailContainer, TextNewspaper, SubText, Line, MainContent,
 
} from './styleNews.js';
import { useNavigation } from '@react-navigation/native';
const Newspaper = () => {
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.navigate('Explore', { animations: false });
      };
 return (
    <SafeAreaView style={{ flex: 1 }}>    
        <ScrollView style={{flex: 1}}>
            <StyledContainer>
                <HeaderImageContainer  resizeMode="cover" source={require('../../../assets/vines.png')}/>
                <HeaderContainer>
                    <BackContainer onPress = {handleBack}>
                        <ButtonBack resizeMode="cover" source={require('../../../assets/back.png')}/>                        
                    </BackContainer>
                    <MainTitleContainer>
                        <MainTitle>Khám phá</MainTitle>
                    </MainTitleContainer>   
                </HeaderContainer>
                <NewspaperMaintitle>8 CÁCH CHĂM SÓC CÂY TRONG NHÀ LUÔN TƯƠI TỐT</NewspaperMaintitle>
                <SubtitleContainer>
                    <NewspaperThumbnailContainer  resizeMode="cover" source={require('../../../assets/plant.jpg')} />
                    <TextNewspaper>
                        <SubText>Khi bạn mang cây xanh vào nhà, có nhiều điều cần lưu ý để giữ chúng phát triển tốt và trở thành một vật trang trí nội thất lâu dài. Dưới đây sẽ là 8 cách chăm sóc cây cảnh trong nhà đơn giản mà ai cũng có thể thực hiện được. Cùng tham khảo nhé!</SubText>
                    </TextNewspaper>
                </SubtitleContainer>
                <Line/>
                <MainContent></MainContent>
            </StyledContainer>
        </ScrollView>
    </SafeAreaView>    
 )
}
export default Newspaper;
