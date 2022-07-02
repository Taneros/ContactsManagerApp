import { StyleSheet } from 'react-native'
import colors from '../../assets/theme/colors'

const styles = StyleSheet.create({
  logoImage: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 50,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  menuItemText: {
    fontSize: 18,
  },
})

export default styles
