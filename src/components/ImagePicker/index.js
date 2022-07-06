import React from 'react'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet'
import { Icon } from '@rneui/themed'
import styles from './style'
import ImagePicker from 'react-native-image-crop-picker'

const ImagePickerComponent = React.forwardRef(({ onImageSelect }, ref) => {
  const options = [
    {
      name: 'Use Camera',
      icon: (
        <Icon type="ionicon" name="camera-outline" color="gray" size={50} />
      ),
      onPress: async () => {
        try {
          const image = await ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            freeStyleCropEnabled: true,
          })
          onImageSelect(image)
        } catch (err) {
          console.log(`err`, err)
        }
      },
    },
    {
      name: 'Choose from Gallery',
      icon: <Icon type="ionicon" name="image" color="gray" size={50} />,
      onPress: async () => {
        try {
          const image = await ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            freeStyleCropEnabled: true,
          })
          onImageSelect(image)
        } catch (err) {
          console.log(`err`, err)
        }
      },
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
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderColor: 'darkgrey',
          borderWidth: 1,
        },
      }}>
      <View style={styles.optionsWrapper}>
        {options.map(({ name, icon, onPress }) => (
          <TouchableOpacity
            style={styles.pickerOption}
            onPress={onPress}
            key={name}>
            {icon}
            <Text style={styles.optionsText}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </RBSheet>
  )
})

export default ImagePickerComponent
