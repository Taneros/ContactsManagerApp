import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeNavigator from './HomeNavigator'
import { HOME_NAVIGATOR } from '../constants/routeNames'
import SideMenu from './SideMenu'

const getDrawerContent = navigation => {
  return <SideMenu navigation={navigation} />
}

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator
      drawerContent={({ navigation }) => getDrawerContent(navigation)}>
      <Drawer.Screen
        name={HOME_NAVIGATOR}
        component={HomeNavigator}
        options={{ headerShown: false, hidden: true }}
      />
    </Drawer.Navigator>
  )
}
export default DrawerNavigator
