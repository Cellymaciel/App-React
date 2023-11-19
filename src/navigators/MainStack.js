import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../home/home'
import Login from '../telaDeLogin/login'
import Register from '../telaDeLogin/register'

const MainStack = createStackNavigator()

export default () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="Register" component={Register} />
    </MainStack.Navigator>
  )
}
