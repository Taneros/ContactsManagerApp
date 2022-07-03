import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Container from '../../components/common/Container'
import { Icon } from '@rneui/themed'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ContactsComponent from '../../components/Contacts'

const Contacts = () => {
  const { setOptions, toggleDrawer } = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)

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
    <ContactsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    />
  )
}
export default Contacts
