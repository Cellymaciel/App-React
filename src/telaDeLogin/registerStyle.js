import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FFFF',
    display: 'flex',
    flexDirection: 'column'
  },

  backgroundWhite: {
    height: '50%',
    // position: 'absolute',
    backgroundColor: '#1087CB'
  },

  background: {
    backgroundColor: '#1087CB',
    width: '100%',
    height: '50%'
    // position: 'absolute'
  },

  imageBackground: {
    width: '100%',
    height: '100%'
  },

  box: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    gap: 50
  },

  messageBox: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '20%',
    padding: 10
  },

  logo: {
    width: '100%',
    height: '100%'
  },

  welcomeMessage: {
    fontSize: 25,
    fontWeight: '700',
    color: '#ffff'
  },

  inputsContainer: {
    backgroundColor: '#ffff',
    height: 'autp',
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: '',
    // borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 50,
    padding: 0,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    },
    gap: 0
  },

  inputsBox: {
    display: 'flex',
    width: '100%',
    gap: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 30
  },

  inputBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
    gap: 15,
    borderRadius: 15,
    backgroundColor: '#EEEEEE'
  },

  iconInput: {
    padding: 0,
    margin: 0
    // marginRight: 40
  },

  input: {
    color: 'black',
    width: '100%',
    height: '100%',
    fontSize: 17
  },

  //BOTAO DE ENTRAR
  entrarBtnBox: {
    display: 'flex',
    width: '80%',
    gap: 10
  },

  button: {
    backgroundColor: '#00B8F9',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  textBtn: {
    color: '#ffff',
    fontSize: 18,
    fontWeight: '700'
  },

  registerMessage: {
    fontSize: 15
  },

  linkBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },

  loginMsg: {
    fontWeight: '700',
    color: '#00B8F9'
  }
})
export default styles
