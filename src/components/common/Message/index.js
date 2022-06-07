import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../../../assets/theme/colors'
import styles from './styles'

const Message = ({
  message,
  primary,
  danger,
  info,
  success,
  retry,
  retryFn,
  onDismiss,
}) => {
  const getBgColor = () => {
    if (primary) {
      return colors.primary
    }
    if (danger) {
      return colors.danger
    }
    if (success) {
      return colors.success
    }
    if (info) {
      return colors.secondary
    }
  }
  return (
    <TouchableOpacity
      style={[styles.wrapper, { backgroundColor: getBgColor() }]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: colors.white,
          }}>
          {message}
        </Text>

        {retry && (
          <TouchableOpacity onPress={retryFn}>
            <Text
              style={{
                color: colors.white,
              }}>
              Retry
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  )
}
export default Message
