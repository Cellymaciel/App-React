import { Text, View, StyleSheet } from 'react-native'
import styles from './footerStyle'

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>@Feito por Marcelly e Diego</Text>
    </View>
  )
}
