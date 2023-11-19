import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Image,
  Pressable,
  TouchableOpacity
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import styles from './registerStyle'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function Register() {
  const navigation = useNavigation()

  const handleLoginClick = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image
          style={styles.imageBackground}
          source={require('../../assets/background-blue.png')}
        />
      </View>
      <View style={styles.box}>
        <View class="message-box" style={styles.messageBox}>
          <Image style={styles.logo} source={require('../images/logo.png')} />
          <Text style={styles.welcomeMessage}>REGISTRE-SE</Text>
        </View>

        <View class="inputs-box" elevation={5} style={styles.inputsContainer}>
          <View class="input-form" style={styles.inputsBox}>
            <View class="input-name-box" style={styles.inputBox}>
              <Ionicons name="person" size={20} color="#B1B1B1" />
              <TextInput style={styles.input} placeholder="Digite seu nome" />
            </View>
            <View class="input-email-box" style={styles.inputBox}>
              <FontAwesome
                name="envelope"
                size={20}
                color={'#B1B1B1'}
                style={styles.iconInput}
              />
              <TextInput style={styles.input} placeholder="Digite seu email" />
            </View>
            <View class="input-password-box" style={styles.inputBox}>
              <FontAwesome
                name="key"
                size={20}
                color={'#B1B1B1'}
                style={styles.iconInput}
              />
              <TextInput style={styles.input} placeholder="Digite sua senha" />
            </View>
          </View>
          <View class="entrarBtnBox" style={styles.entrarBtnBox}>
            <Pressable style={styles.button}>
              <Text style={styles.textBtn}>Registrar-se</Text>
            </Pressable>
            <View style={styles.linkBox}>
              <Text style={styles.registerMessage}>Já possui conta? </Text>
              <Pressable onPress={handleLoginClick}>
                <Text>Faça Logint</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
