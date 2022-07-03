import React from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ActivityIndicator } from 'react-native'
import AppModal from '../common/AppModal'
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

  if (!item.id) return null

  return (
    <TouchableOpacity style={styles.itemContainer}>
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
            <Text>{first_name[0].toUpperCase()}</Text>
            <Text style={{ marginLeft: 2 }}>{last_name[0].toUpperCase()}</Text>
          </View>
        )}

        <View style={{ paddingLeft: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.name}>{first_name}</Text>
            <Text style={styles.name}>{last_name}</Text>
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
}) => {
  data.push(
    ...[
      {
        contact_picture: '',
        first_name: 'Renat',
        last_name: 'Fatkh',
        phone_number: '+79969015454',
        id: '123',
      },
      {
        contact_picture: '',
        first_name: 'Rusl',
        last_name: 'Fatkh',
        phone_number: '+79969015434',
        id: '1234',
      },
      {
        contact_picture: '',
        first_name: 'Fedya',
        last_name: 'Capl',
        phone_number: '+79979015454',
        id: '12345',
      },
    ]
  )

  return (
    <View style={{ backgroundColor: colors.white }}>
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
            ItemSeparatorComponent={() => (
              <View style={{ height: 1, backgroundColor: '#c3c3c3' }}></View>
            )}
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
