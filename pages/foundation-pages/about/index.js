import React from 'react';
import PropTypes from 'prop-types';

// redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// components
import Page from 'components/page';
import Layout from 'components/layout';
import About from 'components/pages/foundation/about';
import AboutSection from 'components/pages/foundation/about/about-section';

// actions
import { getAbout } from 'modules/static-content/static-content-actions';

class AboutPage extends Page {
  static propTypes = { aboutSection: PropTypes.string }

  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);

    await context.store.dispatch(getAbout({ include: ['about-sections'].join(',') }));

    return { ...props };
  }

  render() {
    const { aboutSection } = this.props;

    return (
      <Layout
        title={`About - ${aboutSection || 'index'} | The Foundation`}
        description={`Welcome to RMI | About - ${aboutSection || 'index'}`}
      >
        {aboutSection ?
          <AboutSection /> : <About />
        }
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  state => ({ aboutSection: state.routes.query.section }),
  {}
)(AboutPage);
