import 'react-native-gesture-handler';
import { StyleSheet, View, Image, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import MainStack from './src/navigators/MainStack';
import Body from './src/home/home';
import styles from './appStyle';
import Head from './src/head/header';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} style={styles.estilos}>
      <View style={styles.drawerHeader}>
        <Text style={styles.txt}> Previsão Tempo.com</Text>
      </View>
      <View style={styles.drawerContent}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export default function  App() {
  return (
    <NavigationContainer styles={styles.drw}>
      <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />} >

         <Drawer.Screen name="Home"  
            component={Body} options={{drawerIcon:({color, size, }) => 
          <View style={{ marginTop: 10}}>
            <FontAwesome name='home' color={'#4682B4'} size={25} />
          </View>, 
            drawerItemStyle:{ backgroundColor:'#f4f4f4' ,  opacity:0.8}, 
            drawerLabelStyle:{color:'#33415c'}, headerTitle:'' , 
            headerStyle : { marginTop:10} ,
            headerTintColor: 'white', 
            headerBackground: () => (
              
            <View style={{ backgroundColor: '#4169E1', flex: 1  , }} />
            ),
           
            
           }}  />

        <Drawer.Screen  name="Login" 
            component={MainStack} options={{drawerIcon:({color, size}) => (<Entypo name="login" size={25} color='#4682B4' />),  
            drawerItemStyle:{ backgroundColor:'#f4f4f4' , marginTop:480,},
            headerTitle:'',
            headerStyle : { marginTop:10} ,
            headerTintColor: 'white', 
            headerBackground: () => (
              
            <View style={{ backgroundColor: '#4169E1', flex: 1  }} />
            ),
           
            
            
            
            }}/>

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

