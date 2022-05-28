import { StyleSheet } from 'react-native'
import colors from '../../assets/theme/colors'

const styles = StyleSheet.create({
  logoImage: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 10,
    fontWeight: '400',
  },
  form: {
    paddingTop: 20,
  },
  createNewAccount: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  createNewAccountText: {
    fontSize: 17,
  },
  createNewAccountBtnText: {
    paddingLeft: 15,
    color: colors.primary,
    fontSize: 16,
  },
})

export default styles
