import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Container from '../../components/common/Container'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { LOGIN, SETTINGS } from '../../constants/routeNames'

const SideMenu = ({ navigation }) => {
  const menuItems = [
    {
      icon: <Text>*</Text>,
      name: 'Settings',
      onPress: () => navigation.navigate(SETTINGS),
    },
    {
      icon: <Text>*</Text>,
      name: 'Logout',
      onPress: () => navigation.navigate(''),
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
                keyExtractor={() => {
                  return (
                    name +
                    Math.floor(
                      Math.random() * Math.floor(new Date().getTime())
                    ).toString()
                  )
                }}>
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
