import 'react-native-gesture-handler'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import MainStack from './src/navigators/MainStack'

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  }
})
