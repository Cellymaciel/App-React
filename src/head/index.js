import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import styles from './style';

export default function Head() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../images/logo.png')} />
      <TouchableOpacity style={styles.bars}>
        <FontAwesome name="bars" size={27} color="white" />
      </TouchableOpacity>
    </View>
  );
}


