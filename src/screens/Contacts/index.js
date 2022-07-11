import { useFocusEffect, useNavigation } from '@react-navigation/native'
import React, { useContext, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Container from '../../components/common/Container'
import { Icon } from '@rneui/themed'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ContactsComponent from '../../components/Contacts'
import { GlobalContext } from '../../context/Provider'
import getContacts from '../../context/actions/contacts/getContacts'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Contacts = () => {
  const { setOptions, toggleDrawer } = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const [sortBy, setSortBy] = useState('')

  const {
    contactsDispatch,
    contactsState: {
      getContacts: { data, loading },
    },
  } = useContext(GlobalContext)

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

  const getSettings = async () => {
    try {
      const sortPref = await AsyncStorage.getItem('sortBy')
      console.log(`sortBy from storage`)
      sortPref && setSortBy(sortPref)
    } catch (error) {
      console.log(`error`, error)
    }
  }

  console.log(`sortBy`, sortBy)

  useFocusEffect(
    React.useCallback(() => {
      getSettings()
      return () => {}
    }, [])
  )

  return (
    <ContactsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      data={data}
      loading={loading}
      sortBy={sortBy}
    />
  )
}
export default Contacts
