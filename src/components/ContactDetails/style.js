import { lightColors } from '@rneui/base'
import { StyleSheet } from 'react-native'
import colors from '../../assets/theme/colors'

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.white,
  },
  container: { flex: 1, backgroundColor: colors.white },
  contactImage: {
    height: 250,
    width: '100%',
    resizeMode: 'cover',
  },
  imageContainer: {
    height: 250,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingImage: {
    height: '100%',
    width: '100%',
    backgroundColor: 'lightgrey',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  contactDetails: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  contactName: {
    fontSize: 23,
    fontWeight: '600',
  },

  divider: {
    height: 10,
    borderColor: colors.grey,
    borderBottomWidth: 0.4,
  },
  topCallOptions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  topCallOption: {
    alignItems: 'center',
  },
  middleCallOptions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  middleText: {
    fontSize: 14,
    color: colors.primary,
    paddingVertical: 5,
  },
  phoneNumber: {
    fontSize: 16,
    color: 'black',
  },
  phoneText: {},
  editContact: {
    alignSelf: 'center',
    width: 200,
  },
})

export default styles
