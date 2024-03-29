import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/themed'
import React, { useState } from 'react'
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import colors from '../../assets/theme/colors'
import { CREATE_CONTACT } from '../../constants/routeNames'
import CustomButton from '../common/CustomButton'
import ImagePicker from '../ImagePicker'
import styles from './style'

const ImageContact = ({ source }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const onLoadStart = () => {
    setLoading(true)
  }
  const onLoadEnd = () => {
    setLoading(false)
  }

  const onError = () => {
    setError(true)
    setLoading(false)
  }

  console.log(`err loading`, error, loading)

  return (
    <View style={styles.imageContainer}>
      {loading && (
        <View style={styles.loadingImage}>
          <ActivityIndicator size={60} color={colors.primary} />
        </View>
      )}
      {!loading && !error && (
        <Image style={styles.contactImage} source={{ uri: source }} />
      )}
    </View>
  )
}

const ContactDetailsComponent = ({ contact }) => {
  const { contact_picture, first_name, last_name, phone_number, is_favorite } =
    contact

  const { navigate } = useNavigation()

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {contact_picture && <ImageContact source={contact_picture} />}
        {!contact_picture && (
          <Image
            source={require('../../assets/images/avatar_default_head_person.png')}
            style={{ alignSelf: 'center' }}
          />
        )}

        <View style={styles.contactDetails}>
          <Text style={styles.contactName}>
            {first_name} {last_name}
          </Text>

          <Icon
            type="ionicon"
            name={is_favorite ? 'star' : 'star-outline'}
            color={is_favorite ? 'orange' : 'darkgrey'}
          />
        </View>

        <View style={styles.divider} />

        <View style={styles.topCallOptions}>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="ionicon"
              name="call-outline"
              color={colors.primary}
              size={27}
            />
            <Text style={styles.middleText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="ionicon"
              name="chatbox-ellipses-outline"
              color={colors.primary}
              size={27}
            />
            <Text style={styles.middleText}>Text</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="ionicon"
              name="videocam-outline"
              color={colors.primary}
              size={27}
            />
            <Text style={styles.middleText}>Video</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <View style={styles.middleCallOptions}>
          <View>
            <View style={styles.phoneNumberContainer}>
              <Text style={styles.phoneNumber}>{phone_number}</Text>
              <Text style={styles.phoneText}>Phone</Text>
            </View>
          </View>
        </View>
        <CustomButton
          style={styles.editContact}
          primary
          title="Edit Contact"
          onPress={() => {
            navigate(CREATE_CONTACT, { contact, editing: true })
          }}
        />
      </View>
      <ImagePicker onFileSelected={() => {}} ref={() => {}} />
    </ScrollView>
  )
}

export default ContactDetailsComponent
