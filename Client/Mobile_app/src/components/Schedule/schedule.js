import React, { useState } from 'react';
import { ScrollView, SafeAreaView, Modal, Text, TouchableOpacity, View } from 'react-native';
import { StyledContainer, HeaderContainer, TitleContainer, BackContainer, MainTitle, ButtonBack,Text1,InputNote,
        TextReview,ReviewContainer,DetailContainer,DetailText, DetailImage, StartContainer, TextStart, InputTime,DateContainer, 
        TextDate, InputDate, NoteImage, NoteContainer, FrequencyContainer, FrequencyText, FrequencyImage, EachContainer,WorkContainer,
        TextEach, TextDay, TextTime, ButtonCreateReminder, ButtonCreate,TextInputHours,TextInputMin,InputTimeCon,TextSpace,DecorContainer,ImgDecor
        } from './styleSchedule';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars'; // Thêm Calendar từ react-native-calendars
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Platform,StyleSheet,TextInput } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { schedule } from '../../api/Plant';
import { useSelector } from 'react-redux';


const Schedule = () => {
  const token = useSelector(state=>state.token)['payload'];
  const route=useRoute()
  const {idPlant,roomName} =route.params
  const navigation = useNavigation();
  const handleBack = () => { navigation.navigate('Home'); }
 

  const [selectedDate, setSelectedDate] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(new Date()); // Giá trị thời gian được chọn

   const [isFocusNumber, setIsFocusNumber] = useState(false);
   const [isFocusFrequency, setIsFocusFrequency] = useState(false);
   const [isFocusWork, setIsFocusWork] = useState(false);
   const [selectedNumber, setSelectedNumber] = useState(1); // Biến state cho dropdown dãy số
   const [selectedFrequency, setSelectedFrequency] = useState(null); // Biến state cho dropdown "Ngày", "Tuần", "Tháng"
   const [selectedWork, setSelectedWork] = useState(null); // Biến state cho các công việc 
   const [selectedHour, setSelectedHour] = useState(''); // Thêm state cho giờ
   const [selectedMinute, setSelectedMinute] = useState(''); // Thêm state cho phút
   const handleSchedule = async ()=>{
    schedule(token,idPlant,roomName,selectedHour+":"+selectedMinute,selectedDate,selectedNumber,selectedFrequency,selectedWork,null)
  }

    //Ràng buộc giờ
    const onHourChange = (text) => {
      const hour = parseInt(text);
      if (!isNaN(hour) && hour >= 0 && hour <= 23) {
        setSelectedHour(text);
        setTime(new Date(time.getFullYear(), time.getMonth(), time.getDate(), hour, time.getMinutes()));
      } else {
        // Hiển thị thông báo không hợp lệ khi giờ nhập vượt quá 23
        alert('Giờ không hợp lệ');
      }
    };
    //Ràng buộc phút
    const onMinuteChange = (text) => {
      const minute = parseInt(text);
      if (!isNaN(minute) && minute >= 0 && minute <= 59) {
        setSelectedMinute(text);
        setTime(new Date(time.getFullYear(), time.getMonth(), time.getDate(), time.getHours(), minute));
      }
    
      if (minute >= 60) {
        const newHour = time.getHours() + 1;
        if (newHour <= 23) {
          setTime(new Date(time.getFullYear(), time.getMonth(), time.getDate(), newHour, 0));
          setSelectedHour(newHour.toString());
          setSelectedMinute('00');
        } else {
          alert('Giờ và phút không hợp lệ');
        }
      }
    };
 
  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    setShowModal(true);
  };
  // Hàm để chuyển đổi ngày từ yyyy-mm-dd sang dd/mm/yyyy
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  const numbersArray = Array.from({ length: 20 }, (_, index) => index + 1);
  const data = numbersArray.map((number) => ({
    label: `${number}`,
    value: `${number}`,
  }));

  const frequencyData = [
    { label: 'Ngày', value: 'Ngày' },
    { label: 'Tuần', value: 'Tuần' },
    { label: 'Tháng', value: 'Tháng' },
    { label: 'Năm', value: 'Năm' },
  ];

  const workData = [
    { label: 'Tưới cây', value: 'Tưới cây' },
    { label: 'Bón phân', value: 'Bón phân' },
    { label: 'Thay đất', value: 'Thay đất' },
    { label: 'Tỉa lá', value: 'Tỉa lá' },
  ];
  
// Style Number Dropdown 
  const numbersStyles = StyleSheet.create({
    container: {
      backgroundColor: 'white', width: 100, left: 45, bottom: 34,
    },
    dropdown: {
      height: 50,width: 60, borderRadius: 8, paddingHorizontal: 10,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
  });
 //Style Frequency Dropdown 
  const frequencyStyles = StyleSheet.create({
    container: {
      backgroundColor: 'white', width: 70, left: 110, bottom: 85,
    },
    dropdown: {
      height: 50, width: 85, borderRadius: 8, paddingHorizontal: 10,
    },
    selectedTextStyle: { 
      fontSize: 16,
    },
  });
 //Style Work Dropdown 
  const workStyles = StyleSheet.create({
    container: { width: 100, left: 45, bottom: 34,
    },
    dropdown: {
      height: 50, width: 150, borderRadius: 8, paddingHorizontal: 25,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
  });

  return (
<SafeAreaView style={{ flex: 1, backgroundColor: '#CEF1CF' }}>   
     <ScrollView style={{ flex: 1 }}>
        <StyledContainer>
          <HeaderContainer>
            <TitleContainer>
                <BackContainer onPress={handleBack}>
                  <ButtonBack resizeMode="cover" source={require('../../assets/back.png')} />
                </BackContainer>
                <MainTitle> Lên lịch </MainTitle>
            </TitleContainer>
          </HeaderContainer>
          <View style={{ flex: 1 }}>
            {/* Hiển thị lịch */}
            <Calendar
              onDayPress={onDayPress}
              markedDates={{ [selectedDate]: { selected: true, selectedColor: 'green' } }}
            />
          </View>
          <DecorContainer>
            <ImgDecor resizeMode="contain" source={require('../../assets/ImgDecor.png')} /> 
          </DecorContainer>
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
          <View style={{ backgroundColor: '#FFF', width: '100%', height: '65%',   borderTopLeftRadius: 35, borderTopRightRadius: 35,}}>
            <Text1>Chi tiết</Text1>
            {/* Nội dung khác trong modal */}
            <NoteContainer>
              <InputNote placeholder="Thêm ghi chú vào đây" placeholderTextColor="#D3DBD3"></InputNote>
              <NoteImage resizeMode="contain" source={require('../../assets/note.png')}/> 
            </NoteContainer>
            <ReviewContainer> 
                <TextReview>Nhắc nhở của bạn sẽ được gửi vào 10:00 mỗi 2 tuần vào Thứ hai, Thứ ba, Thứ tư</TextReview>
            </ReviewContainer>

              {/*THỜI GIAN*/}
            <DetailContainer>
                  <DetailText>Thời gian</DetailText>
                  <DetailImage resizeMode="contain" source={require('../../assets/detail.png')}/> 
                  <StartContainer>
                      <TextStart>Bắt đầu</TextStart>
                       {/* Hiển thị input field cho giờ và phút */}
                      <InputTimeCon>
                          <TextInputHours
                            placeholder="HH"
                            keyboardType="numeric"
                            defaultValue={selectedHour}
                            onChangeText={onHourChange}
                          />
                          <TextSpace>:</TextSpace>
                          <TextInputMin
                            placeholder="MM"
                            keyboardType="numeric"
                            defaultValue={selectedMinute}
                            onChangeText={onMinuteChange}
                          />
                        </InputTimeCon>
                        <TextTime>{time.getHours() >= 12 ? 'PM' : 'AM'}</TextTime>
                  </StartContainer>

                  <DateContainer>
                      <TextDate>Ngày</TextDate>
                      <InputDate
                      placeholder="02/10/2023"
                      placeholderTextColor="#D3DBD3"
                      value={formatDate(selectedDate)} // Gán giá trị ngày được chọn vào InputDate
                      // onChangeText={(text) => setSelectedDate(text)} //Có thể nhập ngày thủ công 
                    ></InputDate>
                  </DateContainer>
            </DetailContainer>

            {/*TẦN SUÂT*/}
            <FrequencyContainer>
              <FrequencyText>Tần suất</FrequencyText>
              <FrequencyImage resizeMode="contain" source={require('../../assets/tansuat.png')}/> 
              <EachContainer>
                    <TextEach>Mỗi</TextEach>
                    {/* Dropdown list dãy số từ 1-20 */}
                        <View style={numbersStyles.container}>
                            <Dropdown
                                  style={[numbersStyles.dropdown]}
                                  selectedTextStyle={numbersStyles.selectedTextStyle}
                                  data={data}
                                  maxHeight={100}
                                  labelField="label"
                                  valueField="value"
                                  placeholder={!isFocusNumber ? '1' : '...'}
                                  value={selectedNumber} 
                                  onChange={item => {
                                  setSelectedNumber(item.value); // Cập nhật giá trị đã chọn cho dropdown dãy số
                                  }}
                           />
                        </View>
                       {/* Dropdown list chứa "Ngày", "Tuần", "Tháng" */}
                        <View style={frequencyStyles.container}>
                            <Dropdown
                                   style={[frequencyStyles.dropdown]}
                                   selectedTextStyle={frequencyStyles.selectedTextStyle}
                                   data={frequencyData}
                                   maxHeight={100}
                                   labelField="label"
                                   valueField="value"
                                   placeholder={!isFocusFrequency ? 'Chọn' : '...'}
                                   value={selectedFrequency} 
                                   onChange={item => {
                                  setSelectedFrequency(item.value); // Cập nhật giá trị đã chọn cho dropdown "Ngày", "Tuần", "Tháng"
                                   }}
                              />
                        </View>
                </EachContainer>
                <WorkContainer>
                  <TextDay>Việc</TextDay>
                        <View style={workStyles.container}>
                            {/* Dropdown list chứa việc cần làm */}
                           <Dropdown
                                    style={[workStyles.dropdown]}
                                    selectedTextStyle={workStyles.selectedTextStyle}
                                    data={workData}
                                    maxHeight={100}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={!isFocusWork ? 'Chọn' : '...'}
                                    value={selectedWork} 
                                    onChange={item => {
                                    setSelectedWork(item.value); // Cập nhật giá trị đã chọn cho dropdown 
                                    }}
                            />
                        </View>
                </WorkContainer>
              </FrequencyContainer>
              <ButtonCreateReminder onPress={handleSchedule}>
                    <ButtonCreate> Tạo nhắc nhở</ButtonCreate>
              </ButtonCreateReminder>
          </View>
        </TouchableOpacity>
         </KeyboardAwareScrollView>
      </Modal>
</SafeAreaView>
  );
};

export default Schedule;

