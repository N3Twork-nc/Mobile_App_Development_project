import React from 'react';
import { ScrollView, SafeAreaView,TouchableOpacity,FlatList } from 'react-native';
import { 
  StyledContainer, HeaderContainer,MainTitle, ButtonBack,ImageContainer,ImagePlant,
  BodyContainer,Text1,Text2,ImgLogo, TagContainer,Tag1, Tag2,Tag3,Text3,InfoContainer,Box1,Box2,Box3,Box4,Box5,Box6,
  Box1Container,Box2Container,Box3Container,Title1,Info1,Title2,Info2,Title3,Info3,TextContainer1,TextContainer2,TextContainer3,TextContainer4,
  Box4Container,Title4,Info4, Box5Container,Title5,Info5,TextContainer5,Box6Container,Title6,Info6,TextContainer6,
  ParagraphContainer,CreText,Line,MainText,TopContainer,TaskbarView, SaveButton, SaveContainer, Save, SaveButtonText, BackContainer, TitleContainer
} from './styleAfterscan';
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
    require('../../assets/img1.jpg'),
    require('../../assets/img2.jpg'),
    require('../../assets/img3.jpg'),
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <StyledContainer>
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
        {/* PHẦN THÔNG TIN */}
        <BodyContainer>
                <ImgLogo resizeMode="cover" source={require('../../assets/logo.png')}/>
                <Text1> Cây của bạn đã được nhận diện!</Text1>
                <Text2> {info[0].plantName} </Text2>
                <TagContainer>
                  <Tag1> {keywords[0]} </Tag1>
                  <Tag2> {keywords[1]} </Tag2>
                  <Tag3> {keywords[2]} </Tag3>
                </TagContainer>
                <Text3> Thông tin</Text3> 
                <InfoContainer>
                  <Box1Container>
                    <Box1 resizeMode="cover" source={require('../../assets/bonphan.png')}/>
                    <TextContainer1>
                      <Title1> Bón phân </Title1>
                      <Info1> {info[0].fertilize} </Info1>
                    </TextContainer1>
                  </Box1Container>
                  <Box2Container>
                    <Box2 resizeMode="cover" source={require('../../assets/tuoinuoc.png')}/>
                    <TextContainer2>
                      <Title2> Tưới nước </Title2>
                      <Info2> {info[0].watering} </Info2>
                    </TextContainer2>
                  </Box2Container>
                  <Box3Container>
                  <Box3 resizeMode="cover" source={require('../../assets/thaydat.png')}/>
                  <TextContainer3>
                    <Title3> Thay đất </Title3>
                    <Info3> {info[0].repotting} </Info3>
                  </TextContainer3>
                  </Box3Container>
                  <Box4Container>
                    <Box4 resizeMode="cover" source={require('../../assets/nhietdo.png')}/>
                    <TextContainer4>
                      <Title4> Nhiệt độ </Title4>
                      <Info4> {info[0].temperature} </Info4>
                    </TextContainer4>
                  </Box4Container>
                  <Box5Container>
                    <Box5 resizeMode="cover" source={require('../../assets/anhsang.png')}/>
                    <TextContainer5>
                      <Title5> Ánh sáng </Title5>
                      <Info5> {info[0].light} </Info5>
                    </TextContainer5>
                  </Box5Container>
                  <Box6Container>
                    <Box6 resizeMode="cover" source={require('../../assets/doam.png')}/>
                    <TextContainer6>
                      <Title6> Độ ẩm </Title6>
                      <Info6> {info[0].humidity} </Info6>
                    </TextContainer6>
                  </Box6Container>
                </InfoContainer>
                <Line></Line>
                {/* ĐOẠN VĂN */}
                <ParagraphContainer>
                  <CreText> Nguồn Wikipedia</CreText>
                  <MainText> {info[0].information} </MainText>
                </ParagraphContainer>
        </BodyContainer>
        </StyledContainer> 
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