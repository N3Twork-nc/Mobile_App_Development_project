import React from 'react';
import AppNavigator from './src/navigators/AppNavigator';
import { Provider } from 'react-redux';
import store from './src/store';

import { plant } from './src/api/uploadPlant';

const App = () =>
{
  plant("caothi", "Phòng ngủ", "Cây lưỡi hổ")
  return <Provider store={store}>
    <AppNavigator/>
  </Provider> 
}
export default App;
