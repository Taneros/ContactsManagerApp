import { useNavigation, useRoute } from '@react-navigation/native'
import { Icon } from '@rneui/themed'
import React, { useContext, useEffect, useReducer } from 'react'
import { TouchableOpacity, View } from 'react-native'
import ContactDetailsComponent from '../../components/ContactDetails'
import { CONTACT_LIST } from '../../constants/routeNames'
import deleteContact from '../../context/actions/contacts/deleteContact'
import { GlobalContext } from '../../context/Provider'
import { navigate } from '../../navigations/SideMenu/RootNavigator'

const ContactDetail = () => {
  const { params: { item = {} } = {} } = useRoute()

  const { setOptions } = useNavigation()

  const {
    contactsDispatch,
    contactsState: {
      getContacts: { data, loading },
    },
  } = useContext(GlobalContext)

  useEffect(() => {
    if (item) {
      setOptions({
        title: item.first_name + ' ' + item.last_name,
        headerRight: () => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  deleteContact(item.id)(contactsDispatch)(() => {
                    navigate(CONTACT_LIST, { successDelete: true })
                  })
                }}>
                <Icon type="ionicon" name={'trash'} color={'darkgrey'} />
              </TouchableOpacity>
            </View>
          )
        },
      })
    }
  }, [item, data.length])

  return <ContactDetailsComponent contact={item} />
}
export default ContactDetail
