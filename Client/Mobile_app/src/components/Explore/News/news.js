import React from 'react';
import { ScrollView,  SafeAreaView } from 'react-native';
import {  StyledContainer, HeaderContainer, MainTitle, BackContainer, ButtonBack, HeaderImageContainer, MainTitleContainer, NewspaperMaintitle, SubtitleContainer, NewspaperThumbnailContainer, TextNewspaper, SubText, Line, MainContent, Header1,

} from './styleNews.js';
import { useNavigation } from '@react-navigation/native';
const Newspaper = () => {
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.navigate('Explore', { animations: false });
      };
 return (
    <SafeAreaView style={{ flex: 1 }}>    
        <ScrollView style={{flex: 1}}>
            <StyledContainer>

            {/* Header */}
                <HeaderImageContainer  resizeMode="cover" source={require('../../../assets/vines.png')}/>
                <HeaderContainer>
                    <BackContainer onPress = {handleBack}>
                        <ButtonBack resizeMode="cover" source={require('../../../assets/back.png')}/>                        
                    </BackContainer>
                    <MainTitleContainer>
                        <MainTitle>Khám phá</MainTitle>
                    </MainTitleContainer>   
                </HeaderContainer>

            {/* Đầu đề Báo */}
                <NewspaperMaintitle>8 CÁCH CHĂM SÓC CÂY TRONG NHÀ LUÔN TƯƠI TỐT</NewspaperMaintitle>
                <SubtitleContainer>
                    <NewspaperThumbnailContainer  resizeMode="cover" source={require('../../../assets/plant.jpg')} />
                    <TextNewspaper>
                        <SubText>Khi bạn mang cây xanh vào nhà, có nhiều điều cần lưu ý để giữ chúng phát triển tốt và trở thành một vật trang trí nội thất lâu dài. Dưới đây sẽ là 8 cách chăm sóc cây cảnh trong nhà đơn giản mà ai cũng có thể thực hiện được. Cùng tham khảo nhé!</SubText>
                    </TextNewspaper>
                </SubtitleContainer>

                <Line/>

            {/* Nội dung báo */}
                <Header1>1. Chọn loại đất tốt nhất</Header1>
                <MainContent>Hầu hết các cây trồng nhà đều phát triển trong bầu đất thông thường với hỗn hợp chứa vermiculite, đá sỏi và than bùn cùng với các chất dinh dưỡng như nitơ, phốt pho, kali, canxi, magiê và lưu huỳnh. Nhiều chuyên gia làm vườn thích thêm các thành phần hữu cơ vào hỗn hợp trồng cây của họ.{"\n"}{"\n"}

                             Lưu ý một số loại cây như xương rồng, hương thảo cần trồng trong bầu đất thô để phù hợp với yêu cầu thoát nước và hút nước nhanh. Nếu bạn thích trồng cây từ cây con, nên cẩn thận đặt chúng vào hỗn hợp ẩm và tơi xốp để kích thích mọc rễ nhanh chóng.{"\n"}{"\n"}

                            Đối với những người yêu thích cây xanh và bắt đầu tìm hiểu cách trồng cây trong nhà, hãy lựa chọn những đơn vị bán cây xanh nội thất cung cấp đất hữu cơ hỗn hợp để thuận tiện cho việc thay đất định kỳ và chăm sóc lâu dài.{"\n"}
                </MainContent>
                <Header1>2. Xác định ánh sáng phù hợp</Header1>
                <MainContent> Chăm sóc cây cảnh trong nhà cần chú ý đến lượng ánh sáng phù hợp, vừa đủ cho cây duy trì sự sống. Tham khảo ý kiến của các chuyên gia về vườn ươm để biết loại cây nào thích ánh sáng toàn phần và ánh sáng bán phần. Một số loại cây sẽ nhanh chóng héo úa nếu chúng không nhận được ánh sáng mặt trời trực tiếp ít nhất 6-8 giờ hàng ngày. Am hiểu yêu cầu ánh sáng đối với từng loại cây sẽ giúp bạn giữ cho khu vườn luôn tràn ngập sức sống.{"\n"}{"\n"}
                             Ngoài ra, việc sắp xếp và bố trí cây theo thiết kế cảnh quan, phối cảnh nội thất là điều cần thiết. Hầu hết các loại cây trồng có hoa đều thích được đặt ở cửa sổ hướng Nam. Trong những tháng mưa thường xuyên, bạn cần di chuyển những cây thân gỗ, ưa nắng đến gần cửa sổ có nắng hoặc ánh sáng từ đèn.{"\n"}{"\n"}
                </MainContent>
            </StyledContainer>
        </ScrollView>
    </SafeAreaView>    
 )
}
export default Newspaper;