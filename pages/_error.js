import React, { Component } from 'react';

import styles from 'css/pages/error.scss';

class Error extends Component {
  render() {
    return (
      <div className="c-error-page">
        <style jsx global>{styles}</style>
        <p>I am the error page! Give me some love!</p>
      </div>
    );
  }
}

export default Error;
