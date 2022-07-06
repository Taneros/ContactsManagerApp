import { Icon } from '@rneui/themed'
import React from 'react'
import {
  View,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
// import { ScrollView } from 'react-native-gesture-handler'
import styles from './styles'
import PropTypes from 'prop-types'

// TODO: style modal: add border

const AppModal = ({
  title,
  modalBody,
  modalFooter,
  modalVisible,
  setModalVisible,
  closeOnTouchOutside,
}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => {
          if (closeOnTouchOutside) setModalVisible(false)
        }}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <Text style={styles.title}>{title || 'header text'}</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon
                  name="close-outline"
                  type="ionicon"
                  color="gray"
                  size={35}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.body}>{modalBody}</View>
            {modalFooter && (
              <>
                <View style={styles.separator}></View>
                <View style={styles.footer}>{modalFooter}</View>
              </>
            )}
            {!modalFooter && (
              <>
                <View style={styles.separator}></View>
                <View style={styles.footer}>
                  <Text>Privacy Policy</Text>
                  <Text>Terms of Service</Text>
                </View>
              </>
            )}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  )
}

AppModal.propTypes = {
  closeOnTouchOutside: PropTypes.bool,
}

AppModal.defaultProps = {
  closeOnTouchOutside: true,
}

export default AppModal
