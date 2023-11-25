import { Text, View, TextInput, Image, Pressable, Button } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import styles from './loginStyle'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import dbUsuarios from '../services/dbUsuarios'
import dbCidadesFavoritadas from '../services/dbCidadesFavoritadas'
import { Alert } from 'react-native'

export default function Login(props) {
  const navigation = useNavigation()

  const [email, setEmail] = useState('') // Adicione o estado para o email
  const [password, setPassword] = useState('') // Adicione o estado para a senha

  const handleRegisterClick = () => {
    navigation.navigate('Register')
  }

  const handleLoginClick = async () => {
    try {
      // Realize a autenticação
      const user = await dbUsuarios.findUserByEmailAndPassword(email, password)

      console.log('User authenticated:', user)

      // Exiba uma mensagem de sucesso
      Alert.alert('Login bem-sucedido', 'Você está logado com sucesso!', [
        {
          text: 'OK',
          onPress: () => {
            // Navegue para a tela inicial após o login bem-sucedido
            navigation.navigate('Home')
          }
        }
      ])
    } catch (error) {
      // Exiba uma mensagem de erro
      Alert.alert(
        'Erro no login',
        'Verifique suas credenciais e tente novamente.'
      )
      console.error('Error during login:', error)
    }
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
              <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                value={email}
                onChangeText={text => setEmail(text)}
              />
            </View>
            <View class="input-password-box" style={styles.inputBox}>
              <FontAwesome
                name="key"
                size={20}
                color={'#B1B1B1'}
                style={styles.iconInput}
              />
              <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
              />
            </View>
          </View>

          <View class="entrarBtnBox" style={styles.entrarBtnBox}>
            <Pressable style={styles.button} onPress={handleLoginClick}>
              <Text style={styles.textBtn}>Entrar</Text>
            </Pressable>
            <View>
              <Text style={styles.registerMessage}>Não possui conta? </Text>
              <Pressable onPress={handleRegisterClick}>
                <Text>Registre-se</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
