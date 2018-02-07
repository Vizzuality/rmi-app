import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
      <div className="app">
        <Head
          title={title}
          description={description}
        />
        {/* header */}
        <Header />

        {/* content */}
        <div className="content-page">
          <div className="l-layout">
            <div className="row">
              <div className="col-xs-12">
                {children}
              </div>
            </div>

          </div>
        </div>

        {/* footer */}
        {footer && <Footer />}
      </div>);
  }
}

export default Layout;
