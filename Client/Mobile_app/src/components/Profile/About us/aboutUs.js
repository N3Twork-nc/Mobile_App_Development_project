import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { StyledContainer, HeaderContainer, MainTitle, BackContainer,
ButtonBack, MainTitleContainer, LogoContainer, LogoImage, Des, CoverImage, MembersContainer, EachMemContainer,Name, ImageFrame, Position, Copyright, TeamTitle } from './styleAboutUs';
import { useNavigation, useRoute } from '@react-navigation/native';

const AboutUs = () =>
{
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.navigate('Profile', { animations: false });
      };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView style={{ flex: 1 }}>
                <StyledContainer>
                    <HeaderContainer>
                        <BackContainer onPress={handleBack}>
                            <ButtonBack resizeMode="cover" source={require('../../../assets/back.png')}/>
                        </BackContainer>
                        <MainTitleContainer>
                            <MainTitle>Về Plantaholic</MainTitle>
                        </MainTitleContainer>
                    </HeaderContainer>

                    <LogoContainer>
                        <LogoImage resizeMode="cover" source={require('../../../assets/logo.png')}/>
                    </LogoContainer>

                    <Des>
                    Chào mừng bạn đến với Plantaholic - ngôi nhà chung của những người yêu cây cảnh và mong muốn mang đến sự chăm sóc tốt nhất cho cây xanh của mình với sứ mệnh: tạo cầu nối giữa con người và thế giới thực với thế giới cây xanh tràn đầy sức sống.
                    {'\n\n'}Plantaholic không chỉ là một ứng dụng thông thường về cây cảnh mà còn là một người bạn đồng hành đáng tin cậy, cung cấp kiến thức chuyên sâu và công cụ nhận diện cây thông minh để giúp bạn chăm sóc cây cảnh một cách hiệu quả và dễ dàng hơn bao giờ hết.
                    </Des>

                    <CoverImage resizeMode="cover" source={require('../../../assets/cover1.jpg')}/>

                    <Des>
                    Chúng tôi tin rằng việc chăm sóc cây cảnh không chỉ là nghệ thuật mà còn là hành trình thú vị và bổ ích. Với Plantaholic, bạn sẽ khám phá được vẻ đẹp đa dạng của thế giới cây xanh, học hỏi và chia sẻ kiến thức với cộng đồng đam mê như bạn. Hãy cùng nhau xây dựng một môi trường sống xanh hơn, một cây cảnh tươi tắn hơn, và một tương lai bền vững hơn!
                    {'\n\n'}Hãy tham gia cùng Plantaholic ngay hôm nay và bắt đầu cuộc hành trình yêu thương và chăm sóc cây cảnh đầy ý nghĩa này nhé!
                    </Des>

                    <TeamTitle>Nhóm phát triển</TeamTitle>

                    <MembersContainer>
                        <EachMemContainer>
                            <ImageFrame resizeMode="cover" source={require('../../../assets/tnt.jpg')}/>
                            <Name>Thái Nhật Thư</Name>
                            <Position>UI/UX Designer</Position>
                            <Position>Front End</Position>
                        </EachMemContainer>
                        <EachMemContainer>
                            <ImageFrame resizeMode="cover" source={require('../../../assets/ntbn.jpg')}/>
                            <Name>Nguyễn Trà Bảo Ngân</Name>
                            <Position>UI/UX Designer</Position>
                            <Position>Front End</Position>
                        </EachMemContainer>
                    </MembersContainer>

                    <MembersContainer>
                        <EachMemContainer>
                            <ImageFrame resizeMode="cover" source={require('../../../assets/nct.png')}/>
                            <Name>Nguyễn Cao Thi</Name>
                            <Position>Leader</Position>
                            <Position>Back End</Position>
                        </EachMemContainer>

                        <EachMemContainer>
                            <ImageFrame resizeMode="cover" source={require('../../../assets/lhat.jpg')}/>
                            <Name>Lê Huỳnh Anh Thư</Name>
                            <Position>Tester</Position>
                            <Position>Back End</Position>
                        </EachMemContainer>
                    </MembersContainer>

                    <Copyright>© 2023 Plantaholic. All rights reserved.</Copyright>
                </StyledContainer>
            </ScrollView>
        </SafeAreaView>
    );
}
export default AboutUs;