// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onFirstName = () => {
    const {firstName} = this.state
    this.setState(prevState => ({firstName: !prevState.firstName}))
    return firstName
  }

  onLastName = () => {
    const {lastName} = this.state
    this.setState(prevState => ({lastName: !prevState.lastName}))
    return lastName
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="card-container">
          <div className="show-container">
            <button type="button" className="button" onClick={this.onFirstName}>
              Show/Hide FirstName
            </button>
            {firstName && <p className="name-container">Joe</p>}
          </div>
          <div className="show-container">
            <button type="button" className="button" onClick={this.onLastName}>
              Show/Hide LastName
            </button>
            {lastName && <p className="name-container">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
