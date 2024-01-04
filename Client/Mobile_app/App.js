import React, {Component,useEffect} from 'react';
import AppNavigator from './src/navigators/AppNavigator';
import { Provider } from 'react-redux';
import store from './src/store';
import { StatusBar, Platform} from 'react-native';
import 'react-native-gesture-handler';

class App extends Component
{
  componentDidMount() {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('white');
    }
  };
  render()
  {
    return <Provider store={store}>
    <AppNavigator/>
  </Provider> 
  }
  
}
export default App;  





