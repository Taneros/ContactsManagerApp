import { Icon } from '@rneui/themed'
import React from 'react'
import { View, Text, Modal, Pressable } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'

const AppModal = ({
  title,
  modalBody,
  modalFooter,
  modalVisible,
  setModalVisible,
}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <Pressable
        style={styles.wrapper}
        onPress={() => {
          setModalVisible(false)
        }}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <Text style={styles.title}>{title || 'header text'}</Text>
              <Icon name="close-outline" type="ionicon" color="gray" />
            </View>
            <View style={styles.body}>{modalBody}</View>
            <View style={styles.separator}></View>
            {modalFooter && <View style={styles.footer}>{modalFooter}</View>}
            {!modalFooter && (
              <View style={styles.footer}>
                <Text>Privacy Policy</Text>
                <Text>Terms of Service</Text>
              </View>
            )}
          </ScrollView>
        </View>
      </Pressable>
    </Modal>
  )
}

export default AppModal
