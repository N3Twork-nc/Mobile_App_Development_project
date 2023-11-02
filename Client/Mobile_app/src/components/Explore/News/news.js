import React, { useState, useEffect } from 'react';
import { ScrollView,  SafeAreaView } from 'react-native';
import {  StyledContainer, HeaderContainer, MainTitle, BackContainer, ButtonBack, HeaderImageContainer, MainTitleContainer, NewspaperMaintitle, SubtitleContainer, NewspaperThumbnailContainer, TextNewspaper, SubText, Line, MainContent,
 
} from './styleNews.js';
import { useNavigation } from '@react-navigation/native';
import { title, introduction, caption, text} from '../../../api/getNews';


const Newspaper = () => {
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
        
            for (let i = 0; i < 15; i++) {
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
                <NewspaperMaintitle>{titleResult[0]}</NewspaperMaintitle>
                <SubtitleContainer>
                    <NewspaperThumbnailContainer  resizeMode="cover" source={require('../../../assets/plant.jpg')} />
                    <TextNewspaper>
                        <SubText>{introductionResult[0]}</SubText>
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
