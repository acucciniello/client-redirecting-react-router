import React, { Component } from 'react'

export default class Result extends Component {
  render () {
    return (
      <div className={'result-page'} >
        Result :
        <DisplayNumber id='result' />
      </div>
    )
  }
}

var DisplayNumber = React.createClass({
  componentDidMount () {
    document.getElementById('result').innerHTML = window.sessionStorage.getItem('sum')
  },
  render: function () {
    return (
      <div className={'display-number'}>
        <p id={this.props.id} />
      </div>
    )
  }
})
