import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Tether from 'react-tether';

// components
import Head from 'components/layout/head';
import Header from 'components/layout/header';
import Footer from 'components/layout/footer';

class Layout extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
    footer: PropTypes.bool
  }

  static defaultProps = {
    footer: true
  }

  render() {
    const { title, description, children, footer } = this.props;

    return (
      <div className="layout-container">
        <Head
          title={title}
          description={description}
        />
        {/* Header */}
        <Tether
          attachment="middle left"
          targetAttachment="top right"
          classPrefix="fixed-header"
          constraints={[{
            to: 'window',
            pin: true
          }]}
        >
          <Header />
          <Header />
        </Tether>

        <div className="content-page">
          <div className="l-layout">
            {children}
          </div>
        </div>

        {/* Footer */}
        {footer && <Footer />}
      </div>);
  }
}

export default Layout;
