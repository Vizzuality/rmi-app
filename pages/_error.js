import React, { Component } from 'react';

import styles from 'css/pages/error.scss';

class Error extends Component {
  render() {
    return (
      <div className="c-error-page">
        <style jsx global>{styles}</style>

        <span className="code">404</span>
        <p className="description">This page doesn&apos;t exist. Please, go back to <a href="/">Resource Mining Index</a>.
        </p>
      </div>
    );
  }
}

export default Error;
