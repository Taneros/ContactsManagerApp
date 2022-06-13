import React, { useContext } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeNavigator from './HomeNavigator'
import { HOME_NAVIGATOR } from '../constants/routeNames'
import SideMenu from './SideMenu'
import auth from '../context/reducers/auth'
import { GlobalContext } from '../context/Provider'

const getDrawerContent = navigation => {
  return <SideMenu navigation={navigation} />
}

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator()

  const { authDispatch } = useContext(GlobalContext)

  return (
    <Drawer.Navigator
      drawerContent={({ navigation }) => (
        <SideMenu navigation={navigation} authDispatch={authDispatch} />
      )}>
      <Drawer.Screen
        name={HOME_NAVIGATOR}
        component={HomeNavigator}
        options={{ headerShown: false, hidden: true }}
      />
    </Drawer.Navigator>
  )
}
export default DrawerNavigator
