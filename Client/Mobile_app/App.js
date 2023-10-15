import { StyleSheet, Text, View} from 'react-native';
import Welcome from './src/components/Welcome/welcome';
import sigin from './src/api/signin_signup';

export default function App() {
  axios.get(`http://172.16.1.250:8000`)
  .then(res => {
    console.log(res);
    console.log(res.data);
  })
  return(<Welcome/>)
}