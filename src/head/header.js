import * as React from 'react'
import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Button
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import styles from './headerStyle'

export default function Head() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../images/logo.png')} />
      <TouchableOpacity style={styles.bars}>
        <FontAwesome name="bars" size={27} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}
