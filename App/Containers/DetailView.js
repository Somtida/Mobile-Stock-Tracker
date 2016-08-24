import React from 'react'
import {
  ScrollView,
  Text,
  View,
  ActivityIndicator,
  RefreshControl
} from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/DetailViewStyle'

class DetailView extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      refreshing: false
    }
  }

  _renderQuoteContent = () => {
    const quote = this.props.quote.asMutable()
    return Object.keys(quote).map(item => {
      return (
        <View style={styles.item}>
          <Text style={styles.text}>{item}: {quote[item]}</Text>
        </View>
      )
    })
  }

  render () {
    const { fetching } = this.props
    const { refreshing } = this.state
    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
        {(fetching && !refreshing) ? <ActivityIndicator /> : this._renderQuoteContent()}
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    quote: state.quote.results,
    symbol: state.quote.symbol,
    fetching: state.quote.fetching,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // quoteRequest: (symbol) => dispatch(Actions.quoteRequest(symbol))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailView)
