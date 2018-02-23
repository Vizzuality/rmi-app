import React, { PureComponent } from 'react';

// styles
import styles from './library-page-styles.scss';

class LibraryPage extends PureComponent {
  render() {
    return (
      <div className="c-library-page">
        <style jsx>{styles}</style>
        <div className="page-intro">
          <div className="l-layout">
            <div className="row">
              <div className="col-md-6">
                <h2 className="title">Library</h2>
              </div>
              <div className="col-md-6">
                <p>Lorem ipsum library</p>
              </div>
            </div>
          </div>
        </div>

        <div className="page-content" />
      </div>
    );
  }
}

export default LibraryPage;
