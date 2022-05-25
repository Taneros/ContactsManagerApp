import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './AuthNavigator'
import DrawerNavigator from './DrawerNavigator'
import { GlobaContext } from '../context/Provider'

const AppNavContainer = () => {
  const state = useContext(GlobaContext)
  console.log('🚀 ~ file: index.js ~ line 10 ~ AppNavContainer ~ state', state)
  const {
    authState: { isLoggedIn },
  } = useContext(GlobaContext)
  console.log(
    '🚀 ~ file: index.js ~ line 11 ~ AppNavContainer ~ isLoggedIn',
    isLoggedIn
  )

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}

export default AppNavContainer
