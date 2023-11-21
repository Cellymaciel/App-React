import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './src/navigators/MainStack';
import Body from './src/home/home';
const Drawer = createDrawerNavigator();

export default function  App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" styles={styles.drawe}>
        <Drawer.Screen name="Home" component={Body} options={{drawerItemStyle:{ backgroundColor:"red" , padding:5, borderRadius:10, marginTop:50} }}  />
        <Drawer.Screen  name="Login" component={MainStack}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

});
