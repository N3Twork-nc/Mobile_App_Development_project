import React, { useState, useEffect } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { StyledContainer, HeaderContainer, MainTitle, SearchContainer, ButtonSearch, 
  NewspaperContainer, NewspaperImageContainer, MainText, SubText, MoreContainer, TextNewspaper, 
  TaskbarButtonText, TaskbarIcon, TaskbarView, ContainerButton } from './styleExplore.js';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { data } from '../../api/getNews';
import { myPlant } from '../../api/Plant.js';


const Explore = () => {
    const token = useSelector(state=>state.token)['payload'];
    const navigation = useNavigation();
    const [newsData, setNewsData] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null);

    useEffect(() => { NewsData(); }, []);

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
    const handleScan = () => {navigation.navigate('CameraScreen', { animations: false });};
    
    const handleSaved = async (roomName) => {
      setSelectedRoom(roomName);
      let plantsInRoom = [];
      try {
        if (roomName) {
          plantsInRoom = await myPlant(token, roomName);
        }
      } catch (error) {
        console.log(error);
      }
      navigation.navigate('Saved', { plantsInRoom, roomName });
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
                <ButtonSearch resizeMode="contain" source={require('../../assets/logo2.png')} />
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
          <ContainerButton onPress={handleScan}>
            <TaskbarIcon resizeMode="contain" source={require('../../assets/scan.png')} />
            <TaskbarButtonText>Scan</TaskbarButtonText>
          </ContainerButton>
          <ContainerButton onPress={() => handleSaved('Lưu trữ')}>
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