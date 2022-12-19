// Write your code here
import './index.css'

import {Component} from 'react'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  showHideFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  showHideLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  getFirstName = () => {
    const {firstName} = this.state
    return (
      firstName && (
        <div className="card">
          <p className="name">Joe</p>
        </div>
      )
    )
  }

  getLastName = () => {
    const {lastName} = this.state
    return (
      lastName && (
        <div className="card">
          <p className="name">Jonas</p>
        </div>
      )
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div>
          <div className="container">
            <div className="nameContainer">
              <button
                type="button"
                onClick={this.showHideFirstName}
                className="button"
              >
                Show/Hide Firstname
              </button>
              {this.getFirstName()}
            </div>

            <div className="nameContainer">
              <button
                type="button"
                onClick={this.showHideLastName}
                className="button"
              >
                Show/Hide Lastname
              </button>
              {this.getLastName()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
