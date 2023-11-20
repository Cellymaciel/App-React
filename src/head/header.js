import * as React from 'react'
import {View, Image, SafeAreaView,  TouchableOpacity,   Button } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import styles from './headerStyle'

export default function Head() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../images/logo.png')} />
    </SafeAreaView>
  )
}
