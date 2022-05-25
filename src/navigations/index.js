import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './AuthNavigator'
import DrawerNavigator from './DrawerNavigator'
import { GlobaContext } from '../context/Provider'

const AppNavContainer = () => {
  const state = useContext(GlobaContext)
  const {
    authState: { isLoggedIn },
  } = useContext(GlobaContext)

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}

export default AppNavContainer
