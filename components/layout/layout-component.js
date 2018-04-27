import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import { Router } from 'routes';

// components
import LoadingBar from 'react-redux-loading-bar';
import Head from 'components/layout/head';
import Icons from 'components/layout/icons';
import Header from 'components/layout/header';
import HeaderMobile from 'components/layout/header-mobile';
import Sidebar from 'components/layout/sidebar';
import Footer from 'components/layout/footer';

import styles from 'css/index.scss';

// utils
import breakpoints from 'utils/responsive';

class Layout extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
    footer: PropTypes.bool,
    responsive: PropTypes.object.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
    showLoading: PropTypes.func.isRequired,
    hideLoading: PropTypes.func.isRequired
  }

  static defaultProps = { footer: true }

  componentDidMount() {
    Router.onRouteChangeStart = () => {
      this.props.showLoading();
      this.props.toggleSidebar(false);
    };

    Router.onRouteChangeComplete = () => {
      this.props.hideLoading();
    };
  }

  render() {
    const { title, description, children, footer, responsive } = this.props;

    return (
      <div className="app">
        <style jsx global>{styles}</style>
        <Head
          title={title}
          description={description}
        />
        {/* Icons */}
        <Icons />

        {/* progress bar */}
        <LoadingBar className="c-progress-bar" />

        {/* mobile sidebar */}
        <MediaQuery
          minDeviceWidth={breakpoints.sm}
          maxDeviceWidth={breakpoints.lg - 1}
          values={{ deviceWidth: responsive.fakeWidth }}
        >
          <Sidebar />
        </MediaQuery>

        {/* header mobile */}
        <MediaQuery
          minDeviceWidth={breakpoints.sm}
          maxDeviceWidth={breakpoints.lg - 1}
          values={{ deviceWidth: responsive.fakeWidth }}
        >
          <HeaderMobile />
        </MediaQuery>

        {/* header */}
        <MediaQuery
          minDeviceWidth={breakpoints.lg}
          values={{ deviceWidth: responsive.fakeWidth }}
        >
          <Header />
        </MediaQuery>

        {/* content */}
        <div className="layout-content">
          {children}
        </div>

        {/* footer */}
        {footer && <Footer />}

      </div>);
  }
}

export default Layout;
