import React from 'react';

// components
import Page from 'components/page';
import Layout from 'components/layout';

// styles
import styles from 'css/pages/error.scss';

class ErrorPage extends Page {
  render() {
    return (
      <Layout
        title="Error"
        description="Welcome to RMI | This page does not exist"
      >
        <style jsx global>{styles}</style>
        <div className="c-error-page">
          <span className="code">404</span>
          <p className="description">This page does not exist. Please, go back to&nbsp;
            <a href="/">Resource Mining Index</a>.
          </p>
        </div>
      </Layout>
    );
  }
}

export default ErrorPage;
