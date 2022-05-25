import { StyleSheet } from 'react-native'
import colors from '../../assets/theme/colors'

const styles = StyleSheet.create({
  wrapper: {
    height: 42,
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },

  textInput: {
    marginLeft: 5,
    flex: 1,
    color: 'grey',
  },

  inputContainer: {
    paddingVertical: 12,
  },
})

export default styles
