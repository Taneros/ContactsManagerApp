import React, { Fragment } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ActivityIndicator } from 'react-native'
import AppModal from '../common/AppModal'
import Message from '../common/Message'
import colors from '../../assets/theme/colors'
import { Icon } from '@rneui/themed'
import styles from './style'
import { CONTACT_DETAIL, CREATE_CONTACT } from '../../constants/routeNames'
import { useNavigation } from '@react-navigation/native'
import { navigate } from '../../navigations/SideMenu/RootNavigator'

const ListEmptyComponent = () => {
  return (
    <View>
      <Message info message={'No contacts!'} />
    </View>
  )
}

const renderFlatlistItem = ({ item }) => {
  const { contact_picture, first_name, last_name, phone_number } = item

  if (!item.id) return null

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        navigate(CONTACT_DETAIL, { item })
      }}>
      <View style={styles.contactItem}>
        {!!contact_picture && (
          <Image
            source={{ uri: contact_picture }}
            style={{
              width: 45,
              height: 45,
              borderRadius: 23,
              backgroundColor: colors.grey,
            }}
          />
        )}
        {!contact_picture && (
          <View
            style={{
              width: 45,
              height: 45,
              borderRadius: 23,
              backgroundColor: colors.grey,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>{first_name[0].trim().toUpperCase()}</Text>
            <Text style={{ marginLeft: 2 }}>
              {last_name[0].trim().toUpperCase()}
            </Text>
          </View>
        )}

        <View style={{ paddingLeft: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.name}>{first_name}</Text>
            <Text style={[styles.name, { marginLeft: 5 }]}>{last_name}</Text>
          </View>
          <Text>{phone_number}</Text>
        </View>
      </View>
      <Icon
        type="ionicon"
        name="chevron-forward-outline"
        size={25}
        color="gray"
      />
    </TouchableOpacity>
  )
}

const ContactsComponent = ({
  modalVisible,
  setModalVisible,
  data,
  loading,
  sortBy,
}) => {
  const { navigate } = useNavigation()

  return (
    <>
      <View style={{ backgroundColor: colors.white }}>
        {/* <AppModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          title={'My Profile'}
          modalBody={<></>}
          modalFooter={<View></View>}
        /> */}
        {loading && (
          <ActivityIndicator
            size="large"
            color={colors.primary}
            style={{ marginTop: 50 }}
          />
        )}
        {!loading && (
          <View style={[{ paddingVertical: 20 }]}>
            <FlatList
              renderItem={renderFlatlistItem}
              ItemSeparatorComponent={() => (
                <View style={{ height: 1, backgroundColor: '#c3c3c3' }}></View>
              )}
              data={
                sortBy
                  ? data.sort((a, b) => {
                      if (sortBy === 'First Name')
                        return a.first_name.toLowerCase() >
                          b.first_name.toLowerCase()
                          ? 1
                          : -1
                      if (sortBy === 'Last Name')
                        return a.last_name.toLowerCase() >
                          b.last_name.toLowerCase()
                          ? 1
                          : -1
                    })
                  : data
              }
              keyExtractor={item => String(item.id)}
              ListEmptyComponent={ListEmptyComponent}
              ListFooterComponent={<View style={{ height: 50 }}></View>}
            />
          </View>
        )}
      </View>
      <View style={styles.floatingActionButton}>
        <TouchableOpacity onPress={() => navigate(CREATE_CONTACT)}>
          <Icon type="ionicon" name="add-outline" size={50} color="lightblue" />
        </TouchableOpacity>
      </View>
    </>
  )
}

export default ContactsComponent
