import { StyleSheet, View } from 'react-native'
import Head from './src/head'
import Footer from './src/footer'
import Body from './src/body';

export default function App() {
  return (
    <View style={styles.container}>
      <Head/>
      <Body/>
      <Footer/>   
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  }
})
