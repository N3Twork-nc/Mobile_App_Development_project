import React from 'react';
import { ScrollView, FlatList, SafeAreaView } from 'react-native';
import {  StyledContainer, HeaderContainer, MainTitle, SearchContainer, ButtonSearch,
  NewspaperContainer, NewspaperImageContainer, MainText, SubText, MoreContainer, TextNewspaper,
TaskbarButtonText, TaskbarIcon, TaskbarView, ContainerButton
} from './styleExplore.js';
import { useNavigation } from '@react-navigation/native';
const Explore = () => {
    const navigation = useNavigation();
    const handleHome = () => {
        navigation.navigate('Home', { animations: false });
      };
      const handleScan = () => {
        navigation.navigate('Scan', { animations: false });
      };
      const handleSaved = () => {
        navigation.navigate('Saved', { animations: false });
      };
      const handleProfile= () => {
        navigation.navigate('Profile', { animations: false });
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
                {/* 1st */}
                <NewspaperContainer>
                    <NewspaperImageContainer resizeMode="cover" source={require('../../assets/welcome.png')}/>
                    <TextNewspaper>
                    <MainText numberOfLines={2} ellipsizeMode="tail">8 CÁCH CHĂM SÓC CÂY TRONG NHÀ LUÔN TƯƠI TỐT</MainText>
                    <SubText numberOfLines={5} ellipsizeMode="tail">Khi bạn mang cây xanh vào nhà, có nhiều điều cần lưu ý để giữ chúng phát triển tốt và trở thành một vật trang trí nội thất lâu dài</SubText>
                    </TextNewspaper>
                    <MoreContainer resizeMode="contain" source={require('../../assets/more.png')}/>
                </NewspaperContainer> 
                {/* 1st */}
                <NewspaperContainer>
                    <NewspaperImageContainer resizeMode="cover" source={require('../../assets/welcome.png')}/>
                    <TextNewspaper>
                    <MainText numberOfLines={2} ellipsizeMode="tail">8 CÁCH CHĂM SÓC CÂY TRONG NHÀ LUÔN TƯƠI TỐT</MainText>
                    <SubText numberOfLines={5} ellipsizeMode="tail">Khi bạn mang cây xanh vào nhà, có nhiều điều cần lưu ý để giữ chúng phát triển tốt và trở thành một vật trang trí nội thất lâu dài</SubText>
                    </TextNewspaper>
                    <MoreContainer resizeMode="contain" source={require('../../assets/more.png')}/>
                </NewspaperContainer> 
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
        <TaskbarView>
            <ContainerButton>
                <TaskbarIcon resizeMode="contain" source={require('../../assets/explore.png')} tintColor={'green'}/>
                <TaskbarButtonText style={{ color: 'green' }}>Khám phá</TaskbarButtonText>
            </ContainerButton>
            <ContainerButton onPress={handleHome}>
                <TaskbarIcon resizeMode="contain" source={require('../../assets/mygarden.png')}   />
                <TaskbarButtonText >Vườn của tôi</TaskbarButtonText>
            </ContainerButton>
            <ContainerButton>
                <TaskbarIcon resizeMode="contain" source={require('../../assets/scan.png')}/>
                <TaskbarButtonText>Scan</TaskbarButtonText>
            </ContainerButton>
            <ContainerButton>
                <TaskbarIcon resizeMode="contain" source={require('../../assets/saved.png')}/>
                <TaskbarButtonText>Đã lưu</TaskbarButtonText>
            </ContainerButton>
            <ContainerButton>
                <TaskbarIcon resizeMode="contain" source={require('../../assets/profile.png')}/>
                <TaskbarButtonText>Cá nhân</TaskbarButtonText>
            </ContainerButton>
        </TaskbarView>
        </SafeAreaView>
    )
}
export default Explore;