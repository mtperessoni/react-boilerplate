import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import AppLayout from 'components/Layout'
import MetaTags from './MetaTags'

class AppRoute extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool.isRequired,
    cProps: PropTypes.object,
    metaTitle: PropTypes.string,
    metaTitleSuffix: PropTypes.string,
    metaDescription: PropTypes.string,
    metaKeywords: PropTypes.string,
    shouldBeIndexed: PropTypes.bool,
    contentLanguage: PropTypes.string,
    author: PropTypes.string,
  }

  static defaultProps = {
    metaTitle: '',
    metaTitleSuffix: '',
    metaDescription: '',
    metaKeywords: '',
    contentLanguage: '',
    shouldBeIndexed: true,
    author: '',
  }

  static defaultProps = {
    cProps: null,
  }

  renderLayout = (props) => {
    const { component: C, cProps } = this.props

    return (
      <AppLayout>
        <C { ...props } { ...cProps } />
      </AppLayout>
    )
  }

  render() {
    const {
      path,
      exact,
      metaTitle,
      metaTitleSuffix,
      metaDescription,
      metaKeywords,
      contentLanguage,
      shouldBeIndexed,
      author,
    } = this.props

    return (
      <Fragment>
        <MetaTags
          metaTitle={ metaTitle }
          metaTitleSuffix={ metaTitleSuffix }
          metaDescription={ metaDescription }
          metaKeywords={ metaKeywords }
          contentLanguage={ contentLanguage }
          shouldBeIndexed={ shouldBeIndexed }
          author={ author }
        />
        <Route
          path={ path }
          exact={ exact }
          component={ props => this.renderLayout(props) }
        />
      </Fragment>
    )
  }
}

export default AppRoute
