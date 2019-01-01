import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { fromJS } from 'immutable'

import Layouts from '../src/layouts/admin-manager'
import initStore from '../src/store'

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    return { pageProps }
  }

  render () {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Layouts>
            <Component {...pageProps} />
          </Layouts>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(initStore, {
  serializeState: (state) => state.toJS(),
  deserializeState: (state) => fromJS(state),
})(MyApp)
