import React, { useState } from 'react';
import { ScrollView, SafeAreaView, Modal, Text, TouchableOpacity, View } from 'react-native';
import { StyledContainer, HeaderContainer, TitleContainer, BackContainer, MainTitle, ButtonBack,Text1,InputNote,
        TextReview,ReviewContainer,DetailContainer,DetailText, DetailImage, StartContainer, TextStart, InputTime,DateContainer, 
        TextDate, InputDate, NoteImage, NoteContainer, FrequencyContainer, FrequencyText, FrequencyImage, EachContainer,DayContainer,
        TextEach, InputEach, TextDay, InputDay
        } from './styleSchedule';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars'; // Thêm Calendar từ react-native-calendars
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Schedule = () => {
  const navigation = useNavigation();
  const handleBack = () => { navigation.navigate('Home'); }

  const [selectedDate, setSelectedDate] = useState('');
  const [showModal, setShowModal] = useState(false);

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    setShowModal(true);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>   
      <ScrollView style={{ flex: 1 }}>
        <StyledContainer>
          <HeaderContainer>
            <TitleContainer>
              <BackContainer onPress={handleBack}>
                <ButtonBack resizeMode="cover" source={require('../../assets/back.png')} />
              </BackContainer>
              <MainTitle>
                Lên lịch
              </MainTitle>
            </TitleContainer>
          </HeaderContainer>
          <View style={{ flex: 1 }}>
            {/* Hiển thị lịch */}
            <Calendar
              onDayPress={onDayPress}
              markedDates={{ [selectedDate]: { selected: true, selectedColor: 'green' } }}
            />
          </View>
        </StyledContainer>
      </ScrollView>
      <Modal
        visible={showModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowModal(false)}
      >
        <KeyboardAwareScrollView
        contentContainerStyle={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>

        <TouchableOpacity
          style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
          activeOpacity={1}
          onPress={() => setShowModal(false)}
        >
          <View style={{ backgroundColor: '#FFF', width: '100%', height: '60%', borderRadius: 35 }}>
            <Text1>Chi tiết</Text1>
            {/* Nội dung khác trong modal */}
            <NoteContainer>
              <InputNote placeholder="Thêm ghi chú vào đây"></InputNote>
              <NoteImage resizeMode="contain" source={require('../../assets/note.png')}/> 
            </NoteContainer>
            <ReviewContainer> 
                <TextReview>Nhắc nhở của bạn sẽ được gửi vào 10:00 mỗi 2 tuần vào Thứ hai, Thứ ba, Thứ tư</TextReview>
            </ReviewContainer>
              {/*CHI TIẾT */}
            <DetailContainer>
                  <DetailText>Thời gian</DetailText>
                  <DetailImage resizeMode="contain" source={require('../../assets/detail.png')}/> 
                  <StartContainer>
                      <TextStart>Bắt đầu</TextStart>
                      <InputTime placeholder="10:00 AM"></InputTime>
                  </StartContainer>
                  <DateContainer>
                      <TextDate>Ngày</TextDate>
                      <InputDate placeholder="02/10/2023"></InputDate>
                  </DateContainer>
            </DetailContainer>
            {/*LẶP LẠI */}
            <FrequencyContainer>
              <FrequencyText>Tần suất</FrequencyText>
              <FrequencyImage resizeMode="contain" source={require('../../assets/tansuat.png')}/> 
              <EachContainer>
                      <TextEach>Mỗi</TextEach>
                      <InputEach placeholder="2"></InputEach>
              </EachContainer>
              <DayContainer>
                <TextDay>Việc</TextDay>
                <InputDay placeholder="Bón phân"></InputDay>
              </DayContainer>
            </FrequencyContainer>
          </View>
        </TouchableOpacity>
        </KeyboardAwareScrollView>
      </Modal>
    </SafeAreaView>
  );
};

export default Schedule;
