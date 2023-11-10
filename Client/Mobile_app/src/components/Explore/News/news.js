import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { StyledContainer, HeaderContainer, MainTitle, BackContainer, ButtonBack, HeaderImageContainer, MainTitleContainer, NewspaperMaintitle, SubtitleContainer, NewspaperThumbnailContainer, TextNewspaper, SubText, Line, MainContent, Header1 } from './styleNews.js';
import { useNavigation, useRoute } from '@react-navigation/native';

const News = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { selectedNews } = route.params;
  
    const handleBack = () => {
      navigation.navigate('Explore', { animations: false });
    };
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <StyledContainer>
            <HeaderImageContainer resizeMode="cover" source={require('../../../assets/vines.png')} />
            <HeaderContainer>
              <BackContainer onPress={handleBack}>
                <ButtonBack resizeMode="cover" source={require('../../../assets/back.png')} />
              </BackContainer>
              <MainTitleContainer>
                <MainTitle>Khám phá</MainTitle>
              </MainTitleContainer>
            </HeaderContainer>
  
            <NewspaperMaintitle>{selectedNews.title}</NewspaperMaintitle>
            <SubtitleContainer>
              <NewspaperThumbnailContainer resizeMode="cover" source={{uri:selectedNews.thumbnaillinknp}} />
              <TextNewspaper>
                <SubText>{selectedNews.introduction}</SubText>
              </TextNewspaper>
            </SubtitleContainer>
  
            <Line />
  
            {selectedNews.content && selectedNews.content.map((item, index) => (
              <React.Fragment key={index}>
                {item.caption && <Header1>{item.caption}</Header1>}
                {item.text && <MainContent>{item.text}</MainContent>}
              </React.Fragment>
            ))}
  
          </StyledContainer>
        </ScrollView>
      </SafeAreaView>
    )
  }
  
  export default News;