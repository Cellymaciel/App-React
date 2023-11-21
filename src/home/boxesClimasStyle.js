import { StyleSheet } from 'react-native'

const stylesClima = StyleSheet.create({
  boxClimaPrincipal: {
    display: 'flex',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginTop: 10
  },

  boxInsideTop: {
    display: 'flex',
    gap: 5
  },

  boxTopMessage: {
    fontSize: 13,
    gap: 5,
    color: '#0466C8',
    fontWeight: 500,
    paddingLeft: 5
  },

  boxTopCityName: {
    fontSize: 25,
    color: '#0466C8',
    fontWeight: 500,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center'
  }
})

export default stylesClima
