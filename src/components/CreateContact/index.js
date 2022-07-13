import React from 'react'
import { Image, Text, View, Switch } from 'react-native'
import Container from '../common/Container'
import Input from '../common/Input'
import CustomButton from '../common/CustomButton'
import styles from './style'
import DEFAULT_IMAGE_URI from '../../constants/general'
// import DEFAULT_IMAGE_URI from '../../constants/general_default-profile-img'
import colors from '../../assets/theme/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ImagePickerComponent from '../ImagePicker'

export const CreateContactComponent = ({
  onChangeText,
  form,
  onSubmit,
  loading,
  error,
  setForm,
  sheetRef,
  openSheet,
  closeSheet,
  onImageSelect,
  imageFile,
}) => {
  const togleFavorite = () => {
    setForm({ ...form, isFavorite: !form.isFavorite })
  }

  return (
    <View style={styles.container}>
      <Container>
        <Image
          source={
            imageFile?.path
              ? { uri: imageFile?.path }
              : require('../../assets/images/avatar_default_head_person.png')
          }
          style={styles.profileImage}
        />

        <TouchableOpacity onPress={openSheet}>
          <Text style={styles.profileImageText}>Choose picture</Text>
        </TouchableOpacity>
        <Input
          label="First name"
          placeholder="Enter first name"
          onChangeText={value => {
            onChangeText({ name: 'firstName', value })
          }}
          error={error?.first_name?.[0]}
          value={form.firstName || ''}
        />
        <Input
          label="Last name"
          placeholder="Enter last name"
          onChangeText={value => {
            onChangeText({ name: 'lastName', value })
          }}
          error={error?.last_name?.[0]}
          value={form.lastName || ''}
        />
        <Input
          label="Phone number"
          placeholder="Enter phone number"
          onChangeText={value => {
            onChangeText({ name: 'phoneNumber', value })
          }}
          error={error?.phone_number?.[0]}
          type="number"
          value={form.phoneNumber || ''}
        />
        <View style={styles.switchFavorite}>
          <Text>Make contact my favorite</Text>
          <Switch
            trackColor={{ false: 'lightgrey', true: colors.primary }}
            thumbColor={form.isFavorite ? 'lightblue' : 'darkgrey'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={togleFavorite}
            value={form.isFavorite}
          />
        </View>
        <CustomButton
          style={{ marginTop: 50 }}
          primary
          title="Submit"
          onPress={() => onSubmit()}
          loading={loading}
          disabled={loading}
        />
      </Container>
      <ImagePickerComponent ref={sheetRef} onImageSelect={onImageSelect} />
    </View>
  )
}
