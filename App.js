import { StyleSheet, Text, View } from 'react-native'
import Head from './src/head'
import Footer from './src/footer'
import Body from './src/body'
import User from './src/user'
import Login from './src/telaDeLogin/login'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Head/>
      <User/>
      <Body/>
      <Footer/> */}
      <Login />
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
