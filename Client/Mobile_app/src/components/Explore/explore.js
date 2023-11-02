import React, { useState, useEffect } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import {  StyledContainer, HeaderContainer, MainTitle, SearchContainer, ButtonSearch,
  NewspaperContainer, NewspaperImageContainer, MainText, SubText, MoreContainer, TextNewspaper,
TaskbarButtonText, TaskbarIcon, TaskbarView, ContainerButton
} from './styleExplore.js';
import { useNavigation } from '@react-navigation/native';
import { title, introduction} from '../../api/getNews';

const Explore = () => {
    const navigation = useNavigation();
    const [newsData, setNewsData] = useState([]);
  
    useEffect(() => {
      NewsData();
    }, []);
  
    const NewsData = async () => {
      try {
        const titleResults = [];
        const introductionResults = [];
  
        for (let i = 0; i < 15; i++) {
          const titleResult = await title(i);
          const introductionResult = await introduction(i);
          titleResults.push(titleResult);
          introductionResults.push(introductionResult);
        }
  
        const newsData = titleResults.map((title, index) => ({
          title,
          introduction: introductionResults[index],
        }));
  
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
    const handleRead = () => {
      navigation.navigate('News', { animations: false });
    };
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
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
              <NewspaperContainer key={index} onPress={handleRead}>
                <NewspaperImageContainer resizeMode="cover" source={require('../../assets/welcome.png')} />
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
          <ContainerButton>
            <TaskbarIcon resizeMode="contain" source={require('../../assets/profile.png')} />
            <TaskbarButtonText>Cá nhân</TaskbarButtonText>
          </ContainerButton>
        </TaskbarView>
      </SafeAreaView>
    );
  };
  
  export default Explore;