import React from 'react';
import { ScrollView, SafeAreaView,TouchableOpacity,View,Text,Image,FlatList } from 'react-native';
import { 
  StyledContainer, HeaderContainer,MainTitle, ButtonBack,ImageContainer,ImagePlant,
  BodyContainer,Text1,Text2,ImgLogo, TagContainer,Tag1, Tag2,Tag3,Text3,InfoContainer,Box1,Box2,Box3,Box4,Box5,Box6,
  Box1Container,Box2Container,Box3Container,Title1,Info1,Title2,Info2
} from './styleAfterscan';
import { useNavigation } from '@react-navigation/native';

const Afterscan = () => {
  const navigation = useNavigation();
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
        <HeaderContainer>
        <ButtonBack resizeMode="cover" source={require('../../assets/back.png')}/>
        <MainTitle>
              Kết quả
        </MainTitle>
        </HeaderContainer>
        {/* ẢNH CỦA CÂY */}
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
                <Text2> Hoa hướng dương </Text2>
                <TagContainer>
                  <Tag1> Ngoài trời </Tag1>
                  <Tag2> Trang trí </Tag2>
                  <Tag3> Thực phẩm </Tag3>
                </TagContainer>
                <Text3> Thông tin</Text3> 
                <InfoContainer>
                  <Box1Container>
                    <Box1 resizeMode="cover" source={require('../../assets/bonphan.png')}/>
                    <Title1> Bón phân </Title1>
                    <Info1> 3 tuần/lần</Info1>
                  </Box1Container>
                  <Box2 resizeMode="cover" source={require('../../assets/tuoinuoc.png')}/>
                  <Title2> Tưới nước </Title2>
                  <Info2> Mỗi ngày</Info2>
                </InfoContainer>
        </BodyContainer>

        </StyledContainer> 
      </ScrollView>
    </SafeAreaView>
  );
}

export default Afterscan;