import React, { PureComponent } from 'react';

// components
import Layout from 'components/layout';

class IndexPage extends PureComponent {
  render() {
    return (
      <Layout
        title="Index"
        description="Welcome to RMI | index"
      >
        This is the index content by now
      </Layout>
    );
  }
}

export default IndexPage;
