import { StyleSheet } from 'react-native'
import colors from '../../assets/theme/colors'

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    alignItems: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  name: {
    marginLeft: 5,
    fontWeight: '600',
  },
})

export default styles
