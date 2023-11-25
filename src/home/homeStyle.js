import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: '100vw',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#33415c',
    marginTop: 110
  },
  containerMain: {
    width: '100%',
    // height: 'auto',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#33415c'
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    // height: '20%'
    backgroundColor: '#33415c',
    marginBottom: 10
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: '#0466c8',
    color: 'white',
    padding: 8,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  input: {
    height: 40,
    width: 188,
    margin: 0,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#ffff',
    padding: 8
    // opacity: 0.6
  },

  btn: {
    backgroundColor: '#0466c8',
    padding: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10
  },

  climaBoxMain: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '100%'
  },

  boxClimaMain: {
    width: '100%',
    height: '100%'
  },

  climaBoxSecondary: {
    display: ''
  },

  primary: {
    padding: 5,
    backgroundColor: '#4682B4',
    alignItems: 'center',
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginTop: 10
  },
  txt1: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 30,
    fontSize: 25
  },
  cont2: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  second: {
    padding: 5,
    backgroundColor: '#4682B4',
    alignItems: 'center',
    width: 150,
    height: 100,
    borderRadius: 10,
    marginTop: 15,
    marginRight: 5
  },
  txt2: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 25,
    fontSize: 25
  },
  third: {
    padding: 5,
    backgroundColor: '#4682B4',
    alignItems: 'center',
    width: 150,
    height: 100,
    borderRadius: 10,
    marginTop: 15
  },
  txt3: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 25,
    fontSize: 25
  },

  cont3: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  for: {
    padding: 5,
    backgroundColor: '#4682B4',
    alignItems: 'center',
    width: 150,
    height: 100,
    borderRadius: 10,
    marginTop: 15,
    marginRight: 5
  },
  txt4: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 25,
    fontSize: 25
  },
  five: {
    padding: 5,
    backgroundColor: '#4682B4',
    alignItems: 'center',
    width: 150,
    height: 100,
    borderRadius: 10,
    marginTop: 15
  },
  txt5: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 25,
    fontSize: 25
  },
  img: {
    width: 50,
    height: 100
  }
})

export default styles
