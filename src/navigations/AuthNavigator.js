import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, Text, View } from 'react-native'
import { LOGIN, REGISTER } from '../constants/routeNames'
import SignUp from '../screens/Register'
import Login from '../screens/Login'

const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator()
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
      <AuthStack.Screen name={REGISTER} component={SignUp}></AuthStack.Screen>
    </AuthStack.Navigator>
  )
}
export default AuthNavigator
const styles = StyleSheet.create({})
