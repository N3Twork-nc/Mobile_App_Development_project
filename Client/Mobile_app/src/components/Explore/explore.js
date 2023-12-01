import React, { useState, useEffect } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { StyledContainer, HeaderContainer, MainTitle, SearchContainer, ButtonSearch, 
  NewspaperContainer, NewspaperImageContainer, MainText, SubText, MoreContainer, TextNewspaper, 
  TaskbarButtonText, TaskbarIcon, TaskbarView, ContainerButton } from './styleExplore.js';
import { useNavigation } from '@react-navigation/native';
import { data } from '../../api/getNews';

const Explore = () => {
    const navigation = useNavigation();
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        NewsData();
    }, []);

    const NewsData = async () => {
      try {
        const newsData = await data();
        setNewsData(newsData);
      } catch (error) {
        console.log(error);
      }
    };
    
    const handleHome = () => {
      navigation.navigate('Home', { animations: false });
    };
    const handleScan = () => {
      navigation.navigate('Scan', { animations: false });
    };
    const handleSaved = () => {
      navigation.navigate('Saved', { animations: false });
    };
    const handleProfile = () => {
      navigation.navigate('Profile', { animations: false });
    };
    const handleRead = (selectedNews) => {
      navigation.navigate('News', { animations: false, selectedNews });
    };
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView style={{ flex: 1 }}>
          <StyledContainer>
            {/* Header */}
            <HeaderContainer>
              <MainTitle>Khám phá</MainTitle>
              <SearchContainer>
                <ButtonSearch resizeMode="contain" source={require('../../assets/search.png')} />
              </SearchContainer>
            </HeaderContainer>
            
            {/* NewspaperContainers */}
            {newsData.map((news, index) => (
              <NewspaperContainer key={index} onPress={() => handleRead(news)}>
                <NewspaperImageContainer resizeMode="cover" source={{uri: news.thumbnaillink}} />
                <TextNewspaper>
                  <MainText numberOfLines={2} ellipsizeMode="tail">{news.title}</MainText>
                  <SubText numberOfLines={5} ellipsizeMode="tail">{news.introduction}</SubText>
                </TextNewspaper>
                <MoreContainer resizeMode="contain" source={require('../../assets/more.png')} />
              </NewspaperContainer>
            ))}
          </StyledContainer>
        </ScrollView>
        
        {/* Taskbar */}
        <TaskbarView>
          <ContainerButton>
            <TaskbarIcon resizeMode="contain" source={require('../../assets/explore.png')} tintColor={'green'} />
            <TaskbarButtonText style={{ color: 'green' }}>Khám phá</TaskbarButtonText>
          </ContainerButton>
          <ContainerButton onPress={handleHome}>
            <TaskbarIcon resizeMode="contain" source={require('../../assets/mygarden.png')} />
            <TaskbarButtonText>Vườn của tôi</TaskbarButtonText>
          </ContainerButton>
          <ContainerButton>
            <TaskbarIcon resizeMode="contain" source={require('../../assets/scan.png')} />
            <TaskbarButtonText>Scan</TaskbarButtonText>
          </ContainerButton>
          <ContainerButton>
            <TaskbarIcon resizeMode="contain" source={require('../../assets/saved.png')} />
            <TaskbarButtonText>Đã lưu</TaskbarButtonText>
          </ContainerButton>
          <ContainerButton onPress={handleProfile}>
            <TaskbarIcon resizeMode="contain" source={require('../../assets/profile.png')} />
            <TaskbarButtonText>Cá nhân</TaskbarButtonText>
          </ContainerButton>
        </TaskbarView>
      </SafeAreaView>
    );
  };
  
  export default Explore;