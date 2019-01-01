import React, { Component } from 'react'

import { fetchDataHome } from '../../../actions/home'
import Count from './Count'

class Home extends Component {
  static async getInitialProps ({ store, isServer }) {
    await store.dispatch(fetchDataHome())
    return { isServer }
  }

  constructor(props) {
      super(props)
      this.count = 0
  }

  componentDidMount() {
    this.props.fetchDataHome()
  }

  render () {
    let { state } = this.props
    this.count += 1
    return (
      <div>
          <h1>Hello Names {state.get("home").get("name")}</h1>
          <Count count={this.count}/>
      </div>
    )
  }
}

export default Home