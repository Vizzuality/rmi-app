import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReduxToastr from 'react-redux-toastr';
import MediaQuery from 'react-responsive';

// components
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
    responsive: PropTypes.object.isRequired
  }

  static defaultProps = { footer: true }

  render() {
    const { title, description, children, footer, responsive } = this.props;

    return (
      <div className="app">
        <Head
          title={title}
          description={description}
        />
        {/* Icons */}
        <Icons />

        {/* header */}
        <MediaQuery
          maxDeviceWidth={breakpoints.md - 1}
          values={{ deviceWidth: responsive.fakeWidth }}
        >
          <HeaderMobile />
        </MediaQuery>

        <MediaQuery
          minDeviceWidth={breakpoints.md}
          values={{ deviceWidth: responsive.fakeWidth }}
        >
          <Header />
        </MediaQuery>

        {/* mobile sidebar */}
        <MediaQuery
          maxDeviceWidth={breakpoints.md - 1}
          values={{ deviceWidth: responsive.fakeWidth }}
        >
          <Sidebar />
        </MediaQuery>


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
