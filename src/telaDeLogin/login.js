import {
  Text,
  View,
  TextInput,
  Image,
  Pressable
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import styles from './loginStyle'

export default function Login() {
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
          <Text style={styles.welcomeMessage}>BEM-VINDO!!</Text>
        </View>

        <View class="inputs-box" elevation={5} style={styles.inputsContainer}>
          <View class="input-form" style={styles.inputsBox}>
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
              <Text style={styles.textBtn}>Entrar</Text>
            </Pressable>
            <Text style={styles.registerMessage}>
              Não possui conta? Registre-se
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
