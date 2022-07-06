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

const SettingsComponent = ({ settingsOptions }) => {
  return (
    <ScrollView style={styles.settingsWrapper}>
      {settingsOptions.map(({ title, subTitle, onPress }) => (
        <TouchableOpacity key={title}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{title}</Text>
            {subTitle && <Text style={styles.itemSubtitle}>{subTitle}</Text>}
          </View>
          <View style={{ height: 1, backgroundColor: 'lightgrey', flex: 1 }} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default SettingsComponent
