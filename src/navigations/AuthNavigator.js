import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { LOGIN, REGISTER } from '../constants/routeNames'
import Login from '../screens/Login'
import Register from '../screens/Register'

// const AuthStack = createNativeStackNavigator()
const AuthStack = createStackNavigator()

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
      <AuthStack.Screen name={REGISTER} component={Register}></AuthStack.Screen>
    </AuthStack.Navigator>
  )
}
export default AuthNavigator
