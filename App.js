import React, { useEffect, useState } from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import MainStack from './src/navigators/MainStack';
import Body from './src/home/home';
import styles from './appStyle'; // Certifique-se de importar seus estilos corretamente
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initDB } from './src/services/SQLiteDataBase';

initDB();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({  ...props }) => {
  return (
    <DrawerContentScrollView {...props} style={styles.estilos}>
      <View style={styles.drawerHeader}>
        <Text style={styles.txt}>Previsão Tempo.com</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

 

export default function App() {
  const [favoritedCity, setFavoritedCity] = useState([]);

  useEffect(() => {
    const fetchFavoritedCity = async () => {
      try {
        const cities = await AsyncStorage.getItem('favoritedCity');
        if (cities) {
          setFavoritedCity(JSON.parse(cities));
        }
      } catch (error) {
        console.error('Error fetching favorited cities:', error);
      }
    };

    fetchFavoritedCity();
  }, []);

  return (
    <NavigationContainer styles={styles.drw}>
       <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} favoritedCity={favoritedCity} />}
      >
        <Drawer.Screen
          name="Home"
          component={Body}
          options={{
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="home" color={'#4682B4'} size={25} />
            ),
            drawerItemStyle: { marginTop: 15,backgroundColor: '#f4f4f4'},
            drawerLabelStyle: { color: '#4682B4' , fontSize:18 , fontWeight:'bold' },
            headerTitle: '',
            headerTintColor: 'white',
            headerBackground: () => (
              <View style={{ backgroundColor: '#4169E1', flex: 1 }} />
            ),
          }}
        />

          <Drawer.Screen
          name="Cidades Favoritas"
          component={Body} // Substitua "CidadesFavoritasScreen" pelo componente desejado
          options={{
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="star" color={'#4682B4'} size={25} />
            ),
            drawerItemStyle: {  marginTop:15, backgroundColor : '#f4f4f4'},
            drawerLabelStyle: { color: '#4682B4', fontSize:15 ,fontWeight:'bold' },
            headerTitle: '',
            headerTintColor: 'white',
          }}
          
        />
             





        <Drawer.Screen
          name="Login"
          component={MainStack}
          options={{
            drawerIcon: ({ color, size }) => (
              <Entypo name="login" size={25} color="#4682B4" />
            ),
            drawerItemStyle: { backgroundColor: '#f4f4f4', marginTop: 530 },
            headerTitle: '',
            headerTintColor: 'white',
            headerBackground: () => (
              <View style={{ backgroundColor: '#4169E1', flex: 1 }} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
