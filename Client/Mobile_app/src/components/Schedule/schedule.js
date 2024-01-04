import React, { useEffect, useState } from 'react';
import { ScrollView, SafeAreaView, Modal, Text, TouchableOpacity, View} from 'react-native';
import { StyledContainer, HeaderContainer, TitleContainer, BackContainer, MainTitle, ButtonBack,Text1,InputNote,
        TextReview,ReviewContainer,DetailContainer,DetailText, DetailImage, StartContainer, TextStart, InputTime,DateContainer, 
        TextDate, InputDate, NoteImage, NoteContainer, FrequencyContainer, FrequencyText, FrequencyImage, EachContainer,WorkContainer,
        TextEach, TextDay, TextTime, ButtonCreateReminder, ButtonCreate,TextInputHours,TextInputMin,InputTimeCon,TextSpace,DecorContainer,ImgDecor,TitleMainNote,AllNoteContainer,
        TitleNoteContainer,NoteImg,Note1Con,CheckboxContainer,CheckboxButton,NoteBoxCon,Line,TitleBoxNote,ContentText,ContentBox,
        } from './styleSchedule';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars'; // Thêm Calendar từ react-native-calendars
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Platform,StyleSheet,TextInput } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { schedule } from '../../api/Plant';
import { useSelector } from 'react-redux';
import { element } from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Schedule = () => {
  const token = useSelector(state=>state.token)['payload'];
  const route=useRoute()
  const {scheduled, idPlant, roomName} =route.params
  const navigation = useNavigation();
  const handleBack = () => { navigation.goBack() }
 
  const [checked, setChecked] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(new Date()); // Giá trị thời gian được chọn

   const [isFocusNumber, ] = useState(false);
   const [isFocusFrequency, ] = useState(false);
   const [isFocusWork, setIsFocusWork] = useState(false);
   const [selectedNumber, setSelectedNumber] = useState(1); // Biến state cho dropdown dãy số
   const [selectedFrequency, setSelectedFrequency] = useState(null); // Biến state cho dropdown "Ngày", "Tuần", "Tháng"
   const [selectedWork, setSelectedWork] = useState(null); // Biến state cho các công việc 
   const [selectedHour, setSelectedHour] = useState(''); // Thêm state cho giờ
   const [selectedMinute, setSelectedMinute] = useState(''); // Thêm state cho phút
   const [note,setNote]=useState('')//ghi chú
   const [checkedItems, setCheckedItems] = useState([]);
   const handleSchedule = async ()=>{
    try {
      const result= await schedule(token,idPlant,roomName,selectedHour+":"+String(selectedMinute).padStart(2, '0'),
      selectedDate,selectedNumber,selectedFrequency,selectedWork,note)
      if (result==200){
        alert("Đặt lịch thành công");
      }
      else alert("Đặt lịch thất bại")
    }
    catch {
      alert("Đặt lịch thất bại")
    }
  }

    //Ràng buộc giờ
    const onHourChange = (text) => {
      const hour = parseInt(text);
      if (!isNaN(hour) && hour >= 0 && hour <= 23) {
        setSelectedHour(text);
        setTime(new Date(time.getFullYear(), time.getMonth(), time.getDate(), text, time.getMinutes()));
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
        setTime(new Date(time.getFullYear(), time.getMonth(), time.getDate(), time.getHours(), text));
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
    //Hàm log giờ đã chọn 
    const displaySelectedTime = () => {
      console.log(`Giờ đã chọn: ${selectedHour}:${selectedMinute}`);
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
      backgroundColor: 'white', width: 60, left: 45, bottom: 30,
    },
    dropdown: {
      height: 40,width: 60, borderRadius: 8, paddingHorizontal: 12,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
  });
 //Style Frequency Dropdown 
  const frequencyStyles = StyleSheet.create({
    container: {
      backgroundColor: 'white', width: 80, left: 105, bottom: 70,
    },
    dropdown: {
      height: 40, width: 80, borderRadius: 8, paddingHorizontal: 6,
    },
    selectedTextStyle: { 
      fontSize: 17,
    },
  });
 //Style Work Dropdown 
  const workStyles = StyleSheet.create({
    container: { width: 100, left: 45, bottom: 34,
    },
    dropdown: {
      height: 50, width: 160, borderRadius: 8, paddingHorizontal: 31,
    },
    placeholderStyle: {
      fontSize: 17,
    },
    selectedTextStyle: {
      fontSize: 17,
    },
  });
  const handleMonthChange=(date)=>{
    const { year, month } = date;
  }

  useEffect(()=>{
    // schedule()
  },[])

  // Hàm để lưu trạng thái checkbox vào AsyncStorage
  const saveCheckedItems = async () => {
    try {
      await AsyncStorage.setItem('checkedItems', JSON.stringify(checkedItems));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  // Hàm để load trạng thái checkbox từ AsyncStorage khi component được mount
  const loadCheckedItems = async () => {
    try {
      const value = await AsyncStorage.getItem('checkedItems');
      if (value !== null) {
        setCheckedItems(JSON.parse(value));
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  useEffect(() => {
    loadCheckedItems(); // Load trạng thái checkbox khi component được mount
  }, []);

  useEffect(() => {
    saveCheckedItems(); // Lưu trạng thái checkbox mỗi khi có thay đổi
  }, [checkedItems]);

  const handleCheck = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };
  
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
          <View>
            {/* Hiển thị lịch */}
            <Calendar
              onDayPress={onDayPress}
              markedDates={{
                '2024-01-01': { selected: true, selectedColor: 'green', note: 'Ghi chú cho ngày này' },
                [selectedDate]:{ selected: true, selectedColor: 'green' }}}
              onMonthChange={handleMonthChange}
            />
          </View>
          {/* ADD NOTE */}
          
        {/*END ADD NOTE */}
        </StyledContainer>
        <AllNoteContainer>
          {scheduled ? (
            <TitleNoteContainer>
              <NoteImg resizeMode="contain" source={require('../../assets/tick.png')}/> 
              <TitleMainNote>Những việc cần làm</TitleMainNote>
            </TitleNoteContainer>
          ) : null}

          {/* Note */}
          {scheduled && Object.values(scheduled).map((calender, index) => (
            <Note1Con key={index}>
                              <CheckboxButton onPress={() => handleCheck(index)}>
                <CheckboxContainer>
                  {checkedItems[index] ? (
                    <Ionicons name="checkmark-circle" size={25} color="green" />
                  ) : (
                    <Ionicons name="ellipse-outline" size={25} color="white" />
                  )}
                </CheckboxContainer>
              </CheckboxButton>
                <NoteBoxCon> 
                  <Line></Line>                    
                  <ContentBox>            
                      <TitleBoxNote>{calender.note}</TitleBoxNote>           
                      <ContentText>Cách {calender.frequency} {calender.frequencyType} bạn có lịch {calender.action} lúc {calender.timeStart} kể từ {calender.dateStart} </ContentText>
                  </ContentBox>
                </NoteBoxCon> 
            </Note1Con>
          ))}
          </AllNoteContainer>
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
            <InputNote placeholder="Thêm ghi chú vào đây"  onChangeText={setNote}/>
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
                            onBlur={displaySelectedTime}
                          />
                          <TextSpace>:</TextSpace>
                          <TextInputMin
                            placeholder="MM"
                            keyboardType="numeric"
                            defaultValue={selectedMinute}
                            onChangeText={onMinuteChange}
                            onBlur={displaySelectedTime}
                          />
                        </InputTimeCon>
                        <TextTime>{time.getHours() >= 12 ? 'PM' : 'AM'}</TextTime>
                  </StartContainer>

                  <DateContainer>
                      <TextDate>Ngày</TextDate>
                      <InputDate
                      placeholder="02/10/2023"
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
                    <ButtonCreate>Tạo nhắc nhở</ButtonCreate>
              </ButtonCreateReminder>
          </View>
        </TouchableOpacity>
         </KeyboardAwareScrollView>
      </Modal>
</SafeAreaView>
  );
};

export default Schedule;

