import 'react-native-gesture-handler'
import { StyleSheet, View , Button} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import Login from './src/telaDeLogin/login'
import Body from './src/home/home'
import MainStack from './src/navigators/MainStack'




const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">  
          <Drawer.Screen name="Home" component={Body}/>
          <Drawer.Screen name="Login" component={MainStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

          

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },

})
