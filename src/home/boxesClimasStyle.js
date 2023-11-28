import { StyleSheet } from 'react-native'

const stylesClima = StyleSheet.create({
  boxClimaPrincipal: {
    display: 'flex',
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    padding: 20,
    paddingBottom: 5,
    marginTop: 10,
    gap: 10
    
  },

  boxInsideTop: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5
  },

  boxTopMessage: {
    fontSize: 13,
    color: '#0466C8',
    fontWeight: '500',
    paddingLeft: 5
  },

  boxTopCityName: {
    fontSize: 28,
    color: '#0466C8',
    fontWeight: '500',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center'
  },

  boxInfosText: {
    display: 'flex',
    width: '85%'
  },

  boxStar: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    width: '15%'
  },

  // Box clima main
  boxInsideMain: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    // height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30
  },

  boxMainImage: {
    width: 100,
    height: 100
  },

  boxMainTemp: {
    fontSize: 60,
    fontWeight: '700',
    color: '#33415C'
  },

  boxMainInfos: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%'
  },

  boxMainDesc: {
    fontSize: 20,
    fontWeight: '400',
    color: '#33415C',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },

  // Box Clima Bottom
  boxInsideBottom: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    marginBottom: 10
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
    fontWeight: '400'
  },

  // Secondary Climas
  climaBoxSecondary: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 30
    // width: '100%'
  },

  boxeClimaSecondary: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '15%',
    padding: 20,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    marginTop: 15,
    gap: 20
  },

  boxSecImg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%'
  },

  boxSecondaryImage: {
    width: '60%',
    height: '80%'
  },

  boxSecTxt: {
    display: 'flex',
    justifyContent: 'center',
    color: '#33415C',
    gap: 2
  },

  titleBoxSecondary: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0466C8'
  },

  tempSecTxt: {
    color: '#33415C',
    fontWeight: '500'
  },

  descriptionBoxSecondary: {
    color: '#33415C',
    fontWeight: '500'
  }
})

export default stylesClima
