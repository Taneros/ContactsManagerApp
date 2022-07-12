import { useFocusEffect, useNavigation } from '@react-navigation/native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Text, View } from 'react-native'
import Container from '../../components/common/Container'
import { Icon } from '@rneui/themed'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ContactsComponent from '../../components/Contacts'
import { GlobalContext } from '../../context/Provider'
import getContacts from '../../context/actions/contacts/getContacts'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { navigate } from '../../navigations/SideMenu/RootNavigator'
import { CONTACT_DETAIL } from '../../constants/routeNames'

const Contacts = () => {
  const { setOptions, toggleDrawer } = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const [sortBy, setSortBy] = useState('')
  const contactsRef = useRef([])

  const {
    contactsDispatch,
    contactsState: {
      getContacts: { data, loading },
    },
  } = useContext(GlobalContext)

  useEffect(() => {
    const prevList = contactsRef.current

    contactsRef.current = data

    const newList = contactsRef.current

    if (newList.length - prevList.length === 1) {
      const newContact = newList.find(
        item => !prevList.map(i => i.id).includes(item.id)
      )
      navigate(CONTACT_DETAIL, { item: newContact })
    }
  }, [data])

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
      sortPref && setSortBy(sortPref)
    } catch (error) {
      console.log(`error`, error)
    }
  }

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
