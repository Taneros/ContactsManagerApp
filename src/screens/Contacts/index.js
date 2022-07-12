import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { Icon } from '@rneui/themed'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ContactsComponent from '../../components/Contacts'
import { CONTACT_DETAIL } from '../../constants/routeNames'
import getContacts from '../../context/actions/contacts/getContacts'
import { GlobalContext } from '../../context/Provider'
import {
  navigate,
  navigationRef,
} from '../../navigations/SideMenu/RootNavigator'

const Contacts = () => {
  const { setOptions, toggleDrawer } = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const [sortBy, setSortBy] = useState('')
  const { params = {} } = useRoute()

  const {
    contactsDispatch,
    contactsState: {
      getContacts: { data, loading },
    },
  } = useContext(GlobalContext)

  console.log(`data`, data.length)

  useEffect(() => {
    if (params.successCreate) {
      const newContact = data.find(item => item.id == params.id)
      navigate(CONTACT_DETAIL, { item: newContact })
    }
  }, [params])

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
      console.log(`error get settings`, error)
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
