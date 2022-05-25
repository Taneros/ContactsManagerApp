import React from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from './style'

const Input = ({
  value,
  handleOnChangeText,
  style,
  label,
  icon,
  iconPosition,
}) => {
  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View style={styles.wrapper}>
        {icon && <View>{icon}</View>}
        <TextInput
          style={[styles.textInput, styles]}
          onChangeText={text => handleOnChangeText(text)}
          value={value}
        />
      </View>
    </View>
  )
}
export default Input
