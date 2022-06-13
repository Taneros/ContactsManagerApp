import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import Container from '../../components/common/Container'
import { Icon } from '@rneui/themed'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Contacts = () => {
  const { setOptions, toggleDrawer } = useNavigation()

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => toggleDrawer()}>
          <Icon
            name="menu-outline"
            type="ionicon"
            style={{ paddingRight: 5 }}
          />
        </TouchableOpacity>
      ),
    })
  }, [])

  return (
    <Container>
      <Text>Contacts</Text>
    </Container>
  )
}
export default Contacts
