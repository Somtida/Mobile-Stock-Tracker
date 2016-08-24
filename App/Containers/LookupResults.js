import React from 'react'
import { ScrollView, View, ListView, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/LookupResultsStyle'

class LookupResults extends React.Component {

  constructor (props) {
    super(props)

    const dataObjects = this.props.results

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(dataObjects)
    }

  }

  _handlePress = (symbol) => {
    console.log('symbol:',symbol)
    const { quoteRequest } = this.props
    quoteRequest(symbol)
    NavigationActions.detailView()
  }

  _renderRow = (rowData) => {
    return (
      <View style={styles.row}>
        <TouchableOpacity onPress={() => this._handlePress(rowData.Symbol)}>
          <Text style={styles.boldLabel}>{rowData.Symbol}</Text>
          <Text style={styles.label}>{rowData.Name}</Text>
          <Text style={styles.label}>{rowData.Exchange}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render () {
    console.log('this.state.dataSource:',this.state.dataSource);
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.lookup.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    quoteRequest: (symbol) => dispatch(Actions.quoteRequest(symbol))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LookupResults)
