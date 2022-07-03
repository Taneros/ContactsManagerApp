import React from 'react'
import { View, Text } from 'react-native'
import AppModal from '../common/AppModal'
import styles from '../common/AppModal/styles'
import CustomButton from '../common/CustomButton'

const ContactsComponent = ({ modalVisible, setModalVisible }) => {
  return (
    <View style={styles.centeredView}>
      <AppModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={'My Profile'}
        modalBody={<></>}
        modalFooter={<View></View>}
      />
      <CustomButton
        onPress={() => {
          setModalVisible(true)
        }}
        secondary
        title={'Open modal'}
      />
    </View>
  )
}

export default ContactsComponent
