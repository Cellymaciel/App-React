import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import styles from './style'

export default function Head() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../images/logo.png')} />
    </View>
  )
}
