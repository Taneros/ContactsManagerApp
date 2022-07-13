import { useNavigation, useRoute } from '@react-navigation/native'
import { Icon } from '@rneui/themed'
import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, Alert, TouchableOpacity, View } from 'react-native'
import colors from '../../assets/theme/colors'
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
      deleteContact: { loading },
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
                  Alert.alert(
                    'Delete contact',
                    `You are going to delete ${item.first_name} ${item.last_name}. Are you sure?`,
                    [
                      {
                        text: 'Cancel',
                        onPress: () => {},
                      },
                      {
                        text: 'Ok',
                        onPress: () => {
                          deleteContact(item.id)(contactsDispatch)(() => {
                            navigate(CONTACT_LIST, { successDelete: true })
                          })
                        },
                      },
                    ]
                  )
                }}>
                {!loading && (
                  <Icon type="ionicon" name={'trash'} color={'darkgrey'} />
                )}
                {loading && (
                  <ActivityIndicator size={20} color={colors.secondary} />
                )}
              </TouchableOpacity>
            </View>
          )
        },
      })
    }
  }, [item, loading])

  return <ContactDetailsComponent contact={item} />
}
export default ContactDetail
