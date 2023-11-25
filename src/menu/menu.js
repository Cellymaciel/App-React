import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import MainStack from '../navigators/MainStack'
const Drawer = createDrawerNavigator()

export default function Menu() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Body} />
        <Drawer.Screen name="Login" component={MainStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
