import { useNavigation } from '@react-navigation/native'
import React, { useContext, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Container from '../../components/common/Container'
import { Icon } from '@rneui/themed'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ContactsComponent from '../../components/Contacts'
import { GlobalContext } from '../../context/Provider'
import getContacts from '../../context/actions/contacts/getContacts'

const Contacts = () => {
  const { setOptions, toggleDrawer } = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)

  const {
    contactsDispatch,
    contactsState: {
      getContacts: { data, loading },
    },
  } = useContext(GlobalContext)

  console.log(`data`, data)

  useEffect(() => {
    getContacts()(contactsDispatch)
  }, [])

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
      data={data}
      loading={loading}
    />
  )
}
export default Contacts
