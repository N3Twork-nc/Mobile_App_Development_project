import { TaskbarView, ContainerButton, TaskbarIcon, TaskbarButtonText, StyledContainer } from './styleProfile';
import { ScrollView, SafeAreaView,TouchableOpacity,View,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Profile = () => {
    const navigation = useNavigation();
    const handleExplore = () => {
        navigation.navigate('Explore', { animations: false }, {transitions: false});
      };
      const handleScan = () => {
        navigation.navigate('CameraScreen', { animations: false });
      };
      const handleSaved = () => {
        navigation.navigate('Saved', { animations: false });
      };
      const handleProfile= () => {
        navigation.navigate('Profile', { animations: false });
      };
      const handleHome = () => {
        navigation.navigate('Home', {animations: false});
      }
      
return (
<SafeAreaView  style={{ flex: 1 }}>
<ScrollView  style={{ flex: 1 }}>
    <StyledContainer >

    </StyledContainer>
</ScrollView>
    <TaskbarView>
      <ContainerButton onPress={handleExplore}>
        <TaskbarIcon resizeMode="contain" source={require('../../assets/explore.png')}/>
        <TaskbarButtonText>Khám phá</TaskbarButtonText>
      </ContainerButton>
      <ContainerButton onPress={handleHome}>
        <TaskbarIcon resizeMode="contain" source={require('../../assets/mygarden.png')}  />
        <TaskbarButtonText >Vườn của tôi</TaskbarButtonText>
      </ContainerButton>
      <ContainerButton onPress={handleScan}>
        <TaskbarIcon resizeMode="contain" source={require('../../assets/scan.png')}/>
        <TaskbarButtonText>Scan</TaskbarButtonText>
      </ContainerButton>
      <ContainerButton>
        <TaskbarIcon resizeMode="contain" source={require('../../assets/saved.png')}/>
        <TaskbarButtonText>Đã lưu</TaskbarButtonText>
      </ContainerButton>
      <ContainerButton onPress={handleProfile}>
        <TaskbarIcon resizeMode="contain" source={require('../../assets/profile.png')}  tintColor={'green'}/>
        <TaskbarButtonText style={{ color: 'green' }}>Cá nhân</TaskbarButtonText>
      </ContainerButton>
    </TaskbarView>
    </SafeAreaView>
)
}
export default Profile;