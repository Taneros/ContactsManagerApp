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
    fontWeight: '600',
  },
  floatingActionButton: {
    backgroundColor: colors.white,
    width: 55,
    height: 55,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    borderColor: '#ddd',
    borderWidth: 1,
    borderStyle: 'solid',
    bottom: 50,
    right: 20,
  },
})

export default styles
