import React, { Component } from 'react'
import { browserHistory } from 'react-router'

export default class Calculate extends Component {
  render () {
    return (
      <div className={'Calculate-page'} >
        <InputBox type='text' name='first number' id='firstNum' />
        <InputBox type='text' name='second number' id='secondNum' />
        <CalculateButton type='button' value='Calculate' name='Calculate' onClick='result()' />
      </div>

    )
  }
}

var InputBox = React.createClass({
  render: function () {
    return <div className={'input-field'}>
      <input type={this.props.type} value={this.props.value} name={this.props.name} id={this.props.id} />
    </div>
  }
})

var CalculateButton = React.createClass({
  result: function () {
    var firstNum = document.getElementById('firstNum').value
    var secondNum = document.getElementById('secondNum').value
    var sum = Number(firstNum) + Number(secondNum)
    if (sum !== undefined) {
      const path = '/result'
      browserHistory.push(path)
    }
    window.sessionStorage.setItem('sum', sum)
    return console.log(sum)
  },
  render: function () {
    return <div className={'calculate-button'}>
      <button type={this.props.type} value={this.props.value} name={this.props.name} onClick={this.result} >
              Calculate
      </button>
    </div>
  }
})
