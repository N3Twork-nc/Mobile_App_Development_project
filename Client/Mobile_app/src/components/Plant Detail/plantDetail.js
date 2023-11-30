import React from 'react';
import { ScrollView, SafeAreaView,FlatList } from 'react-native';
import { 
  StyledContainer, HeaderContainer,MainTitle, ButtonBack,ImageContainer,ImagePlant,
  BodyContainer,Text1,Text2,ImgLogo, TagContainer,Tag1, Tag2,Tag3,Text3,InfoContainer,Box1,Box2,Box3,Box4,Box5,Box6,
  Box1Container,Box2Container,Box3Container,Title1,Info1,Title2,Info2,Title3,Info3,TextContainer1,TextContainer2,TextContainer3,TextContainer4,
  Box4Container,Title4,Info4, Box5Container,Title5,Info5,TextContainer5,Box6Container,Title6,Info6,TextContainer6,
  ParagraphContainer,CreText,Line,MainText,TopContainer,TaskbarView, SaveButton, SaveContainer, Save, SaveButtonText, BackContainer, TitleContainer
} from './stylePlantDetail.js';
import { useNavigation } from '@react-navigation/native';

const PlantDetail = () => {
  const navigation = useNavigation();
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
                  <Text2> Hoa hướng dương</Text2>
                  <TagContainer>
                    <Tag1> Ngoài trời </Tag1>
                    <Tag1> Trang trí </Tag1>
                    <Tag1> Thực phẩm </Tag1>
                  </TagContainer>
                  <Text3> Thông tin</Text3> 
                  <InfoContainer>
                    <Box1Container>
                      <Box1 resizeMode="cover" source={require('../../assets/bonphan.png')}/>
                      <TextContainer1>
                        <Title1>Bón phân </Title1>
                        <Info1>Xuân hè, mỗi 4-6 tuần</Info1>
                      </TextContainer1>
                    </Box1Container>
                    <Box2Container>
                      <Box2 resizeMode="cover" source={require('../../assets/tuoinuoc.png')}/>
                      <TextContainer2>
                        <Title2>Tưới nước </Title2>
                        <Info2>Mỗi 5-7 ngày</Info2>
                      </TextContainer2>
                    </Box2Container>
                    <Box3Container>
                    <Box3 resizeMode="cover" source={require('../../assets/thaydat.png')}/>
                    <TextContainer3>
                      <Title3>Thay đất</Title3>
                      <Info3>Mỗi 2-3 năm</Info3>
                    </TextContainer3>
                    </Box3Container>
                    <Box4Container>
                      <Box4 resizeMode="cover" source={require('../../assets/nhietdo.png')}/>
                      <TextContainer4>
                        <Title4>Nhiệt độ </Title4>
                        <Info4>25-40°C </Info4>
                      </TextContainer4>
                    </Box4Container>
                    <Box5Container>
                      <Box5 resizeMode="cover" source={require('../../assets/anhsang.png')}/>
                      <TextContainer5>
                        <Title5>Ánh sáng </Title5>
                        <Info5>Cao </Info5>
                      </TextContainer5>
                    </Box5Container>
                    <Box6Container>
                      <Box6 resizeMode="cover" source={require('../../assets/doam.png')}/>
                      <TextContainer6>
                        <Title6>Độ ẩm </Title6>
                        <Info6>Vừa </Info6>
                      </TextContainer6>
                    </Box6Container>
                  </InfoContainer>
                  <Line></Line>
                  {/* ĐOẠN VĂN */}
                  <ParagraphContainer>
                    <CreText> Nguồn Wikipedia</CreText>
                    <MainText>
                    Hoa hướng dương (Sunflower) là một loài cây thân thảo có hoa, có đặc điểm nổi bật là luôn quay về hướng mặt trời. Cây có thân mảnh mai, cao từ 1 đến 3 mét, với lá hình trái tim có cạnh răng cưa. Loài này sinh trưởng mạnh mẽ và phân bố rộng khắp vùng nhiệt đới và cận nhiệt đới, cũng như trong các vùng ôn đới. Hoa hướng dương không chỉ được trồng vì vẻ đẹp của nó, mà còn có nhiều ứng dụng hữu ích khác. Các hạt của hoa hướng dương là nguồn cung cấp dưỡng chất quý giá, thường được sử dụng trong ẩm thực và chế biến thực phẩm. Để chăm sóc cây hoa hướng dương, cần cung cấp đủ ánh sáng mặt trời, tưới nước đều đặn và đảm bảo thoát nước tốt. Thay đất mỗi 2-3 năm để đảm bảo rễ cây có đủ không gian để phát triển. Hơn nữa, hãy chú ý rằng cây này cần hỗ trợ hoặc giá để phát triển vững vàng do thân cây mảnh dẻ và cao.
  Hoa hướng dương (Sunflower) là một loài cây thân thảo có hoa, có đặc điểm nổi bật là luôn quay về hướng mặt trời. Cây có thân mảnh mai, cao từ 1 đến 3 mét, với lá hình trái tim có cạnh răng cưa. Loài này sinh trưởng mạnh mẽ và phân bố rộng khắp vùng nhiệt đới và cận nhiệt đới, cũng như trong các vùng ôn đới. Hoa hướng dương không chỉ được trồng vì vẻ đẹp của nó, mà còn có nhiều ứng dụng hữu ích khác. Các hạt của hoa hướng dương là nguồn cung cấp dưỡng chất quý giá, thường được sử dụng trong ẩm thực và chế biến thực phẩm. Để chăm sóc cây hoa hướng dương, cần cung cấp đủ ánh sáng mặt trời, tưới nước đều đặn và đảm bảo thoát nước tốt. Thay đất mỗi 2-3 năm để đảm bảo rễ cây có đủ không gian để phát triển. Hơn nữa, hãy chú ý rằng cây này cần hỗ trợ hoặc giá để phát triển vững vàng do thân cây mảnh dẻ và cao.
                    </MainText>
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

export default PlantDetail; 