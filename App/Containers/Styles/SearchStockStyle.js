import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background,
  },
  myinput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    color: '#fff'
  },
  letter: {
    color: '#fff'
  },
  submitButton: {
    alignItems: 'center',
    height: 40,
    marginTop: 10,
    borderColor: '#000',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'orange',
  },
  submitText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  }
})
