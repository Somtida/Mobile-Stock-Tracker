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
    color: '#000',
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
  },
  letter: {
    padding: 5,
    color: '#fff'
  },
  submitButton: {
    alignItems: 'center',
    height: 40,
    marginTop: 10,
    borderColor: '#eee',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'orange',
    margin: 10,
  },
  submitText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  }
})
