import { StyleSheet, Text, View} from 'react-native';
import Welcome from './src/components/Welcome/welcome';
import {siginin} from './src/api/signin_signup';

export default function App() {
  siginin("CaoThi","1234")
  return(<Welcome/>)
}