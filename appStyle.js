import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: '#0466c8',
    alignItems: 'center'
  },
  favorits: {
    backgroundColor: '#0466c8',
    alignItems: 'center'
  },
  txt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    padding: 10,
    textAlign: 'center'
  },
  drawerContent: {
    marginTop: 15
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  screenText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  estilos: {
    backgroundColor: '#696969'
  },
  home: {
    color: 'black'
  },
  favoritedCitiesContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10
  },
  favoritedCityText: {
    marginLeft: 10
  }
})

export default styles
