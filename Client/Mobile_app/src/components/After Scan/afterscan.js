import React from 'react';
import { ScrollView, SafeAreaView,FlatList } from 'react-native';
import { 
  StyledContainer, HeaderContainer,MainTitle, ButtonBack,ImageContainer,ImagePlant,
  BodyContainer,Text1,Text2,ImgLogo, TagContainer,Tag, Text3,
  ParagraphContainer,CreText,Line,MainText,TopContainer,TaskbarView,
   SaveButton, SaveContainer, Save, SaveButtonText, BackContainer, 
   TitleContainer, SectionsContainer, BoxContainer, FirstSection, 
   Icon, LeftContainer, EachSectionContainer, SectionDetailText, 
   SectionName, SubSectionText, RightContainer, SecondSection, BoxesContainer,
} from './styleAfterscan.js';
import { useNavigation, useRoute } from '@react-navigation/native';

const Afterscan = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { info } = route.params;
  const keywords = info[0].keyword.split(', ');

  const handleScan = () => {
    navigation.navigate('CameraScreen', { animations: false });
  };
  const handleBack = () => {
    navigation.navigate('CameraScreen', {animations: false});
  }
    // Danh sách các nguồn ảnh
  const images = [
    {uri:info[0].cover[0]},
    {uri:info[0].cover[1]},
    {uri:info[0].cover[2]},
  ];
  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: 'white' }}>
    <ScrollView style={{ flex: 1, backgroundColor: 'white'}}>
        <StyledContainer style={{ flex: 1}}>
        {/* TIÊU ĐỀ */}
        <HeaderContainer onPress = {handleScan}>
          <TitleContainer>
            <BackContainer onPress={handleBack}>
              <ButtonBack resizeMode="cover" source={require('../../assets/back.png')}/>
            </BackContainer>          
            <MainTitle>
                  Kết quả
            </MainTitle>
          </TitleContainer>          
        </HeaderContainer>
        {/* ẢNH CỦA CÂY */}
        <TopContainer></TopContainer>
        <ImageContainer>
        <FlatList
              data={images}
              horizontal
              pagingEnabled
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <ImagePlant source={item} resizeMode="cover"/>
              )}
        />
        </ImageContainer>
        </StyledContainer> 
        {/* PHẦN THÔNG TIN */}
        <BodyContainer>
                <ImgLogo resizeMode="cover" source={require('../../assets/logo.png')}/>
                <Text1> Cây của bạn đã được nhận diện!</Text1>
                <Text2> {info[0].plantName} </Text2>
                <TagContainer>
                  <Tag> {keywords[0]} </Tag>
                  <Tag> {keywords[1]} </Tag>
                  <Tag> {keywords[2]} </Tag>
                </TagContainer>
                <Text3> Thông tin</Text3> 
                <SectionsContainer>
                  <BoxesContainer>                  
                    <FirstSection>

                      <LeftContainer>
                        <BoxContainer>  
                          <EachSectionContainer>                                                                          
                            <Icon resizeMode="cover" source={require('../../assets/bonphan.png')}/>
                          </EachSectionContainer> 
                          <SectionDetailText>
                                <SectionName>Bón phân </SectionName>
                                <SubSectionText>{info[0].fertilize}</SubSectionText>
                          </SectionDetailText>                            
                        </BoxContainer>
                      </LeftContainer>
                      
                      <RightContainer>
                        <BoxContainer>  
                          <EachSectionContainer>                                                                          
                            <Icon resizeMode="cover" source={require('../../assets/tuoinuoc.png')}/>
                          </EachSectionContainer> 
                          <SectionDetailText>
                                <SectionName>Tưới nước </SectionName>
                                <SubSectionText>{info[0].watering} </SubSectionText>
                          </SectionDetailText>                            
                        </BoxContainer>
                      </RightContainer>  

                    </FirstSection>
                    <SecondSection>

                      <LeftContainer>
                          <BoxContainer>  
                            <EachSectionContainer>                                                                          
                              <Icon resizeMode="cover" source={require('../../assets/thaydat.png')}/>
                            </EachSectionContainer> 
                            <SectionDetailText>
                                  <SectionName>Thay đất </SectionName>
                                  <SubSectionText>{info[0].fertilize} </SubSectionText>
                            </SectionDetailText>                            
                          </BoxContainer>
                        </LeftContainer>
                        
                        <RightContainer>
                          <BoxContainer>  
                            <EachSectionContainer>                                                                          
                              <Icon resizeMode="cover" source={require('../../assets/nhietdo.png')}/>
                            </EachSectionContainer> 
                            <SectionDetailText>
                                  <SectionName>Nhiệt độ </SectionName>
                                  <SubSectionText>{info[0].temperature} </SubSectionText>
                            </SectionDetailText>                            
                          </BoxContainer>
                        </RightContainer> 

                    </SecondSection>
                    <SecondSection>

                      <LeftContainer>
                          <BoxContainer>  
                            <EachSectionContainer>                                                                          
                              <Icon resizeMode="cover" source={require('../../assets/anhsang.png')}/>
                            </EachSectionContainer> 
                            <SectionDetailText>
                                  <SectionName>Ánh sáng </SectionName>
                                  <SubSectionText>{info[0].light} </SubSectionText>
                            </SectionDetailText>                            
                          </BoxContainer>
                        </LeftContainer>
                        
                        <RightContainer>
                          <BoxContainer>  
                            <EachSectionContainer>                                                                          
                              <Icon resizeMode="cover" source={require('../../assets/doam.png')}/>
                            </EachSectionContainer> 
                            <SectionDetailText>
                                  <SectionName>Độ ẩm </SectionName>
                                  <SubSectionText>{info[0].humidity} </SubSectionText>
                            </SectionDetailText>                            
                          </BoxContainer>
                        </RightContainer> 

                    </SecondSection>                    
                  </BoxesContainer>
                </SectionsContainer>
                <Line/>
              
                {/* ĐOẠN VĂN */}
                <ParagraphContainer>
                  <CreText> Nguồn Wikipedia</CreText>
                  <MainText>{info[0].information}</MainText>
                </ParagraphContainer>
                </BodyContainer>
      </ScrollView>

      <TaskbarView>
      <SaveButton onPress={handleScan}>
          <SaveContainer>
            <Save resizeMode="cover" source={require('../../assets/saved.png')}/>
                <SaveButtonText>Lưu</SaveButtonText>
          </SaveContainer>
        </SaveButton>
     </TaskbarView>

    </SafeAreaView>
  );
}

export default Afterscan; 