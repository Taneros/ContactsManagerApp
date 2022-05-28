import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import colors from '../../../assets/theme/colors'
import styles from './styles'

const Input = ({
  value,
  handleOnChangeText,
  style,
  label,
  icon,
  iconPosition,
  error,
  ...props
}) => {
  const [focused, setFocused] = useState(false)

  const getFlexDir = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row'
      } else if (iconPosition === 'right') {
        return 'row-reverse'
      }
    }
  }

  const getBorderColor = () => {
    if (focused) {
      return colors.primary
    }
    if (error) {
      return colors.danger
    } else return colors.grey
  }
  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          { alignItems: icon ? 'center' : 'baseline' },
          { borderColor: getBorderColor(), flexDirection: getFlexDir() },
        ]}>
        {icon && <View>{icon}</View>}
        <TextInput
          style={[styles.textInput]}
          onChangeText={text => handleOnChangeText(text)}
          value={value}
          onFocus={() => {
            setFocused(true)
          }}
          onBlur={() => {
            setFocused(false)
          }}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}
export default Input
