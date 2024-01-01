import { Dimensions, Platform, StatusBar } from 'react-native';

//Lấy kích thước thanh status
export const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

//Màu sắc dùng trong app
export const Colors = {
  maincolor: "#CEF1CF",
  white: "#ffffff",
  black: "#000000",
  gray: "#D9D9D9",
  green: "#61AF2B",
  blue: "#5676DC", 
  orange: "#E6B44C", 
  purple: "#A559D9",
  explore: "#E7FFE8",
  white_gray: "#F8F8F8",
  gray_subtype: "#628093",
  livingroom: "#EEF7E8",
  kitchen: "#E6EAFA",
  bedroom: "#FCF1E3",
  backyard: "#F8E8F8",
  maintitle: "#0B4F06",
  sectiontitle: "#4E4E4E",
  buttoncolor: "#1A5D1A",
  maintext: "#164303",
  line: "#B3B3B3",
  containerprofile: "#EEF7E8",
  border: "#164303",
  position: "#333333",
}

//Lấy kích thước màn hình
const { height, width } = Dimensions.get('window');

export const ScreenSize = {
   width, height, 
   vh: percent => (percent * height) / 100,
   vw: percent => (percent * width) / 100,
}
