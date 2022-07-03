import { StyleSheet } from 'react-native'
import colors from '../../../assets/theme/colors'

export default StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgb(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: colors.white,
    minHeight: 300,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  title: {
    fontSize: 16,
  },
  body: { minHeight: 250 },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  separator: {
    height: 1,
    backgroundColor: colors.grey,
    width: '100%',
  },
})
