import React from 'react';
import { ScrollView, SafeAreaView,FlatList } from 'react-native';
import { 
  StyledContainer, HeaderContainer,MainTitle, ButtonBack,ImageContainer,ImagePlant,
  BodyContainer,TagContainer,Tag, Text3,Icon,
  ParagraphContainer,CreText,Line,MainText,TopContainer, BackContainer, TitleContainer, SectionsContainer, BoxesContainer, FirstSection, LeftContainer, BoxContainer, EachSectionContainer, 
  SectionDetailText, SectionName, SubSectionText, RightContainer, SecondSection
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
                    Hoa hướng dương
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
                    <Tag> Ngoài trời </Tag>
                    <Tag> Trang trí </Tag>
                    <Tag> Thực phẩm </Tag>
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
                              <SubSectionText>Mỗi 2 lần/tuần</SubSectionText>
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
                              <SubSectionText>Mỗi 5-7 ngày</SubSectionText>
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
                              <SubSectionText>Mỗi 2-3 năm</SubSectionText>
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
                              <SubSectionText>25-40°C</SubSectionText>
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
                              <SubSectionText>Cao</SubSectionText>
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
                              <SubSectionText>Vừa</SubSectionText>
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
                    Hoa hướng dương (Sunflower) là một loài cây thân thảo có hoa, có đặc điểm nổi bật là luôn quay về hướng mặt trời. Cây có thân mảnh mai, cao từ 1 đến 3 mét, với lá hình trái tim có cạnh răng cưa. Loài này sinh trưởng mạnh mẽ và phân bố rộng khắp vùng nhiệt đới và cận nhiệt đới, cũng như trong các vùng ôn đới. Hoa hướng dương không chỉ được trồng vì vẻ đẹp của nó, mà còn có nhiều ứng dụng hữu ích khác. Các hạt của hoa hướng dương là nguồn cung cấp dưỡng chất quý giá, thường được sử dụng trong ẩm thực và chế biến thực phẩm. Để chăm sóc cây hoa hướng dương, cần cung cấp đủ ánh sáng mặt trời, tưới nước đều đặn và đảm bảo thoát nước tốt. Thay đất mỗi 2-3 năm để đảm bảo rễ cây có đủ không gian để phát triển. Hơn nữa, hãy chú ý rằng cây này cần hỗ trợ hoặc giá để phát triển vững vàng do thân cây mảnh dẻ và cao.
  Hoa hướng dương (Sunflower) là một loài cây thân thảo có hoa, có đặc điểm nổi bật là luôn quay về hướng mặt trời. Cây có thân mảnh mai, cao từ 1 đến 3 mét, với lá hình trái tim có cạnh răng cưa. Loài này sinh trưởng mạnh mẽ và phân bố rộng khắp vùng nhiệt đới và cận nhiệt đới, cũng như trong các vùng ôn đới. Hoa hướng dương không chỉ được trồng vì vẻ đẹp của nó, mà còn có nhiều ứng dụng hữu ích khác. Các hạt của hoa hướng dương là nguồn cung cấp dưỡng chất quý giá, thường được sử dụng trong ẩm thực và chế biến thực phẩm. Để chăm sóc cây hoa hướng dương, cần cung cấp đủ ánh sáng mặt trời, tưới nước đều đặn và đảm bảo thoát nước tốt. Thay đất mỗi 2-3 năm để đảm bảo rễ cây có đủ không gian để phát triển. Hơn nữa, hãy chú ý rằng cây này cần hỗ trợ hoặc giá để phát triển vững vàng do thân cây mảnh dẻ và cao.
                    </MainText>
                  </ParagraphContainer>
          </BodyContainer>
        
      </ScrollView>
    </SafeAreaView>
    
  );
}

export default PlantDetail; 