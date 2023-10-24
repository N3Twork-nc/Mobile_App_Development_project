import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { TaskbarIcon,ContainerButton,TaskbarView, TaskbarButtonText } from './styleTaskbar';
import { useNavigation } from '@react-navigation/native';

const Taskbar = () => {
  const navigation = useNavigation();
  const [activeScreen, setActiveScreen] = useState('Home'); // Giá trị mặc định là 'Explore'

  const handleExplore = () => {
    navigation.navigate('Explore', { animations: false }, { transitions: false });
    setActiveScreen('Explore'); // Thay đổi giá trị khi nhấn nút 'Khám phá'
  };

  const handleHome = () => {
    navigation.navigate('Home', { animations: false });
    setActiveScreen('Home'); // Thay đổi giá trị khi nhấn nút 'Vườn của tôi'
  };

  const handleScan = () => {
    navigation.navigate('Scan', { animations: false });
    setActiveScreen('Scan'); // Thay đổi giá trị khi nhấn nút 'Vườn của tôi'
  };

  const handleSaved = () => {
    navigation.navigate('Saved', { animations: false });
    setActiveScreen('Saved'); // Thay đổi giá trị khi nhấn nút 'Vườn của tôi'
  };

  const handleProfile = () => {
    navigation.navigate('Profile', { animations: false });
    setActiveScreen('Profile'); // Thay đổi giá trị khi nhấn nút 'Vườn của tôi'
  };

  return (
    <TaskbarView>
      <ContainerButton onPress={handleExplore}>
        <TaskbarIcon resizeMode="contain" source={require('../../assets/explore.png')}  tintColor={activeScreen === 'Explore' ? 'green' : 'black'}/>
        <TaskbarButtonText style={{ color: activeScreen === 'Explore' ? 'green' : 'black' }}>Khám phá</TaskbarButtonText>
      </ContainerButton>
      <ContainerButton onPress={handleHome}>
        <TaskbarIcon resizeMode="contain" source={require('../../assets/mygarden.png')}  tintColor={activeScreen === 'Home' ? 'green' : 'black'} />
        <TaskbarButtonText style={{ color: activeScreen === 'Home' ? 'green' : 'black' }}  >Vườn của tôi</TaskbarButtonText>
      </ContainerButton>
      <ContainerButton onPress={handleScan}>
        <TaskbarIcon resizeMode="contain" source={require('../../assets/scan.png')}  tintColor={activeScreen === 'Scan' ? 'green' : 'black'}/>
        <TaskbarButtonText style={{ color: activeScreen === 'Scan' ? 'green' : 'black' }}>Scan</TaskbarButtonText>
      </ContainerButton>
      <ContainerButton onPress={handleSaved}>
        <TaskbarIcon resizeMode="contain" source={require('../../assets/saved.png')}  tintColor={activeScreen === 'Saved' ? 'green' : 'black'}/>
        <TaskbarButtonText style={{ color: activeScreen === 'Saved' ? 'green' : 'black' }}>Đã lưu</TaskbarButtonText>
      </ContainerButton>
      <ContainerButton onPress={handleProfile}>
        <TaskbarIcon resizeMode="contain" source={require('../../assets/profile.png')}  tintColor={activeScreen === 'Profile' ? 'green' : 'black'}/>
        <TaskbarButtonText style={{ color: activeScreen === 'Profile' ? 'green' : 'black' }}>Cá nhân</TaskbarButtonText>
      </ContainerButton>
    </TaskbarView>

  );
};

export default Taskbar;