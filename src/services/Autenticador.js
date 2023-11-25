// Importe o AsyncStorage no seu arquivo
import AsyncStorage from '@react-native-async-storage/async-storage'

// Função para realizar o login e atualizar o estado de autenticação
const loginUser = async (email, password) => {
  try {
    // Lógica para autenticação

    // Se a autenticação for bem-sucedida, atualize o AsyncStorage
    await AsyncStorage.setItem('userToken', 'token_do_usuário')

    // Resto do seu código de login
  } catch (error) {
    console.error('Erro durante o login:', error)
    throw error // Propague o erro para que possa ser tratado no componente que chama a função de login
  }
}

// Função para realizar o logout e atualizar o estado de autenticação
const logoutUser = async () => {
  try {
    // Lógica para logout

    // Limpe o AsyncStorage no logout
    await AsyncStorage.removeItem('userToken')

    // Resto do seu código de logout
  } catch (error) {
    console.error('Erro durante o logout:', error)
    throw error // Propague o erro para que possa ser tratado no componente que chama a função de logout
  }
}

// Função para verificar se o usuário está autenticado
const isUserLoggedIn = async () => {
  try {
    // Verifique se há um token no AsyncStorage
    const userToken = await AsyncStorage.getItem('userToken')
    return userToken !== null // Retorna true se houver um token, indicando que o usuário está autenticado
  } catch (error) {
    console.error('Erro ao verificar o estado de autenticação:', error)
    return false // Em caso de erro, assumimos que o usuário não está autenticado
  }
}
