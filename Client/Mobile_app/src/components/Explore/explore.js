import React, { useState, useEffect } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import {  StyledContainer, HeaderContainer, MainTitle, SearchContainer, ButtonSearch,
  NewspaperContainer, NewspaperImageContainer, MainText, SubText, MoreContainer, TextNewspaper,
TaskbarButtonText, TaskbarIcon, TaskbarView, ContainerButton
} from './styleExplore.js';
import { useNavigation } from '@react-navigation/native';
import { title, introduction, caption, text } from '../../api/getNews';

const Explore = () => {
    const navigation = useNavigation();
    
    const [titleResult, setTitleResult] = useState('');
    const [introductionResult, setIntroductionResult] = useState('');

    useEffect(() => {
        newsData();
    }, []);

    const newsData = async () => {
        try {
            const titleResults = [];
            const introductionResults = [];
        
            for (let i = 0; i < 5; i++) {
              const titleResult = await title(i);
              const introductionResult = await introduction(i);
              titleResults.push(titleResult);
              introductionResults.push(introductionResult);
            }
        
            setTitleResult(titleResults);
            setIntroductionResult(introductionResults);
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
      const handleProfile= () => {
        navigation.navigate('Profile', { animations: false });
      };
      const handleRead = () => {
        navigation.navigate('News',  { animations: false });
      }
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
                <NewspaperContainer onPress={handleRead}>
                    <NewspaperImageContainer resizeMode="cover" source={require('../../assets/welcome.png')}/>
                    <TextNewspaper>
                    <MainText numberOfLines={2} ellipsizeMode="tail">{titleResult[0]}</MainText>
                    <SubText numberOfLines={5} ellipsizeMode="tail">{introductionResult[0]}</SubText>
                    </TextNewspaper>
                    <MoreContainer resizeMode="contain" source={require('../../assets/more.png')}/>
                </NewspaperContainer>    
                {/* 2nd */}
                <NewspaperContainer>
                    <NewspaperImageContainer resizeMode="cover" source={require('../../assets/welcome.png')}/>
                    <TextNewspaper>
                    <MainText numberOfLines={2} ellipsizeMode="tail">{titleResult[1]}</MainText>
                    <SubText numberOfLines={5} ellipsizeMode="tail">{introductionResult[1]}</SubText>
                    </TextNewspaper>
                    <MoreContainer resizeMode="contain" source={require('../../assets/more.png')}/>
                </NewspaperContainer> 
                {/* 3rd */}
                <NewspaperContainer>
                    <NewspaperImageContainer resizeMode="cover" source={require('../../assets/welcome.png')}/>
                    <TextNewspaper>
                    <MainText numberOfLines={2} ellipsizeMode="tail">{titleResult[2]}</MainText>
                    <SubText numberOfLines={5} ellipsizeMode="tail">{introductionResult[2]}</SubText>
                    </TextNewspaper>
                    <MoreContainer resizeMode="contain" source={require('../../assets/more.png')}/>
                </NewspaperContainer> 
                {/* 4th */}
                <NewspaperContainer>
                    <NewspaperImageContainer resizeMode="cover" source={require('../../assets/welcome.png')}/>
                    <TextNewspaper>
                    <MainText numberOfLines={2} ellipsizeMode="tail">{titleResult[3]}</MainText>
                    <SubText numberOfLines={5} ellipsizeMode="tail">{introductionResult[3]}</SubText>
                    </TextNewspaper>
                    <MoreContainer resizeMode="contain" source={require('../../assets/more.png')}/>
                </NewspaperContainer>
                {/* 5th */}
                <NewspaperContainer>
                    <NewspaperImageContainer resizeMode="cover" source={require('../../assets/welcome.png')}/>
                    <TextNewspaper>
                    <MainText numberOfLines={2} ellipsizeMode="tail">{titleResult[4]}</MainText>
                    <SubText numberOfLines={5} ellipsizeMode="tail">{introductionResult[4]}</SubText>
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