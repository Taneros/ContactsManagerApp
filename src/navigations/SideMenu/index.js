import { Alert, View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Container from '../../components/common/Container'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SETTINGS } from '../../constants/routeNames'
import logout from '../../context/actions/auth/logout'
import { Icon } from '@rneui/themed'

const SideMenu = ({ navigation, authDispatch }) => {
  const handleUserLogout = () => {
    Alert.alert('Logout', 'You are going to logout. Are you sure?', [
      { text: 'Cancel', onPress: () => navigation.toggleDrawer() },
      {
        text: 'Ok',
        onPress: () => {
          logout()(authDispatch)
          navigation.toggleDrawer()
        },
      },
    ])
  }

  const menuItems = [
    {
      icon: (
        <Icon
          name="settings-outline"
          type="ionicon"
          size={20}
          style={{ paddingRight: 5 }}
          color="gray"
        />
      ),
      name: 'Settings',
      onPress: () => navigation.navigate(SETTINGS),
    },
    {
      icon: (
        <Icon
          name="log-out-outline"
          type="ionicon"
          size={20}
          style={{ paddingRight: 5 }}
          color="gray"
        />
      ),
      name: 'Logout',
      onPress: handleUserLogout,
    },
  ]

  return (
    <SafeAreaView>
      <Container>
        <Image
          height={70}
          width={70}
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
        />
        <View>
          {menuItems.map(({ icon, name, onPress }) => {
            return (
              <TouchableOpacity
                style={styles.menuItem}
                onPress={onPress}
                key={
                  name +
                  Math.floor(
                    Math.random() * Math.floor(new Date().getTime())
                  ).toString()
                }>
                {icon}
                <Text style={styles.menuItemText}>{name}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </Container>
    </SafeAreaView>
  )
}
export default SideMenu
