import { StyleSheet } from 'react-native'
import colors from '../../assets/theme/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  profileImageContainer: {},
  profileImage: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: 'contain',
  },
  profileImageText: {
    textAlign: 'center',
    color: colors.primary,
  },
  profileSumbit: {
    paddingTop: 50,
  },
  switchFavorite: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
