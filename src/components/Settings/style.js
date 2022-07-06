import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  settingsWrapper: {
    backgroundColor: 'white',
  },
  itemContainer: {
    height: 60,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 17,
    fontWeight: '400',
    color: 'black',
    opacity: 0.6,
  },
  itemSubtitle: {
    fontSize: 14,
    color: 'darkgrey',
    paddingTop: 2,
  },
  modalItemPref: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalItemPrefText: {
    marginLeft: 10,
    fontSize: 16,
  },
})
