import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Head from 'components/layout/head';
import Header from 'components/layout/header';

class Layout extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
    footer: PropTypes.bool
  }

  static defaultProps = {
    footer: true
  };

  render() {
    const { title, description, children, footer } = this.props;

    return (
      <div className="layout-container">
        <Head
          title={title}
          description={description}
        />
        {/* Header */}
        <Header />

        <div className="content-page">
          {children}
        </div>

        {/* Footer */}
        {footer && <footer />}
      </div>);
  }
}
export default Layout;
