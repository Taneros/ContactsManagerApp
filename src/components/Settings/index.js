import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import Container from '../common/Container'
import { ScrollView } from 'react-native-gesture-handler'
import styles from './style'
import AppModal from '../common/AppModal'
import { Icon } from '@rneui/themed'

const SettingsComponent = ({
  settingsOptions,
  modalVisible,
  setModalVisible,
  prefArr,
}) => {
  return (
    <>
      <AppModal
        title="Sort by"
        closeOnTouchOutside={false}
        modalBody={
          <View>
            {prefArr.map(({ name, selected, onPress }) => (
              <View key={name}>
                <TouchableOpacity
                  style={styles.modalItemPref}
                  onPress={onPress}>
                  <View style={{ width: 25 }}>
                    {selected && (
                      <Icon
                        type="ionicon"
                        name="checkmark-outline"
                        size={20}
                        color="grey"
                      />
                    )}
                  </View>
                  <Text style={styles.modalItemPrefText}>{name}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        }
        modalFooter={<></>}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <ScrollView style={styles.settingsWrapper}>
        {settingsOptions.map(({ title, subTitle, onPress }) => (
          <TouchableOpacity key={title} onPress={() => onPress()}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemTitle}>{title}</Text>
              {!!subTitle && (
                <Text style={styles.itemSubtitle}>{subTitle}</Text>
              )}
            </View>
            <View
              style={{ height: 1, backgroundColor: 'lightgrey', flex: 1 }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  )
}

export default SettingsComponent
