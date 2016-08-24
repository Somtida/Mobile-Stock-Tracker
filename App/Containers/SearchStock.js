import React, { PropTypes } from 'react'
import { ScrollView, View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator} from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'
import LookupResults from './LookupResults'
// Styles
import styles from './Styles/SearchStockStyle'

class SearchMenu extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      input: 'AAPL'
    }
  }

  static propTypes = {
    // input: PropTypes.string
  }

  onSubmitEdit = () => {
    console.log('submit', this.state.input)
    const { lookupRequest } = this.props
    const { input } = this.state
    lookupRequest(input)
    console.log('1. submit request');
    this.setState({ input: '' })
  }

  render () {
    // console.log('this.props:', this.props);
    const { input } = this.state
    const { fetching } = this.props
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.myinput}
          onChangeText={(input) => this.setState({input})}
          value={input} />
        <TouchableOpacity onPress={this.onSubmitEdit} style={styles.submitButton}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
        <ScrollView style={styles.container}>
          {fetching ? <ActivityIndicator /> : <LookupResults />}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.lookup.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    lookupRequest: (input) => dispatch(Actions.lookupRequest(input)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchMenu)
