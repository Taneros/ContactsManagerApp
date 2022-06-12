import React, { useEffect, useState, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './AuthNavigator'
import DrawerNavigator from './DrawerNavigator'
import { GlobalContext } from '../context/Provider'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ActivityIndicator } from 'react-native'

const AppNavContainer = () => {
  const {
    authState: { isLoggedIn },
  } = useContext(GlobalContext)

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAuthLoaded, setIsAuthLoaded] = useState(false)

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user')
      if (user) {
        setIsAuthLoaded(true)
        setIsAuthenticated(true)
      } else {
        setIsAuthLoaded(true)
        setIsAuthenticated(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      {isAuthLoaded ? (
        <NavigationContainer>
          {isLoggedIn || isAuthenticated ? (
            <DrawerNavigator />
          ) : (
            <AuthNavigator />
          )}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  )
}

export default AppNavContainer
