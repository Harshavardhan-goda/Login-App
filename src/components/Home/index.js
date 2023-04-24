import {Component} from 'react'
import './index.css'

import TextContent from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isChange: false}

  onChange = () => {
    const {isChange} = this.state
    this.setState({isChange: !isChange})
  }

  render() {
    const {isChange} = this.state

    let msgElement
    let btnElement

    if (isChange) {
      msgElement = <TextContent text="Welcome user" />
      btnElement = <Login onChange={this.onChange} />
    } else {
      msgElement = <TextContent text="Please Login" />
      btnElement = <Logout onChange={this.onChange} />
    }
    return (
      <div className="container">
        <div className="card">
          {msgElement}
          {btnElement}
        </div>
      </div>
    )
  }
}

export default Home
