import { StyleSheet } from 'react-native'

const stylesClima = StyleSheet.create({
  boxClimaPrincipal: {
    display: 'flex',
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    padding: 20,
    marginTop: 10,
    gap: 10
  },

  boxInsideTop: {
    display: 'flex',
    gap: 5
  },

  boxTopMessage: {
    fontSize: 13,
    color: '#0466C8',
    fontWeight: 500,
    paddingLeft: 5
  },

  boxTopCityName: {
    fontSize: 28,
    color: '#0466C8',
    fontWeight: 500,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center'
  },

  // Box clima main
  boxInsideMain: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50
  },

  boxMainImage: {
    width: 90,
    height: 90
  },

  boxMainTemp: {
    fontSize: 60,
    fontWeight: 700,
    color: '#33415C'
  },

  boxMainDesc: {
    fontSize: 20,
    fontWeight: 400,
    color: '#33415C'
  },

  // Box Clima Bottom
  boxInsideBottom: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  },

  boxBottomInfo: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#33415C',
    marginTop: 10
  },

  boxInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#33415C',
    width: '50%'
  },

  boxSmall: {
    color: '#33415C',
    fontWeight: 400
  },

  // Secondary Climas
  climaBoxSecondary: {
    display: 'flex',
    flexDirection: 'column'
  },

  boxesClimaSecondary: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: 20
  },

  boxSecondaryLeft: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%'
  },

  boxSecondaryRight: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%'
  },

  boxMainImage: {
    width: 10,
    height: 10
  }
})

export default stylesClima
