import { createDrawerNavigator } from '@react-navigation/drawer'
import React, { useContext } from 'react'
import { HOME_NAVIGATOR } from '../constants/routeNames'
import { GlobalContext } from '../context/Provider'
import HomeNavigator from './HomeNavigator'
import SideMenu from './SideMenu'

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
