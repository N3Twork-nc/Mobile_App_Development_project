import React from 'react';
import { ScrollView, SafeAreaView,FlatList } from 'react-native';
import { 
  StyledContainer, HeaderContainer,MainTitle, ButtonBack,ImageContainer,ImagePlant,
  BodyContainer,TagContainer,Tag, Text3,Icon,
  ParagraphContainer,CreText,Line,MainText,TopContainer, BackContainer, TitleContainer, SectionsContainer, BoxesContainer, FirstSection, LeftContainer, BoxContainer, EachSectionContainer, 
  SectionDetailText, SectionName, SubSectionText, RightContainer, SecondSection
} from './stylePlantDetail.js';
import { useNavigation, useRoute } from '@react-navigation/native';


const PlantDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { info, plantname } = route.params;
  const keywords = info.Keyword.split(', ');

  const handleScan = () => {navigation.navigate('CameraScreen', { animations: false });  };
  const handleBack = () => {navigation.navigate('Home')}
  // Danh sách các nguồn ảnh
  const images = [
    require('../../assets/img1.jpg'),
    require('../../assets/img2.jpg'),
    require('../../assets/img3.jpg'),
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
                    {plantname}
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
          <TagContainer>
                  {keywords.map((keyword, index) => (
                  <Tag key={index}>{keyword}</Tag> ))}
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
                              <SectionName>Bón phân</SectionName>
                              <SubSectionText>{info.Fertilize}</SubSectionText>
                            </SectionDetailText>
                          </BoxContainer>
                        </LeftContainer>

                        <RightContainer>
                          <BoxContainer>
                            <EachSectionContainer>
                              <Icon resizeMode="cover" source={require('../../assets/tuoinuoc.png')}/>
                            </EachSectionContainer>
                            <SectionDetailText>
                              <SectionName>Tưới nước</SectionName>
                              <SubSectionText>{info.Watering}</SubSectionText>
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
                              <SectionName>Thay đất</SectionName>
                              <SubSectionText>{info.Repotting}</SubSectionText>
                            </SectionDetailText>
                          </BoxContainer>
                        </LeftContainer>

                        <RightContainer>
                          <BoxContainer>
                            <EachSectionContainer>
                              <Icon resizeMode="cover" source={require('../../assets/nhietdo.png')}/>
                            </EachSectionContainer>
                            <SectionDetailText>
                              <SectionName>Nhiệt độ</SectionName>
                              <SubSectionText>{info.Temperature}</SubSectionText>
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
                              <SectionName>Ánh sáng</SectionName>
                              <SubSectionText>{info.Light}</SubSectionText>
                            </SectionDetailText>
                          </BoxContainer>
                        </LeftContainer>

                        <RightContainer>
                          <BoxContainer>
                            <EachSectionContainer>
                              <Icon resizeMode="cover" source={require('../../assets/doam.png')}/>
                            </EachSectionContainer>
                            <SectionDetailText>
                              <SectionName>Độ ẩm</SectionName>
                              <SubSectionText>{info.Humidity}</SubSectionText>
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
                    <MainText>
                    {info.Info}
                    </MainText>
                  </ParagraphContainer>
          </BodyContainer>
        
      </ScrollView>
    </SafeAreaView>
    
  );
}

export default PlantDetail; 