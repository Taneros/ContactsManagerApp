import React from 'react'
import { Text, ActivityIndicator, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ActivityIndicatorViewNativeComponent from 'react-native/Libraries/Components/ActivityIndicator/ActivityIndicatorViewNativeComponent'
import colors from '../../../assets/theme/colors'
import styles from './styles'

const CustomButton = ({
  title,
  disabled,
  primary,
  secondary,
  danger,
  loading,
  onPress,
}) => {
  const getBgColor = () => {
    if (disabled) {
      return colors.grey
    }
    if (primary) {
      return colors.primary
    }
    if (danger) {
      return colors.danger
    }
    if (secondary) {
      return colors.secondary
    } else return colors.grey
  }
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.wrapper, { backgroundColor: getBgColor() }]}>
      <View style={[styles.loaderSection]}>
        {loading && (
          <ActivityIndicator
            color={primary ? colors.secondary : colors.primary}
          />
        )}

        {title && (
          <Text
            style={{
              color: disabled ? 'black' : colors.white,
              paddingLeft: loading ? 5 : 0,
            }}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  )
}
export default CustomButton
