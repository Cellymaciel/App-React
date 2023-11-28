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
    // height: '45%',
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 50,
    padding: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    },
    gap: 20
  },

  inputsBox: {
    display: 'flex',
    width: '100%',
    gap: 40,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
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
    color: '#B1B1B1'
  },

  //BOTAO DE ENTRAR
  entrarBtnBox: {
    display: 'flex',
    width: '80%',
    gap: 10,
    paddingBottom: 20
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

  boxLoginQuestion: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20
  },

  registerMsg: {
    color: '#00B8F9',
    fontWeight: '700'
  }
})
export default styles
