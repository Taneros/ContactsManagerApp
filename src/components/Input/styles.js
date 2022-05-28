import { StyleSheet } from 'react-native'
import colors from '../../assets/theme/colors'

const styles = StyleSheet.create({
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginTop: 5,
  },

  textInput: {
    marginLeft: 5,
    flex: 1,
    color: colors.grey,
  },

  inputContainer: {
    paddingVertical: 12,
  },
  error: {
    color: colors.danger,
  },
})

export default styles
