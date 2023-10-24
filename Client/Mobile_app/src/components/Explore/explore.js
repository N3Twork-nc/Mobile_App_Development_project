import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import {  StyledContainer, HeaderContainer, MainTitle, SearchContainer, ButtonSearch,
  NewspaperContainer, NewspaperImageContainer, MainText, SubText, MoreContainer, TextNewspaper,

} from './styleExplore.js';
import { useNavigation } from '@react-navigation/native';
import Taskbar from '../Taskbar/taskbar.js';
const Explore = () => {
    const navigation = useNavigation();
    const handleHome = () => {
        navigation.navigate('Home', { animations: false });
      };
    return  (
        <SafeAreaView style={{ flex: 1 }}>    
        <ScrollView style={{flex: 1}}>
            <StyledContainer>
                {/*Header */}
                <HeaderContainer>
                    <MainTitle> Khám phá</MainTitle>
                    <SearchContainer>
                        <ButtonSearch resizeMode="contain" source={require('../../assets/search.png')} />
                    </SearchContainer>
                </HeaderContainer>
                {/* 1st */}
                <NewspaperContainer>
                    <NewspaperImageContainer resizeMode="cover" source={require('../../assets/welcome.png')}/>
                    <TextNewspaper>
                    <MainText numberOfLines={2} ellipsizeMode="tail">8 CÁCH CHĂM SÓC CÂY TRONG NHÀ LUÔN TƯƠI TỐT</MainText>
                    <SubText numberOfLines={5} ellipsizeMode="tail">Khi bạn mang cây xanh vào nhà, có nhiều điều cần lưu ý để giữ chúng phát triển tốt và trở thành một vật trang trí nội thất lâu dài</SubText>
                    </TextNewspaper>
                    <MoreContainer resizeMode="contain" source={require('../../assets/more.png')}/>
                </NewspaperContainer>             


            </StyledContainer>
        </ScrollView>        
        <Taskbar/>
        </SafeAreaView>
    )
}
export default Explore;