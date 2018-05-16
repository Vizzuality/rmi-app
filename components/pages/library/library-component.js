import React, { PureComponent } from 'react';

// components
import LibraryFilters from './library-filters';
import LibraryTable from './library-table';

// styles
import styles from './library-styles.scss';

class Library extends PureComponent {
  render() {
    return (
      <div className="c-library-page">
        <style jsx>{styles}</style>
        <div className="page-intro">
          <div className="l-layout">
            <div className="row">
              <div className="col-xs-12 col-md-5">
                <h2 className="title">Document Library</h2>
              </div>
              <div className="col-xs-12 col-md-7">
                <p>
                  This searchable document library includes approximately 2,000 source documents,
                  which have been used in the assessment of the 30 companies and 127 mine sites.
                  This library contains documents from mid-2015 to mid-2017, the assessment
                  period covered in the RMI 2018 research.
                </p>
              </div>
            </div>
            <div className="row end-md">
              <div className="col-xs-12">
                <a className="download-link" href="#">Download list of mine sites</a>
              </div>
            </div>
          </div>
        </div>

        <div className="page-content">
          <section className="section -gray">
            <div className="l-layout">
              <div className="row">
                <div className="col-xs-12">
                  <LibraryFilters />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <LibraryTable />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Library;
