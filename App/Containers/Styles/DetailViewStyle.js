import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: '#fff',
    padding: 10,
  },
  item: {
    flex: 1,
    borderColor: '#eee',
    borderWidth: 1
  },
  text: {
    fontSize: 18,
    color: 'blue',
  },
  loading: {
    marginTop: Metrics.doubleBaseMargin
  },
})
