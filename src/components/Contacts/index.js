import React from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ActivityIndicator } from 'react-native'
import AppModal from '../common/AppModal'
import CustomButton from '../common/CustomButton'
import Message from '../common/Message'
import colors from '../../assets/theme/colors'
import { Icon } from '@rneui/themed'
import styles from './style'

const ListEmptyComponent = () => {
  return (
    <View>
      <Message info message={'No contacts!'} />
    </View>
  )
}

const renderFlatlistItem = ({ item }) => {
  console.log(`item`, item)

  const { contact_picture, first_name, last_name, phone_number } = item

  return (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.contactItem}>
        {contact_picture && (
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
            }}></View>
        )}

        <View style={{ flexDirection: 'row' }}>
          <Text>{first_name}</Text>
          <Text>{last_name}</Text>
        </View>
        <Text>{phone_number}</Text>
      </View>
      <Icon
        type="ionicon"
        name="chevron-forward-outline"
        size={20}
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
}) => {
  return (
    <View>
      <AppModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={'My Profile'}
        modalBody={<></>}
        modalFooter={<View></View>}
      />

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
            data={data}
            keyExtractor={item => String(item.id)}
            ListEmptyComponent={ListEmptyComponent}
            ListFooterComponent={<View style={{ height: 50 }}></View>}
          />
        </View>
      )}
    </View>
  )
}

export default ContactsComponent
