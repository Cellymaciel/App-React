import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../telaDeLogin/login'
import Register from '../telaDeLogin/register'

const MainStack = createStackNavigator()

export default () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  )
}
