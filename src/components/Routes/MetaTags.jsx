import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

class MetaTags extends PureComponent {
  static propTypes = {
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
    metaTitleSuffix: ' | BOILERPLATE',
    metaDescription: '',
    metaKeywords: '',
    contentLanguage: 'pt-br',
    shouldBeIndexed: true,
    author: 'Matheus Peressoni Soares',
  }

  getURL(locationHref) {
    const urlParts = locationHref.split('/')
    return `${ urlParts[0] }//${ urlParts[2] }`
  }

  getRobotsValue() {
    const { shouldBeIndexed } = this.props
    return shouldBeIndexed ? 'index,follow' : 'noindex,follow'
  }

  render() {
    const {
      metaTitle,
      metaTitleSuffix,
      metaDescription,
      metaKeywords,
      contentLanguage,
      author,
    } = this.props
    const fullMetaTitle = `${ metaTitle }${ metaTitleSuffix }`

    return (
      <Helmet>
        <title>{fullMetaTitle}</title>
        <meta name='author' content={ author } />
        <meta name='description' content={ metaDescription } />
        <meta name='keywords' content={ metaKeywords } />
        <meta name='robots' content={ this.getRobotsValue() } />
        <meta httpEquiv='content-language' content={ contentLanguage } />
      </Helmet>
    )
  }
}

export default MetaTags
