import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReduxToastr from 'react-redux-toastr';

// components
import Head from 'components/layout/head';
import Header from 'components/layout/header';
import Footer from 'components/layout/footer';

import styles from 'css/index.scss';

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
    const {
      title, description, children, footer
    } = this.props;

    return (
      <div className="app">
        <Head
          title={title}
          description={description}
        />
        {/* header */}
        <Header />

        {/* content */}
        <div className="layout-content">
          {children}
        </div>

        {/* footer */}
        {footer && <Footer />}

        <ReduxToastr
          preventDuplicates={false}
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        />

        <style jsx global>{styles}</style>
      </div>);
  }
}

export default Layout;
