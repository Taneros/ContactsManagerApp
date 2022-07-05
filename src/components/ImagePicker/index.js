import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RBSheet from 'react-native-raw-bottom-sheet'
import { Icon } from '@rneui/themed'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './style'

const ImagePicker = React.forwardRef(({}, ref) => {
  const options = [
    {
      name: 'Use Camera',
      icon: (
        <Icon type="ionicon" name="camera-outline" color="gray" size={50} />
      ),
      onPress: () => {},
    },
    {
      name: 'Choose from Gallery',
      icon: <Icon type="ionicon" name="image" color="gray" size={50} />,
      onPress: () => {},
    },
  ]

  return (
    <RBSheet
      ref={ref}
      height={160}
      closeOnDragDown
      customStyles={{
        wrapper: {
          backgroundColor: 'transparent',
        },
        draggableIcon: {
          backgroundColor: '#c3c3c3',
        },
        container: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderColor: 'darkgrey',
          borderWidth: 1,
        },
      }}>
      <View style={styles.optionsWrapper}>
        {options.map(({ name, icon, onPress }) => (
          <TouchableOpacity style={styles.pickerOption} key={name}>
            {icon}
            <Text style={styles.optionsText}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </RBSheet>
  )
})

export default ImagePicker
